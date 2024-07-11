import csv
import sys
from google.cloud import firestore

def fetch_data_from_firestore(doc_name):
    # Initialize Firestore
    db = firestore.Client.from_service_account_json('app.json')
    
    # Reference to the document
    doc_ref = db.collection("test_runs").document(doc_name)
    
    # Get the document data
    doc = doc_ref.get()
    
    if doc.exists:
        return doc.to_dict().get('data', [])
    else:
        print(f"No document found with name: {doc_name}")
        return []

def write_data_to_csv(data, csv_filename):
    # Define CSV header
    csv_header = ["timestamp", "loadStatus", "uname", "conwayVersion", "fileName",
                  "schemaVersion", "parseTime", "geometryTime", "totalTime",
                  "geometryMemory", "rss", "heapUsed", "heapTotal",
                  "preprocessorVersion", "originatingSystem"]
    
    # Write data to CSV
    with open(csv_filename, mode='w', newline='') as file:
        writer = csv.DictWriter(file, fieldnames=csv_header)
        writer.writeheader()
        for row in data:
            writer.writerow(row)

if __name__ == "__main__":
    # Ensure the document name is provided as an argument
    if len(sys.argv) != 3:
        print("Usage: python script_name.py <document_name> <output_csv_filename>")
        sys.exit(1)
    
    document_name = sys.argv[1]
    output_csv_filename = sys.argv[2]
    
    # Fetch data from Firestore
    data = fetch_data_from_firestore(document_name)
    
    # Write data to CSV
    write_data_to_csv(data, output_csv_filename)
    
    print(f"Data successfully written to {output_csv_filename}")
