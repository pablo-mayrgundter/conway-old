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
