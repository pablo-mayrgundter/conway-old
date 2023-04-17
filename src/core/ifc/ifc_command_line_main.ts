import { exit } from 'process'
import IfcStepParser from './ifc_step_parser'
import ParsingBuffer from '../../../dependencies/conway-ds/src/parsing/parsing_buffer'
import { ParseResult } from '../../../dependencies/conway-ds/src/parsing/step/step_parser'
import EntityTypesIfc from '../../gen/ifc/entity_types_ifc.bldrs'
import yargs from 'yargs/yargs'

import fs from 'fs'
import StepEntityBase from '../step_entity_base'
import IfcStepModel from './ifc_step_model'
import { IfcGeometryExtraction } from './ifc_geometry_extraction'

let args =
    yargs(process.argv.slice(2))
        .command('$0 <filename>', 'Query file', (yargs) => {
            yargs.option('express_ids', { describe: 'A list of express IDs', type: 'number', array: true, alias: 'e' })
            yargs.option('types', { describe: 'A list of express IDs', type: 'string', array: true, alias: 't' })
            yargs.option('fields', { describe: 'A list of fields to extract', type: 'string', array: true, alias: 'f' })
            yargs.option('geometry', { describe: 'Output Geometry in OBJ + GLTF + GLB formats', type: 'boolean', alias: 'g' })
            yargs.positional('filename', { describe: 'IFC File Paths', type: 'string' })

        }, (argv) => {
            let ifcFile = argv['filename'] as string

            let indexIfcBuffer: Buffer | undefined

            let expressIDs = (argv['express_ids'] as number[] | undefined)
            let types = (argv['types'] as string[] | undefined)?.map((value) => { return EntityTypesIfc[value.toLocaleUpperCase() as keyof typeof EntityTypesIfc] }).filter(value => value !== void 0)
            let fields = (argv['fields'] as string[] | undefined) ?? ['expressID', 'type', 'localID']
            let geometry = (argv['geometry'] as boolean | undefined)

            try {
                indexIfcBuffer = fs.readFileSync(ifcFile)
            }
            catch (ex) {
                console.log("Error: couldn't read file into memory, check that it is accessible at the specified path.")
                exit()
            }

            if (indexIfcBuffer === void 0) {
                console.log("Error: couldn't read file into memory, check that it is accessible at the specified path.")
                exit()
            }

            let parser = IfcStepParser.Instance
            let bufferInput = new ParsingBuffer(indexIfcBuffer)

            let headerDataTimeStart = Date.now()

            let result0 = parser.parseHeader(bufferInput)[1]

            let headerDataTimeEnd = Date.now()

            switch (result0) {
                case ParseResult.COMPLETE:

                    break

                case ParseResult.INCOMPLETE:

                    console.log("Parse incomplete but no errors")
                    break

                case ParseResult.INVALID_STEP:

                    console.log("Error: Invalid STEP detected in parse, but no syntax error detected")
                    break

                case ParseResult.MISSING_TYPE:

                    console.log("Error: missing STEP type, but no syntax error detected")
                    break

                case ParseResult.SYNTAX_ERROR:

                    console.log(`Error: Syntax error detected on line ${bufferInput.lineCount}`)
                    break

            }

            let parseDataTimeStart = Date.now()
            let [result, model] = parser.parseDataToModel(bufferInput)
            let parseDataTimeEnd = Date.now()

            if (model === void 0) {
                return
            }

            console.log("\n")

            console.log(fields.reduce((previous, current, currentIndex) => {

                return `${previous}${(currentIndex === 0) ? '|' : ''}${current}|`

            }, ""))

            console.log(fields.reduce((previous, current, currentIndex) => {

                return `${previous}${(currentIndex === 0) ? '|' : ''}---|`

            }, ""))

            let rowCount = 0

            let elements =
                (expressIDs?.map((value) => model?.getElementByExpressID(value))?.filter(value => value !== void 0 && (types === void 0 || types.includes(value.type))) ??
                    (types !== void 0 ? model.typeIDs(...types) : void 0) ??
                    model) as StepEntityBase<EntityTypesIfc>[] | IterableIterator<StepEntityBase<EntityTypesIfc>>

            for (let element of elements) {
                let elementTypeID = EntityTypesIfc[element.type]

                console.log(
                    fields.reduce((previous, current, currentIndex) => {

                        let result

                        try {
                            if (current === 'type') {
                                result = elementTypeID
                            }
                            else {
                                result = ((element as { [key: string]: any })[current])

                                if (result === null) {
                                    result = 'null'
                                }
                                else if (result === void 0) {
                                    result = '   '
                                }
                                else if (current === 'expressID') {
                                    result = '#' + result
                                }
                            }
                        }
                        catch (ex) {
                            result = 'err'
                        }

                        return `${previous}${(currentIndex === 0) ? '|' : ''}${result}|`

                    }, ""))

                ++rowCount
            }

            console.log("\n")
            console.log(`Row Count: ${rowCount}`)
            console.log(`Header parse time ${headerDataTimeEnd - headerDataTimeStart} ms`)
            console.log(`Data parse time ${parseDataTimeEnd - parseDataTimeStart} ms`)

            if (geometry) {
                geometryExtraction(model)
            }
        })
        .help().argv


