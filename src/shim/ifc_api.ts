import IfcStepParser from '../ifc/ifc_step_parser'
import ParsingBuffer from '../parsing/parsing_buffer'
import { ParseResult } from '../step/parsing/step_parser'
import EntityTypesIfc, { EntityTypesIfcCount } from '../ifc/ifc4_gen/entity_types_ifc.gen'
import yargs from 'yargs/yargs'
import fs from 'fs'
import StepEntityBase from '../step/step_entity_base'
import IfcStepModel from '../ifc/ifc_step_model'
import { ExtractResult, IfcGeometryExtraction } from '../ifc/ifc_geometry_extraction'
import { IfcPropertyExtraction } from '../ifc/ifc_property_extraction'
import { ConwayGeometry, GeometryObject }
    from '../../dependencies/conway-geom/conway_geometry'
import { CanonicalMeshType } from '../core/canonical_mesh'
import { CanonicalMaterial } from '../core/canonical_material'
import { IfcBooleanResult, IfcVector } from '../ifc/ifc4_gen'
import { shimIfcEntityMap } from './shim_schema_mapping'


export const UNKNOWN = 0
export const STRING = 1
export const LABEL = 2
export const ENUM = 3
export const REAL = 4
export const REF = 5
export const EMPTY = 6
export const push_BEGIN = 7
export const push_END = 8
export const LINE_END = 9

export interface Loadersettings {
    COORDINATE_TO_ORIGIN: boolean
    USE_FAST_BOOLS: boolean
    CIRCLE_SEGMENTS_LOW?: number
    CIRCLE_SEGMENTS_MEDIUM?: number
    CIRCLE_SEGMENTS_HIGH?: number
    BOOL_ABORT_THRESHOLD?: number
}

export interface Vector<T> {
    get(index: number): T
    push(parameter: T): void
    size(): number
}

export interface Color {
    x: number
    y: number
    z: number
    w: number
}

export interface PlacedGeometry {
    color: Color
    geometryExpressID: number
    flatTransformation: Array<number>
}

export interface FlatMesh {
    geometries: Vector<PlacedGeometry>
    expressID: number
}

export interface RawLineData {
    ID: number
    type: number
    arguments: any[]
}

export interface LoaderError {
    type: string
    message: string
    expressID: number
    ifcType: number
}

export interface IfcGeometry {
    GetVertexData(): number
    GetVertexDataSize(): number
    GetIndexData(): number
    GetIndexDataSize(): number
}

export function ms() {
    return new Date().getTime()
}

export type LocateFileHandlerFn = (path: string, prefix: string) => string

export class IfcAPI {
    wasmModule: undefined | any = undefined;
    fs: undefined | any = undefined;
    wasmPath: string = "";
    isWasmPathAbsolute = false;

    globalModelIDCounter = 0
    models: Map<number, IfcStepModel> = new Map<number, IfcStepModel>()

    //ifcGuidMap: Map<number, Map<string | number, string | number>> = new Map<number, Map<string | number, string | number>>();

    /**
     * Contains all the logic and methods regarding properties, ppushs, qpushs, etc.
     */
    //properties = new Properties(this);

    /**
     * Initializes the WASM module (WebIFCWasm), required before using any other functionality.
     * 
     * @param customLocateFileHandler An optional locateFile function that let's
     * you override the path from which the wasm module is loaded.
     */
    async Init(customLocateFileHandler?: LocateFileHandlerFn) {

        let locateFileHandler: LocateFileHandlerFn = (path, prefix) => {
            // when the wasm module requests the wasm file, we redirect to include the user specified path
            if (path.endsWith(".wasm")) {
                if (this.isWasmPathAbsolute) {
                    return this.wasmPath + path
                }

                return prefix + this.wasmPath + path
            }
            // otherwise use the default path
            return prefix + path
        }

        //@ts-ignore
        const conwaywasm = new ConwayGeometry()
        const initializationStatus = await conwaywasm.initialize()

        if (!initializationStatus) {
            console.log("Could not initialize Conway Wasm")
            return
        }

        this.wasmModule = conwaywasm.wasmModule /*await WebIFCWasm({ noInitialRun: true, locateFile: customLocateFileHandler || locateFileHandler })*/
        // this.fs = this.wasmModule.FS
    }

