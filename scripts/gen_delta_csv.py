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

def parse_value(value):
    try:
        return float(value) if value != "N/A" else 0.0
    except ValueError:
        return 0.0

def compute_deltas(data1, data2):
    # Assuming data1 and data2 are lists of dictionaries
    deltas = []
    for entry1, entry2 in zip(data1, data2):
        delta = {
            "timestamp": entry1.get("timestamp"),
            "loadStatus1": entry1.get("loadStatus"),
            "loadStatus2": entry2.get("loadStatus"),
            "uname": entry1.get("uname"),
            "conwayVersion1": entry1.get("conwayVersion"),
            "conwayVersion2": entry2.get("conwayVersion"),
            "fileName": entry1.get("fileName"),
            "schemaVersion": entry1.get("schemaVersion"),
            "parseTimeDelta": parse_value(entry2.get("parseTime")) - parse_value(entry1.get("parseTime")),
            "geometryTimeDelta": parse_value(entry2.get("geometryTime")) - parse_value(entry1.get("geometryTime")),
            "totalTimeDelta": parse_value(entry2.get("totalTime")) - parse_value(entry1.get("totalTime"))
        }
        deltas.append(delta)
    return deltas

def write_data_to_csv(data, csv_filename):
    # Define CSV header
    csv_header = ["timestamp", "loadStatus1", "loadStatus2", "uname", "conwayVersion1", "conwayVersion2",
                  "fileName", "schemaVersion", "parseTimeDelta", "geometryTimeDelta", "totalTimeDelta"]
    
    # Write data to CSV
    with open(csv_filename, mode='w', newline='') as file:
        writer = csv.DictWriter(file, fieldnames=csv_header)
        writer.writeheader()
        for row in data:
            writer.writerow(row)

if __name__ == "__main__":
    # Ensure the document names are provided as arguments
    if len(sys.argv) != 4:
        print("Usage: python script_name.py <document_name1> <document_name2> <output_csv_filename>")
        sys.exit(1)
    
    document_name1 = sys.argv[1]
    document_name2 = sys.argv[2]
    output_csv_filename = sys.argv[3]
    
    # Fetch data from Firestore
    data1 = fetch_data_from_firestore(document_name1)
    data2 = fetch_data_from_firestore(document_name2)
    
    # Compute deltas
    deltas = compute_deltas(data1, data2)
    
    # Write deltas to CSV
    write_data_to_csv(deltas, output_csv_filename)
    
    print(f"Deltas successfully written to {output_csv_filename}")
