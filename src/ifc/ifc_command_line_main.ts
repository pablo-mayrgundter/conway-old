import { exit } from 'process'
import IfcStepParser from './ifc_step_parser'
import ParsingBuffer from '../parsing/parsing_buffer'
import { ParseResult } from '../step/parsing/step_parser'
import EntityTypesIfc from '../ifc/ifc4_gen/entity_types_ifc.gen'
import yargs from 'yargs/yargs'
import fs from 'fs'
import StepEntityBase from '../step/step_entity_base'
import IfcStepModel from './ifc_step_model'
import { ExtractResult, IfcGeometryExtraction } from './ifc_geometry_extraction'
import { IfcPropertyExtraction } from './ifc_property_extraction'
import { ConwayGeometry }
  from '../../dependencies/conway-geom/conway_geometry'
import { IfcSceneBuilder } from './ifc_scene_builder'
import GeometryConvertor from '../core/geometry_convertor'
import GeometryAggregator from '../core/geometry_aggregator'


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

          yargs2.positional('filename', { describe: 'IFC File Paths', type: 'string' })
        }, async (argv) => {
          const ifcFile = argv['filename'] as string

          let indexIfcBuffer: Buffer | undefined

          const expressIDs = (argv['express_ids'] as number[] | undefined)
          const types = (argv['types'] as string[] | undefined)?.map((value) => {
            return EntityTypesIfc[value.toLocaleUpperCase() as keyof typeof EntityTypesIfc]
          }).filter((value) => value !== void 0)
          const fields = (argv['fields'] as string[] | undefined) ??
          ['expressID', 'type', 'localID']
          const geometry = (argv['geometry'] as boolean | undefined)

          const outputProperties = (argv['properties'] as boolean | undefined)

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
          const model: IfcStepModel | undefined = parser.parseDataToModel(bufferInput)[1]
          const parseDataTimeEnd = Date.now()

          if (model === void 0) {
            return
          }

          if (geometry) {
            console.log(`Data parse time ${parseDataTimeEnd - parseDataTimeStart} ms`)
            // Get the filename with extension
            const fileNameWithExtension = ifcFile.split('/').pop()!
            // Get the filename without extension
            const fileName = fileNameWithExtension.split('.')[0]
            const result = await geometryExtraction(model)
            if (result !== void 0) {
              const scene = result[0]
              const conwaywasm = result[1]

              if (outputProperties) {
                propertyExtraction(model)
              }

              const DEFAULT_CHUNK = 128
              const MEGABYTE_SHIFT = 20
              const maxChunk = (argv['maxchunk'] as number | undefined) ?? DEFAULT_CHUNK
              const maxGeometrySize = maxChunk << MEGABYTE_SHIFT

              serializeGeometry(scene, conwaywasm, fileName, maxGeometrySize)
            }


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

          if (!geometry) {
            if (outputProperties) {
              propertyExtraction(model!)
            }
          }
        })
        .help().argv
}


/**
 * Serialize the geometry.
 */
