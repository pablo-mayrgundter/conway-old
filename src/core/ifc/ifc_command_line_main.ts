import { exit } from 'process'
import IfcStepParser from './ifc_step_parser'
import ParsingBuffer from '../../../dependencies/conway-ds/src/parsing/parsing_buffer'
import { ParseResult } from '../../../dependencies/conway-ds/src/parsing/step/step_parser'
import EntityTypesIfc from '../../gen/ifc/entity_types_ifc.gen'
import yargs from 'yargs/yargs'

import fs from 'fs'
import StepEntityBase from '../step_entity_base'
import IfcStepModel from './ifc_step_model'
import { ExtractResult, IfcGeometryExtraction } from './ifc_geometry_extraction'


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

          const parser = IfcStepParser.Instance
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
          const model = parser.parseDataToModel(bufferInput)[1]
          const parseDataTimeEnd = Date.now()

          if (model === void 0) {
            return
          }

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

          if (geometry) {
            geometryExtraction(model)
          }
        })
        .help().argv

/**
 * Function to extract Geometry from an IfcStepModel
 */
async function geometryExtraction(model: IfcStepModel) {

  // get a model Id
  const modelId = await IfcGeometryExtraction.create()

  // parse + extract data model + geometry data
  const [extractionResult, geometryArray] =
  IfcGeometryExtraction.extractIFCGeometryData(model, true, modelId)

  if (extractionResult !== ExtractResult.COMPLETE) {
    console.error('Could not extract geometry, exiting...')
    return
  }

  // we can assign the first GeometryObject to another variable here to combine them all.
  const fullGeometry = geometryArray[0]
  for (let i = 0; i < geometryArray.length; i++) {

    if (i > 0) {
      fullGeometry.addGeometry(geometryArray[i])
    }
  }

  // returns a string containing a full obj
  const startTimeObj = Date.now()
  const objResult = IfcGeometryExtraction.toObj(fullGeometry)
  const endTimeObj = Date.now()
  const executionTimeInMsObj = endTimeObj - startTimeObj

  // write to FS
  const filename = 'index_ifc_test.obj'
  fs.writeFile(filename, objResult, function(err) {
    if (err) {
      console.error('Error writing to file: ', err)
    } else {
      console.log('Data written to file: ', filename)
    }
  })

  const startTimeGlb = Date.now()
  const glbResult = IfcGeometryExtraction.toGltf(fullGeometry, true, false, 'index_ifc_test')
  const endTimeGlb = Date.now()
  const executionTimeInMsGlb = endTimeGlb - startTimeGlb

  if (glbResult.success) {

    if (glbResult.buffers.size() !== glbResult.bufferUris.size()) {
      console.log('Error! Buffer size != Buffer URI size!\n')
      return
    }

    for (let uriIndex = 0; uriIndex < glbResult.bufferUris.size(); uriIndex++) {
      const uri = glbResult.bufferUris.get(uriIndex)

      // Create a (zero copy!) memory view from the native vector
      const managedBuffer: Uint8Array =
      IfcGeometryExtraction.getWasmModule().getUint8Array(glbResult.buffers.get(uriIndex))
      fs.writeFile(uri, managedBuffer, function(err) {
        if (err) {
          console.error('Error writing to file: ', err)
        } else {
          console.log('Data written to file: ', uri)
        }
      })
    }
  }

  const startTimeGlbDraco = Date.now()
  const glbDracoResult =
  IfcGeometryExtraction.toGltf(fullGeometry, true, true, 'index_ifc_test_draco')
  const endTimeGlbDraco = Date.now()
  const executionTimeInMsGlbDraco = endTimeGlbDraco - startTimeGlbDraco

  if (glbDracoResult.success) {

    if (glbDracoResult.buffers.size() !== glbDracoResult.bufferUris.size()) {
      console.log('Error! Buffer size !== Buffer URI size!\n')
      return
    }

    for (let uriIndex = 0; uriIndex < glbDracoResult.bufferUris.size(); uriIndex++) {
      const uri = glbDracoResult.bufferUris.get(uriIndex)

      // Create a memory view from the native vector
      const managedBuffer: Uint8Array =
      IfcGeometryExtraction.getWasmModule().getUint8Array(glbDracoResult.buffers.get(uriIndex))
      fs.writeFile(uri, managedBuffer, function(err) {
        if (err) {
          console.error('Error writing to file: ', err)
        } else {
          console.log('Data written to file: ', uri)
        }
      })
    }
  }

  const startTimeGltf = Date.now()
  const gltfResult = IfcGeometryExtraction.toGltf(fullGeometry, false, false, 'index_ifc_test')
  const endTimeGltf = Date.now()
  const executionTimeInMsGltf = endTimeGltf - startTimeGltf

  if (gltfResult.success) {

    if (gltfResult.buffers.size() !== gltfResult.bufferUris.size()) {
      console.log('Error! Buffer size !== Buffer URI size!\n')
      return
    }

    for (let uriIndex = 0; uriIndex < gltfResult.bufferUris.size(); uriIndex++) {
      const uri = gltfResult.bufferUris.get(uriIndex)

      // Create a memory view from the native vector
      const managedBuffer: Uint8Array =
                IfcGeometryExtraction.getWasmModule().
                    getUint8Array(gltfResult.buffers.get(uriIndex))

      fs.writeFile(uri, managedBuffer, function(err) {
        if (err) {
          console.error('Error writing to file: ', err)
        } else {
          console.log('Data written to file: ', uri)
        }
      })
    }
  }

  const startTimeGltfDraco = Date.now()
  const gltfDracoResult =
  IfcGeometryExtraction
      .toGltf(fullGeometry, false, true, 'index_ifc_test_draco')
  const endTimeGltfDraco = Date.now()
  const executionTimeInMsGltfDraco = endTimeGltfDraco - startTimeGltfDraco

  console.log(`OBJ Generation took ${executionTimeInMsObj} milliseconds to execute.`)
  console.log(`GLB Generation took ${executionTimeInMsGlb} milliseconds to execute.`)
  console.log(`GLB (Draco) Generation took ${executionTimeInMsGlbDraco} milliseconds to execute.`)
  console.log(`GLTF Generation took ${executionTimeInMsGltf} milliseconds to execute.`)
  console.log(`GLTF (Draco) Generation took ${executionTimeInMsGltfDraco}
   milliseconds to execute.`)

  if (gltfDracoResult.success) {

    if (gltfDracoResult.buffers.size() !== gltfDracoResult.bufferUris.size()) {
      console.log('Error! Buffer size !== Buffer URI size!\n')
      return
    }

    for (let uriIndex = 0; uriIndex < gltfDracoResult.bufferUris.size(); uriIndex++) {
      const uri = gltfDracoResult.bufferUris.get(uriIndex)

      // Create a memory view from the native vector
      const managedBuffer: Uint8Array =
      IfcGeometryExtraction.getWasmModule()
          .getUint8Array(gltfDracoResult.buffers.get(uriIndex))

      fs.writeFile(uri, managedBuffer, function(err) {
        if (err) {
          console.error('Error writing to file: ', err)
        } else {
          console.log('Data written to file: ', uri)
        }
      })
    }
  }
}
