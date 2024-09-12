# Conway
 
Conway is the Bldrs.ai data-model and data transit system. Here we take existing standard formats, fit them against our own object model, allow ingress and egress, delta-changeset updates and transactions on the data, as well as appending components as a side-band that don't exist in the original data, allowing round-tripping of files, but also keeping features in our system they didn't originally support.

It is written in TypeScript, but embeds (as a submodule) a fork of the [IFC-gen tool](https://github.com/bldrs-ai/IFC-gen) by hypar-io that is written in C#, utilising dotnet. This generates the IFC based model for Conway (which is currently a work in progress).

Conway itself is currently oriented around components, instead of a typical class hierarchy, to decouple different kinds of and make it easily queriable.  

## Setup

### Deps
Conway generates a lot of code. To run code-generation, you'll need to install version 6.0 of the .NET framework.

On a Ubuntu or Debian style distribution, you can install it like so:
```
sudo apt-get update && \
  sudo apt-get install -y dotnet-sdk-6.0
```

On macOS, it should be installable with brew using:
```
brew install dotnet@6
```

### Build
 
Clone the repository, then in the root directory of the repository, run the yarn install, followed by using yarn to initialise the IFC-gen submodule:
```
# 1) Setup your EMSDK environment
# 2) Make sure you're in main repo, not fork
git pull
yarn install
yarn submodule-update

cd dependencies/conway-geom/dependencies/wasm/
# Answer yes or all to replace files if they've already been unzipped before
unzip dependencies.zip
cd -

yarn build
yarn test
```

After this, you can build using either an incremental build (which will not perform code-gen and will lead to the fastest build times), a watch build (which will automatically update changes), or a full rebuild, which will clean all build artefacts and perform code-gen, before running a build.

For the incremental build:
```
yarn build-incremental
```

For the watch build:
```
yarn build-watch
```

For a full, clean rebuild:
```
yarn build-rebuild
```

You can also run the tests with jest:
```
yarn test
```

And finally, using the watch functionality, you can also have the code automatically rebuild on change and also re-run the tests using:
```
yarn build-test-watch
```

If you have Visual Studio Code, Conway also comes with a Visual Studio Code workspace to add IDE accessability to these features, and also let you edit the IFC-gen C# code in place.

# Production NPM Build
```
yarn test
yarn build-web  # stamps build version string
grep '"version"' package.json # should see the new version string, 1 more than what the repo shows in GH
npm pack
```

## Push to Production: H3 & Share
The following process works the same for headless-three and Share.

Do H3 first, then Share
```
cp bldrs-ai-conway-<VERSION>.tgz $H3_DIR
cd $H3_DIR
git fetch upstream # or origin if not on fork
git checkout -b conway-<VERSION> upstream/main
rm bldrs-ai-conway-<OLD VERSION>.tgz
## OLD WAY: yarn remove @bldrs-ai/conway
## OLD WAY: yarn add ./bldrs-ai-conway-<VERSION>.tgz
## New way: edit package.json dep for conway to point to new filename.
yarn install
yarn build && yarn test
yarn serve
# Smoke test local candidate: load all sample models, load local model, exercise dialogs, etc.
git add . ; git ci -m 'Upgrad of conway from <OLD VERSION> to <VERSION>'
git push origin HEAD
# 1) Send PR for review
# 2) On merge, Netlify will detect and build and deploy to prod; watch deploy logs on Netlify
# 3) Smoke test prod.  Same as above
# 4) Post to #bot or #share "New Conway <VERSION> in prod" with linked changelist
```

# IFC Parser Console Test Application

Conway has a test application for parsing IFC step files to see the performance and included entity types at src/core/ifc/ifc_command_line_main.ts. 
Use an incremental or full build to compile this file from typescript and then it can be run with:

```
node --experimental-specifier-resolution=node ./compiled/src/ifc/ifc_command_line_main.js [ifc file path]
node --experimental-specifier-resolution=node ./compiled/src/ifc/ifc_command_line_main.js -g [ifc file path]
```

The included index.ifc in the repo is recommended for testing.

# Profiling WASM Builds in Node
Profiling Conway, including building a Conway-Geom WASM binary with DWARF information and generating a flame graph with WASM symbols, is possible via the following steps:
1. Run *build-profile-conway_geom* from Conway's package.json 
2. Profile your app: 
```
node --prof --experimental-specifier-resolution=node /Users/soar/Documents/GitHub/conway/compiled/src/ifc/ifc_command_line_main.js /Users/soar/Downloads/Schependomlaan.ifc -g
```
3. An isolate*.log file will be generated. Run:
```
node --prof-process --preprocess -j isolate*.log > v8.json # generate a V8 log
```
4. Go to https://mapbox.github.io/flamebearer/ and drop the log file to see a detailed flame graph.

# Problems with renaming in GIT merges

Because of the large number of files in conway that are code changes sometimes causing large modifications in merges, especially if generation locations are changed, it's sometimes necessary to up the limit of the number of renames in the git config for merging. It can be done like so:

```
git config merge.renameLimit 99999
```

You may also wish to use a low rename threshold no-commit merge strategy for some of these situations to increase likelyhood that files will be related in the merge process and to track some of the more complicated changes:

```
git merge -X rename-threshold=25 --no-commit
```

# Regression Testing Framework

Conway also has a regression testing framework, which can be run on individual model files in a digest or verbose mode, or as a large batch across several models at the same time. For more details see the [documentation](regression/README.MD).


# Release Steps
1. Build Conway via the above steps depending on your platform. 
2. Run the performance test script, instructions outlined in the [performance documentation](scripts/README.md)
3. Run the regression testing batch script, instructions outlined in the [regression documentation](regression/README.md)
4. Publish to GitHub. From the repository root, log in with npm, and then publish the package. Once published, it will appear in the list of releases in the repository: 

```
npm login --registry=https://npm.pkg.github.com
npm publish
```