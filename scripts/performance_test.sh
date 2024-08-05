#!/bin/bash


usageAndExit() {
  echo "Usage: $0 /path/to/headless_three /path/to/model_directory [useWebIfc]"
  exit 1
}

# Check if the server directory path is provided as the first argument
if [ -z "${1}" ]; then
  echo "Error: No server directory path provided."
  usageAndExit
fi

# Check if the model directory path is provided as the second argument
if [ -z "${2}" ]; then
  echo "Error: No model directory path provided."
  usageAndExit
fi

# If left blank, will use conway for server.  Otherwise assert it's useWebIfc
if [ -z "${3}" ]; then
  isEngineConway=1
  engineSuffix=""
else
  if [ "${3}" != "useWebIfc" ]; then
    echo "Error: unknown engine command (to use conway leave blank)."
    usageAndExit
  fi
  isEngineConway=0
  engineSuffix="-webifc"
fi

# Server directory path passed as the first argument
serverDir="$1"

# Model directory path passed as the second argument
modelDir="$2"

# Original script directory (to return to after server operations)
scriptDir=$(pwd)

# Get current date in YYYYMMDD_HMS format
currentDate=$(date +"%Y%m%d_%H%M%S")

# Extract the last folder name from the model directory path
modelDirName=$(basename "$modelDir")

testRunName=${currentDate}_${modelDirName}

# Create the output directory with the model directory name appended
outputDir="${scriptDir}/test_runs/${testRunName}${engineSuffix}"
mkdir -p "$outputDir"

# If web-ifc, get the version once
if [ $isEngineConway -eq 0 ] ; then
  webifcVersion=$(cd $serverDir; yarn list web-ifc 2>&1 | grep web-ifc | sed 's/.*@//g' ; cd $scriptDir)
fi

# Define the main error log file
errorLogFile="${outputDir}/main_error.log"

# Temporary file for storing server output
tempServerOutputFile="${outputDir}/temp_server_output.txt"

# CSV file
csvFile="${outputDir}/statistics.csv"

# Write CSV headers
echo "timestamp,loadStatus,uname,engine,filename,schemaVersion,parseTimeMs,geometryTimeMs,totalTimeMs,geometryMemoryMb,rssMb,heapUsedMb,heapTotalMb,preprocessorVersion,originatingSystem" > "$csvFile"

# Define the array of filenames to exclude
filenames_to_exclude=("20-234-X-AR2-NA-XX-M3-A-0001-Tragwerk.ifc")

# Convert the array of filenames to a regex pattern
exclude_pattern=$(printf "|%s" "${filenames_to_exclude[@]}")
exclude_pattern=${exclude_pattern:1}  # Remove the leading '|'

