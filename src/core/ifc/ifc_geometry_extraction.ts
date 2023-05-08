import { IndexedPolygonalFace } from '../../../dependencies/conway-geom/conway_geometry'
import { ConwayGeometry, ParamsPolygonalFaceSet, GeometryObject, ResultsGltf }
  from '../../../dependencies/conway-geom/conway_geometry'
import { IfcBooleanResult, IfcBoundingBox, IfcExtrudedAreaSolid, IfcGridPlacement, IfcIndexedPolygonalFaceWithVoids, IfcLocalPlacement, IfcPolygonalFaceSet, IfcProduct, IfcProductDefinitionShape, IfcTessellatedFaceSet } from '../../gen/ifc'
import EntityTypesIfc from '../../gen/ifc/entity_types_ifc.gen'
import IfcStepModel from './ifc_step_model'


type NativeVectorGlmVec3 = any
type NativeUintVector = any
type NativeULongVector = any
type NativeVectorIndexedPolygonalFace = any
type WasmModule = any

/**
 *
 */
/* eslint-disable no-shadow, no-unused-vars, no-magic-numbers */
// -- eslint doesn't understand enums properly.
export enum ExtractResult {

  COMPLETE = 0,
  INCOMPLETE = 1,
  SYNTAX_ERROR = 2,
  MISSING_TYPE = 3,
  INVALID_STEP = 4
}
/* eslint-enable no-shadow, no-unused-vars, no-magic-numbers */


/**
 * Handles Geometry data extraction from a populated IfcStepModel
 * Can export to OBJ, GLTF (Draco), GLB (Draco)
 */
export class IfcGeometryExtraction {

  // Define the map
  private static conwayGeomMap = new Map<number, ConwayGeometry>()

  private static geometryMap: Map<number, GeometryObject[]> = new Map<number, GeometryObject[]>

  private static wasmModule: WasmModule

  /**
   * NOTE* Must be called before any other functions in this class
   */
  static async create(): Promise<number> {

    // Check if the map is empty
    if (this.conwayGeomMap.size === 0) {
      const temp: ConwayGeometry = new ConwayGeometry()
      const modelId = await temp.initialize()
      this.conwayGeomMap.set(modelId, temp)
      this.geometryMap.set(modelId, [])
      // set wasm module
      this.wasmModule = temp.wasmModule
      return modelId
    } else {
      // initialize new ConwayGeometry module passing in the wasm module
      const temp: ConwayGeometry = new ConwayGeometry(this.wasmModule)
      const modelId = await temp.initialize()
      this.conwayGeomMap.set(modelId, temp)
      this.geometryMap.set(modelId, [])
      return modelId
    }
  }

  /**
   *
   * @return {GeometryObject[]} - Array containing all geometry data that was extracted
   */
  static getGeometry(modelId: number = 0): GeometryObject[] {
    return this.geometryMap.get(modelId)!
  }

  /**
   *
   * @return {WasmModule} - A handle to the loaded wasm module
   */
  static getWasmModule(): WasmModule {
    return this.wasmModule
  }

  /**
   *
   * @param initialSize number - initial size of the vector (optional)
   * @return {NativeVectorGlmVec3} - a native std::vector<glm::vec3> from the wasm module
   */
  static nativeVectorGlmVec3(initialSize?: number): NativeVectorGlmVec3 {
    const nativeVectorGlmVec3_ = new (this.wasmModule.glmVec3Array as NativeVectorGlmVec3)()

    if (initialSize) {
      // resize has a required second parameter to set default values
      nativeVectorGlmVec3_.resize(initialSize, { x: 0, y: 0, z: 0 })
    }

    return nativeVectorGlmVec3_
  }

  /**
   *
   * @param initialSize number - initial size of the vector (optional)
   * @return {NativeUintVector} - a native std::vector<uint32_t> from the wasm module
   */
  static nativeUintVector(initialize?: number): NativeUintVector {
    const nativeUintVector_ = new (this.wasmModule.UintVector as NativeUintVector)()

    if (initialize) {
      // resize has a required second parameter to set default values
      nativeUintVector_.resize(initialize, 0)
    }

    return nativeUintVector_
  }

