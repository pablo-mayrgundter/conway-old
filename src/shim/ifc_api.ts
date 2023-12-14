import IfcStepParser from '../ifc/ifc_step_parser'
import ParsingBuffer from '../parsing/parsing_buffer'
import { ParseResult } from '../step/parsing/step_parser'
import { EntityTypesIfcCount } from '../ifc/ifc4_gen/entity_types_ifc.gen'
import IfcStepModel from '../ifc/ifc_step_model'
import { ExtractResult, IfcGeometryExtraction } from '../ifc/ifc_geometry_extraction'
import { BlendMode, ConwayGeometry, GeometryObject }
  from '../../dependencies/conway-geom/conway_geometry'
import { CanonicalMeshType } from '../core/canonical_mesh'
import { CanonicalMaterial } from '../core/canonical_material'
import { shimIfcEntityMap, shimIfcEntityReverseMap } from './shim_schema_mapping'
import { IfcSceneBuilder } from '../ifc/ifc_scene_builder'
import * as glmatrix from 'gl-matrix'
import { Properties } from './properties'
import { FromRawLineData } from './ifc2x4_helper'
import { versionString } from '../version/version'
import Logger from '../logging/logger'
import Environment from '../utilities/environment'
import Memory from '../memory/memory'


export * from './ifc2x4'


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

/**
 * @return {number} current time in ms
 */
export function ms(): number {
  return new Date().getTime()
}

export type LocateFileHandlerFn = (path: string, prefix: string) => string

/**
 * IfcAPI - Web-IFC API Shim Implementation for full read functionality
 */
