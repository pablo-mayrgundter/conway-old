# Performance Test

This document provides detailed instructions on how to set up and run the
performance tests for the project.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js and npm
- A Unix-like environment (for running shell scripts)
- Checkout and build https://github.com/bldrs-ai/headless-three
- Checkout a model repo, like https://github.com/bldrs-ai/test-models

### Optional, for Firestore upload
- Install google-cloud-firestore ```python3 -m pip install google-cloud-firestore```
- Add app.json to this folder for Firestore authentication.       

## Run Performance Test

Run the performance test script using the following command:
```
./performance_test.sh <path to headless-three> <path to models directory>
```

For example, with output:
```
pablo@air:~/c/b/conway/scripts> ./performance_test.sh $HOME/c/b/headless-three $HOME/c/b/test-models
ok, 1s, haus.ifc
ok, 0s, box.ifc
error, 1s, bath-csg-solid.ifc
```

This will also leave output in the `test_runs` directory named for the engine and model dir being tested, e.g. `test_runs/conway0.1.553_test-models`, including:
- performance.csv          A rollup of detailed stats for all models
- performance.err.log      The error output from the script
- rendering-server.log     Output from the headless-three http server, including model loading problems

There are also per model outputs including .png renders and .txt detailed stats:
```
pablo@air:~/c/b/conway/scripts> ls test_runs/conway0.1.553_test-models | head
171210AISC_Sculpture_param.ifc-fit.png
171210AISC_Sculpture_param.ifc-statistics.txt
AC20-FZK-Haus.ifc-fit.png
AC20-FZK-Haus.ifc-statistics.txt
C20-Institute-Var-2.ifc-fit.png
```

## Compare Versions and Engines
Generate a delta csv to compute delta processing time changes for any two CSVs from the prior runs:
```
python gen_delta_csv.py <run_name1> <run_name2> <output_csv_filename>
```

## Optional: Firestore storage
Download firestore data:
```
python firestore_download.py <run_name> <output_csv_filename>
```

Upload data to firestore:
```
python firestore_upload.py <run_name>
```
