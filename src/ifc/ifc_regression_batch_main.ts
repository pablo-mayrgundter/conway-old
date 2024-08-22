import yargs from 'yargs/yargs'
import fs from 'fs'
import fsPromises from 'fs/promises'
import childProcess from 'child_process'
import { promisify } from 'util'
import path from 'path'
import crypto from 'crypto'


const errorCSVHeader = 'message,count,expressids,file'
const exec = promisify( childProcess.exec )

const SKIP_PARAMS = 2

const STD_OUT_ERR_MAX_BUFFER = 64 * 1024 * 1024

interface RunResults {

  errorLines?: string[]

  outputFile: string

  hash?: string
}

/**
 * Encapsulates a string in a CSV safe way.
 *
 * @param from
 * @return {string}
 */
function csvSafeString( from: string ): string {

  if ( from.includes( '\n' ) ||
    from.includes( '\r') ||
    from.includes( '"') ||
    from.includes( ',' ) ) {

    return `"${from.replaceAll( '"', '""' )}"`
  }

  return from
}

/**
 * Encapsulates a string in a CSV safe way, taking
 * file paths (assumed by directory characters / and \,
 * ) and shortening them to file names without ".csv".
 *
 * @param from
 * @return {string}
 */
function csvSafeStringFileNames( from: string ): string {

  if ( from.includes( '\\' ) || from.includes( '/' ) ) {
    from = path.basename( from, ".csv" )
  }

  if ( from.includes( '\n' ) ||
    from.includes( '\r') ||
    from.includes( '"') ||
    from.includes( ',' ) ) {

    return `"${from.replaceAll( '"', '""' )}"`
  }

  return from
}


/**
 * Run the git diff
 *
 * @param outputFolder
 * @param target
 * @param diffOutputPath
 * @param isDryRun
 */
async function runDiff(
    outputFolder: string,
    target: string,
    diffOutputPath: string,
    isDryRun: boolean ): Promise< void > {

  const diffOutputFolder = path.dirname( path.resolve( diffOutputPath ) )

  await fsPromises.mkdir( diffOutputFolder, { recursive: true } )

  const process = await exec( `git diff -r --numstat --minimal ${target} -- ${outputFolder}`,
      { maxBuffer: STD_OUT_ERR_MAX_BUFFER }  )

  const csvDiff = `Added,Removed,File\n${process.stdout.split( '\n' ).map(
      ( line ) => line.split( '\t' ).map( csvSafeStringFileNames ).join( ',' ) ).join( '\n' )}`

  await fsPromises.writeFile( `${diffOutputPath}.csv`, csvDiff )

  if ( isDryRun ) {

    await exec( `git checkout -- "${outputFolder}"` )
  }
}

/**
 * Run a regression test digest for a file.
 */
async function runForFile( filePath: string, outputPath: string ): Promise< RunResults > {

  // eslint-disable-next-line max-len
  const process = await exec( `node --experimental-specifier-resolution=node ./compiled/src/ifc/ifc_regression_main.js -d "${filePath}" "${outputPath}"`,
      { maxBuffer: STD_OUT_ERR_MAX_BUFFER } )

  let stdErr = process.stderr

  stdErr = stdErr.replaceAll( '\r', '' )

  let errorLines = stdErr.split( '\n' )

  errorLines = errorLines.filter( ( where ) => where.length > 0 )
  errorLines = errorLines.map( ( where ) => `${where}\n` )

  const indexOfHeader = errorLines.findIndex( ( where ) => where.startsWith( errorCSVHeader ) )

  if ( indexOfHeader >= 0 ) {
    errorLines.splice(
        0,
        indexOfHeader + 1 )
  } else {
    errorLines.length = 0
  }

  const outputFile = path.basename( outputPath )

  let fileHash: string | undefined = void 0

  const outputCSV = `${outputPath}.csv`

  if ( fs.existsSync( outputCSV ) ) {

    fileHash = crypto.createHash( 'sha1' ).update(
        await fsPromises.readFile( outputCSV ) ).digest().toString( 'hex' )
  }

  return {
    errorLines: errorLines.length > 0 ? errorLines : void 0,
    outputFile: outputFile,
    hash: fileHash,
  }
}


