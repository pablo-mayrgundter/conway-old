// pre-build.js
const fs = require('fs');
const path = require('path');

const packageJsonPath = path.join(__dirname, 'package.json');
const packageJson = require(packageJsonPath);

// Take the environment from the command-line argument
const buildEnv = process.argv[2] || 'web';

if (buildEnv === 'node') {
  packageJson.type = 'module';
  delete packageJson.main;
  delete packageJson.types;
} else if (buildEnv === 'web') {
  packageJson.main = './compiled/src/index.js';
  packageJson.types = './compiled/src/index.d.ts';
  delete packageJson.type;
} else {
  console.error('Invalid environment specified. Use "node" or "web".');
  process.exit(1);
}

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2), 'utf8');