function serializeGeometry(
    scene: IfcSceneBuilder,
    conwaywasm: ConwayGeometry,
    fileNameNoExtension: string,
    maxGeometrySize: number ) {
  const geometryAggregator =
    new GeometryAggregator(
        conwaywasm, { maxGeometrySize: maxGeometrySize } )

  geometryAggregator.append( scene )

  const aggregatedGeometry = geometryAggregator.aggregateNative()

  if ( aggregatedGeometry.geometry.size() === 0) {
    console.log('No Geometry Found')
    return
  }

  // returns a string containing a full obj
  // const startTimeObj = Date.now()
  // const objResult = conwayModel.toObj(fullGeometry)
  // const endTimeObj = Date.now()
  // const executionTimeInMsObj = endTimeObj - startTimeObj

  // write to FS
  // const filename = `${fileNameNoExtension}_test.obj`

  // fs.writeFile(filename, objResult, function(err) {
  //   if (err) {
  //     console.error('Error writing to file: ', err)
  //   } else {
  //     console.log('Data written to file: ', filename)
  //   }
  // })


  const convertor = new GeometryConvertor( conwaywasm )

  const startTimeGlb = Date.now()
  const glbResults =
    convertor.toGltfs(
        aggregatedGeometry,
        true,
        false,
        `${fileNameNoExtension}_test` )

  for ( const glbResult of glbResults ) {
    if (glbResult.success) {

      if (glbResult.buffers.size() !== glbResult.bufferUris.size()) {
        console.log('Error! Buffer size != Buffer URI size!\n')
        return
      }

      for (let uriIndex = 0; uriIndex < glbResult.bufferUris.size(); uriIndex++) {
        const uri = glbResult.bufferUris.get(uriIndex)

        // Create a (zero copy!) memory view from the native vector
        const managedBuffer: Uint8Array =
          conwaywasm.wasmModule.getUint8Array(glbResult.buffers.get(uriIndex))

        try {
          fs.writeFileSync(uri, managedBuffer)
          // console.log(`Data written to file: ${uri}`)
        } catch (err) {
          console.error('Error writing to file:', err)
        }
      }
    } else {
      console.error('GLB generation unsuccessful')
    }

    glbResult.bufferUris?.delete()
    glbResult.buffers?.delete()
  }

  const endTimeGlb = Date.now()
  const executionTimeInMsGlb = endTimeGlb - startTimeGlb

  // draco test
  const startTimeGlbDraco = Date.now()
  const glbDracoResults =
    convertor.toGltfs(
        aggregatedGeometry,
        true,
        true,
        `${fileNameNoExtension}_test_draco` )

  for ( const glbDracoResult of glbDracoResults ) {

    if (glbDracoResult.success) {

      if (glbDracoResult.buffers.size() !== glbDracoResult.bufferUris.size()) {
        console.log('Error! Buffer size != Buffer URI size!\n')
        return
      }

      for (let uriIndex = 0; uriIndex < glbDracoResult.bufferUris.size(); uriIndex++) {
        const uri = glbDracoResult.bufferUris.get(uriIndex)

        // Create a (zero copy!) memory view from the native vector
        const managedBuffer: Uint8Array =
          conwaywasm.wasmModule.getUint8Array(glbDracoResult.buffers.get(uriIndex))

        try {
          fs.writeFileSync(uri, managedBuffer)
          // console.log(`Data written to file: ${uri}`)
        } catch (err) {
          console.error('Error writing to file:', err)
        }
      }
    } else {
      console.error('GLB Draco generation unsuccessful')
    }

    glbDracoResult.bufferUris?.delete()
    glbDracoResult.buffers?.delete()
  }

  const endTimeGlbDraco = Date.now()
  const executionTimeInMsGlbDraco = endTimeGlbDraco - startTimeGlbDraco

  const startTimeGltf = Date.now()
  const gltfResults =
    convertor.toGltfs(
        aggregatedGeometry,
        false,
        false,
        `${fileNameNoExtension}` )

  for ( const gltfResult of gltfResults ) {

    if (gltfResult.success) {

      if (gltfResult.buffers.size() !== gltfResult.bufferUris.size()) {
        console.log('Error! Buffer size !== Buffer URI size!\n')
        return
      }

      for (let uriIndex = 0; uriIndex < gltfResult.bufferUris.size(); uriIndex++) {
        const uri = gltfResult.bufferUris.get(uriIndex)

        // Create a memory view from the native vector
        const managedBuffer: Uint8Array =
          conwaywasm.wasmModule.
              getUint8Array(gltfResult.buffers.get(uriIndex))

        try {
          fs.writeFileSync(uri, managedBuffer)
          // console.log(`Data written to file: ${uri}`)
        } catch (err) {
          console.error('Error writing to file:', err)
        }
      }
    } else {
      console.error('GLTF generation unsuccessful')
    }

    gltfResult.bufferUris?.delete()
    gltfResult.buffers?.delete()
  }

  const endTimeGltf = Date.now()
  const executionTimeInMsGltf = endTimeGltf - startTimeGltf

  const startTimeGltfDraco = Date.now()
  const gltfResultsDraco =
    convertor.toGltfs(
        aggregatedGeometry,
        false,
        true,
        `${fileNameNoExtension}_draco` )

  for ( const gltfResultDraco of gltfResultsDraco ) {

    if (gltfResultDraco.success) {

      if (gltfResultDraco.buffers.size() !== gltfResultDraco.bufferUris.size()) {
        console.log('Error! Buffer size !== Buffer URI size!\n')
        return
      }

      for (let uriIndex = 0; uriIndex < gltfResultDraco.bufferUris.size(); uriIndex++) {
        const uri = gltfResultDraco.bufferUris.get(uriIndex)

        // Create a memory view from the native vector
        const managedBuffer: Uint8Array =
          conwaywasm.wasmModule.
              getUint8Array(gltfResultDraco.buffers.get(uriIndex))

        try {
          fs.writeFileSync(uri, managedBuffer)
          // console.log(`Data written to file: ${uri}`)
        } catch (err) {
          console.error('Error writing to file:', err)
        }
      }
    } else {
      console.error('Draco GLTF generation unsuccessful')
    }

    gltfResultDraco.bufferUris?.delete()
    gltfResultDraco.buffers?.delete()
  }

  const endTimeGltfDraco = Date.now()
  const executionTimeInMsGltfDraco = endTimeGltfDraco - startTimeGltfDraco

  // clean up
  aggregatedGeometry.geometry.delete()
  aggregatedGeometry.materials.delete()

  console.log( `There were ${aggregatedGeometry.chunks.length} geometry chunks`)
  // console.log(`OBJ Generation took ${executionTimeInMsObj} milliseconds to execute.`)
  console.log(`GLB Generation took ${executionTimeInMsGlb} milliseconds to execute.`)
  console.log(`GLTF Generation took ${executionTimeInMsGltf} milliseconds to execute.`)
  console.log(`GLB Draco Generation took ${executionTimeInMsGlbDraco} milliseconds to execute.`)
  console.log(`GLTF Draco Generation took ${executionTimeInMsGltfDraco} milliseconds to execute.`)
}

/**
 * Function to extract PropertySets from an IfcStepModel
 */
function propertyExtraction(model: IfcStepModel) {

  IfcPropertyExtraction.extractIFCProperties(model, true)
}

/**
 * Function to extract Geometry from an IfcStepModel
 */
async function geometryExtraction(model: IfcStepModel):
  Promise<[IfcSceneBuilder, ConwayGeometry] | undefined> {

  const conwaywasm = new ConwayGeometry()
  const initializationStatus = await conwaywasm.initialize()

  if (!initializationStatus) {
    return
  }

  const conwayModel = new IfcGeometryExtraction(conwaywasm, model)

  // parse + extract data model + geometry data
  const [extractionResult, scene] =
    conwayModel.extractIFCGeometryData(true)

  model.invalidate( true )

  if (extractionResult !== ExtractResult.COMPLETE) {
    console.error('Could not extract geometry, exiting...')
    return void 0
  }

  return [scene, conwaywasm]
}