export class IfcAPI {
  wasmModule: undefined | any = undefined
  fs: undefined | any = undefined
  wasmPath: string = ''
  isWasmPathAbsolute = false
  settings: Loadersettings | undefined
  globalModelIDCounter = 0
  models: Map<number,
    [IfcStepModel,
      IfcSceneBuilder,
      Map<number, [Vector<PlacedGeometry>, FlatMesh]>,
      Map<number, [GeometryObject, CanonicalMaterial, number[]]>,
      Vector<FlatMesh>, glmatrix.mat4]> =
      new Map<number,
      [IfcStepModel,
        IfcSceneBuilder,
        Map<number, [Vector<PlacedGeometry>, FlatMesh]>,
        Map<number, [GeometryObject, CanonicalMaterial, number[]]>,
        Vector<FlatMesh>, glmatrix.mat4]>()
  conwaywasm = new ConwayGeometry()
  _isCoordinated: boolean = false
  linearScalingFactor: number = 1
  identity: number[] = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]

  // Initialize the matrix using an array
  NormalizeMat: glmatrix.mat4 = glmatrix.mat4.fromValues(
      1, 0, 0, 0,  // First column
      0, 0, -1, 0, // Second column
      0, 1, 0, 0,  // Third column
      0, 0, 0, 1,   // Fourth column
  )

  /**
   * Contains all the logic and methods regarding properties, psets, qsets, etc.
   */
  properties = new Properties(this)

  /**
   * Initializes the WASM module (WebIFCWasm), required before using any other functionality.
   *
   * @param customLocateFileHandler An optional locateFile function that let's
   * you override the path from which the wasm module is loaded.
   */
  async Init(customLocateFileHandler?: LocateFileHandlerFn) {
    Environment.checkEnvironment()
    Logger.initializeWasmCallbacks()
    Logger.info(versionString)
    const locateFileHandler: LocateFileHandlerFn = (path, prefix) => {
      // when the wasm module requests the wasm file, we redirect to include the user specified path
      if (path.endsWith('.wasm')) {
        if (this.isWasmPathAbsolute) {
          return this.wasmPath + path
        }

        return prefix + this.wasmPath + path
      }
      // otherwise use the default path
      return prefix + path
    }

    // @ts-ignore
    const initializationStatus = await
    this.conwaywasm.initialize((customLocateFileHandler !== void 0) ?
        customLocateFileHandler : locateFileHandler)

    if (!initializationStatus) {
      Logger.error('Could not initialize Conway Wasm')
      return
    }

    this.wasmModule = this.conwaywasm.wasmModule
  }

  /**
   * Opens a model and returns a modelID number
   *
   * @param data containing IFC data (bytes)
   * @param settings settings for loading the model
   * @return {number} model ID
   */
  OpenModel(data: Uint8Array, settings?: Loadersettings): number {
    const allTimeStart = Date.now()
    const parser = IfcStepParser.Instance
    const bufferInput = new ParsingBuffer(data)
    const [stepHeader, result0] = parser.parseHeader(bufferInput)
    const tempModelID = this.globalModelIDCounter
    Logger.createStatistics(tempModelID)

    const statistics = Logger.getStatistics(tempModelID)


    switch (result0) {
      case ParseResult.COMPLETE:

        break

      case ParseResult.INCOMPLETE:

        Logger.warning('Parse incomplete but no errors')
        statistics?.setLoadStatus('HEADER PARSE: INCOMPLETE')
        break

      case ParseResult.INVALID_STEP:

        Logger.error('Error: Invalid STEP detected in parse, but no syntax error detected')
        statistics?.setLoadStatus('HEADER PARSE: INVALID_STEP')
        break

      case ParseResult.MISSING_TYPE:

        Logger.warning('Error: missing STEP type, but no syntax error detected')
        statistics?.setLoadStatus('HEADER PARSE: MISSING_TYPE')
        break

      case ParseResult.SYNTAX_ERROR:

        Logger.error(`Error: Syntax error detected on line ${bufferInput.lineCount}`)
        statistics?.setLoadStatus('HEADER PARSE: SYNTAX_ERROR')
        break

      default:
    }


    const parseStartTime = Date.now()
    const model = parser.parseDataToModel(bufferInput)[1]
    const parseEndTime = Date.now()

    if (model === void 0) {
      Logger.error('[OpenModel]: model === undefined')
      statistics?.setLoadStatus('PARSE_FAIL')
      return -1
    }

    statistics?.setParseTime(parseEndTime - parseStartTime)

    // TODO(nickcastel50): Doing geometry extraction in here for now...
    // parse + extract data model + geometry data
    const conwayGeometry = new IfcGeometryExtraction(this.conwaywasm, model)

    const startTime = Date.now()
    const [extractionResult, scene] =
      conwayGeometry.extractIFCGeometryData()

    const endTime = Date.now()
    const executionTimeInMs = endTime - startTime

    if (extractionResult !== ExtractResult.COMPLETE) {
      Logger.error('[OpenModel]: Error extracting geometry, exiting...')
      statistics?.setLoadStatus('FAIL')
      return -1
    }

    // get linear scaling factor
    this.linearScalingFactor = conwayGeometry.getLinearScalingFactor()

    const ifcProjectName = conwayGeometry.getIfcProjectName()

    if (ifcProjectName !== null) {
      statistics?.setProjectName(ifcProjectName)
    }

    // build packed mesh model
    // const packedMeshModel = scene.buildPackedMeshModel()

    const vectorGeometryMap = new Map<number, [Vector<PlacedGeometry>, FlatMesh]>()

    const geometryMap = new Map<number, [GeometryObject, CanonicalMaterial, number[]]>()

    // dummy vars
    const dummyColor = {
      x: 0,
      y: 0,
      z: 0,
      w: 0,
    }

    // Single PlacedGeometry variable
    const singlePlacedGeometry: PlacedGeometry = {
      color: dummyColor,
      geometryExpressID: 0, // replace with actual ID
      flatTransformation: this.identity,
    }

    // eslint-disable-next-line no-array-constructor
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
      },
    }

    // eslint-disable-next-line no-array-constructor
    const flatMeshArray = new Array<FlatMesh>()
    const flatMeshDummy: FlatMesh = {
      geometries: vectorOfPlacedGeometry,
      expressID: 0, // replace with actual expressID
    }

    // Vector of FlatMesh
    const vectorFlatMesh: Vector<FlatMesh> = {
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
      },
    }

    const coordinationMatrix: glmatrix.mat4 = glmatrix.mat4.create()


    this.models.set(this.globalModelIDCounter++,
        [model, scene, vectorGeometryMap, geometryMap, vectorFlatMesh, coordinationMatrix])

    // save settings
    this.settings = settings

    let FILE_NAME = stepHeader.headers.get('FILE_NAME')

    if (FILE_NAME !== void 0) {
      // strip start / end parenthesis
      FILE_NAME = FILE_NAME.substring(1, FILE_NAME.length - 1)
    }

    const ifcVersion = stepHeader.headers.get('FILE_SCHEMA')

    const allTimeEnd = Date.now()

    const allTime = allTimeEnd - allTimeStart

    statistics?.setLoadStatus('OK')
    statistics?.setTotalTime(allTime)

    if (ifcVersion !== void 0) {
      statistics?.setVersion(ifcVersion)
    }

    if (FILE_NAME !== void 0) {
      const fileNameSplit: string[] = this.parseFileHeader(FILE_NAME)


      console.log(`FILE_NAME: ${  FILE_NAME}`)
      console.log(`fileNameSplit: ${  fileNameSplit}`)

      console.log(`fileNameSplit[0]: ${fileNameSplit[0]}`)
      console.log(`fileNameSplit[1]: ${fileNameSplit[1]}`)
      console.log(`fileNameSplit[2]: ${fileNameSplit[2]}`)
      console.log(`fileNameSplit[3]: ${fileNameSplit[3]}`)
      console.log(`fileNameSplit[4]: ${fileNameSplit[4]}`)
      console.log(`fileNameSplit[5]: ${fileNameSplit[5]}`)

      // eslint-disable-next-line no-magic-numbers
      if (fileNameSplit.length > 5) {
        const preprocessorVersion = fileNameSplit[5]
        const originatingSystem = fileNameSplit[6]

        statistics?.setPreprocessorVersion(preprocessorVersion)
        statistics?.setOriginatingSystem(originatingSystem)
      }
    }

    statistics?.setMemoryStatistics(Memory.checkMemoryUsage())

    statistics?.setGeometryTime(executionTimeInMs)
    // eslint-disable-next-line no-magic-numbers
    statistics?.setGeometryMemory(scene.model.geometry.calculateGeometrySize() / (1024 * 1024))


    return tempModelID
  }

  /**
   *
   * @param input - FILE_HEADER from step header
   * @return {string[]} array of fields in FILE_NAME
   */
  parseFileHeader(input: string): string[] {
    const result: string[] = []
    let currentSegment = ''
    let parenthesesCount = 0

    for (const char of input) {
      if (char === '(') {
        parenthesesCount++
      } else if (char === ')') {
        parenthesesCount--
      }

      if (char === ',' && parenthesesCount === 0) {
        result.push(currentSegment.trim())
        currentSegment = ''
      } else {
        currentSegment += char
      }
    }

    // Add the last segment if it's not empty
    if (currentSegment.trim() !== '') {
      result.push(currentSegment.trim())
    }

    return result
  }

  /**
   * Creates a new model and returns a modelID number (unimplemented)
   *
   * @param settings settings for generating data the model
   * @return {number} model ID
   */
  CreateModel(settings?: Loadersettings): number {

    Logger.warning('[CreateModel]: Shim - Unimplemented')
    return 0
  }

  /**
   *
   * @param modelID
   * @return {Uint8Array} unimplemented
   */
  ExportFileAsIFC(modelID: number): Uint8Array {
    Logger.warning(`[ExportFileAsIFC]: Model ${modelID}: Shim - Unimplemented`)
    const emptyArray = new Uint8Array(1)
    return emptyArray
  }


  /**
   * Opens a model and returns a modelID number
   *
   * @param modelID handle retrieved by OpenModel, model must not be closed
   * @param geometryExpressID containing IFC data (bytes)
   * @return {IfcGeometry}
   */
  GetGeometry(modelID: number, geometryExpressID: number): IfcGeometry {
    const result = this.models.get(modelID)

    if (result !== void 0) {
      // eslint-disable-next-line no-unused-vars
      const [model, scene, placedGeometryVec, geometryMap] = result

      const mapResult = geometryMap.get(geometryExpressID)

      if (mapResult !== undefined) {

        // eslint-disable-next-line no-unused-vars
        const [geometryObject, _] = mapResult
        if (geometryObject !== void 0) {
          const clone = geometryObject.clone()

          return clone
        } else {
          Logger.error(`[GetGeometry]: Geometry Object not found for expressID: 
          ${geometryExpressID}`)
        }
      }
    } else {
      Logger.error('[GetGeometry]: model === undefined')
    }

    Logger.error('[GetGeometry]: Error - returning dummyGeometry object')
    const dummyGeometry: IfcGeometry = (new (this.wasmModule.IfcGeometry)())
    return dummyGeometry
  }

  /**
   *
   * @param modelID
   * @param expressID
   * @param flatten
   * @return {any} line data
   */
  GetLine(modelID: number, expressID: number, flatten: boolean = false) {

    // eslint-disable-next-line new-cap
    const rawLineData = this.GetRawLineData(modelID, expressID)

    if (rawLineData.type === -1) {
      Logger.warning(`RawLineData null, expressID: ${expressID}`)
      return
    }

    const lineData = FromRawLineData[rawLineData.type](rawLineData)
    if (flatten) {
      // eslint-disable-next-line new-cap
      this.FlattenLine(modelID, lineData)
    }

    return lineData
  }

  /**
   *
   * @param modelID
   * @return {Vector<LoaderError>}
   */
  GetAndClearErrors(modelID: number): Vector<LoaderError> {
    Logger.warning('[GetAndClearErrors]: Shim - Unimplemented')
    const wasmErrorsDummy: Vector<LoaderError> = {
      get(index: number): LoaderError {
        // Implementation here
        return { type: '', message: '', expressID: 0, ifcType: 0 }
      },
      size(): number {
        // Implementation here
        return 0
      },
      push(): void {
        // eslint-disable-next-line no-useless-return
        return
      },
    }

    return wasmErrorsDummy
  }

  /**
   *
   * @param modelID
   * @param lineObject
   */
  WriteLine(modelID: number, lineObject: any) {
    Logger.warning('[WriteLine]: Shim - Unimplemented')
  }

  /**
   *
   * @param modelID
   * @param line
   */
  FlattenLine(modelID: number, line: any) {
    Logger.warning('[FlattenLine]: Shim - implemented')
    Object.keys(line).forEach((propertyName) => {
      const property = line[propertyName]
      // eslint-disable-next-line no-magic-numbers
      if (property && property.type === 5) {
        // eslint-disable-next-line new-cap
        line[propertyName] = this.GetLine(modelID, property.value, true)
        // eslint-disable-next-line no-magic-numbers
      } else if (Array.isArray(property) && property.length > 0 && property[0].type === 5) {
        for (let i = 0; i < property.length; i++) {
          // eslint-disable-next-line new-cap
          line[propertyName][i] = this.GetLine(modelID, property[i].value, true)
        }
      }
    })
  }

  /**
   *
   * @param modelID
   * @param expressID
   * @return {RawLineData}
   */
  GetRawLineData(modelID: number, expressID: number): RawLineData {
    const result = this.models.get(modelID)

    if (result !== undefined) {
      // eslint-disable-next-line no-unused-vars
      const [model, scene] = result

      const element = model.getElementByExpressID(expressID)

      const args: any[] = []

      if (element !== void 0) {
        const lineArguments = element.extractLineArguments()

        const parsingBuffer = new ParsingBuffer(lineArguments)
        if (element.expressID !== void 0) {
          const result_ = IfcStepParser.Instance.extractArguments(parsingBuffer, element.expressID)
          if (result_[1] === ParseResult.COMPLETE) {
            const rawLineData: RawLineData = {
              ID: expressID,
              type: shimIfcEntityReverseMap[element.type],
              arguments: result_[0],
            }

            return rawLineData
          }
        } else {
          Logger.warning('element express ID null')
        }

        const rawLineData: RawLineData = {
          ID: expressID,
          type: shimIfcEntityReverseMap[element.type],
          arguments: args,
        }

        return rawLineData
      } else {
        Logger.warning(`element === undefined, expressID: ${expressID}`)
      }
    }

    const dummyRawLineData: RawLineData = {
      ID: expressID,
      type: -1,
      arguments: ['invalid'],
    }

    return dummyRawLineData
  }

  /**
   *
   * @param modelID
   * @param data
   */
  WriteRawLineData(modelID: number, data: RawLineData) {
    Logger.warning('[WriteRawLineData]: Shim - Unimplemented')
  }

  /**
   *
   * @param modelID
   * @param type
   * @return {Vector<number>}
   */
  GetLineIDsWithType(modelID: number, type: number): Vector<number> {
    const vectorArray: Array<number> = []
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
      },
    }

    const result = this.models.get(modelID)
    if (result !== undefined) {
      // eslint-disable-next-line no-unused-vars
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
            Logger.warning('[GetLineIDsWithType] No express ID found?')
          }
        }

      } else {
        // Handle case where key does not exist
        Logger.warning(`[GetLineIDsWithType] Type: ${type} does not exist in shimIfcEntityMap`)
      }
    } else {
      Logger.error('[GetLineIDsWithType]: model is undefined...')
    }

    return expressIDVector
  }

  /**
   *
   * @param modelID
   * @return {Vector<number>}
   */
  GetAllLines(modelID: Number): Vector<number> {
    const vectorArray: Array<number> = []
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
      },
    }

    const result = this.models.get(modelID as number)

    if (result !== undefined) {
      // eslint-disable-next-line no-unused-vars
      const [model, scene] = result
      // TODO(nickcastel50): This is absolutely horrid but I don't know a better way yet.
      // This implementation also kills our lazy loading...
      for (let typeIndex = 0; typeIndex < EntityTypesIfcCount; ++typeIndex) {
        const results = model.typeIDs(typeIndex)
        const arr = Array.from(results)

        for (let arrIndex = 0; arrIndex < arr.length; ++arrIndex) {

          if (arr[arrIndex].expressID !== void 0) {
            expressIDVector.push(arr[arrIndex].expressID!)
          } else {
            Logger.warning('[GetLineIDsWithType] No express ID found?')
          }
        }
      }
    } else {
      Logger.error('[GetLineIDsWithType]: model is undefined...')
    }

    return expressIDVector
  }

  /**
   *
   * @param modelID
   * @param transformationMatrix
   */
  setGeometryTransformation(modelID: number, transformationMatrix: Array<number>) {
    /* if (transformationMatrix.length != 16) {
            Logger.error(`Bad transformation matrix size: ${transformationMatrix.length}`)
            return
        }
        this.wasmModule.setGeometryTransformation(modelID, transformationMatrix)*/

    Logger.warning('[setGeometryTransformation]: Shim - Unimplemented')
  }

  /**
   *
   * @param modelID
   * @return {Array<number>}
   */
  GetCoordinationMatrix(modelID: number): Array<number> {
    // TODO: Add coordination matrix to models map
    const result = this.models.get(modelID)

    if (result !== void 0) {
      /* eslint-disable no-unused-vars */
      const [model,
        scene,
        meshMap,
        geometryMaterialTransformMap,
        vectorFlatMesh, coordinationMatrix] = result
      /* eslint-enable no-unused-vars */

      return Array.from(coordinationMatrix)
    }


    const coordinationMatrix: glmatrix.mat4 = glmatrix.mat4.create()

    return Array.from(coordinationMatrix)
  }

  /**
   *
   * @param ptr
   * @param size
   * @return {Float32Array}
   */
  GetVertexArray(ptr: number, size: number): Float32Array {
    return this.getSubArray(this.wasmModule.HEAPF32, ptr, size) as Float32Array
  }

  /**
   *
   * @param ptr
   * @param size
   * @return {Uint32Array}
   */
  GetIndexArray(ptr: number, size: number): Uint32Array {
    return this.getSubArray(this.wasmModule.HEAPU32, ptr, size) as Uint32Array
  }

  /**
   *
   * @param heap
   * @param startPtr
   * @param sizeBytes
   * @return {Float32Array | Uint32Array}
   */
  getSubArray(heap: Float32Array | Uint32Array, startPtr: number, sizeBytes: number):
    Float32Array | Uint32Array {
    // eslint-disable-next-line no-magic-numbers, no-mixed-operators
    return heap.subarray(startPtr / 4, startPtr / 4 + sizeBytes).slice(0)
  }

  /**
   * Closes a model and frees all related memory
   *
   * @param modelID Model handle retrieved by OpenModel, model must not be closed
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
    const result = this.models.get(modelID)

    if (result !== void 0) {
      const [model,
        scene,
        meshMap,
        geometryMaterialTransformMap,
        vectorFlatMesh] = result

      let coordinationMatrix = result[5]

      // eslint-disable-next-line no-unused-vars
      for (const [_, nativeTransform, geometry, material, entity] of scene.walk()) {

        if (geometry.type === CanonicalMeshType.BUFFER_GEOMETRY && !geometry.temporary) {
          let material_: CanonicalMaterial | undefined
          if (material === void 0) {
            material_ = {
              name: '',
              // eslint-disable-next-line no-magic-numbers
              baseColor: [0.8, 0.8, 0.8, 1],
              // eslint-disable-next-line no-magic-numbers
              legacyColor: [0.8, 0.8, 0.8, 1],
              doubleSided: true,
              blend: BlendMode.OPAQUE,
            }
          } else {
            material_ = material
          }
          // extract min
          const geomMin: glmatrix.vec3 = glmatrix.vec3.create()

          const minPt = geometry.geometry.getMin()
          geomMin[0] = minPt.x
          geomMin[1] = minPt.y
          geomMin[2] = minPt.z

          // Create a translation matrix from geom.min
          const translationMatrixGeomMin: glmatrix.mat4 = glmatrix.mat4.create()
          glmatrix.mat4.fromTranslation(translationMatrixGeomMin, geomMin)

          // create PlacedGeometry
          const expressID = model.getElementByLocalID(geometry.localID)?.expressID as number

          const geometryTransform = nativeTransform?.getValues()
          let newMatrix: glmatrix.mat4 | undefined
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
          } else {
            // set to identity if no transform found
            newMatrix = glmatrix.mat4.create()
          }

          if (!this._isCoordinated && this.settings?.COORDINATE_TO_ORIGIN) {
            // coordinate the geometry to the origin
            // eslint-disable-next-line new-cap
            const nativePt = geometry.geometry.GetPoint(0)
            const pt: number[] = [nativePt.x, nativePt.y, nativePt.z]

            // Transform the point by the matrix.
            const transformedPt: glmatrix.vec4 = glmatrix.vec4.create()
            glmatrix.vec4.transformMat4(transformedPt, [pt[0], pt[1], pt[2], 1], newMatrix!)

            // Create the translation matrix.
            coordinationMatrix = glmatrix.mat4.create()

            glmatrix.mat4.fromTranslation(coordinationMatrix,
                [-transformedPt[0], -transformedPt[1], -transformedPt[2]])

            const scaleMatrix = glmatrix.mat4.create()

            // Create a 3D vector for scaling factors
            const scaleVec = glmatrix.vec3.fromValues(this.linearScalingFactor,
                this.linearScalingFactor,
                this.linearScalingFactor)

            // Scale the matrix
            glmatrix.mat4.scale(scaleMatrix, scaleMatrix, scaleVec)

            glmatrix.mat4.multiply(coordinationMatrix,
                this.NormalizeMat,
                coordinationMatrix)
            glmatrix.mat4.multiply(coordinationMatrix,
                scaleMatrix,
                coordinationMatrix)

            this._isCoordinated = true
          }

          // normalize geometry
          if (!geometry.geometry.normalized) {
            // eslint-disable-next-line new-cap
            geometry.geometry.NormalizeInPlace()
          }


          // extract color
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
            glmatrix.mat4.multiply(newTransform, coordinationMatrix, newMatrix)
            glmatrix.mat4.multiply(newTransform, newTransform, translationMatrixGeomMin)
          } else {
            glmatrix.mat4.multiply(newTransform, coordinationMatrix, newTransform)
            glmatrix.mat4.multiply(newTransform, newTransform, translationMatrixGeomMin)
          }
          const newTransformArr = Array.from(newTransform)
          geometryMaterialTransformMap.set(expressID,
              [geometry.geometry, material_, newTransformArr])

          if (entity?.localID !== void 0) {
            if (entity?.expressID !== void 0) {
              const mesh = meshMap.get(entity.localID)
              if (mesh !== void 0) {
                // set color
                const color = {
                  x: material_!.legacyColor[0],
                  y: material_!.legacyColor[1],
                  z: material_!.legacyColor[2],
                  w: material_!.legacyColor[3],
                }

                // Single PlacedGeometry variable
                const singlePlacedGeometry: PlacedGeometry = {
                  color: color,
                  geometryExpressID: expressID,
                  flatTransformation: newTransformArr,
                }

                mesh[0].push(singlePlacedGeometry)
                mesh[1].geometries = mesh[0]

                meshMap.set(entity.localID, [mesh[0], mesh[1]])


              } else {
                // set color
                const color = {
                  x: material_!.legacyColor[0],
                  y: material_!.legacyColor[1],
                  z: material_!.legacyColor[2],
                  w: material_!.legacyColor[3],
                }

                // Single PlacedGeometry variable
                const singlePlacedGeometry_: PlacedGeometry = {
                  color: color,
                  geometryExpressID: expressID,
                  flatTransformation: newTransformArr,
                }

                // eslint-disable-next-line no-array-constructor
                const placedGeometryArray_ = new Array<PlacedGeometry>()

                // Vector of PlacedGeometry
                const vectorOfPlacedGeometry_: Vector<PlacedGeometry> = {
                  get(index: number): PlacedGeometry {
                    if (index >= placedGeometryArray_.length) {
                      return singlePlacedGeometry_
                    }

                    return placedGeometryArray_[index]
                  },
                  size(): number {
                    return placedGeometryArray_.length
                  },
                  push(parameter: PlacedGeometry): void {
                    placedGeometryArray_.push(parameter)
                  },
                }

                vectorOfPlacedGeometry_.push(singlePlacedGeometry_)

                const singleFlatMesh: FlatMesh = {
                  geometries: vectorOfPlacedGeometry_,
                  expressID: entity.expressID,
                }

                meshMap.set(entity.localID, [vectorOfPlacedGeometry_, singleFlatMesh])
              }
            }
          }
        }
      }


      meshMap.forEach((mesh, productLocalID) => {

        vectorFlatMesh.push(mesh[1])

        meshCallback(mesh[1])
      })
    }

    Logger.displayLogs()
    Logger.clearLogs()
    Logger.printStatistics(modelID)
  }

  /**
   *
   * @param modelID
   * @param types
   * @param meshCallback
   */
  StreamAllMeshesWithTypes(modelID: number,
      types: Array<number>,
      meshCallback: (mesh: FlatMesh) => void) {
    const result = this.models.get(modelID)

    if (result !== void 0) {
      const [model,
        scene,
        meshMap,
        geometryMaterialTransformMap,
        vectorFlatMesh] = result

      let coordinationMatrix = result[5]

      const conwayTypesArray: number[] = []
      types.forEach((type) => {
        const value = shimIfcEntityMap[type]
        // Do something with value
        conwayTypesArray.push(value)
      })

      // eslint-disable-next-line no-unused-vars
      for (const [_, nativeTransform, geometry, material, entity] of scene.walk()) {

        if (geometry.type === CanonicalMeshType.BUFFER_GEOMETRY && !geometry.temporary) {

          let material_: CanonicalMaterial | undefined
          if (material === void 0) {
            material_ = {
              name: '',
              // eslint-disable-next-line no-magic-numbers
              baseColor: [0.8, 0.8, 0.8, 1],
              // eslint-disable-next-line no-magic-numbers
              legacyColor: [0.8, 0.8, 0.8, 1],
              doubleSided: true,
              blend: BlendMode.OPAQUE,
            }
          } else {
            material_ = material
          }

          // type check
          const typedElement = model.getElementByLocalID(geometry.localID)

          if (typedElement !== void 0) {
            if (conwayTypesArray.indexOf(typedElement.type.valueOf()) === -1) {
              continue
            }
          }

          // extract min
          const geomMin: glmatrix.vec3 = glmatrix.vec3.create()
          const minPt = geometry.geometry.getMin()
          geomMin[0] = minPt.x
          geomMin[1] = minPt.y
          geomMin[2] = minPt.z

          // Create a translation matrix from geom.min
          const translationMatrixGeomMin: glmatrix.mat4 = glmatrix.mat4.create()
          glmatrix.mat4.fromTranslation(translationMatrixGeomMin, geomMin)

          // create PlacedGeometry
          const expressID = model.getElementByLocalID(geometry.localID)?.expressID as number

          const geometryTransform = nativeTransform?.getValues()
          let newMatrix: glmatrix.mat4 | undefined
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
            // coordinate the geometry to the origin
            // Assuming geom.GetPoint(0) returns a glm::dvec3, i.e., a 3D vector.
            // In TypeScript, you can represent it as number[] or Float64Array.
            Logger.info('Setting up coordinationMatrix')

            // eslint-disable-next-line new-cap
            const nativePt = geometry.geometry.GetPoint(0)
            const pt: number[] = [nativePt.x, nativePt.y, nativePt.z]

            // Transform the point by the matrix.
            const transformedPt: glmatrix.vec4 = glmatrix.vec4.create()
            glmatrix.vec4.transformMat4(transformedPt, [pt[0], pt[1], pt[2], 1], newMatrix!)

            // Create the translation matrix.
            coordinationMatrix = glmatrix.mat4.create()

            glmatrix.mat4.fromTranslation(coordinationMatrix,
                [-transformedPt[0], -transformedPt[1], -transformedPt[2]])

            const scaleMatrix = glmatrix.mat4.create()

            // Create a 3D vector for scaling factors
            const scaleVec = glmatrix.vec3.fromValues(this.linearScalingFactor,
                this.linearScalingFactor,
                this.linearScalingFactor)

            // Scale the matrix
            glmatrix.mat4.scale(scaleMatrix, scaleMatrix, scaleVec)

            glmatrix.mat4.multiply(coordinationMatrix,
                this.NormalizeMat,
                coordinationMatrix)
            glmatrix.mat4.multiply(coordinationMatrix,
                scaleMatrix,
                coordinationMatrix)

            this._isCoordinated = true
          }

          // normalize geometry
          if (!geometry.geometry.normalized) {
            // eslint-disable-next-line new-cap
            geometry.geometry.NormalizeInPlace()
          }


          // extract color
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
            glmatrix.mat4.multiply(newTransform, coordinationMatrix, newMatrix)
            glmatrix.mat4.multiply(newTransform, newTransform, translationMatrixGeomMin)
          } else {
            glmatrix.mat4.multiply(newTransform, coordinationMatrix, newTransform)
            glmatrix.mat4.multiply(newTransform, newTransform, translationMatrixGeomMin)
          }
          const newTransformArr = Array.from(newTransform)
          geometryMaterialTransformMap.set(expressID,
              [geometry.geometry, material_, newTransformArr])

          if (entity?.localID !== void 0) {
            if (entity?.expressID !== void 0) {
              const mesh = meshMap.get(entity.localID)
              if (mesh !== void 0) {
                // set color
                const color = {
                  x: material_.legacyColor[0],
                  y: material_.legacyColor[1],
                  z: material_.legacyColor[2],
                  w: material_.legacyColor[3],
                }

                // Single PlacedGeometry variable
                const singlePlacedGeometry: PlacedGeometry = {
                  color: color,
                  geometryExpressID: expressID,
                  flatTransformation: newTransformArr,
                }

                mesh[0].push(singlePlacedGeometry)
                mesh[1].geometries = mesh[0]

                meshMap.set(entity.localID, [mesh[0], mesh[1]])


              } else {
                // set color
                const color = {
                  x: material_.legacyColor[0],
                  y: material_.legacyColor[1],
                  z: material_.legacyColor[2],
                  w: material_.legacyColor[3],
                }

                // Single PlacedGeometry variable
                const singlePlacedGeometry_: PlacedGeometry = {
                  color: color,
                  geometryExpressID: expressID,
                  flatTransformation: newTransformArr,
                }

                // eslint-disable-next-line no-array-constructor
                const placedGeometryArray_ = new Array<PlacedGeometry>()

                // Vector of PlacedGeometry
                const vectorOfPlacedGeometry_: Vector<PlacedGeometry> = {
                  get(index: number): PlacedGeometry {
                    if (index >= placedGeometryArray_.length) {
                      return singlePlacedGeometry_
                    }

                    return placedGeometryArray_[index]
                  },
                  size(): number {
                    return placedGeometryArray_.length
                  },
                  push(parameter: PlacedGeometry): void {
                    placedGeometryArray_.push(parameter)
                  },
                }

                vectorOfPlacedGeometry_.push(singlePlacedGeometry_)

                const singleFlatMesh: FlatMesh = {
                  geometries: vectorOfPlacedGeometry_,
                  expressID: entity.expressID,
                }

                meshMap.set(entity.localID, [vectorOfPlacedGeometry_, singleFlatMesh])
              }
            }
          }
        }
      }


      meshMap.forEach((mesh, productLocalID) => {

        vectorFlatMesh.push(mesh[1])

        meshCallback(mesh[1])
      })
    }
  }

  /**
   * Checks if a specific model ID is open or closed
   *
   * @param modelID handle retrieved by OpenModel
   * @return {boolean}
   */
  IsModelOpen(modelID: number): boolean {
    if (this.models.has(modelID)) {
      return true
    }

    return false
  }

  /**
   * Load all geometry in a model
   *
   * @param modelID handle retrieved by OpenModel
   * @return {Vector<FlatMesh>}
   */
  LoadAllGeometry(modelID: number): Vector<FlatMesh> {
    const result = this.models.get(modelID)

    if (result !== void 0) {
      const [model,
        scene,
        meshMap,
        geometryMaterialTransformMap,
        vectorFlatMesh] = result

      let coordinationMatrix = result[5]

      // eslint-disable-next-line no-unused-vars
      for (const [_, nativeTransform, geometry, material, entity] of scene.walk()) {

        if (geometry.type === CanonicalMeshType.BUFFER_GEOMETRY && !geometry.temporary) {
          let material_: CanonicalMaterial | undefined
          if (material === void 0) {
            material_ = {
              name: '',
              // eslint-disable-next-line no-magic-numbers
              baseColor: [0.8, 0.8, 0.8, 1],
              // eslint-disable-next-line no-magic-numbers
              legacyColor: [0.8, 0.8, 0.8, 1],
              doubleSided: true,
              blend: BlendMode.OPAQUE,
            }
          } else {
            material_ = material
          }

          // extract min
          const geomMin: glmatrix.vec3 = glmatrix.vec3.create()
          const minPt = geometry.geometry.getMin()
          geomMin[0] = minPt.x
          geomMin[1] = minPt.y
          geomMin[2] = minPt.z

          // Create a translation matrix from geom.min
          const translationMatrixGeomMin: glmatrix.mat4 = glmatrix.mat4.create()
          glmatrix.mat4.fromTranslation(translationMatrixGeomMin, geomMin)

          // create PlacedGeometry
          const expressID = model.getElementByLocalID(geometry.localID)?.expressID as number

          const geometryTransform = nativeTransform?.getValues()
          let newMatrix: glmatrix.mat4 | undefined
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
            // coordinate the geometry to the origin
            // Assuming geom.GetPoint(0) returns a glm::dvec3, i.e., a 3D vector.
            // In TypeScript, you can represent it as number[] or Float64Array.
            Logger.info('Setting up coordinationMatrix')

            // eslint-disable-next-line new-cap
            const nativePt = geometry.geometry.GetPoint(0)
            const pt: number[] = [nativePt.x, nativePt.y, nativePt.z]

            // Transform the point by the matrix.
            const transformedPt: glmatrix.vec4 = glmatrix.vec4.create()
            glmatrix.vec4.transformMat4(transformedPt, [pt[0], pt[1], pt[2], 1], newMatrix!)

            // Create the translation matrix.
            coordinationMatrix = glmatrix.mat4.create()

            glmatrix.mat4.fromTranslation(coordinationMatrix,
                [-transformedPt[0], -transformedPt[1], -transformedPt[2]])

            const scaleMatrix = glmatrix.mat4.create()

            // Create a 3D vector for scaling factors
            const scaleVec = glmatrix.vec3.fromValues(this.linearScalingFactor,
                this.linearScalingFactor,
                this.linearScalingFactor)

            // Scale the matrix
            glmatrix.mat4.scale(scaleMatrix, scaleMatrix, scaleVec)

            glmatrix.mat4.multiply(coordinationMatrix,
                this.NormalizeMat,
                coordinationMatrix)
            glmatrix.mat4.multiply(coordinationMatrix,
                scaleMatrix,
                coordinationMatrix)

            this._isCoordinated = true
          }

          // normalize geometry
          if (!geometry.geometry.normalized) {
            // eslint-disable-next-line new-cap
            geometry.geometry.NormalizeInPlace()
          }


          // extract color
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
            glmatrix.mat4.multiply(newTransform, coordinationMatrix, newMatrix)
            glmatrix.mat4.multiply(newTransform, newTransform, translationMatrixGeomMin)
          } else {
            glmatrix.mat4.multiply(newTransform, coordinationMatrix, newTransform)
            glmatrix.mat4.multiply(newTransform, newTransform, translationMatrixGeomMin)
          }
          const newTransformArr = Array.from(newTransform)
          geometryMaterialTransformMap.set(expressID,
              [geometry.geometry, material_, newTransformArr])

          if (entity?.localID !== void 0) {
            if (entity?.expressID !== void 0) {
              const mesh = meshMap.get(entity.localID)
              if (mesh !== void 0) {
                // set color
                const color = {
                  x: material_.legacyColor[0],
                  y: material_.legacyColor[1],
                  z: material_.legacyColor[2],
                  w: material_.legacyColor[3],
                }

                // Single PlacedGeometry variable
                const singlePlacedGeometry: PlacedGeometry = {
                  color: color,
                  geometryExpressID: expressID,
                  flatTransformation: newTransformArr,
                }

                mesh[0].push(singlePlacedGeometry)
                mesh[1].geometries = mesh[0]

                meshMap.set(entity.localID, [mesh[0], mesh[1]])


              } else {
                // set color
                const color = {
                  x: material_.legacyColor[0],
                  y: material_.legacyColor[1],
                  z: material_.legacyColor[2],
                  w: material_.legacyColor[3],
                }

                // Single PlacedGeometry variable
                const singlePlacedGeometry_: PlacedGeometry = {
                  color: color,
                  geometryExpressID: expressID,
                  flatTransformation: newTransformArr,
                }

                // eslint-disable-next-line no-array-constructor
                const placedGeometryArray_ = new Array<PlacedGeometry>()

                // Vector of PlacedGeometry
                const vectorOfPlacedGeometry_: Vector<PlacedGeometry> = {
                  get(index: number): PlacedGeometry {
                    if (index >= placedGeometryArray_.length) {
                      return singlePlacedGeometry_
                    }

                    return placedGeometryArray_[index]
                  },
                  size(): number {
                    return placedGeometryArray_.length
                  },
                  push(parameter: PlacedGeometry): void {
                    placedGeometryArray_.push(parameter)
                  },
                }

                vectorOfPlacedGeometry_.push(singlePlacedGeometry_)

                const singleFlatMesh: FlatMesh = {
                  geometries: vectorOfPlacedGeometry_,
                  expressID: entity.expressID,
                }

                meshMap.set(entity.localID, [vectorOfPlacedGeometry_, singleFlatMesh])
              }
            }
          }
        }
      }


      meshMap.forEach((mesh, productLocalID) => {

        vectorFlatMesh.push(mesh[1])
      })

      return vectorFlatMesh
    }

    // dummy vars
    const dummyColor = {
      x: 0,
      y: 0,
      z: 0,
      w: 0,
    }

    // Single PlacedGeometry variable
    const singlePlacedGeometry: PlacedGeometry = {
      color: dummyColor,
      geometryExpressID: 0, // replace with actual ID
      flatTransformation: this.identity,
    }

    // eslint-disable-next-line no-array-constructor
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
      },
    }

    // eslint-disable-next-line no-array-constructor
    const flatMeshArray = new Array<FlatMesh>()
    const flatMeshDummy: FlatMesh = {
      geometries: vectorOfPlacedGeometry,
      expressID: 0, // replace with actual expressID
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
      },
    }
    return vectorOfFlatMesh
  }

  /**
   * Load geometry for a single element
   *
   * @param modelID handle retrieved by OpenModel
   * @param expressID express ID of flat mesh
   * @return {FlatMesh}
   */
  GetFlatMesh(modelID: number, expressID: number): FlatMesh {
    const result = this.models.get(modelID)

    if (result !== void 0) {
      // eslint-disable-next-line no-unused-vars
      const [model, scene, meshMap] = result
      if (meshMap.size <= 0) {
        // eslint-disable-next-line new-cap
        this.LoadAllGeometry(modelID)
      }

      const mesh = meshMap.get(expressID)

      if (mesh !== void 0) {
        return mesh[1]
      }
    }

    // Single PlacedGeometry variable
    const dummyColor = {
      x: 0,
      y: 0,
      z: 0,
      w: 0,
    }
    const singlePlacedGeometry: PlacedGeometry = {
      color: dummyColor,
      geometryExpressID: 0, // replace with actual ID
      flatTransformation: [/* your array of numbers here */],
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
        // eslint-disable-next-line no-useless-return
        return
      },
    }

    const flatMeshDummy: FlatMesh = {
      geometries: vectorOfPlacedGeometry,
      expressID: 0, // replace with actual expressID
    }

    return flatMeshDummy
  }

  /**
   * Creates a map between element ExpressIDs and GlobalIDs.
   * Each element has two entries, (ExpressID -> GlobalID) and (GlobalID -> ExpressID).
   *
   * @param modelID handle retrieved by OpenModel
   */
  CreateIfcGuidToExpressIdMapping(modelID: number): void {
    /* const map = new Map<string | number, string | number>()

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

    Logger.warning(`[CreateIfcGuidToExpressIdMapping]: Model ${modelID}: Shim - Unimplemented`)
  }

  /**
   *
   * @param path new wasm path
   * @param absolute is the path absolute?
   */
  SetWasmPath(path: string, absolute = false) {
    this.wasmPath = path
    this.isWasmPathAbsolute = absolute
  }
}
