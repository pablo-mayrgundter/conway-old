#!/bin/bash

# Check if the server directory path is provided as the first argument
if [ -z "$1" ]; then
  echo "Error: No server directory path provided."
  echo "Usage: $0 /path/to/headless_three /path/to/model_directory"
  exit 1
fi

# Check if the model directory path is provided as the first argument
if [ -z "$2" ]; then
  echo "Error: No model directory path provided."
  echo "Usage: $0 /path/to/headless_three /path/to/model_directory"
  exit 1
fi

# Server directory path passed as the first argument
serverDir="$1"

# Model directory path passed as the first argument
modelDir="$2"

# Original script directory (to return to after server operations)
scriptDir=$(pwd)

# Get current date in YYYYMMDD_HMS format
currentDate=$(date +"%Y%m%d_%H%M%S")

# Create the output directory
outputDir="${scriptDir}/test_runs/${currentDate}"
mkdir -p "$outputDir"

# Define the main error log file
errorLogFile="${outputDir}/main_error.log"

# Temporary file for storing server output
tempServerOutputFile="${outputDir}/temp_server_output.txt"

#csv file 
csvFile="${outputDir}/statistics.csv"

# Write CSV headers
echo "Timestamp, uname, Conway Version, File name, Schema Version, Parse Time (ms), Geometry Time (ms), Total Time (ms), Geometry Memory (MB), RSS (MB), Heap Used (MB), Heap Total (MB), Preprocessor Version, Originating System" > "$csvFile"

# Process files and save outputs to the new directory
find "${modelDir}/ifc" -type f \( -name "*.ifc" \) -print0 | while IFS= read -r -d '' f; do
  # Change to server directory
  cd "$serverDir"

  # Start the server (redirect output to tmp file)
  yarn serve > "$tempServerOutputFile" 2>&1 &

  # Get the PID of the last background process (yarn serve)
  server_pid=$!

  # Wait a bit for the server to be fully up and running
  sleep 2

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
  url="http://127.0.0.1:8081/${dir_path}/${encoded_file_name}"

  # Define the output PNG file path
  outputPng="${outputDir}/${file_name}-fit.png"

  # Flag to track if curl command is successful
  curl_success=true

  # Execute the curl command and check for errors
  if ! curl -f -d "{\"url\": \"$url\"}" \
       -H 'content-type: application/json' \
       -o "$outputPng" --fail --silent --show-error \
       -D- http://localhost:8001/render; then
    # If there's an error, append it to the main error log
    echo "Error processing file $f" >> "$errorLogFile"
    curl_success=false
  fi

  # Extract statistics only if curl command was successful
  if [ "$curl_success" = true ]; then
    statFile="${outputDir}/${file_name}-statistics.txt"
    awk '/\[.*\]: Load Status: OK/{flag=1} flag; /MB, Heap Used:.*MB/{flag=0}' "$tempServerOutputFile" > "$statFile"

    #Extract Statistics from file 
    timestamp=$(awk -F ']: ' '/Load Status/{print $1}' "$statFile" | tr -d '[')
    uname=$(uname -p)
    conwayVersion=$(awk -F 'Conway Version: ' '{print $2}' "$statFile" | awk '{print $1}' | awk -F ',' '{print $1}')
    fileName=$(basename "$statFile" "-statistics.txt" | tr -d ',')
    schemaVersion=$(awk -F ', ' '{for(i=1;i<=NF;i++) if ($i ~ /Version:/ && $(i+1) ~ /Conway Version:/) print $i}' "$statFile" | awk -F 'Version: ' '{print $2}')
    parseTime=$(awk -F 'Parse Time: ' '{print $2}' "$statFile" | awk '{print $1}' | tr -d ' ms')
    geometryTime=$(awk -F 'Geometry Time: ' '{print $2}' "$statFile" | awk '{print $1}' | tr -d ' ms')
    totalTime=$(awk -F 'Total Time: ' '{print $2}' "$statFile" | awk '{print $1}' | tr -d ' ms')
    geometryMemory=$(awk -F 'Geometry Memory: ' '{print $2}' "$statFile" | awk '{print $1}' | tr -d ' MB')
    rss=$(awk -F 'RSS ' '{print $2}' "$statFile" | awk '{print $1}' | tr -d ' MB')
    heapUsed=$(awk -F 'Heap Used: ' '{print $2}' "$statFile" | awk '{print $1}' | tr -d ' MB')
    heapTotal=$(awk -F 'Heap Total: ' '{print $2}' "$statFile" | awk '{print $1}' | tr -d ' MB')
    preprocessorVersion=$(awk -F"Preprocessor Version: '" '{split($2, a, "'\''"); print a[1]}' "$statFile")
    originatingSystem=$(awk -F"Originating System: '" '{split($2, a, "'\''"); print a[1]}' "$statFile")

    # Write the extracted data to the CSV file
    echo "$timestamp, $uname, $conwayVersion, $fileName, $schemaVersion, $parseTime, $geometryTime, $totalTime, $geometryMemory, $rss, $heapUsed, $heapTotal, $preprocessorVersion, $originatingSystem" >> "$csvFile"
  fi

  # Change back to server directory to safely stop the server
  cd "$serverDir"
  kill $server_pid

  # Wait a moment to ensure the server has fully stopped
  sleep 2

  # Change back to the script directory
  cd "$scriptDir"
done
