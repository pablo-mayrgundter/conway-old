import { ConwayGeometry, ParamsPolygonalFaceSet, GeometryObject,
  ResultsGltf, IndexedPolygonalFace, ParamsAxis2Placement3D }
  from '../../dependencies/conway-geom/conway_geometry'
import { CanonicalMesh, CanonicalMeshType } from '../core/canonical_mesh'
import {
  IfcAxis2Placement3D, IfcCartesianTransformationOperator3D, IfcGridPlacement,
  IfcIndexedPolygonalFaceWithVoids, IfcLocalPlacement, IfcMappedItem,
  IfcObjectPlacement, IfcOpeningElement, IfcOpeningStandardCase,
  IfcPolygonalFaceSet, IfcProduct, IfcRepresentationItem, IfcSpace,
} from './ifc4_gen'
import { IfcSceneBuilder } from './ifc_scene_builder'
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

export interface ConwayMesh {
  geometry: GeometryObject
  localID: number
  transform: any | undefined
}

/**
 * Handles Geometry data extraction from a populated IfcStepModel
 * Can export to OBJ, GLTF (Draco), GLB (Draco)
 */
export class IfcGeometryExtraction {

  private geometryMap: Map<number, ConwayMesh> = new Map()
  private wasmModule: WasmModule
  private scene:IfcSceneBuilder

  /**
   *
   * @param conwayModel
   * @param model
   */
  constructor(
    private readonly conwayModel: ConwayGeometry,
    public readonly model: IfcStepModel ) {
    this.scene = new IfcSceneBuilder(model, conwayModel)

    this.wasmModule = conwayModel.wasmModule
  }

  /**
   *
   * @return { Map<number, ConwayMesh>} - Map containing all geometry data that was extracted
   */
  getMeshes(): Map<number, ConwayMesh> {
    return this.geometryMap
  }

  /**
   *
   * @return {WasmModule} - A handle to the loaded wasm module
   */
  getWasmModule(): WasmModule {
    return this.wasmModule
  }