async function geometryExtraction(model: IfcStepModel) {

    let ifcGeometryExtraction = new IfcGeometryExtraction()

    await ifcGeometryExtraction.initialize()

    //parse + extract data model + geometry data
    ifcGeometryExtraction.extractIFCGeometryData(model, true)

    //get list of GeometryObjects 
    const geometryArray = ifcGeometryExtraction.getGeometry()

    //we can assign the first GeometryObject to another variable here to combine them all.
    var fullGeometry = geometryArray[0]
    for (let i = 0; i < geometryArray.length; i++) {

        if (i > 0) {
            fullGeometry.AddGeometry(geometryArray[i])
        }
    }

    //returns a string containing a full obj
    const startTimeObj = Date.now()
    const objResult = ifcGeometryExtraction.toObj(fullGeometry)
    const endTimeObj = Date.now()
    const executionTimeInMsObj = endTimeObj -  startTimeObj

    //write to FS
    const filename = "index_ifc_test.obj"
    fs.writeFile(filename, objResult, function (err) {
        if (err) {
            console.error("Error writing to file: ", err)
        } else {
            console.log("Data written to file: ", filename)
        }
    })

    const startTimeGlb = Date.now()
    const glbResult = ifcGeometryExtraction.toGltf(fullGeometry, true, false, "index_ifc_test")
    const endTimeGlb = Date.now()
    const executionTimeInMsGlb = endTimeGlb - startTimeGlb

    if (glbResult.success) {

        if (glbResult.buffers.size() != glbResult.bufferUris.size()) {
            console.log("Error! Buffer size != Buffer URI size!\n")
            return
        }

        for (let uriIndex = 0; uriIndex < glbResult.bufferUris.size(); uriIndex++) {
            let uri = glbResult.bufferUris.get(uriIndex)

            // Create a (zero copy!) memory view from the native vector 
            const managedBuffer: Uint8Array = ifcGeometryExtraction.getWasmModule().GetUint8Array(glbResult.buffers.get(uriIndex))
            fs.writeFile(uri, managedBuffer, function (err) {
                if (err) {
                    console.error("Error writing to file: ", err)
                } else {
                    console.log("Data written to file: ", uri)
                }
            })
        }
    }

    const startTimeGlbDraco = Date.now()
    const glbDracoResult = ifcGeometryExtraction.toGltf(fullGeometry, true, true, "index_ifc_test_draco")
    const endTimeGlbDraco = Date.now()
    const executionTimeInMsGlbDraco = endTimeGlbDraco - startTimeGlbDraco

    if (glbDracoResult.success) {

        if (glbDracoResult.buffers.size() != glbDracoResult.bufferUris.size()) {
            console.log("Error! Buffer size != Buffer URI size!\n")
            return
        }

        for (let uriIndex = 0; uriIndex < glbDracoResult.bufferUris.size(); uriIndex++) {
            let uri = glbDracoResult.bufferUris.get(uriIndex)

            // Create a memory view from the native vector 
            const managedBuffer: Uint8Array = ifcGeometryExtraction.getWasmModule().GetUint8Array(glbDracoResult.buffers.get(uriIndex))
            fs.writeFile(uri, managedBuffer, function (err) {
                if (err) {
                    console.error("Error writing to file: ", err)
                } else {
                    console.log("Data written to file: ", uri)
                }
            })
        }
    }

    const startTimeGltf = Date.now()
    const gltfResult = ifcGeometryExtraction.toGltf(fullGeometry, false, false, "index_ifc_test")
    const endTimeGltf = Date.now()
    const executionTimeInMsGltf = endTimeGltf - startTimeGltf

    if (gltfResult.success) {

        if (gltfResult.buffers.size() != gltfResult.bufferUris.size()) {
            console.log("Error! Buffer size != Buffer URI size!\n")
            return
        }

        for (let uriIndex = 0; uriIndex < gltfResult.bufferUris.size(); uriIndex++) {
            let uri = gltfResult.bufferUris.get(uriIndex)

            // Create a memory view from the native vector 
            const managedBuffer: Uint8Array =
                ifcGeometryExtraction.getWasmModule().GetUint8Array(gltfResult.buffers.get(uriIndex))

            fs.writeFile(uri, managedBuffer, function (err) {
                if (err) {
                    console.error("Error writing to file: ", err)
                } else {
                    console.log("Data written to file: ", uri)
                }
            })
        }
    }

    const startTimeGltfDraco = Date.now()
    const gltfDracoResult = ifcGeometryExtraction.toGltf(fullGeometry, false, true, "index_ifc_test_draco")
    const endTimeGltfDraco = Date.now()
    const executionTimeInMsGltfDraco = endTimeGltfDraco - startTimeGltfDraco

    console.log(`OBJ Generation took ${executionTimeInMsObj} milliseconds to execute.`)
    console.log(`GLB Generation took ${executionTimeInMsGlb} milliseconds to execute.`)
    console.log(`GLB (Draco) Generation took ${executionTimeInMsGlbDraco} milliseconds to execute.`)
    console.log(`GLTF Generation took ${executionTimeInMsGltf} milliseconds to execute.`)
    console.log(`GLTF (Draco) Generation took ${executionTimeInMsGltfDraco} milliseconds to execute.`)

    if (gltfDracoResult.success) {

        if (gltfDracoResult.buffers.size() != gltfDracoResult.bufferUris.size()) {
            console.log("Error! Buffer size != Buffer URI size!\n")
            return
        }

        for (let uriIndex = 0; uriIndex < gltfDracoResult.bufferUris.size(); uriIndex++) {
            let uri = gltfDracoResult.bufferUris.get(uriIndex)

            // Create a memory view from the native vector 
            const managedBuffer: Uint8Array = ifcGeometryExtraction.getWasmModule().GetUint8Array(gltfDracoResult.buffers.get(uriIndex))

            fs.writeFile(uri, managedBuffer, function (err) {
                if (err) {
                    console.error("Error writing to file: ", err)
                } else {
                    console.log("Data written to file: ", uri)
                }
            })
        }
    }
}