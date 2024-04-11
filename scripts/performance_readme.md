# Project Readme

This document provides detailed instructions on how to set up and run the performance tests for the project. The process involves two main steps: starting a local HTTP server and running a performance test script.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js and npm (for `npx http-server`)
- A Unix-like environment (for running shell scripts)

## Step 1: Start the HTTP Server

1. Navigate to the project directory. This will be either `test-models-private` or `test-models`.
2. Run the following command to start a local HTTP server:

   ```bash
   npx http-server
   ```

   This command serves the files over HTTP, which is necessary for the performance test.

## Step 2: Launch the Performance Test Script

1. Open another terminal window. This is required as the HTTP server will be running in the first terminal.
2. Navigate to the script's location if it's not in your PATH.
3. Run the performance test script using the following command:

   ```
   ./performance_test.sh /path/to/headless_three /path/to/model_directory
   ```

   Replace `/path/to/headless_three` and `/path/to/model_directory` with the actual paths to the `headless_three` directory and the model directory, respectively.

## Additional Information

- The `performance_test.sh` script is designed to benchmark the model's performance.
- Ensure that the paths provided to the script are correct, as incorrect paths will result in errors.

## Troubleshooting

If you encounter any issues while running these commands, consider the following troubleshooting steps:
- Ensure that all prerequisites are correctly installed.
- Check the paths provided in the script command for accuracy.
- Make sure the HTTP server is running and accessible.