const args = // eslint-disable-line no-unused-vars
  yargs(process.argv.slice(SKIP_PARAMS))
      .command('$0 <model_folder> <output_folder>', 'Regression test', (yargs2) => {

        yargs2.option('target', {
          describe: 'Git diff target',
          type: 'string',
          alias: 't',
          default: '',
        })
        yargs2.option('dryrun', {
          describe: 'Roll back the changes to the output folder using git',
          type: 'boolean',
          alias: 'd',
          default: false,
        })
        yargs2.option('changes', {
          describe: 'Custom output location for the diff output (filepath, should include ' +
          'file name but not extension, the folder will be created if it doesn\'t exist',
          type: 'string',
          alias: 'c',
          default: '',
        })
        yargs2.option('exclude', {
          describe: 'An file-path exclusion regex filter (javascript syntax)',
          type: 'string',
          alias: 'e',
          default: '',
        })
        yargs2.positional('model_folder', {
          describe: 'The folder containing IFC files, which will be walked recursively',
          type: 'string' })
        yargs2.positional('output_folder', {
          // eslint-disable-next-line max-len
          describe: 'The folder is where manifests and output artefacts, with the potential exception of changes/diff output',
          type: 'string' })

      }, async (argv) => {

        const ifcFolder     = argv[ 'model_folder' ] as string
        const outputPath    = argv[ 'output_folder' ] as string
        let   changes       = argv[ 'changes' ] as string ?? ''
        const target        = argv[ 'target' ] as string ?? ''
        const dryRun        = argv[ 'dryrun' ] as boolean ?? false
        const excludeFilter = argv[ 'exclude' ] as string ?? ''

        if ( changes.length === 0 ) {
          changes = path.join( outputPath, 'changes' )
        }

        await fsPromises.mkdir( outputPath, { recursive: true })

        const mainPath  = path.join( outputPath, 'main.csv' )
        const errorPath = path.join( outputPath, 'errors.csv' )

        const errorLines: string[] = []
        const fileLines:  string[] = []

        const excludeRegex: RegExp | undefined =
            excludeFilter.length > 0 ? new RegExp( excludeFilter ) : void 0

        const isExcluded = excludeRegex !== void 0 ?
          ( ( testPath: string ) => excludeRegex?.test( testPath ) ) :
          ( testPath: string ) => false

        const recursiveWalk = async ( parentPath: string ) => {

          const items = await fsPromises.readdir( parentPath, { withFileTypes: true } )

          items.sort( ( a, b ) => a.name > b.name ? 1 : -1 )

          for ( const item of items ) {

            const relativePath = path.join( parentPath, item.name )

            if ( isExcluded( relativePath ) ) {
              continue
            }

            const resolved = path.resolve( parentPath, item.name )

            if ( item.isDirectory() ) {

              await recursiveWalk( resolved )

            } else if ( path.extname( resolved ) === '.ifc' ) {

              const fileResults =
                  await runForFile(
                      resolved,
                      path.join( outputPath, path.basename( resolved, '.ifc' ) ) )

              if ( fileResults.errorLines !== void 0 ) {
                errorLines.push( ...fileResults.errorLines )
              }

              // eslint-disable-next-line max-len
              fileLines.push( `${csvSafeString( path.basename( resolved ) )},${csvSafeString( fileResults.hash ?? '' )},${errorLines.length}\n` )
            }
          }
        }

        await recursiveWalk( ifcFolder )

        const manifestFile = await fsPromises.open( mainPath, 'w' )

        await manifestFile.writeFile( 'file,hash,errors\n' )
        await manifestFile.writeFile( fileLines as any )
        await manifestFile.close()

        const errorFile = await fsPromises.open( errorPath, 'w' )

        await errorFile.writeFile( `${errorCSVHeader}\n` )
        await errorFile.writeFile( errorLines as any )
        await errorFile.close()

        await runDiff( outputPath, target, changes, dryRun )
      })
      .help().argv