# Process files and save outputs to the new directory
find "${modelDir}/ifc" -type f \( -name "*.ifc" \) -print0 | while IFS= read -r -d '' f; do
  # Extract the base filename
  base_filename=$(basename "$f")
  
  # Check if the filename matches any in the exclude list
  if echo "$base_filename" | grep -Eq "$exclude_pattern"; then
    continue  # Skip this file and continue with the next iteration
  fi

  # Change to server directory
  cd "$serverDir"

  # Start the server (redirect output to tmp file)
  yarn "serve${engineSuffix}" > "$tempServerOutputFile" 2>&1 &

  # Get the PID of the last background process (yarn serve)
  server_pid=$!

  # Wait a bit for the server to be fully up and running
  sleep 3

  # Change back to the original script directory
  cd "$scriptDir"

  # Split the directory and filename
  absoluteDirPath=$(dirname "$f")
  file_name=$(basename "$f")

  # Get the relative directory path by removing the current working directory prefix
  dir_path=$(echo "$absoluteDirPath" | sed "s|^$modelDir/||")

  # Encode only the filename, replacing spaces with %20
  encoded_file_name=$(python3 -c "import urllib.parse, sys; print(urllib.parse.quote(sys.argv[1]))" "$file_name")

  # Construct the URL with the encoded filename
  # url="http://127.0.0.1:8001/${dir_path}/${encoded_file_name}"
  url="file:///Users/pablo/c/b/${modelDirName}/${dir_path}/${encoded_file_name}"

  # Define the output PNG file path
  output_png="${outputDir}/${file_name}-fit.png"

  # Flag to track if curl command is successful
  curl_success=true

  echo "Fetching url: $url"

  # Execute the curl command and check for errors
  if ! curl -f -d "{\"url\": \"$url\"}" \
       -H 'content-type: application/json' \
       -o "$output_png" --fail --silent --show-error \
       -D- http://localhost:8001/render; then
    # If there's an error, append it to the main error log
    echo "Error processing file $f" >> "$errorLogFile"
    curl_success=false
    echo -n "Tail of server output"
    tail -10 $tempServerOutputFile
    echo
  fi

  # Extract statistics only if curl command was successful
  if [ "$curl_success" = true ]; then
    statFile="${outputDir}/${file_name}-statistics.txt"

    if [ $isEngineConway -eq 1 ] ; then
      awk '/\[.*\]: Load Status: OK/{flag=1} flag; /MB, Heap Used:.*MB/{flag=0}' "$tempServerOutputFile" > "$statFile"
      # Extract Statistics from file
      timestamp=$(awk -F ']: ' '/Load Status/{print $1}' "$statFile" | tr -d '[')
      uname=$(uname -p)
      engine="conway"$(awk -F 'Conway Version: ' '{print $2}' "$statFile" | awk '{print $1}' | awk -F ',' '{print $1}')
      fileName=$(basename "$statFile" "-statistics.txt" | tr -d ',')
      schemaVersion=$(awk -F ', ' '{for(i=1;i<=NF;i++) if ($i ~ /Version:/ && $(i+1) ~ /Conway Version:/) print $i}' "$statFile" | awk -F 'Version: ' '{print $2}')
      parseTimeMs=$(awk -F 'Parse Time: ' '{print $2}' "$statFile" | awk '{print $1}' | tr -d ' ms')
      geometryTimeMs=$(awk -F 'Geometry Time: ' '{print $2}' "$statFile" | awk '{print $1}' | tr -d ' ms')
      totalTimeMs=$(awk -F 'Total Time: ' '{print $2}' "$statFile" | awk '{print $1}' | tr -d ' ms')
      geometryMemoryMb=$(awk -F 'Geometry Memory: ' '{print $2}' "$statFile" | awk '{print $1}' | tr -d ' MB')
      rssMb=$(awk -F 'RSS ' '{print $2}' "$statFile" | awk '{print $1}' | tr -d ' MB')
      heapUsedMb=$(awk -F 'Heap Used: ' '{print $2}' "$statFile" | awk '{print $1}' | tr -d ' MB')
      heapTotalMb=$(awk -F 'Heap Total: ' '{print $2}' "$statFile" | awk '{print $1}' | tr -d ' MB')
      preprocessorVersion=$(awk -F"Preprocessor Version: '" '{split($2, a, "'\''"); print a[1]}' "$statFile")
      originatingSystem=$(awk -F"Originating System: '" '{split($2, a, "'\''"); print a[1]}' "$statFile")
    else
      grep -E '(Total Time|web-ifc memory)' "$tempServerOutputFile" | tr \\n , > "$statFile"
      timestamp=$(awk -F ']: ' '/Total Time/{print $1}' "$statFile" | tr -d '[')
      uname=$(uname -p)
      engine="webifc@${webifcVersion}"
      fileName=$(basename "$statFile" "-statistics.txt" | tr -d ',')
      schemaVersion='N/A'
      parseTimeMs=0
      geometryTimeMs=0
      totalTimeMs=$(awk -F 'Total Time: ' '{print $2}' "$statFile" | awk '{print $1}' | tr -d ' ms')
      geometryMemoryMb=$(awk -F 'Geometry Memory: ' '{print $2}' "$statFile" | awk '{print $1}' | tr -d ' MB')
      rssMb=$(awk -F 'RSS ' '{print $2}' "$statFile" | awk '{print $1}' | tr -d ' MB')
      heapUsedMb=$(awk -F 'Heap Used: ' '{print $2}' "$statFile" | awk '{print $1}' | tr -d ' MB')
      heapTotalMb=$(awk -F 'Heap Total: ' '{print $2}' "$statFile" | awk '{print $1}' | tr -d ' MB')
      preprocessorVersion=0
      originatingSystem=0
    fi

    # Write the extracted data to the CSV file
    echo "$timestamp,OK,$uname,$engine,$fileName,$schemaVersion,$parseTimeMs,$geometryTimeMs,$totalTimeMs,$geometryMemoryMb,$rssMb,$heapUsedMb,$heapTotalMb,$preprocessorVersion,$originatingSystem" >> "$csvFile"

  else
    echo "Curl failed"
    # If curl failed, log the failure
    timestamp=$(date +"%Y%m%d_%H%M%S")
    uname=$(uname -p)
    fileName=$(basename "$f")

    # Write the failure data to the CSV file
    echo "$timestamp,FAIL,$uname,N/A,$fileName,N/A,N/A,N/A,N/A,N/A,N/A,N/A,N/A,N/A" >> "$csvFile"
  fi

  # Change back to server directory to safely stop the server
  cd "$serverDir"
  kill $server_pid

  # Wait a moment to ensure the server has fully stopped
  sleep 2

  # Change back to the script directory
  cd "$scriptDir"
done