    /**  
     * Opens a model and returns a modelID number
     * @data Buffer containing IFC data (bytes)
     * @data settings settings for loading the model
    */
    OpenModel(data: Uint8Array, settings?: Loadersettings): number {
        /*let s: Loadersettings = {
            COORDINATE_TO_ORIGIN: false,
            USE_FAST_BOOLS: false,
            CIRCLE_SEGMENTS_LOW: 5,
            CIRCLE_SEGMENTS_MEDIUM: 8,
            CIRCLE_SEGMENTS_HIGH: 12,
            BOOL_ABORT_THRESHOLD: 10000,
            ...settings
        }

        let offpushInSrc = 0
        let result = this.wasmModule.OpenModel(s, (destPtr: number, destSize: number) => {
            let srcSize = Math.min(data.byteLength - offpushInSrc, destSize)

            let dest = this.wasmModule.HEAPU8.subarray(destPtr, destPtr + destSize)
            let src = data.subarray(offpushInSrc, offpushInSrc + srcSize)

            dest.push(src)

            offpushInSrc += srcSize

            return srcSize
        })
        return result*/

        const parser = IfcStepParser.Instance
        const bufferInput = new ParsingBuffer(data)

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
            console.log("[OpenModel]: model === undefined")
            return -1
        }

        this.models.set(this.globalModelIDCounter++, model)