  /**
   *
   * @param initialSize number - initial size of the vector (optional)
   * @return {NativeVectorGlmVec3} - a native std::vector<glm::vec3> from the wasm module
   */
  nativeVectorGlmVec3(initialSize?: number): NativeVectorGlmVec3 {
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
  nativeUintVector(initialize?: number): NativeUintVector {
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
  nativeULongVector(initialize?: number): NativeULongVector {
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
   * @return {NativeVectorIndexedPolygonalFace} - a native object from the wasm module
   */
  nativeIndexedPolygonalFaceVector(initialize?: number): NativeVectorIndexedPolygonalFace {
    const nativeVectorIndexedPolygonalFace = new
    (this.wasmModule.VectorIndexedPolygonalFace as NativeVectorIndexedPolygonalFace)()

    if (initialize) {
      // resize has a required second parameter to set default values
      nativeVectorIndexedPolygonalFace.resize(initialize)
    }

    return nativeVectorIndexedPolygonalFace
  }


  /**
   * @return {boolean} indicating if the wasm module has been initialized
   */
  isInitialized(): Boolean {
    if (this.conwayModel !== void 0) {
      return this.conwayModel.initialized
    }

    return false
  }

  /**
   *
   * @param geometry ConwayMesh to add to the ConwayMesh array
   */
  addMesh(mesh: ConwayMesh) {
    this.geometryMap.set(mesh.localID, mesh)
  }

  /**
   * @param modelId - model ID
   * @param geometry - GeometryObject to convert to OBJ
   * @return {string} - Obj string or blank string
   */
  toObj(geometry: GeometryObject, modelId: number = 0): string {
    if (this.conwayModel !== void 0) {
      return this.conwayModel.toObj(geometry)
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
  toGltf(geometry: GeometryObject, isGlb: boolean,
      outputDraco: boolean, fileUri: string, modelId: number = 0): ResultsGltf {
    const noResults: ResultsGltf = { success: false, bufferUris: undefined, buffers: undefined }
    noResults.success = false
    if (this.conwayModel !== void 0) {

      return this.conwayModel.toGltf(geometry, isGlb, outputDraco, fileUri)
    }

    return noResults
  }

  /**
   * Destroy geometry processor and deinitialize
   */
  destroy(modelId: number = 0) {
    if (this.conwayModel !== void 0) {
      this.conwayModel.destroy()
      this.conwayModel.initialized = false
    }
  }

  /**
   *
   * @param arr - a 2D number array
   * @return {number} - total length of all 2D array elements
   */
  private getTotalLength(arr: number[][]): number {
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
  printGeometryInfo(geometry: GeometryObject) {
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
   * @param entity - IfcPolygonalFaceSet
   * @param polygonalFaceStartIndices - Vector of face start indices
   * @param modelId - current modelId
   * @return {ExtractResult} - Extraction status result
   */
  private extractPolygonalFaceSet(entity: IfcPolygonalFaceSet,
      polygonalFaceStartIndices: NativeULongVector): ExtractResult {
    const result: ExtractResult = ExtractResult.COMPLETE

    // map points
    const points = entity.Coordinates.CoordList.map(([x, y, z]) => ({ x, y, z }))
    // map indices
    const faces = entity.Faces.values()

    let indicesPerFace: number = -1

    // initialize new polygonalFaceVector
    const polygonalFaceVector: NativeVectorIndexedPolygonalFace =
      this.nativeIndexedPolygonalFaceVector()

    // handle faces + voids
    for (const polygonalFace of faces) {
      if (polygonalFace instanceof IfcIndexedPolygonalFaceWithVoids) {
        // //console.log("coordIndex: " + polygonalFace.CoordIndex + "\n")

        // //console.log("innerCoordIndicesLength: " + polygonalFace.InnerCoordIndices.length)

        indicesPerFace = polygonalFace.CoordIndex.length

        // initialize new native indices array (free memory with delete())
        const polygonalFaceStartIndicesVoids: NativeULongVector =
          this.nativeULongVector(1 + polygonalFace.InnerCoordIndices.length)

        // set the first index to 0
        let voidsIndex = 0
        let coordIndexIdx = 0
        polygonalFaceStartIndicesVoids.set(voidsIndex++, coordIndexIdx)

        // create a coordIndex with
        // size == coordIndex.length + total size of innerCoordIndices array
        const coordIndex: NativeUintVector =
          this.nativeUintVector(polygonalFace.CoordIndex.length +
            this.getTotalLength(polygonalFace.InnerCoordIndices))

        for (let i = 0; i < polygonalFace.CoordIndex.length; i++) {
          coordIndex.set(coordIndexIdx++, polygonalFace.CoordIndex[i])
        }

        // second index
        polygonalFaceStartIndicesVoids.set(voidsIndex++, coordIndexIdx)

        for (let i = 0; i < polygonalFace.InnerCoordIndices.length; i++) {
          // //console.log("innerCoordIndex: " + polygonalFace.InnerCoordIndices[i] + "\n")
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
        // populate polygonal face
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

    const geometry: GeometryObject = this.conwayModel.getGeometry(parameters)

    const canonicalMesh:CanonicalMesh = {
      type: CanonicalMeshType.BUFFER_GEOMETRY,
      geometry: geometry,
      localID: entity.localID,
      model: this.model,
    }

    // add mesh to the list of mesh objects
    this.model.geometry.add(canonicalMesh)

    // free allocated wasm vectors
    pointsArray.delete()

    for (let i = 0; i < polygonalFaceVector.size(); i++) {
      polygonalFaceVector.get(i).indices.delete()
      if (polygonalFaceVector.get(i).face_starts.size() > 1) {
        polygonalFaceVector.get(i).face_starts.delete()
      }
    }
    polygonalFaceVector.delete()

    return result

  }

  /**
   *
   * @param entities - IfcPolygonalFaceSet array
   * @param modelId - the modelId
   * @return {ExtractResult} - Extraction status result
   */
  private extractPolygonalFaceSets(entities: IfcPolygonalFaceSet[]): ExtractResult {

    let result: ExtractResult = ExtractResult.COMPLETE
    let faceSetResult: ExtractResult = ExtractResult.INCOMPLETE
    // initialize new native indices array (free memory with delete())
    const polygonalFaceStartIndices: NativeULongVector = this.nativeULongVector(1)

    polygonalFaceStartIndices.set(0, 0)


    for (const entity of entities) {
      faceSetResult = this.extractPolygonalFaceSet(entity, polygonalFaceStartIndices)

      if (faceSetResult !== ExtractResult.COMPLETE) {
        console.log(`Warning, face set express ID: ${entity.expressID} extraction incomplete.`)
        result = ExtractResult.INCOMPLETE
      }
    }

    polygonalFaceStartIndices.delete()

    return result
  }

  /**
   *
   * @param from
   */
  extractCartesianTransformOperator3D(from: IfcCartesianTransformationOperator3D) {

    // apply transform to scene
  }

  /**
   *
   * @param from
   */
  extractMappedItem(from: IfcMappedItem) {

    const representationMap = from.MappingSource

    for (const representationItem of representationMap.MappedRepresentation.Items) {

      this.extractRepresentationItem(representationItem)
    }
  }

  /**
   *
   * @param from
   */
  extractRepresentationItem(from: IfcRepresentationItem) {

    const foundGeometry = this.model.geometry.getByLocalID(from.localID)

    if (foundGeometry !== void 0) {

      this.scene.addGeometry(from.localID)
      return
    }

    if (from instanceof IfcPolygonalFaceSet) {

      // initialize new native indices array (free memory with delete())
      const polygonalFaceStartIndices: NativeULongVector = this.nativeULongVector(1)

      polygonalFaceStartIndices.set(0, 0)

      const faceSetResult: ExtractResult =
      this.extractPolygonalFaceSet(from, polygonalFaceStartIndices)

      if (faceSetResult !== ExtractResult.COMPLETE) {
        console.log(`Warning, face set express ID: ${from.expressID} extraction incomplete.`)
      }

      polygonalFaceStartIndices.delete()
      this.scene.addGeometry(from.localID)


    } else if (from instanceof IfcMappedItem) {

      this.extractMappedItem(from)
    }

  }

  /**
   *
   * @param from
   */
  extractPlacement(from: IfcObjectPlacement) {

    const result = this.scene.getTransform(from.localID)

    if (result !== void 0) {

      this.scene.pushTransform(result)

      return
    }

    if (from instanceof IfcLocalPlacement) {

      const relativeTo = from.PlacementRelTo

      if (relativeTo !== null) {

        this.extractPlacement(relativeTo)
      }

      const relativePlacement = from.RelativePlacement

      let normalizeZ: boolean = false
      let normalizeX: boolean = false

      if (relativePlacement instanceof IfcAxis2Placement3D) {

        if (relativePlacement.Axis !== null) {
          normalizeZ = true
        }

        if (relativePlacement.RefDirection !== null) {
          normalizeX = true
        }

        const position = {
          x: relativePlacement.Location.Coordinates[0],
          y: relativePlacement.Location.Coordinates[1],
          z: relativePlacement.Location.Coordinates[2],
        }

        const zAxisRef = {
          x: relativePlacement.Axis?.DirectionRatios[0],
          y: relativePlacement.Axis?.DirectionRatios[1],
          z: relativePlacement.Axis?.DirectionRatios[2],
        }

        const xAxisRef = {
          x: relativePlacement.RefDirection?.DirectionRatios[0],
          y: relativePlacement.RefDirection?.DirectionRatios[1],
          z: relativePlacement.RefDirection?.DirectionRatios[2],
        }

        const axis2Placement3DParameters: ParamsAxis2Placement3D = {
          position: position,
          zAxisRef: zAxisRef,
          xAxisRef: xAxisRef,
          normalizeZ: normalizeZ,
          normalizeX: normalizeX,
        }

        const axis2PlacementTransform = this.conwayModel
            .getAxis2Placement3D(axis2Placement3DParameters)

        this.scene.addTransform(
            from.localID,
            axis2PlacementTransform.getValues(),
            axis2PlacementTransform)
      }

    } else if (from instanceof IfcGridPlacement) {
      // TODO(nickcastel50) Implement IfcGridPlacement
      console.log('IfcGridPlacement: unimplemented.')
    }
  }

  /**
   *
   * @param model - Input IfcStepModel to extract geometry data from
   * @param logTime boolean - print execution time (default no)
   * @return {[ExtractResult, IfcSceneBuilder]} - Enum indicating extraction result
   * + Geometry array
   */
  extractIFCGeometryData(logTime: boolean = false):
    [ExtractResult, IfcSceneBuilder] {
    let result: ExtractResult = ExtractResult.INCOMPLETE

    const startTime = Date.now()


    const products = this.model.types(IfcProduct)
    const productEntities = Array.from(products)

    for (const product of productEntities) {

      this.scene.clearParentStack()

      if ( product instanceof IfcOpeningElement ||
        product instanceof IfcSpace ||
        product instanceof IfcOpeningStandardCase ) {
        continue
      }

      const objectPlacement = product.ObjectPlacement

      if (objectPlacement !== null) {

        this.extractPlacement(objectPlacement)
      }

      const representations = product.Representation

      if (representations !== null) {

        for (const representation of representations.Representations) {

          for (const item of representation.Items) {

            this.extractRepresentationItem(item)
          }
        }
      }
    }

    result = ExtractResult.COMPLETE

    const endTime = Date.now()
    const executionTimeInMs = endTime - startTime
    if (logTime) {
      console.log(`Geometry Extraction took ${executionTimeInMs} milliseconds to execute.`)
    }


    return [result, this.scene]
  }
}
