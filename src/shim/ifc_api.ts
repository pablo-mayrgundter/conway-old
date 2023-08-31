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
import { IfcSceneBuilder } from '../ifc/ifc_scene_builder'
import { IfcElements } from "./ifc2x4"
import * as glmatrix from "gl-matrix"
import { Properties } from './properties'
import exp from 'constants'
import { IfcClosedShell, IfcFace, IfcOpenShell } from './ifc2x4_helper'
export * from "./ifc2x4"


export const UNKNOWN = 0
export const STRING = 1
export const LABEL = 2
export const ENUM = 3
export const REAL = 4
export const REF = 5
export const EMPTY = 6
export const SET_BEGIN = 7
export const SET_END = 8
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
    settings: Loadersettings | undefined
    globalModelIDCounter = 0
    // we can assign the first GeometryObject to another variable here to combine them all.
    //materialGeometry = new Map<CanonicalMaterial | undefined, GeometryObject>()
    models: Map<number, [IfcStepModel, IfcSceneBuilder, Map<CanonicalMaterial | undefined, Vector<PlacedGeometry>>]> = new Map<number, [IfcStepModel, IfcSceneBuilder, Map<CanonicalMaterial | undefined, Vector<PlacedGeometry>>]>()
    conwaywasm = new ConwayGeometry()
    coordinationMatrix: glmatrix.mat4 = glmatrix.mat4.create()
    coordinationMatrixArray: number[] = Array.from(this.coordinationMatrix)
    _isCoordinated: boolean = false

    // Initialize the matrix using an array
    NormalizeMat: glmatrix.mat4 = glmatrix.mat4.fromValues(
        1, 0, 0, 0,  // First column
        0, 0, -1, 0, // Second column
        0, 1, 0, 0,  // Third column
        0, 0, 0, 1   // Fourth column
    )

    //ifcGuidMap: Map<number, Map<string | number, string | number>> = new Map<number, Map<string | number, string | number>>();

    /**
     * Contains all the logic and methods regarding properties, psets, qsets, etc.
     */
    properties = new Properties(this);

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
        const initializationStatus = await this.conwaywasm.initialize((customLocateFileHandler !== void 0) ? customLocateFileHandler : locateFileHandler)

        if (!initializationStatus) {
            console.log("Could not initialize Conway Wasm")
            return
        }

        this.wasmModule = this.conwaywasm.wasmModule /*await WebIFCWasm({ noInitialRun: true, locateFile: customLocateFileHandler || locateFileHandler })*/
        // this.fs = this.wasmModule.FS
    }

    /**  
     * Opens a model and returns a modelID number
     * @data Buffer containing IFC data (bytes)
     * @data settings settings for loading the model
    */
    OpenModel(data: Uint8Array, settings?: Loadersettings): number {
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

        //TODO(nickcastel50): Doing geometry extraction in here for now...
        // parse + extract data model + geometry data
        const conwayGeometry = new IfcGeometryExtraction(this.conwaywasm, model)
        const [extractionResult, scene] =
            conwayGeometry.extractIFCGeometryData(true)

        if (extractionResult !== ExtractResult.COMPLETE) {
            console.error('[OpenModel]: Error extracting geometry, exiting...')
            return -1
        }

        const materialGeometry = new Map<CanonicalMaterial | undefined, Vector<PlacedGeometry>>()

        const tempModelID = this.globalModelIDCounter
        this.models.set(this.globalModelIDCounter++, [model, scene, materialGeometry])

        //save settings
        this.settings = settings

        return tempModelID
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
        const result = this.models.get(modelID)

        if (result !== void 0) {
            const [model, scene] = result

            const geometryElement = model.getElementByExpressID(geometryExpressID)

            if (geometryElement !== void 0) {
                const canonicalMesh = model.geometry.getByLocalID(geometryElement.localID)

                if (canonicalMesh !== void 0) {
                    if (canonicalMesh.type === CanonicalMeshType.BUFFER_GEOMETRY) {
                        //TODO(nickcastel50): Web-Ifc-Three deletes the geometry buffer, which breaks instanced meshes
                        //since we do not recompute geometry for instances. So we must clone here unfortunately to 
                        //keep compatibility  
                        const geometryClone = canonicalMesh.geometry.clone()

                        return geometryClone
                    } else {
                        console.log(`[GetGeometry]: CanonicalMeshType !== BUFFER_GEOMETRY for expressID: ${geometryExpressID}`)
                    }
                } else {
                    console.log(`[GetGeometry]: Could not find canonicalMesh for expressID: ${geometryExpressID}`)
                }
            } else {
                console.log(`[GetGeometry]: Could not find geometry for expressID: ${geometryExpressID}`)
            }
        } else {
            console.log("[GetGeometry]: model === undefined")
        }

        console.log("[GetGeometry]: Error - returning dummyGeometry object")
        const dummyGeometry: IfcGeometry = (new (this.wasmModule.IfcGeometry)())
        return dummyGeometry
    }

    GetLine(modelID: number, expressID: number, flatten: boolean = false) {

        const result = this.models.get(modelID)

        if (result !== undefined) {
            const [model, scene] = result

            const element = model.getElementByExpressID(expressID)
            //TODO(nickcastel50): finish this 
        }

        const myData: RawLineData = {
            ID: 1,
            type: 42,
            arguments: ["arg1", "arg2"]
        }

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
        Object.keys(line).forEach(propertyName => {
            let property = line[propertyName]
            if (property && property.type === 5) {
                line[propertyName] = this.GetLine(modelID, property.value, true)
            }
            else if (Array.isArray(property) && property.length > 0 && property[0].type === 5) {
                for (let i = 0; i < property.length; i++) {
                    line[propertyName][i] = this.GetLine(modelID, property[i].value, true)
                }
            }
        })

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
        console.log("[GetLineIDsWithType]: Shim - implemented")

        const result = this.models.get(modelID)
        console.log("modelID: " + modelID + "\ntype: " + type)
        console.trace("[GetLineIDsWithType]")
        if (result !== undefined) {
            const [model, scene] = result
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
        console.log("[GetAllLines]: Shim - implemented")

        const result = this.models.get(modelID as number)

        if (result !== undefined) {
            const [model, scene] = result
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

    setGeometryTransformation(modelID: number, transformationMatrix: Array<number>) {
        /*if (transformationMatrix.length != 16) {
            console.log(`Bad transformation matrix size: ${transformationMatrix.length}`)
            return
        }
        this.wasmModule.setGeometryTransformation(modelID, transformationMatrix)*/

        console.log("[setGeometryTransformation]: Shim - Unimplemented")
    }

    GetCoordinationMatrix(modelID: number): Array<number> {
        //return this.wasmModule.GetCoordinationMatrix(modelID) as Array<number>
        console.log("[GetCoordinationMatrix]: Shim - Implemented...")
        return this.coordinationMatrixArray
        //return new Array<number>()
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
        this.models.delete(modelID)
    }

    /*StreamAllMeshes(modelID: number, meshCallback: (mesh: FlatMesh) => void) {
        console.log("[StreamAllMeshes]: Shim - implemented")
        const identity: number[] = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]

        //dummy vars 
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
            flatTransformation: identity
        }

        const placedGeometryArray = new Array<PlacedGeometry>()

        // Vector of PlacedGeometry
        const vectorOfPlacedGeometry: Vector<PlacedGeometry> = {
            get(index: number): PlacedGeometry {
                if (index >= placedGeometryArray.length) {
                    return singlePlacedGeometry
                }

                return placedGeometryArray[index]
            },
            size(): number {
                return placedGeometryArray.length
            },
            push(parameter: PlacedGeometry): void {
                placedGeometryArray.push(parameter)
            }
        }

        const flatMeshArray = new Array<FlatMesh>()
        const flatMeshDummy: FlatMesh = {
            geometries: vectorOfPlacedGeometry,
            expressID: 0 // replace with actual expressID
        }

        const result = this.models.get(modelID)

        if (result !== void 0) {
            const [model, scene, materialGeometry] = result

            //only walk scene if we haven't already 
            if (materialGeometry.size <= 0) {
                // eslint-disable-next-line no-unused-vars
                for (const [_, nativeTransform, geometry, material] of scene.walk()) {
                    if (geometry.type === CanonicalMeshType.BUFFER_GEOMETRY && !geometry.temporary) {
                        const result = materialGeometry.get(material)

                        //extract min
                        let geomMin: glmatrix.vec3 = glmatrix.vec3.create() // Replace with actual minimum coordinates
                        geomMin[0] = geometry.geometry.min.x
                        geomMin[1] = geometry.geometry.min.y
                        geomMin[2] = geometry.geometry.min.z

                        // Create a translation matrix from geom.min
                        let translationMatrixGeomMin: glmatrix.mat4 = glmatrix.mat4.create()
                        glmatrix.mat4.fromTranslation(translationMatrixGeomMin, geomMin)

                        //create PlacedGeometry
                        const expressID = model.getElementByLocalID(geometry.localID)?.expressID as number

                        const geometryTransform = nativeTransform?.getValues()
                        let newMatrix: glmatrix.mat4 | undefined = undefined
                        if (geometryTransform !== void 0) {
                            newMatrix = glmatrix.mat4.fromValues(
                                geometryTransform[0],
                                geometryTransform[1],
                                geometryTransform[2],
                                geometryTransform[3],
                                geometryTransform[4],
                                geometryTransform[5],
                                geometryTransform[6],
                                geometryTransform[7],
                                geometryTransform[8],
                                geometryTransform[9],
                                geometryTransform[10],
                                geometryTransform[11],
                                geometryTransform[12],
                                geometryTransform[13],
                                geometryTransform[14],
                                geometryTransform[15],
                            )
                        }

                         if (result === void 0) {

                        if (!this._isCoordinated && this.settings?.COORDINATE_TO_ORIGIN) {
                            //coordinate the geometry to the origin 
                            // Assuming geom.GetPoint(0) returns a glm::dvec3, i.e., a 3D vector.
                            // In TypeScript, you can represent it as number[] or Float64Array.
                            console.log("Setting up coordinationMatrix")

                            const nativePt = geometry.geometry.GetPoint(0)
                            let pt: number[] = [nativePt.x, nativePt.y, nativePt.z] // Replace x, y, z with actual coordinates.

                            // Transform the point by the matrix.
                            let transformedPt: glmatrix.vec4 = glmatrix.vec4.create()
                            glmatrix.vec4.transformMat4(transformedPt, [pt[0], pt[1], pt[2], 1], newMatrix!)

                            // Create the translation matrix.
                            this.coordinationMatrix = glmatrix.mat4.create()

                            glmatrix.mat4.fromTranslation(this.coordinationMatrix, [-transformedPt[0], -transformedPt[1], -transformedPt[2]])

                            glmatrix.mat4.multiply(this.coordinationMatrix, this.coordinationMatrix, this.NormalizeMat)

                            this.coordinationMatrixArray = Array.from(this.coordinationMatrix)
                            this._isCoordinated = true
                        }

                        //normalize geometry 
                        if (!geometry.geometry.normalized) {
                            geometry.geometry.NormalizeInPlace()
                        }

                        const placedGeometryArray = new Array<PlacedGeometry>()

                        // Vector of PlacedGeometry
                        const vectorOfPlacedGeometry: Vector<PlacedGeometry> = {
                            get(index: number): PlacedGeometry {
                                if (index >= placedGeometryArray.length) {
                                    return singlePlacedGeometry
                                }

                                return placedGeometryArray[index]
                            },
                            size(): number {
                                return placedGeometryArray.length
                            },
                            push(parameter: PlacedGeometry): void {
                                placedGeometryArray.push(parameter)
                            }
                        }


                        //extract color
                        if (material !== undefined) {
                            const color = {
                                x: material.baseColor[0],
                                y: material.baseColor[1],
                                z: material.baseColor[2],
                                w: material.baseColor[3],
                            }

                            //create PlacedGeometry
                            const newTransform = glmatrix.mat4.create()

                            // Perform the matrix multiplications
                            if (newMatrix !== void 0) {
                                glmatrix.mat4.multiply(newTransform, this.coordinationMatrix, newMatrix)
                                glmatrix.mat4.multiply(newTransform, newTransform, translationMatrixGeomMin)
                            } else {
                                glmatrix.mat4.multiply(newTransform, this.coordinationMatrix, newTransform)
                                glmatrix.mat4.multiply(newTransform, newTransform, translationMatrixGeomMin)
                            }
                            const newTransformArr = Array.from(newTransform)
                            const placedGeometry: PlacedGeometry = {
                                color: color,
                                geometryExpressID: expressID,
                                flatTransformation: newTransformArr
                            }

                            vectorOfPlacedGeometry.push(placedGeometry)

                            //set first material geometry 
                            materialGeometry.set(material, vectorOfPlacedGeometry)
                        }
                    } else {
                            const vectorOfPlacedGeometry = result
                            //add to vector of placed geometry
                            if (material !== undefined) {
                                const color = {
                                    x: material.baseColor[0],
                                    y: material.baseColor[1],
                                    z: material.baseColor[2],
                                    w: material.baseColor[3],
                                }

                                //normalize geometry 
                                if (!geometry.geometry.normalized) {
                                    geometry.geometry.NormalizeInPlace()
                                }

                                //create PlacedGeometry
                                const newTransform = glmatrix.mat4.create()

                                // Perform the matrix multiplications
                                if (newMatrix !== void 0) {
                                    glmatrix.mat4.multiply(newTransform, this.coordinationMatrix, newMatrix)
                                    glmatrix.mat4.multiply(newTransform, newTransform, translationMatrixGeomMin)
                                } else {
                                    glmatrix.mat4.multiply(newTransform, this.coordinationMatrix, newTransform)
                                    glmatrix.mat4.multiply(newTransform, newTransform, translationMatrixGeomMin)
                                }
                                const newTransformArr = Array.from(newTransform)

                                //create PlacedGeometry
                                const placedGeometry: PlacedGeometry = {
                                    color: color,
                                    geometryExpressID: expressID,
                                    flatTransformation: newTransformArr
                                }

                                vectorOfPlacedGeometry.push(placedGeometry)
                            }
                        }
                    }
                }
            }

            //loop materialGeometry and create vector of FlatMesh and return 
            console.log("materialGeometrySize: " + materialGeometry.size)
            materialGeometry.forEach((vector, material) => {

                if (vector.size() > 0) {
                    const singleFlatMesh: FlatMesh = {
                        geometries: vector,
                        expressID: vector.get(0).geometryExpressID
                    }

                    meshCallback(singleFlatMesh)
                }
            })
        }
    }*/

    StreamAllMeshes(modelID: number, meshCallback: (mesh: FlatMesh) => void) {
        console.log("[StreamAllMeshes]: Shim - implemented")
        const identity: number[] = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]

        //dummy vars 
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
            flatTransformation: identity
        }

        const placedGeometryArray = new Array<PlacedGeometry>()

        // Vector of PlacedGeometry
        const vectorOfPlacedGeometry: Vector<PlacedGeometry> = {
            get(index: number): PlacedGeometry {
                if (index >= placedGeometryArray.length) {
                    return singlePlacedGeometry
                }

                return placedGeometryArray[index]
            },
            size(): number {
                return placedGeometryArray.length
            },
            push(parameter: PlacedGeometry): void {
                placedGeometryArray.push(parameter)
            }
        }

        const flatMeshArray = new Array<FlatMesh>()
        const flatMeshDummy: FlatMesh = {
            geometries: vectorOfPlacedGeometry,
            expressID: 0 // replace with actual expressID
        }

        const result = this.models.get(modelID)

        if (result !== void 0) {
            const [model, scene, materialGeometry] = result

            //only walk scene if we haven't already 
            if (materialGeometry.size <= 0) {
                // eslint-disable-next-line no-unused-vars
                for (const [_, nativeTransform, geometry, material] of scene.walk()) {

                    //type check 
                    const typedElement = model.getElementByLocalID(geometry.localID)

                    /*if (typedElement !== void 0) {
                        console.log("typedElement: type: " + EntityTypesIfc[typedElement.type])
                        //IFCFACETEDBREP
                        if (!(EntityTypesIfc[typedElement.type] === "IFCEXTRUDEDAREASOLID")) {
                            continue
                        }
                    }*/

                    if (geometry.type === CanonicalMeshType.BUFFER_GEOMETRY && !geometry.temporary) {
                        const result = materialGeometry.get(material)

                        //extract min
                        let geomMin: glmatrix.vec3 = glmatrix.vec3.create() // Replace with actual minimum coordinates
                        geomMin[0] = geometry.geometry.min.x
                        geomMin[1] = geometry.geometry.min.y
                        geomMin[2] = geometry.geometry.min.z

                        // Create a translation matrix from geom.min
                        let translationMatrixGeomMin: glmatrix.mat4 = glmatrix.mat4.create()
                        glmatrix.mat4.fromTranslation(translationMatrixGeomMin, geomMin)

                        //create PlacedGeometry
                        const expressID = model.getElementByLocalID(geometry.localID)?.expressID as number

                        const geometryTransform = nativeTransform?.getValues()
                        let newMatrix: glmatrix.mat4 | undefined = undefined
                        if (geometryTransform !== void 0) {
                            newMatrix = glmatrix.mat4.fromValues(
                                geometryTransform[0],
                                geometryTransform[1],
                                geometryTransform[2],
                                geometryTransform[3],
                                geometryTransform[4],
                                geometryTransform[5],
                                geometryTransform[6],
                                geometryTransform[7],
                                geometryTransform[8],
                                geometryTransform[9],
                                geometryTransform[10],
                                geometryTransform[11],
                                geometryTransform[12],
                                geometryTransform[13],
                                geometryTransform[14],
                                geometryTransform[15],
                            )
                        }

                       //  if (result === void 0) {

                        if (!this._isCoordinated && this.settings?.COORDINATE_TO_ORIGIN) {
                            //coordinate the geometry to the origin 
                            // Assuming geom.GetPoint(0) returns a glm::dvec3, i.e., a 3D vector.
                            // In TypeScript, you can represent it as number[] or Float64Array.
                            console.log("Setting up coordinationMatrix")

                            const nativePt = geometry.geometry.GetPoint(0)
                            let pt: number[] = [nativePt.x, nativePt.y, nativePt.z] // Replace x, y, z with actual coordinates.

                            // Transform the point by the matrix.
                            let transformedPt: glmatrix.vec4 = glmatrix.vec4.create()
                            glmatrix.vec4.transformMat4(transformedPt, [pt[0], pt[1], pt[2], 1], newMatrix!)

                            // Create the translation matrix.
                            this.coordinationMatrix = glmatrix.mat4.create()

                            glmatrix.mat4.fromTranslation(this.coordinationMatrix, [-transformedPt[0], -transformedPt[1], -transformedPt[2]])

                            //glmatrix.mat4.multiply(this.coordinationMatrix, this.coordinationMatrix, this.NormalizeMat)

                            this.coordinationMatrixArray = Array.from(this.coordinationMatrix)
                            this._isCoordinated = true
                        }

                        //normalize geometry 
                        if (!geometry.geometry.normalized) {
                            geometry.geometry.NormalizeInPlace()
                        }

                        const placedGeometryArray = new Array<PlacedGeometry>()

                        // Vector of PlacedGeometry
                        const vectorOfPlacedGeometry: Vector<PlacedGeometry> = {
                            get(index: number): PlacedGeometry {
                                if (index >= placedGeometryArray.length) {
                                    return singlePlacedGeometry
                                }

                                return placedGeometryArray[index]
                            },
                            size(): number {
                                return placedGeometryArray.length
                            },
                            push(parameter: PlacedGeometry): void {
                                placedGeometryArray.push(parameter)
                            }
                        }


                        //extract color
                        if (material !== undefined) {
                            const color = {
                                x: material.baseColor[0],
                                y: material.baseColor[1],
                                z: material.baseColor[2],
                                w: material.baseColor[3],
                            }

                            //create PlacedGeometry
                            const newTransform = glmatrix.mat4.create()

                            // Perform the matrix multiplications
                            if (newMatrix !== void 0) {
                                glmatrix.mat4.multiply(newTransform, this.coordinationMatrix, newMatrix)
                                glmatrix.mat4.multiply(newTransform, newTransform, translationMatrixGeomMin)
                                glmatrix.mat4.multiply(newTransform, this.NormalizeMat, newTransform)
                            } else {
                                glmatrix.mat4.multiply(newTransform, this.coordinationMatrix, newTransform)
                                glmatrix.mat4.multiply(newTransform, newTransform, translationMatrixGeomMin)
                                glmatrix.mat4.multiply(newTransform, this.NormalizeMat, newTransform)
                            }
                            const newTransformArr = Array.from(newTransform)
                            const placedGeometry: PlacedGeometry = {
                                color: color,
                                geometryExpressID: expressID,
                                flatTransformation: newTransformArr
                            }

                            vectorOfPlacedGeometry.push(placedGeometry)

                            const singleFlatMesh: FlatMesh = {
                                geometries: vectorOfPlacedGeometry,
                                expressID: vectorOfPlacedGeometry.get(0).geometryExpressID
                            }
        
                            meshCallback(singleFlatMesh)

                            //set first material geometry 
                            //materialGeometry.set(material, vectorOfPlacedGeometry)
                        }
                    } /*else {
                            const vectorOfPlacedGeometry = result
                            //add to vector of placed geometry
                            if (material !== undefined) {
                                const color = {
                                    x: material.baseColor[0],
                                    y: material.baseColor[1],
                                    z: material.baseColor[2],
                                    w: material.baseColor[3],
                                }

                                //normalize geometry 
                                if (!geometry.geometry.normalized) {
                                    geometry.geometry.NormalizeInPlace()
                                }

                                //create PlacedGeometry
                                const newTransform = glmatrix.mat4.create()

                                // Perform the matrix multiplications
                                if (newMatrix !== void 0) {
                                    glmatrix.mat4.multiply(newTransform, this.coordinationMatrix, newMatrix)
                                    glmatrix.mat4.multiply(newTransform, newTransform, translationMatrixGeomMin)
                                } else {
                                    glmatrix.mat4.multiply(newTransform, this.coordinationMatrix, newTransform)
                                    glmatrix.mat4.multiply(newTransform, newTransform, translationMatrixGeomMin)
                                }
                                const newTransformArr = Array.from(newTransform)

                                //create PlacedGeometry
                                const placedGeometry: PlacedGeometry = {
                                    color: color,
                                    geometryExpressID: expressID,
                                    flatTransformation: newTransformArr
                                }

                                vectorOfPlacedGeometry.push(placedGeometry)
                            }
                        }
                    }*/
                }
            }

            //loop materialGeometry and create vector of FlatMesh and return 
            console.log("materialGeometrySize: " + materialGeometry.size)
            /*materialGeometry.forEach((vector, material) => {

                if (vector.size() > 0) {
                    const singleFlatMesh: FlatMesh = {
                        geometries: vector,
                        expressID: vector.get(0).geometryExpressID
                    }

                    meshCallback(singleFlatMesh)
                }
            })*/
        }
    }

    StreamAllMeshesWithTypes(modelID: number, types: Array<number>, meshCallback: (mesh: FlatMesh) => void) {
        console.log("[StreamAllMeshesWithTypes]: Shim - implemented")
        const identity: number[] = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]

        //dummy vars 
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
            flatTransformation: identity
        }

        const placedGeometryArray = new Array<PlacedGeometry>()

        // Vector of PlacedGeometry
        const vectorOfPlacedGeometry: Vector<PlacedGeometry> = {
            get(index: number): PlacedGeometry {
                if (index >= placedGeometryArray.length) {
                    return singlePlacedGeometry
                }

                return placedGeometryArray[index]
            },
            size(): number {
                return placedGeometryArray.length
            },
            push(parameter: PlacedGeometry): void {
                placedGeometryArray.push(parameter)
            }
        }

        const flatMeshArray = new Array<FlatMesh>()
        const flatMeshDummy: FlatMesh = {
            geometries: vectorOfPlacedGeometry,
            expressID: 0 // replace with actual expressID
        }

        const result = this.models.get(modelID)

        if (result !== void 0) {
            const [model, scene, materialGeometry] = result

            const conwayTypesArray: number[] = []
            types.forEach((type) => {
                const value = shimIfcEntityMap[type]
                // Do something with value
                conwayTypesArray.push(value)
            })

            //only walk scene if we haven't already 
            if (materialGeometry.size <= 0) {
                // eslint-disable-next-line no-unused-vars
                for (const [_, nativeTransform, geometry, material] of scene.walk()) {

                    //type check 
                    const typedElement = model.getElementByLocalID(geometry.localID)

                    /*if (typedElement !== void 0) {
                        console.log("typedElement: type: " + EntityTypesIfc[typedElement.type])
                        //IFCFACETEDBREP
                        if (!(EntityTypesIfc[typedElement.type] === "IFCEXTRUDEDAREASOLID")) {
                            continue
                        }
                    }*/

                    if (typedElement !== void 0) {
                        if (conwayTypesArray.indexOf(typedElement.type.valueOf()) === -1) {
                            continue
                        }
                    }

                    if (geometry.type === CanonicalMeshType.BUFFER_GEOMETRY && !geometry.temporary) {
                        const result = materialGeometry.get(material)

                        //extract min
                        let geomMin: glmatrix.vec3 = glmatrix.vec3.create() // Replace with actual minimum coordinates
                        geomMin[0] = geometry.geometry.min.x
                        geomMin[1] = geometry.geometry.min.y
                        geomMin[2] = geometry.geometry.min.z

                        // Create a translation matrix from geom.min
                        let translationMatrixGeomMin: glmatrix.mat4 = glmatrix.mat4.create()
                        glmatrix.mat4.fromTranslation(translationMatrixGeomMin, geomMin)

                        //create PlacedGeometry
                        const expressID = model.getElementByLocalID(geometry.localID)?.expressID as number

                        const geometryTransform = nativeTransform?.getValues()
                        let newMatrix: glmatrix.mat4 | undefined = undefined
                        if (geometryTransform !== void 0) {
                            newMatrix = glmatrix.mat4.fromValues(
                                geometryTransform[0],
                                geometryTransform[1],
                                geometryTransform[2],
                                geometryTransform[3],
                                geometryTransform[4],
                                geometryTransform[5],
                                geometryTransform[6],
                                geometryTransform[7],
                                geometryTransform[8],
                                geometryTransform[9],
                                geometryTransform[10],
                                geometryTransform[11],
                                geometryTransform[12],
                                geometryTransform[13],
                                geometryTransform[14],
                                geometryTransform[15],
                            )
                        }

                        //if (result === void 0) {

                            if (!this._isCoordinated && this.settings?.COORDINATE_TO_ORIGIN) {
                                //coordinate the geometry to the origin 
                                // Assuming geom.GetPoint(0) returns a glm::dvec3, i.e., a 3D vector.
                                // In TypeScript, you can represent it as number[] or Float64Array.
                                console.log("Setting up coordinationMatrix")

                                const nativePt = geometry.geometry.GetPoint(0)
                                let pt: number[] = [nativePt.x, nativePt.y, nativePt.z] // Replace x, y, z with actual coordinates.

                                // Transform the point by the matrix.
                                let transformedPt: glmatrix.vec4 = glmatrix.vec4.create()
                                glmatrix.vec4.transformMat4(transformedPt, [pt[0], pt[1], pt[2], 1], newMatrix!)

                                // Create the translation matrix.
                                this.coordinationMatrix = glmatrix.mat4.create()

                                glmatrix.mat4.fromTranslation(this.coordinationMatrix, [-transformedPt[0], -transformedPt[1], -transformedPt[2]])

                                //glmatrix.mat4.multiply(this.coordinationMatrix, this.coordinationMatrix, this.NormalizeMat)

                                this.coordinationMatrixArray = Array.from(this.coordinationMatrix)
                                this._isCoordinated = true
                            }

                            //normalize geometry 
                            if (!geometry.geometry.normalized) {
                                geometry.geometry.NormalizeInPlace()
                            }

                            const placedGeometryArray = new Array<PlacedGeometry>()

                            // Vector of PlacedGeometry
                            const vectorOfPlacedGeometry: Vector<PlacedGeometry> = {
                                get(index: number): PlacedGeometry {
                                    if (index >= placedGeometryArray.length) {
                                        return singlePlacedGeometry
                                    }

                                    return placedGeometryArray[index]
                                },
                                size(): number {
                                    return placedGeometryArray.length
                                },
                                push(parameter: PlacedGeometry): void {
                                    placedGeometryArray.push(parameter)
                                }
                            }
                            //set first material geometry 
                            materialGeometry.set(material, vectorOfPlacedGeometry)

                            //extract color
                            if (material !== undefined) {
                                const color = {
                                    x: material.baseColor[0],
                                    y: material.baseColor[1],
                                    z: material.baseColor[2],
                                    w: material.baseColor[3],
                                }

                                //create PlacedGeometry
                                const newTransform = glmatrix.mat4.create()

                                // Perform the matrix multiplications
                                if (newMatrix !== void 0) {
                                    glmatrix.mat4.multiply(newTransform, this.coordinationMatrix, newMatrix)
                                    glmatrix.mat4.multiply(newTransform, newTransform, translationMatrixGeomMin)
                                    glmatrix.mat4.multiply(newTransform, this.NormalizeMat, newTransform)
                                } else {
                                    glmatrix.mat4.multiply(newTransform, this.coordinationMatrix, newTransform)
                                    glmatrix.mat4.multiply(newTransform, newTransform, translationMatrixGeomMin)
                                    glmatrix.mat4.multiply(newTransform, this.NormalizeMat, newTransform)
                                }
                                const newTransformArr = Array.from(newTransform)
                                const placedGeometry: PlacedGeometry = {
                                    color: color,
                                    geometryExpressID: expressID,
                                    flatTransformation: newTransformArr
                                }

                                vectorOfPlacedGeometry.push(placedGeometry)

                                const singleFlatMesh: FlatMesh = {
                                    geometries: vectorOfPlacedGeometry,
                                    expressID: vectorOfPlacedGeometry.get(0).geometryExpressID
                                }
            
                                meshCallback(singleFlatMesh)
                            }
                        } /*else {
                            const vectorOfPlacedGeometry = result
                            //add to vector of placed geometry
                            if (material !== undefined) {
                                const color = {
                                    x: material.baseColor[0],
                                    y: material.baseColor[1],
                                    z: material.baseColor[2],
                                    w: material.baseColor[3],
                                }

                                //normalize geometry 
                                if (!geometry.geometry.normalized) {
                                    geometry.geometry.NormalizeInPlace()
                                }

                                //create PlacedGeometry
                                const newTransform = glmatrix.mat4.create()

                                // Perform the matrix multiplications
                                if (newMatrix !== void 0) {
                                    glmatrix.mat4.multiply(newTransform, this.coordinationMatrix, newMatrix)
                                    glmatrix.mat4.multiply(newTransform, newTransform, translationMatrixGeomMin)
                                } else {
                                    glmatrix.mat4.multiply(newTransform, this.coordinationMatrix, newTransform)
                                    glmatrix.mat4.multiply(newTransform, newTransform, translationMatrixGeomMin)
                                }
                                const newTransformArr = Array.from(newTransform)

                                //create PlacedGeometry
                                const placedGeometry: PlacedGeometry = {
                                    color: color,
                                    geometryExpressID: expressID,
                                    flatTransformation: newTransformArr
                                }

                                vectorOfPlacedGeometry.push(placedGeometry)
                            }
                        }
                    }*/
                }
            }

            //loop materialGeometry and create vector of FlatMesh and return 
            /*materialGeometry.forEach((vector, material) => {

                if (vector.size() > 0) {
                    const singleFlatMesh: FlatMesh = {
                        geometries: vector,
                        expressID: vector.get(0).geometryExpressID
                    }

                    meshCallback(singleFlatMesh)
                }
            })*/
        }
    }

    /**  
     * Checks if a specific model ID is open or closed
     * @modelID Model handle retrieved by OpenModel
    */
    IsModelOpen(modelID: number): boolean {
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
        const identity: number[] = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]

        //dummy vars 
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
            flatTransformation: identity
        }

        const placedGeometryArray = new Array<PlacedGeometry>()

        // Vector of PlacedGeometry
        const vectorOfPlacedGeometry: Vector<PlacedGeometry> = {
            get(index: number): PlacedGeometry {
                if (index >= placedGeometryArray.length) {
                    return singlePlacedGeometry
                }

                return placedGeometryArray[index]
            },
            size(): number {
                return placedGeometryArray.length
            },
            push(parameter: PlacedGeometry): void {
                placedGeometryArray.push(parameter)
            }
        }

        const flatMeshArray = new Array<FlatMesh>()
        const flatMeshDummy: FlatMesh = {
            geometries: vectorOfPlacedGeometry,
            expressID: 0 // replace with actual expressID
        }

        // Vector of FlatMesh
        const vectorOfFlatMesh: Vector<FlatMesh> = {
            get(index: number): FlatMesh {
                if (index >= placedGeometryArray.length) {
                    return flatMeshDummy
                }

                return flatMeshArray[index]
            },
            size(): number {
                // Your implementation here
                return flatMeshArray.length
            },
            push(parameter: FlatMesh): void {
                flatMeshArray.push(parameter)
            }
        }


        const result = this.models.get(modelID)

        if (result !== void 0) {
            const [model, scene, materialGeometry] = result

            //only walk scene if we haven't already 
            if (materialGeometry.size <= 0) {
                // eslint-disable-next-line no-unused-vars
                for (const [_, nativeTransform, geometry, material] of scene.walk()) {
                    if (geometry.type === CanonicalMeshType.BUFFER_GEOMETRY && !geometry.temporary) {
                        const result = materialGeometry.get(material)

                        //extract min
                        let geomMin: glmatrix.vec3 = glmatrix.vec3.create() // Replace with actual minimum coordinates
                        geomMin[0] = geometry.geometry.min.x
                        geomMin[1] = geometry.geometry.min.y
                        geomMin[2] = geometry.geometry.min.z

                        // Create a translation matrix from geom.min
                        let translationMatrixGeomMin: glmatrix.mat4 = glmatrix.mat4.create()
                        glmatrix.mat4.fromTranslation(translationMatrixGeomMin, geomMin)

                        //create PlacedGeometry
                        const expressID = model.getElementByLocalID(geometry.localID)?.expressID as number

                        const geometryTransform = nativeTransform?.getValues()
                        let newMatrix: glmatrix.mat4 | undefined = undefined
                        if (geometryTransform !== void 0) {
                            newMatrix = glmatrix.mat4.fromValues(
                                geometryTransform[0],
                                geometryTransform[1],
                                geometryTransform[2],
                                geometryTransform[3],
                                geometryTransform[4],
                                geometryTransform[5],
                                geometryTransform[6],
                                geometryTransform[7],
                                geometryTransform[8],
                                geometryTransform[9],
                                geometryTransform[10],
                                geometryTransform[11],
                                geometryTransform[12],
                                geometryTransform[13],
                                geometryTransform[14],
                                geometryTransform[15],
                            )
                        }

                        if (result === void 0) {

                            if (!this._isCoordinated && this.settings?.COORDINATE_TO_ORIGIN) {
                                //coordinate the geometry to the origin 
                                // Assuming geom.GetPoint(0) returns a glm::dvec3, i.e., a 3D vector.
                                // In TypeScript, you can represent it as number[] or Float64Array.
                                console.log("Setting up coordinationMatrix")

                                const nativePt = geometry.geometry.GetPoint(0)
                                let pt: number[] = [nativePt.x, nativePt.y, nativePt.z] // Replace x, y, z with actual coordinates.

                                // Transform the point by the matrix.
                                let transformedPt: glmatrix.vec4 = glmatrix.vec4.create()
                                glmatrix.vec4.transformMat4(transformedPt, [pt[0], pt[1], pt[2], 1], newMatrix!)

                                // Create the translation matrix.
                                this.coordinationMatrix = glmatrix.mat4.create()

                                glmatrix.mat4.fromTranslation(this.coordinationMatrix, [-transformedPt[0], -transformedPt[1], -transformedPt[2]])

                                //glmatrix.mat4.multiply(this.coordinationMatrix, this.coordinationMatrix, this.NormalizeMat)

                                this.coordinationMatrixArray = Array.from(this.coordinationMatrix)
                                this._isCoordinated = true
                            }

                            //normalize geometry 
                            if (!geometry.geometry.normalized) {
                                geometry.geometry.NormalizeInPlace()
                            }

                            const placedGeometryArray = new Array<PlacedGeometry>()

                            // Vector of PlacedGeometry
                            const vectorOfPlacedGeometry: Vector<PlacedGeometry> = {
                                get(index: number): PlacedGeometry {
                                    if (index >= placedGeometryArray.length) {
                                        return singlePlacedGeometry
                                    }

                                    return placedGeometryArray[index]
                                },
                                size(): number {
                                    return placedGeometryArray.length
                                },
                                push(parameter: PlacedGeometry): void {
                                    placedGeometryArray.push(parameter)
                                }
                            }
                            //set first material geometry 
                            materialGeometry.set(material, vectorOfPlacedGeometry)

                            //extract color
                            if (material !== undefined) {
                                const color = {
                                    x: material.baseColor[0],
                                    y: material.baseColor[1],
                                    z: material.baseColor[2],
                                    w: material.baseColor[3],
                                }

                                //create PlacedGeometry
                                const newTransform = glmatrix.mat4.create()

                                // Perform the matrix multiplications
                                if (newMatrix !== void 0) {
                                    glmatrix.mat4.multiply(newTransform, this.coordinationMatrix, newMatrix)
                                    glmatrix.mat4.multiply(newTransform, newTransform, translationMatrixGeomMin)
                                    glmatrix.mat4.multiply(newTransform, this.NormalizeMat, newTransform)
                                } else {
                                    glmatrix.mat4.multiply(newTransform, this.coordinationMatrix, newTransform)
                                    glmatrix.mat4.multiply(newTransform, newTransform, translationMatrixGeomMin)
                                    glmatrix.mat4.multiply(newTransform, this.NormalizeMat, newTransform)
                                }
                                const newTransformArr = Array.from(newTransform)
                                const placedGeometry: PlacedGeometry = {
                                    color: color,
                                    geometryExpressID: expressID,
                                    flatTransformation: newTransformArr
                                }

                                vectorOfPlacedGeometry.push(placedGeometry)
                            }
                        } else {
                            const vectorOfPlacedGeometry = result
                            //add to vector of placed geometry
                            if (material !== undefined) {
                                const color = {
                                    x: material.baseColor[0],
                                    y: material.baseColor[1],
                                    z: material.baseColor[2],
                                    w: material.baseColor[3],
                                }

                                //normalize geometry 
                                if (!geometry.geometry.normalized) {
                                    geometry.geometry.NormalizeInPlace()
                                }

                                //create PlacedGeometry
                                const newTransform = glmatrix.mat4.create()

                                // Perform the matrix multiplications
                                if (newMatrix !== void 0) {
                                    glmatrix.mat4.multiply(newTransform, this.coordinationMatrix, newMatrix)
                                    glmatrix.mat4.multiply(newTransform, newTransform, translationMatrixGeomMin)
                                } else {
                                    glmatrix.mat4.multiply(newTransform, this.coordinationMatrix, newTransform)
                                    glmatrix.mat4.multiply(newTransform, newTransform, translationMatrixGeomMin)
                                }
                                const newTransformArr = Array.from(newTransform)

                                //create PlacedGeometry
                                const placedGeometry: PlacedGeometry = {
                                    color: color,
                                    geometryExpressID: expressID,
                                    flatTransformation: newTransformArr
                                }

                                vectorOfPlacedGeometry.push(placedGeometry)
                            }
                        }
                    }
                }
            }

            //loop materialGeometry and create vector of FlatMesh and return 
            materialGeometry.forEach((vector, material) => {

                if (vector.size() > 0) {
                    const singleFlatMesh: FlatMesh = {
                        geometries: vector,
                        expressID: vector.get(0).geometryExpressID
                    }

                    vectorOfFlatMesh.push(singleFlatMesh)
                }
            })
        }

        console.log("[LoadAllGeometry]: Shim - implemented")
        return vectorOfFlatMesh
    }

    /**  
     * Load geometry for a single element
     * @modelID Model handle retrieved by OpenModel
    */
    GetFlatMesh(modelID: number, expressID: number): FlatMesh {
        //return this.wasmModule.GetFlatMesh(modelID, expressID)

        const result = this.models.get(modelID)

        if (result !== void 0) {
            const [model, scene, materialGeometry] = result
            if (materialGeometry.size <= 0) {
                const flatMeshes = this.LoadAllGeometry(modelID)

                const size = flatMeshes.size()
                for (let i = 0; i < size; i++) {
                    const flatMesh = flatMeshes.get(i)
                    if (flatMesh.expressID === expressID) {
                        return flatMesh
                    }
                }
            }

            //loop materialGeometry and create vector of FlatMesh and return 
            materialGeometry.forEach((vector, material) => {

                if (vector.size() > 0) {
                    if (vector.get(0).geometryExpressID === expressID) {
                        const singleFlatMesh: FlatMesh = {
                            geometries: vector,
                            expressID: expressID
                        }

                        return singleFlatMesh
                    }
                }
            })

        }
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
    
                map.set(expressID, globalID)
                map.set(globalID, expressID)
            }
        }
    
        this.ifcGuidMap.push(modelID, map)*/

        console.log("[CreateIfcGuidToExpressIdMapping]: Shim - Unimplemented")
    }

    SetWasmPath(path: string, absolute = false) {
        this.wasmPath = path
        this.isWasmPathAbsolute = absolute
    }


}