  /**
   *
   * @param initialSize number - initial size of the vector (optional)
   * @return {NativeULongVector} - a native std::vector<size_t> from the wasm module
   */
  static nativeULongVector(initialize?: number): NativeULongVector {
    const nativeULongVector_ = new (this.wasmModule.ULongVector as NativeULongVector)()

    if (initialize) {
      // resize has a required second parameter to set default values
      nativeULongVector_.resize(initialize, 0)
    }

    return nativeULongVector_
  }

  /**
   *
   * @param initialSize number - initial size of the vector (optional)
   * @return {NativeVectorIndexedPolygonalFace} - a native std::vector<IndexedPolygonalFace> from the wasm module
   */
  static nativeIndexedPolygonalFaceVector(initialize?: number): NativeVectorIndexedPolygonalFace {
    const nativeVectorIndexedPolygonalFace = new (this.wasmModule.VectorIndexedPolygonalFace as NativeVectorIndexedPolygonalFace)()

    if (initialize) {
      // resize has a required second parameter to set default values
      nativeVectorIndexedPolygonalFace.resize(initialize)
    }

    return nativeVectorIndexedPolygonalFace
  }


  /**
   * @param modelId - model ID
   * @return {boolean} indicating if the wasm module has been initialized
   */
  static isInitialized(modelId: number = 0): Boolean {
    if (this.conwayGeomMap.get(modelId)) {
      return this.conwayGeomMap.get(modelId)!.initialized
    }

    return false
  }

  /**
   *
   * @param geometry GeometryObject to add to the geometry array
   */
  static addGeometry(geometry: GeometryObject, modelId: number = 0) {

    if (this.geometryMap.get(modelId)) {
      this.geometryMap.get(modelId)!.push(geometry)
    }
  }

  /**
   * @param modelId - model ID
   * @param geometry - GeometryObject to convert to OBJ
   * @return {string} - Obj string or blank string
   */
  static toObj(geometry: GeometryObject, modelId: number = 0): string {
    if (this.conwayGeomMap.get(modelId)) {
      return this.conwayGeomMap.get(modelId)!.toObj(geometry)
    }

    return ''
  }

  /**
   *
   * @param geometry - GeometryObject to convert to GLTF / GLB
   * @param isGlb boolean - Should the output be a single GLB file?
   * @param outputDraco boolean - Should the output be Draco compressed?
   * @param fileUri string - base filenames for GLTF / GLB files
   * @return {ResultsGltf} - Structure containing GLTF / GLB filenames + data vectors
   */
  static toGltf(geometry: GeometryObject, isGlb: boolean,
    outputDraco: boolean, fileUri: string, modelId: number = 0): ResultsGltf {
    const noResults: ResultsGltf = { success: false, bufferUris: undefined, buffers: undefined }
    noResults.success = false
    if (this.conwayGeomMap.get(modelId)) {
      return this.conwayGeomMap.get(modelId)!.toGltf(geometry, isGlb, outputDraco, fileUri)
    }

    return noResults
  }

  /**
   * Destroy geometry processor and deinitialize
   */
  static destroy(modelId: number = 0) {
    if (this.conwayGeomMap.get(modelId)) {
      this.conwayGeomMap.get(modelId)!.destroy()
      this.conwayGeomMap.get(modelId)!.initialized = false
    }
  }

  private static getTotalLength(arr: number[][]): number {
    let totalLength = 0
    for (const innerArray of arr) {
      totalLength += innerArray.length
    }
    return totalLength
  }

  /**
   *
   * @param geometry - GeometryObject to print information from
   */
  static printGeometryInfo(geometry: GeometryObject) {
    const vertexDataPtr = geometry.getVertexData()
    const vertexDataSize = geometry.getVertexDataSize()
    const indexDataPtr = geometry.getIndexData()
    const indexDataSize = geometry.getIndexDataSize()

    // unwrap vertex data
    const returnedVertexData =
      new Float32Array(this.wasmModule.HEAPF32.buffer, vertexDataPtr, vertexDataPtr.length)

    // unwrap index data
    const returnedIndexData =
      new Uint32Array(this.wasmModule.HEAPU32.buffer, indexDataPtr, indexDataPtr.length)

    console.log(`VertexData Ptr: ${vertexDataPtr}`)
    console.log(`VertexData Size: ${vertexDataSize}`)
    console.log(`IndexData Ptr: ${indexDataPtr}`)
    console.log(`IndexData Size: ${indexDataSize}`)

    // Now you can access the vertex Data array in TypeScript using the returnedVertexData object
    console.log(`returnedVertexData[0]: ${returnedVertexData[0]}`)

    // Now you can access the indexData array in TypeScript using the returnedIndexData object
    console.log(`returnedIndexData[0]: ${returnedIndexData[0]}`)
  }

