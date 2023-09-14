import IfcStepParser from '../ifc/ifc_step_parser'
import ParsingBuffer from '../parsing/parsing_buffer'
import { ParseResult } from '../step/parsing/step_parser'
import { EntityTypesIfcCount } from '../ifc/ifc4_gen/entity_types_ifc.gen'
import IfcStepModel from '../ifc/ifc_step_model'
import { ExtractResult, IfcGeometryExtraction } from '../ifc/ifc_geometry_extraction'
import { ConwayGeometry, GeometryObject }
    from '../../dependencies/conway-geom/conway_geometry'
import { CanonicalMeshType } from '../core/canonical_mesh'
import { CanonicalMaterial } from '../core/canonical_material'
import { shimIfcEntityMap, shimIfcEntityReverseMap } from './shim_schema_mapping'
import { IfcSceneBuilder } from '../ifc/ifc_scene_builder'
import * as glmatrix from "gl-matrix"
import { Properties } from './properties'
import { IfcClosedShell, IfcFace, IfcOpenShell, FromRawLineData } from './ifc2x4_helper'
import { FieldDescriptionKind, EntityReferenceFieldDescription } from '../core/entity_field_description'
import { PackedMesh } from '../core/packed_mesh'
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
    models: Map<number,
        [IfcStepModel,
            IfcSceneBuilder,
            Map<number, Vector<PlacedGeometry>>,
            PackedMesh<IfcStepModel>,
            Map<number, [GeometryObject, CanonicalMaterial, number[]]>, Map<number, number[]>]>
        = new Map<number,
            [IfcStepModel,
                IfcSceneBuilder,
                Map<number, Vector<PlacedGeometry>>,
                PackedMesh<IfcStepModel>,
                Map<number, [GeometryObject, CanonicalMaterial, number[]]>, Map<number, number[]>]>()
    conwaywasm = new ConwayGeometry()
    coordinationMatrix: glmatrix.mat4 = glmatrix.mat4.create()
    coordinationMatrixArray: number[] = Array.from(this.coordinationMatrix)
    _isCoordinated: boolean = false
    linearScalingFactor: number = 1
    // eslint-disable-next-line no-empty-function
    productGeometryIndex: ReadonlyMap<number, number[]> = new Map<number, number[]>();

    // Initialize the matrix using an array
    NormalizeMat: glmatrix.mat4 = glmatrix.mat4.fromValues(
        1, 0, 0, 0,  // First column
        0, 0, -1, 0, // Second column
        0, 1, 0, 0,  // Third column
        0, 0, 0, 1   // Fourth column
    )

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

        this.wasmModule = this.conwaywasm.wasmModule
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

        //get linear scaling factor
        this.linearScalingFactor = conwayGeometry.getLinearScalingFactor()

        //build packed mesh model 
        const packedMeshModel = scene.buildPackedMeshModel()

        const vectorGeometryMap = new Map<number, Vector<PlacedGeometry>>()

        const geometryMap = new Map<number, [GeometryObject, CanonicalMaterial, number[]]>()

        const productGeometryIndex = new Map<number, number[]>()

        const tempModelID = this.globalModelIDCounter
        this.models.set(this.globalModelIDCounter++, [model, scene, vectorGeometryMap, packedMeshModel, geometryMap, productGeometryIndex])

        //save settings
        this.settings = settings

        return tempModelID
    }

    /**  
     * Creates a new model and returns a modelID number
     * @data settings settings for generating data the model
    */
    CreateModel(settings?: Loadersettings): number {

        console.log("[CreateModel]: Shim - Unimplemented")
        return 0
    }

    ExportFileAsIFC(modelID: number): Uint8Array {
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
            const [model, scene, placedGeometryVec, packedMeshModel, geometryMap] = result

            const mapResult = geometryMap.get(geometryExpressID)

            if (mapResult !== undefined) {

                const [geometryObject, _] = mapResult
                if (geometryObject !== void 0) {
                    const clone = geometryObject.clone()

                    return clone
                } else {
                    console.log("[GetGeometry]: Geometry Object not found for expressID: " + geometryExpressID)
                }
            }
        } else {
            console.log("[GetGeometry]: model === undefined")
        }

        console.log("[GetGeometry]: Error - returning dummyGeometry object")
        const dummyGeometry: IfcGeometry = (new (this.wasmModule.IfcGeometry)())
        return dummyGeometry
    }

    /**
     * 
     * @param modelID 
     * @param expressID 
     * @param flatten 
     * @returns 
     */
    GetLine(modelID: number, expressID: number, flatten: boolean = false) {

        let rawLineData = this.GetRawLineData(modelID, expressID)
        let lineData = FromRawLineData[rawLineData.type](rawLineData)
        if (flatten) {
            this.FlattenLine(modelID, lineData)
        }

        return lineData
    }

    /**
     * 
     * @param modelID 
     * @returns 
     */
    GetAndClearErrors(modelID: number): Vector<LoaderError> {
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
        console.log("[WriteLine]: Shim - Unimplemented")
    }

    /**
     * 
     * @param modelID 
     * @param line 
     */
    FlattenLine(modelID: number, line: any) {
        console.log("[FlattenLine]: Shim - implemented")
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
    }

    /**
     * 
     * @param modelID 
     * @param expressID 
     * @returns 
     */
    GetRawLineData(modelID: number, expressID: number): RawLineData {
        const result = this.models.get(modelID)

        if (result !== undefined) {
            const [model, scene] = result

            const element = model.getElementByExpressID(expressID)

            let args: any[] = []

            if (element !== void 0) {
                const lineArguments = element.extractLineArguments()

                const parsingBuffer = new ParsingBuffer(lineArguments)
                if (element.expressID !== void 0) {
                    const result = IfcStepParser.Instance.extractArguments(parsingBuffer, element.expressID)
                    if (result[1] === ParseResult.COMPLETE) {
                        const rawLineData: RawLineData = {
                            ID: expressID,
                            type: shimIfcEntityReverseMap[element.type],
                            arguments: result[0]
                        }

                        return rawLineData
                    }
                } else {
                    console.log("element express ID null")
                }

                const rawLineData: RawLineData = {
                    ID: expressID,
                    type: shimIfcEntityReverseMap[element.type],
                    arguments: args
                }

                return rawLineData
            } else {
                console.log("element === undefined, expressID: " + expressID)
            }
        }

        const dummyRawLineData: RawLineData = {
            ID: 0,
            type: 0,
            arguments: ['invalid']
        }

        return dummyRawLineData
    }

    /**
     * 
     * @param modelID 
     * @param data 
     */
    WriteRawLineData(modelID: number, data: RawLineData) {
        console.log("[WriteRawLineData]: Shim - Unimplemented")
    }

    /**
     * 
     * @param modelID 
     * @param type 
     * @returns 
     */
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

        const result = this.models.get(modelID)
        if (result !== undefined) {
            const [model, _] = result
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

    /**
     * 
     * @param modelID 
     * @returns 
     */
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

    /**
     * 
     * @param modelID 
     * @param transformationMatrix 
     */
    setGeometryTransformation(modelID: number, transformationMatrix: Array<number>) {
        /*if (transformationMatrix.length != 16) {
            console.log(`Bad transformation matrix size: ${transformationMatrix.length}`)
            return
        }
        this.wasmModule.setGeometryTransformation(modelID, transformationMatrix)*/

        console.log("[setGeometryTransformation]: Shim - Unimplemented")
    }

    /**
     * 
     * @param modelID 
     * @returns 
     */
    GetCoordinationMatrix(modelID: number): Array<number> {
        return this.coordinationMatrixArray
    }

    /**
     * 
     * @param ptr 
     * @param size 
     * @returns 
     */
    GetVertexArray(ptr: number, size: number): Float32Array {
        return this.getSubArray(this.wasmModule.HEAPF32, ptr, size) as Float32Array
    }

    /**
     * 
     * @param ptr 
     * @param size 
     * @returns 
     */
    GetIndexArray(ptr: number, size: number): Uint32Array {
        return this.getSubArray(this.wasmModule.HEAPU32, ptr, size) as Uint32Array
    }

    /**
     * 
     * @param heap 
     * @param startPtr 
     * @param sizeBytes 
     * @returns 
     */
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

    /**
     * 
     * @param modelID 
     * @param meshCallback 
     */
    StreamAllMeshes(modelID: number, meshCallback: (mesh: FlatMesh) => void) {
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
            const [model, scene, placedGeometryVec, packedMeshModel, geometryMaterialTransformMap, productGeometryIndex] = result

            for (const [_, nativeTransform, geometry, material, entity] of scene.walk()) {

                if (geometry.type === CanonicalMeshType.BUFFER_GEOMETRY && !geometry.temporary) {

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


                    //extract color
                    if (material !== undefined) {
                        const newTransform = glmatrix.mat4.create()

                        // Create a 4x4 identity matrix
                        const scaleMatrix = glmatrix.mat4.create()

                        // Create a 3D vector for scaling factors
                        const scaleVec = glmatrix.vec3.fromValues(this.linearScalingFactor,
                            this.linearScalingFactor,
                            this.linearScalingFactor)

                        // Scale the matrix
                        glmatrix.mat4.scale(scaleMatrix, scaleMatrix, scaleVec)

                        // Perform the matrix multiplications
                        if (newMatrix !== void 0) {
                            glmatrix.mat4.multiply(newTransform, this.coordinationMatrix, newMatrix)
                            glmatrix.mat4.multiply(newTransform, newTransform, translationMatrixGeomMin)
                            glmatrix.mat4.multiply(newTransform, this.NormalizeMat, newTransform)
                            glmatrix.mat4.multiply(newTransform, newTransform, scaleMatrix)
                        } else {
                            glmatrix.mat4.multiply(newTransform, this.coordinationMatrix, newTransform)
                            glmatrix.mat4.multiply(newTransform, newTransform, translationMatrixGeomMin)
                            glmatrix.mat4.multiply(newTransform, this.NormalizeMat, newTransform)
                            glmatrix.mat4.multiply(newTransform, newTransform, scaleMatrix)
                        }
                        const newTransformArr = Array.from(newTransform)


                        geometryMaterialTransformMap.set(expressID, [geometry.geometry, material, newTransformArr])

                        if (entity?.localID !== void 0) {
                            let currentGeometryLocalIDs = productGeometryIndex.get(entity?.localID)
                            if (currentGeometryLocalIDs === void 0) {
                                currentGeometryLocalIDs = []
                                productGeometryIndex.set(entity.localID, currentGeometryLocalIDs)
                            }

                            if (!currentGeometryLocalIDs.includes(geometry.localID)) {
                                currentGeometryLocalIDs.push(geometry.localID)
                            }
                        }

                    }
                }
            }

            //only walk scene if we haven't already 
            // if (materialGeometry.size <= 0) {

            // eslint-disable-next-line no-unused-vars
            productGeometryIndex.forEach((geometryLocalIDs, productLocalID) => {

                const placedGeometryArray_ = new Array<PlacedGeometry>()

                // Vector of PlacedGeometry
                const vectorOfPlacedGeometry_: Vector<PlacedGeometry> = {
                    get(index: number): PlacedGeometry {
                        if (index >= placedGeometryArray_.length) {
                            return singlePlacedGeometry
                        }

                        return placedGeometryArray_[index]
                    },
                    size(): number {
                        return placedGeometryArray_.length
                    },
                    push(parameter: PlacedGeometry): void {
                        placedGeometryArray_.push(parameter)
                    }
                }
                const productExpressID = model.getElementByLocalID(productLocalID)?.expressID

                if (geometryLocalIDs !== void 0) {
                    for (let index = 0; index < geometryLocalIDs.length; ++index) {
                        const geometryExpressID = model.getElementByLocalID(geometryLocalIDs[index])?.expressID

                        if (geometryExpressID !== void 0) {
                            const mapResult = geometryMaterialTransformMap.get(geometryExpressID)

                            if (mapResult !== void 0) {
                                const [geometryObject_, material_, transformArr] = mapResult

                                if (material_ !== undefined) {
                                    const color = {
                                        x: material_.baseColor[0],
                                        y: material_.baseColor[1],
                                        z: material_.baseColor[2],
                                        w: material_.baseColor[3],
                                    }

                                    const placedGeometry: PlacedGeometry = {
                                        color: color,
                                        geometryExpressID: geometryExpressID,
                                        flatTransformation: transformArr
                                    }

                                    vectorOfPlacedGeometry_.push(placedGeometry)
                                }
                            }
                        }
                    }

                    const singleFlatMesh: FlatMesh = {
                        geometries: vectorOfPlacedGeometry_,
                        expressID: productExpressID!
                    }

                    placedGeometryVec.set(productLocalID, vectorOfPlacedGeometry_)

                    meshCallback(singleFlatMesh)
                }
            })
        }
    }

    /**
     * 
     * @param modelID 
     * @param types 
     * @param meshCallback 
     */
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
            const [model, scene, vectorGeometryMap] = result

            const conwayTypesArray: number[] = []
            types.forEach((type) => {
                const value = shimIfcEntityMap[type]
                // Do something with value
                conwayTypesArray.push(value)
            })

            //only walk scene if we haven't already 
            // if (materialGeometry.size <= 0) {
            // eslint-disable-next-line no-unused-vars
            for (const [_, nativeTransform, geometry, material] of scene.walk()) {

                //type check 
                const typedElement = model.getElementByLocalID(geometry.localID)

                if (typedElement !== void 0) {
                    if (conwayTypesArray.indexOf(typedElement.type.valueOf()) === -1) {
                        continue
                    }
                }

                if (geometry.type === CanonicalMeshType.BUFFER_GEOMETRY && !geometry.temporary) {
                    //const result = materialGeometry.get(material)

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
                    //materialGeometry.set(material, vectorOfPlacedGeometry)

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
                }
            }
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

        console.log("[LoadAllGeometry]: Shim - implemented")
        return vectorOfFlatMesh
    }

    /**  
     * Load geometry for a single element
     * @modelID Model handle retrieved by OpenModel
    */
    GetFlatMesh(modelID: number, expressID: number): FlatMesh {
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