        return this.globalModelIDCounter
    }

    /**  
     * Creates a new model and returns a modelID number
     * @data settings settings for generating data the model
    */
    CreateModel(settings?: Loadersettings): number {

        console.log("[CreateModel]: stubbed for shim, unnecessary")
        /*let s: Loadersettings = {
            COORDINATE_TO_ORIGIN: false,
            USE_FAST_BOOLS: false,
            CIRCLE_SEGMENTS_LOW: 5,
            CIRCLE_SEGMENTS_MEDIUM: 8,
            CIRCLE_SEGMENTS_HIGH: 12,
            BOOL_ABORT_THRESHOLD: 10000,
            ...settings
        }
        let result = this.wasmModule.CreateModel(s)
        return result*/

        return 0
    }

    ExportFileAsIFC(modelID: number): Uint8Array {
        /*this.wasmModule.ExportFileAsIFC(modelID)
        //@ts-ignore
        let result = this.fs.readFile("/export.ifc")
        this.wasmModule['FS_unlink']("/export.ifc")
        
        return result*/

        console.log("[ExportFileAsIFC]: Shim - Unimplemented")

        const emptyArray = new Uint8Array(1)

        return emptyArray

    }


    /**  
     * Opens a model and returns a modelID number
     * @modelID Model handle retrieved by OpenModel, model must not be closed
     * @data Buffer containing IFC data (bytes)
    */
    GetGeometry(modelID: number, geometryExpressID: number): IfcGeometry {
        return this.wasmModule.GetGeometry(modelID, geometryExpressID)
    }

    GetLine(modelID: number, expressID: number, flatten: boolean = false) {
        /*let rawLineData = this.GetRawLineData(modelID, expressID)
        let lineData = ifc2x4helper.FromRawLineData[rawLineData.type](rawLineData)
        if (flatten) {
            this.FlattenLine(modelID, lineData)
        }

        return lineData*/

        console.log("[GetLine]: Shim - Unimplemented")
    }

    GetAndClearErrors(modelID: number): Vector<LoaderError> {
        //return this.wasmModule.GetAndClearErrors(modelID)

        console.log("[GetAndClearErrors]: Shim - Unimplemented")
        const wasmErrorsDummy: Vector<LoaderError> = {
            get(index: number): LoaderError {
                // Implementation here
                return { type: "", message: "", expressID: 0, ifcType: 0 }
            },
            size(): number {
                // Implementation here
                return 0
            },
            push(): void {

            }
        }

        return wasmErrorsDummy
    }

    WriteLine(modelID: number, lineObject: any) {
        // this is pretty weakly-typed nonsense
        /*Object.keys(lineObject).forEach(propertyName => {
            let property = lineObject[propertyName]
            if (property && property.expressID !== undefined) {
                // this is a real object, we have to write it as well and convert to a handle
                // TODO: detect if the object needs to be written at all, or if it's unchanged
                this.WriteLine(modelID, property)

                // overwrite the reference 
                // NOTE: this modifies the parameter
                lineObject[propertyName] = {
                    type: 5,
                    value: property.expressID
                }
            }
            else if (Array.isArray(property) && property.length > 0) {
                for (let i = 0; i < property.length; i++) {
                    if (property[i].expressID !== undefined) {
                        // this is a real object, we have to write it as well and convert to a handle
                        // TODO: detect if the object needs to be written at all, or if it's unchanged
                        this.WriteLine(modelID, property[i])

                        // overwrite the reference 
                        // NOTE: this modifies the parameter
                        lineObject[propertyName][i] = {
                            type: 5,
                            value: property[i].expressID
                        }
                    }
                }
            }
        })

        let rawLineData: RawLineData = {
            ID: lineObject.expressID,
            type: lineObject.type,
            arguments: lineObject.ToTape() as any[]
        }

        this.WriteRawLineData(modelID, rawLineData)*/

        console.log("[WriteLine]: Shim - Unimplemented")

    }

    FlattenLine(modelID: number, line: any) {
        /*Object.keys(line).forEach(propertyName => {
            let property = line[propertyName]
            if (property && property.type === 5) {
                line[propertyName] = this.GetLine(modelID, property.value, true)
            }
            else if (Array.isArray(property) && property.length > 0 && property[0].type === 5) {
                for (let i = 0; i < property.length; i++) {
                    line[propertyName][i] = this.GetLine(modelID, property[i].value, true)
                }
            }
        })*/

        console.log("[FlattenLine]: Shim - Unimplemented")

    }

    GetRawLineData(modelID: number, expressID: number): RawLineData {
        //return this.wasmModule.GetLine(modelID, expressID) as RawLineData

        console.log("[GetRawLineData]: Shim - Unimplemented")
        const myRawLineData: RawLineData = {
            ID: 1,
            type: 42,
            arguments: ['arg1', 2, true]
        }

        return myRawLineData
    }

    WriteRawLineData(modelID: number, data: RawLineData) {
        //return this.wasmModule.WriteLine(modelID, data.ID, data.type, data.arguments)
        console.log("[WriteRawLineData]: Shim - Unimplemented")
    }

    GetLineIDsWithType(modelID: number, type: number): Vector<number> {
        //return this.wasmModule.GetLineIDsWithType(modelID, type)
        let vectorArray: Array<number> = []
        const expressIDVector: Vector<number> = {
            get(index: number): number {
                // Your implementation here
                if (index >= vectorArray.length) {
                    return -1
                }

                return vectorArray[index]
            },
            size(): number {
                // Your implementation here
                return vectorArray.length
            },

            push(parameter: number): void {
                vectorArray.push(parameter)
            }
        }
        console.log("[GetLineIDsWithType]: Shim - Unimplemented")

        const model = this.models.get(modelID)

        if (model !== undefined) {
            if (type in shimIfcEntityMap) {
                const value = shimIfcEntityMap[type]
                // Do something with value
                const results = model.typeIDs(value)
                const arr = Array.from(results)

                for (let arrIndex = 0; arrIndex < arr.length; ++arrIndex) {

                    if (arr[arrIndex].expressID !== void 0) {
                        expressIDVector.push(arr[arrIndex].expressID!)
                    } else {
                        console.log("[GetLineIDsWithType] No express ID found?")
                    }
                }

            } else {
                // Handle case where key does not exist
                console.log(`[GetLineIDsWithType] Type: ${type} does not exist in shimIfcEntityMap`)
            }
        } else {
            console.log("[GetLineIDsWithType]: model is undefined...")
        }

        return expressIDVector
    }

    GetAllLines(modelID: Number): Vector<number> {
        //return this.wasmModule.GetAllLines(modelID)
        let vectorArray: Array<number> = []
        const expressIDVector: Vector<number> = {
            get(index: number): number {
                // Your implementation here
                if (index >= vectorArray.length) {
                    return -1
                }

                return vectorArray[index]
            },
            size(): number {
                // Your implementation here
                return vectorArray.length
            },

            push(parameter: number): void {
                vectorArray.push(parameter)
            }
        }
        console.log("[GetAllLines]: Shim - Unimplemented")

        const model = this.models.get(modelID as number)

        if (model !== undefined) {

            //TODO(nickcastel50): This is absolutely horrid but I don't know a better way yet. 
            //This implementation also kills our lazy loading...
            for (let typeIndex = 0; typeIndex < EntityTypesIfcCount; ++typeIndex) {
                const results = model.typeIDs(typeIndex)
                const arr = Array.from(results)

                for (let arrIndex = 0; arrIndex < arr.length; ++arrIndex) {

                    if (arr[arrIndex].expressID !== void 0) {
                        expressIDVector.push(arr[arrIndex].expressID!)
                    } else {
                        console.log("[GetLineIDsWithType] No express ID found?")
                    }
                }
            }
        } else {
            console.log("[GetLineIDsWithType]: model is undefined...")
        }

        return expressIDVector
    }

    pushGeometryTransformation(modelID: number, transformationMatrix: Array<number>) {
        /*if (transformationMatrix.length != 16) {
            console.log(`Bad transformation matrix size: ${transformationMatrix.length}`)
            return
        }
        this.wasmModule.pushGeometryTransformation(modelID, transformationMatrix)*/

        console.log("[pushGeometryTransformation]: Shim - Unimplemented")
    }

    GetCoordinationMatrix(modelID: number): Array<number> {
        //return this.wasmModule.GetCoordinationMatrix(modelID) as Array<number>
        console.log("[GetCoordinationMatrix]: Shim - Unimplemented")
        return new Array<number>()
    }

    GetVertexArray(ptr: number, size: number): Float32Array {
        return this.getSubArray(this.wasmModule.HEAPF32, ptr, size) as Float32Array
    }

    GetIndexArray(ptr: number, size: number): Uint32Array {
        return this.getSubArray(this.wasmModule.HEAPU32, ptr, size) as Uint32Array
    }

    getSubArray(heap: Float32Array | Uint32Array, startPtr: number, sizeBytes: number) {
        return heap.subarray(startPtr / 4, startPtr / 4 + sizeBytes).slice(0)
    }

    /**  
     * Closes a model and frees all related memory
     * @modelID Model handle retrieved by OpenModel, model must not be closed
    */
    CloseModel(modelID: number) {
        //this.ifcGuidMap.delete(modelID)
        //this.wasmModule.CloseModel(modelID)
        this.models.delete(modelID)
    }

    StreamAllMeshes(modelID: number, meshCallback: (mesh: FlatMesh) => void) {
        //this.wasmModule.StreamAllMeshes(modelID, meshCallback)
        console.log("[StreamAllMeshes]: Shim - Unimplemented")
    }

    StreamAllMeshesWithTypes(modelID: number, types: Array<number>, meshCallback: (mesh: FlatMesh) => void) {
        //this.wasmModule.StreamAllMeshesWithTypes(modelID, types, meshCallback)
        console.log("[StreamAllMeshesWithTypes]: Shim - Unimplemented")
    }

    /**  
     * Checks if a specific model ID is open or closed
     * @modelID Model handle retrieved by OpenModel
    */
    IsModelOpen(modelID: number): boolean {
        //return this.wasmModule.IsModelOpen(modelID)

        if (this.models.has(modelID)) {
            return true
        }

        return false
    }

    /**  
     * Load all geometry in a model
     * @modelID Model handle retrieved by OpenModel
    */
    LoadAllGeometry(modelID: number): Vector<FlatMesh> {
        // return this.wasmModule.LoadAllGeometry(modelID)
        console.log("[LoadAllGeometry]: Shim - Unimplemented")
        const dummyColor = {
            x: 0,
            y: 0,
            z: 0,
            w: 0
        }
        // Single PlacedGeometry variable
        const singlePlacedGeometry: PlacedGeometry = {
            color: dummyColor,
            geometryExpressID: 0, // replace with actual ID
            flatTransformation: [/* your array of numbers here */]
        }

        // Vector of PlacedGeometry
        const vectorOfPlacedGeometry: Vector<PlacedGeometry> = {
            get(index: number): PlacedGeometry {
                // Your implementation here
                return singlePlacedGeometry // Dummy return, replace with actual implementation
            },
            size(): number {
                // Your implementation here
                return 1 // Dummy return, replace with actual implementation
            },
            push(): void {

            }
        }
        const flatMeshDummy: FlatMesh = {
            geometries: vectorOfPlacedGeometry,
            expressID: 0 // replace with actual expressID
        }

        // Vector of FlatMesh
        const vectorOfFlatMesh: Vector<FlatMesh> = {
            get(index: number): FlatMesh {
                // Your implementation here
                return flatMeshDummy // Dummy return, replace with actual implementation
            },
            size(): number {
                // Your implementation here
                return 1 // Dummy return, replace with actual implementation
            },
            push(): void {

            }
        }

        console.log("[LoadAllGeometry]: Shim - Unimplemented")
        return vectorOfFlatMesh
    }

    /**  
     * Load geometry for a single element
     * @modelID Model handle retrieved by OpenModel
    */
    GetFlatMesh(modelID: number, expressID: number): FlatMesh {
        //return this.wasmModule.GetFlatMesh(modelID, expressID)

        // Single PlacedGeometry variable
        const dummyColor = {
            x: 0,
            y: 0,
            z: 0,
            w: 0
        }
        const singlePlacedGeometry: PlacedGeometry = {
            color: dummyColor,
            geometryExpressID: 0, // replace with actual ID
            flatTransformation: [/* your array of numbers here */]
        }

        // Vector of PlacedGeometry
        const vectorOfPlacedGeometry: Vector<PlacedGeometry> = {
            get(index: number): PlacedGeometry {
                // Your implementation here
                return singlePlacedGeometry // Dummy return, replace with actual implementation
            },
            size(): number {
                // Your implementation here
                return 1 // Dummy return, replace with actual implementation
            },
            push(): void {

            }
        }
        const flatMeshDummy: FlatMesh = {
            geometries: vectorOfPlacedGeometry,
            expressID: 0 // replace with actual expressID
        }
        console.log("[GetFlatMesh]: Shim - Unimplemented")

        return flatMeshDummy
    }

    /**
     * Creates a map between element ExpressIDs and GlobalIDs.
     * Each element has two entries, (ExpressID -> GlobalID) and (GlobalID -> ExpressID).
     * @modelID Model handle retrieved by OpenModel
     */
    CreateIfcGuidToExpressIdMapping(modelID: number): void {
        /*const map = new Map<string | number, string | number>()

        for (let x = 0; x < IfcElements.length; x++) {

            const type = IfcElements[x]
            const lines = this.GetLineIDsWithType(modelID, type)
            const size = lines.size()

            for (let y = 0; y < size; y++) {

                const expressID = lines.get(y)
                const info = this.GetLine(modelID, expressID)
                const globalID = info.GlobalId.value

                map.push(expressID, globalID)
                map.push(globalID, expressID)
            }
        }

        this.ifcGuidMap.push(modelID, map)*/

        console.log("[CreateIfcGuidToExpressIdMapping]: Shim - Unimplemented")
    }

    pushWasmPath(path: string, absolute = false) {
        this.wasmPath = path
        this.isWasmPathAbsolute = absolute
    }


}