  /**
   *
   * @param model - Input IfcStepModel to extract geometry data from
   * @param logTime boolean - print execution time (default no)
   * @return {[ExtractResult, GeometryObject[]]} - Enum indicating extraction result
   * + Geometry array
   */
  static extractIFCGeometryData(model: IfcStepModel, logTime: boolean = false, modelId: number = 0):
    [ExtractResult, GeometryObject[]] {
    let result: ExtractResult = ExtractResult.COMPLETE

    const startTime = Date.now()


    const products = model.types(IfcProduct)
    const productEntities = Array.from(products)

    console.log("productEntities size: " + productEntities.length)
    let count = 0
    let tesselatedFaceSetCount = 0
    for (const product of productEntities) {
      if (product.ObjectPlacement instanceof IfcLocalPlacement) {
        console.log("localPlacement #" + ++count + ": " + product.ObjectPlacement.RelativePlacement.Location.Coordinates)

        if (product.Representation instanceof IfcProductDefinitionShape) {
          for (const representation of product.Representation.Representations) {
            for (const item of representation.Items) {


              if (item instanceof IfcPolygonalFaceSet) {
                console.log("ITEM IS FACESET - Count(" + ++tesselatedFaceSetCount + "): " + item)
              }
              /*if (item instanceof IfcBoundingBox) {
                console.log("IfcBoundingBox: " + item);
              } else*/ if (item instanceof IfcBooleanResult) {
                console.log("IfcBooleanResult: " + item)

                console.log("FirstOperandType: " + item.FirstOperand.type)


                console.log("Operator: " + item.Operator)
                console.log("SecondOperand Type: " + item.SecondOperand.type)

                if (item.FirstOperand instanceof IfcExtrudedAreaSolid) {
                  ;//console.log("IfcExtrudedAreaSolid (FirstOperand): " + item.FirstOperand);
                } else if (item.FirstOperand instanceof IfcPolygonalFaceSet) {
                  console.log("IfcPolygonalFaceSet (FirstOperand) - Count(" + ++tesselatedFaceSetCount + "): " + item.FirstOperand)
                }

                if (item.SecondOperand instanceof IfcExtrudedAreaSolid) {
                  ;// console.log("IfcExtrudedAreaSolid (SecondOperand): " + item.SecondOperand);
                } else if (item.SecondOperand instanceof IfcPolygonalFaceSet) {
                  console.log("IfcPolygonalFaceSet (SecondOperand) - Count(" + ++tesselatedFaceSetCount + "): " + item.SecondOperand)
                }
              }
            }
          }
        }

      } else if (product.ObjectPlacement instanceof IfcGridPlacement) {
        console.log("gridPlacement #" + ++count + ": " + product.ObjectPlacement.PlacementLocation.IntersectingAxes)
      }

    }

    const polygonalFaceSets = model.types(IfcPolygonalFaceSet)
    const entities = Array.from(polygonalFaceSets)

    console.log("polygonalFaceSets size: " + entities.length)

    // initialize new native indices array (free memory with delete())
    const polygonalFaceStartIndices: NativeULongVector = this.nativeULongVector(1)

    polygonalFaceStartIndices.set(0, 0)


    for (const entity of entities) {
      // map points
      const points = entity.Coordinates.CoordList.map(([x, y, z]) => ({ x, y, z }))
      // map indices
      const faces = entity.Faces.values()

      let indicesPerFace: number = -1

      //initialize new polygonalFaceVector
      const polygonalFaceVector: NativeVectorIndexedPolygonalFace = this.nativeIndexedPolygonalFaceVector()

      //handle faces + voids
      for (const polygonalFace of faces) {
        if (polygonalFace instanceof IfcIndexedPolygonalFaceWithVoids) {
          //console.log("coordIndex: " + polygonalFace.CoordIndex + "\n")

          //console.log("innerCoordIndicesLength: " + polygonalFace.InnerCoordIndices.length)

          indicesPerFace = polygonalFace.CoordIndex.length

          // initialize new native indices array (free memory with delete())
          const polygonalFaceStartIndicesVoids: NativeULongVector =
            this.nativeULongVector(1 + polygonalFace.InnerCoordIndices.length)

          //set the first index to 0
          let voidsIndex = 0
          let coordIndexIdx = 0
          polygonalFaceStartIndicesVoids.set(voidsIndex++, coordIndexIdx)

          //create a coordIndex with size == coordIndex.length + total size of innerCoordIndices array
          const coordIndex: NativeUintVector =
            this.nativeUintVector(polygonalFace.CoordIndex.length +
              this.getTotalLength(polygonalFace.InnerCoordIndices))

          for (let i = 0; i < polygonalFace.CoordIndex.length; i++) {
            coordIndex.set(coordIndexIdx++, polygonalFace.CoordIndex[i])
          }

          //second index
          polygonalFaceStartIndicesVoids.set(voidsIndex++, coordIndexIdx)

          for (let i = 0; i < polygonalFace.InnerCoordIndices.length; i++) {
            // console.log("innerCoordIndex: " + polygonalFace.InnerCoordIndices[i] + "\n")
            for (let j = 0; j < polygonalFace.InnerCoordIndices[i].length; j++) {
              coordIndex.set(coordIndexIdx++, polygonalFace.InnerCoordIndices[i][j])
            }

            // Set the nth index if it's not the last iteration of the outer loop
            if (i + 1 < polygonalFace.InnerCoordIndices.length) {
              polygonalFaceStartIndicesVoids.set(voidsIndex++, coordIndexIdx)
            }
          }

          const indexedPolygonalFaceParameters: IndexedPolygonalFace = {
            indices: coordIndex,
            face_starts: polygonalFaceStartIndicesVoids,
          }

          polygonalFaceVector.push_back(indexedPolygonalFaceParameters)

        } else {

          indicesPerFace = polygonalFace.CoordIndex.length
          const coordIndex: NativeUintVector = this.nativeUintVector(indicesPerFace)
          //populate polygonal face 
          for (let i = 0; i < polygonalFace.CoordIndex.length; i++) {
            coordIndex.set(i, polygonalFace.CoordIndex[i])
          }

          const indexedPolygonalFaceParameters: IndexedPolygonalFace = {
            indices: coordIndex,
            face_starts: polygonalFaceStartIndices,
          }
          polygonalFaceVector.push_back(indexedPolygonalFaceParameters)

        }
      }

      // initialize new native glm::vec3 array object (free memory with delete())
      const pointsArray: NativeVectorGlmVec3 = this.nativeVectorGlmVec3(points.length)

      // populate points array
      for (let i = 0; i < points.length; i++) {
        pointsArray.set(i, points[i])
      }

      const parameters: ParamsPolygonalFaceSet = {
        indicesPerFace: indicesPerFace,
        points: pointsArray,
        faces: polygonalFaceVector,
      }

      const geometry: GeometryObject = this.conwayGeomMap.get(modelId)!.getGeometry(parameters)

      // add geometry to the list of geometry objects returned by wasm module
      this.addGeometry(geometry, modelId)

      // free allocated wasm vectors
      pointsArray.delete()

      for (let i = 0; i < polygonalFaceVector.size(); i++) {
        polygonalFaceVector.get(i).indices.delete()
        if (polygonalFaceVector.get(i).face_starts.size() > 1) {
          polygonalFaceVector.get(i).face_starts.delete()
        }
      }
      polygonalFaceVector.delete()
    }

    const endTime = Date.now()
    const executionTimeInMs = endTime - startTime

    if (logTime) {
      console.log(`Geometry Extraction took ${executionTimeInMs} milliseconds to execute.`)
    }

    polygonalFaceStartIndices.delete()

    return [result, this.getGeometry(modelId)]
  }
}
