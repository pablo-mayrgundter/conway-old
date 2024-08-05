import csv
from datetime import datetime
from google.cloud import firestore
import json
import sys


def log_to_firestore(stats):
    # Initialize Firestore
    db = firestore.Client.from_service_account_json('app.json')
    print('stats0', stats[0])
    # Add data to Firestore under test_runs/currentDate/data
    currentDate = convert_date_format(stats[0]['timestamp'])
    # Reference to the document
    doc_ref = db.collection('test_runs').document(currentDate)

    # Get the current data in the document
    doc = doc_ref.get()

    # Update the document with the new data
    doc_ref.set({'data': stats}, merge=True)


def read_stats(stats_filepath):
    models_stats = []
    # Open the CSV file
    with open(stats_filepath, mode='r', newline='') as csvfile:
      # Create a CSV reader object
      csvreader = csv.DictReader(csvfile)
    
      # TODO(pablo): validate
      for row in csvreader:
         models_stats.append(row)

    return models_stats


def convert_date_format(date_string):
    # Parse the date string to a datetime object
    date_obj = datetime.strptime(date_string, '%b %d %Y %I:%M:%S %p')
    
    # Format the datetime object to the desired output format
    formatted_date = date_obj.strftime('%Y%m%d_%H%M%S')
    
    return formatted_date


if __name__ == '__main__':
    # print('calling with argv[1]', sys.argv[1])
    stats = read_stats(sys.argv[1])
    # print(stats)
    log_to_firestore(stats)


    
# Function to log data to Firestore
# log_to_firestore() {
#  python3 log_to_firestore.py '$1' '$2' '$3' '$4' '$5' '$6' '$7' '$8' '$9' '${10}' '${11}' '${12}' '${13}' '${14}' '${15}' '${16}' 2>> '${outputDir}/firestore.err.txt'
# }

# Log data to Firestore
# log_to_firestore '$timestamp' 'OK' '$uname' '$conwayVersion' '$fileName' '$schemaVersion' '$parseTime' '$geometryTime' '$totalTime' '$geometryMemory' '$rss' '$heapUsed' '$heapTotal' '$preprocessorVersion' '$originatingSystem' '$testRunName'

# Log failure to Firestore
# log_to_firestore '$timestamp' 'FAIL' '$uname' 'N/A' '$fileName' 'N/A' 'N/A' 'N/A' 'N/A' 'N/A' 'N/A' 'N/A' 'N/A' 'N/A' 'N/A' '$testRunName' 


# Iterate over each row in the CSV file
      # for row in csvreader:
      #     model_stats = {
      #         'timestamp': row[0],
      #         'loadStatus': row[1],
      #         'uname': row[2],
      #         'conwayVersion': row[3],
      #         'fileName': row[4],
      #         'schemaVersion': row[5],
      #         'parseTime': row[6],
      #         'geometryTime': row[7],
      #         'totalTime': row[8],
      #         'geometryMemory': row[9],
      #         'rss': row[10],
      #         'heapUsed': row[11],
      #         'heapTotal': row[12],
      #         'preprocessorVersion': row[13],
      #         'originatingSystem': row[14],
      #         'currentDate': row[15]
      #     }
      #     models_stats.append(model_stats)
