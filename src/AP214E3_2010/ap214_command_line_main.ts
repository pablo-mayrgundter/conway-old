import { exit } from 'process'
import ParsingBuffer from '../parsing/parsing_buffer'
import { ParseResult } from '../step/parsing/step_parser'
import EntityTypesIfc from './AP214E3_2010_gen/entity_types_ifc.gen'
import yargs from 'yargs/yargs'
import fs from 'fs'
import StepEntityBase from '../step/step_entity_base'
import AP214StepModel from './ap214_step_model'
import AP214StepParser from './ap214_step_parser'


main()

/**
 * Generalised error handling wrapper
 */
function main() {
  try {
    doWork()
  } catch (error) {
    console.error('An error occurred:', error)
  }
}

/**
 * Actual execution function.
 */
function doWork() {
  const SKIP_PARAMS = 2

  const args = // eslint-disable-line no-unused-vars
    yargs(process.argv.slice(SKIP_PARAMS))
        .command('$0 <filename>', 'Query file', (yargs2) => {
          yargs2.option('express_ids', {
            describe: 'A list of express IDs',
            type: 'number',
            array: true,
            alias: 'e',
          })
          yargs2.option('types', {
            describe: 'A list of express IDs',
            type: 'string',
            array: true, alias: 't',
          })
          yargs2.option('fields', {
            describe: 'A list of fields to extract',
            type: 'string',
            array: true,
            alias: 'f',
          })
          yargs2.option('geometry', {
            describe: 'Output Geometry in OBJ + GLTF + GLB formats',
            type: 'boolean',
            alias: 'g',
          })
          yargs2.option('properties', {
            describe: 'Output PropertySets',
            type: 'boolean',
            alias: 'p',
          })
          yargs2.option('maxchunk', {
            // eslint-disable-next-line max-len
            describe: 'Maximum chunk size in megabytes (note, this is the allocation size, not the output size)',
            type: 'number',
            alias: 'm',
            default: 128,
          })
          yargs2.option('strict', {
            // eslint-disable-next-line max-len
            describe: 'Makes parser/reference errors on nullable fields return null instead of an error',
            type: 'boolean',
            alias: 's',
            default: false,
          })
          yargs2.option('spaces', {
            describe: 'Output Spaces within Rel-Aggregates',
            type: 'boolean',
            alias: 'r',
          })

          yargs2.positional('filename', { describe: 'IFC File Paths', type: 'string' })
        }, (argv) => {
          const ifcFile = argv['filename'] as string

          let indexIfcBuffer: Buffer | undefined

          const expressIDs = (argv['express_ids'] as number[] | undefined)
          const types = (argv['types'] as string[] | undefined)?.map((value) => {
            return EntityTypesIfc[value.toLocaleUpperCase() as keyof typeof EntityTypesIfc]
          }).filter((value) => value !== void 0)
          const fields = (argv['fields'] as string[] | undefined) ??
          ['expressID', 'type', 'localID']
          const geometry = (argv['geometry'] as boolean | undefined)

          const strict = (argv['strict'] as boolean | undefined) ?? false

          try {
            indexIfcBuffer = fs.readFileSync(ifcFile)
          } catch (ex) {
            console.log(
                'Error: couldn\'t read file, check that it is accessible at the specified path.')
            exit()
          }

          if (indexIfcBuffer === void 0) {
            console.log(
                'Error: couldn\'t read file, check that it is accessible at the specified path.')
            exit()
          }

          const parser = AP214StepParser.Instance
          const bufferInput = new ParsingBuffer(indexIfcBuffer)

          const headerDataTimeStart = Date.now()

          const result0 = parser.parseHeader(bufferInput)[1]

          const headerDataTimeEnd = Date.now()

          switch (result0) {
            case ParseResult.COMPLETE:

              break

            case ParseResult.INCOMPLETE:

              console.log('Parse incomplete but no errors')
              break

            case ParseResult.INVALID_STEP:

              console.log('Error: Invalid STEP detected in parse, but no syntax error detected')
              break

            case ParseResult.MISSING_TYPE:

              console.log('Error: missing STEP type, but no syntax error detected')
              break

            case ParseResult.SYNTAX_ERROR:

              console.log(`Error: Syntax error detected on line ${bufferInput.lineCount}`)
              break

            default:
          }

          const parseDataTimeStart = Date.now()
          const model: AP214StepModel | undefined = parser.parseDataToModel(bufferInput)[1]
          const parseDataTimeEnd = Date.now()

          if (model === void 0) {
            return
          }

          model.nullOnErrors = !strict

          if (geometry) {
            console.log( 'Geometry export not yet supported' )
          } else {

            console.log('\n')

            console.log(fields.reduce((previous, current, currentIndex) => {
              return `${previous}${(currentIndex === 0) ? '|' : ''}${current}|`
            }, ''))

            console.log(fields.reduce((previous, current, currentIndex) => {
              return `${previous}${(currentIndex === 0) ? '|' : ''}---|`
            }, ''))

            let rowCount = 0

            const elements =
            (expressIDs?.map((value) => model?.getElementByExpressID(value))?.filter(
                (value) => value !== void 0 && (types === void 0 ||
                types.includes(value.type))) ??
              (types !== void 0 ? model.typeIDs(...types) : void 0) ??
              model) as StepEntityBase<EntityTypesIfc>[] |
            IterableIterator<StepEntityBase<EntityTypesIfc>>

            for (const element of elements) {
              const elementTypeID = EntityTypesIfc[element.type]

              console.log(
                  fields.reduce((previous, current, currentIndex) => {
                    let result

                    try {
                      if (current === 'type') {
                        result = elementTypeID
                      } else {
                        result = ((element as { [key: string]: any })[current])

                        if (result === null) {
                          result = 'null'
                        } else if (result === void 0) {
                          result = '   '
                        } else if (current === 'expressID') {
                          result = `#${result}`
                        }
                      }
                    } catch (ex) {
                      result = 'err'
                    }

                    return `${previous}${(currentIndex === 0) ? '|' : ''}${result}|`
                  }, ''))

              ++rowCount
            }

            console.log('\n')
            console.log(`Row Count: ${rowCount}`)
            console.log(`Header parse time ${headerDataTimeEnd - headerDataTimeStart} ms`)
            console.log(`Data parse time ${parseDataTimeEnd - parseDataTimeStart} ms`)
          }
        })
        .help().argv
}
