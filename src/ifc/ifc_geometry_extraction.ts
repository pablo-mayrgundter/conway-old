import {
  ConwayGeometry,
  ParamsPolygonalFaceSet,
  GeometryObject,
  ResultsGltf,
  IndexedPolygonalFace,
  ParamsAxis2Placement3D,
  ParamsCartesianTransformationOperator3D,
  Vector3,
  Segment,
  ParamsGetIfcIndexedPolyCurve,
  CurveObject,
  ParamsGetAxis2Placement2D,
  ParamsGetCircleCurve,
  ParamsCreateNativeIfcProfile,
  ParamsGetExtrudedAreaSolid,
  ParamsGetBooleanResult,
  ProfileObject,
  StdVector,
  MaterialObject,
  BlendMode,
  toAlphaMode,
  Vector2,
  ParamsGetIfcCircle,
  ParamsGetIfcTrimmedCurve,
  ParamsGetHalfspaceSolid,
  ParamsGetLoop,
  Bound3DObject,
  ParamsCreateBound3D,
  ParamsAddFaceToGeometry,
  SurfaceObject,
} from '../../dependencies/conway-geom/conway_geometry'
import { CanonicalMaterial, ColorRGBA, exponentToRoughness } from '../core/canonical_material'
import { CanonicalMesh, CanonicalMeshType } from '../core/canonical_mesh'
import { CanonicalProfile } from '../core/canonical_profile'
import {
  IfcArbitraryClosedProfileDef,
  IfcAxis2Placement2D,
  IfcAxis2Placement3D,
  IfcBooleanResult,
  IfcCartesianPointList2D,
  IfcCartesianPointList3D,
  IfcCartesianTransformationOperator3D,
  IfcCircleProfileDef,
  IfcColourRgb,
  IfcCompositeProfileDef,
  IfcDirection,
  IfcExtrudedAreaSolid,
  IfcGridPlacement,
  IfcIndexedPolyCurve,
  IfcIndexedPolygonalFaceWithVoids,
  IfcLocalPlacement,
  IfcMappedItem,
  IfcNormalisedRatioMeasure,
  IfcObjectPlacement,
  IfcOpeningElement,
  IfcOpeningStandardCase,
  IfcPolygonalFaceSet,
  IfcProduct,
  IfcReflectanceMethodEnum,
  IfcProfileDef,
  IfcRepresentationItem,
  IfcSpace,
  IfcSpecularExponent,
  IfcSpecularRoughness,
  IfcStyledItem,
  IfcSurfaceStyle,
  IfcSurfaceStyleRefraction,
  IfcSurfaceStyleRendering,
  IfcSurfaceStyleShading,
  IfcPresentationStyleAssignment,
  IfcSurfaceSide,
  IfcPolygonalBoundedHalfSpace,
  IfcBooleanClippingResult,
  IfcCompositeCurve,
  IfcPolyline,
  IfcTrimmedCurve,
  IfcCartesianPoint,
  IfcParameterValue,
  IfcCurve,
  IfcTrimmingPreference,
  IfcCircle,
  IfcHalfSpaceSolid,
  IfcPlane,
  IfcBoundingBox,
  IfcShellBasedSurfaceModel,
  IfcClosedShell,
  IfcOpenShell,
  IfcFace,
  IfcFaceOuterBound,
  IfcFaceBound,
  IfcPolyLoop,
} from './ifc4_gen'
import EntityTypesIfc from './ifc4_gen/entity_types_ifc.gen'
import { IfcMaterialCache } from './ifc_material_cache'
import { IfcSceneBuilder } from './ifc_scene_builder'
import IfcStepModel from './ifc_step_model'


type Mutable<T> = { -readonly [P in keyof T]: T[P] }
type NativeVectorGlmVec3 = StdVector<Vector3>
type NativeVectorGlmVec2 = StdVector<Vector2>
type NativeUintVector = StdVector<number>
type NativeULongVector = StdVector<number>
type NativeVectorIndexedPolygonalFace = StdVector<IndexedPolygonalFace>

type NativeVectorSegment = StdVector<Segment>
type NativeVectorGeometry = StdVector<GeometryObject>
type NativeVectorMaterial = StdVector<MaterialObject>
type NativeVectorProfile = StdVector<ProfileObject>
type NativeVectorCurve = StdVector<CurveObject>
type NativeVectorBound3D = StdVector<Bound3DObject>
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
 * Extract a specular highlight, converting specular exponents to a roughness value.
 *
 * @param from The scalar of either an exponent or a roughness to extract.
 * @return {number} A roughness value 1 (roughest) to zero (full specular/mirror).
 */
export function extractSpecularHighlight(
  from: IfcSpecularExponent | IfcSpecularRoughness | null): number | undefined {

  if (from === null) {
    return void 0
  }

  if (from instanceof IfcSpecularExponent) {

    return exponentToRoughness(from.Value)
  }

  return from.Value
}

/**
 * Extract an IFC Colour into our RGBA color, using premultiplied alpha.
 *
 * Transparency is usually handled via pre-multiplied alpha, and this is what
 * gltf (for example) expects.
 *
 * @param from The color to extract.
 * @param alpha The alpha value to be associated with the colour.
 * @return {ColorRGBA} The created colour.
 */
export function extractColorRGBPremultiplied(from: IfcColourRgb, alpha: number = 1): ColorRGBA {

  return [from.Red * alpha, from.Green * alpha, from.Blue * alpha, alpha]
}

/**
 * Extract an IFC Colour into our RGBA color.
 *
 * @param from The color to extract.
 * @param alpha The alpha value to be associated with the colour.
 * @return {ColorRGBA} The created colour.
 */
export function extractColorRGB(from: IfcColourRgb, alpha: number = 1): ColorRGBA {

  return [from.Red, from.Green, from.Blue, alpha]
}

/**
 * Use to extract a color or a factor from a color/factor select.
 *
 * @param from The color or factor to extract this from.
 * @param surfaceColor The surface color (if this is a factor), which will be used to
 * create the factor.
 * @param alpha The alpha to use for this.
 * @return {ColorRGBA}
 */
export function extractColorOrFactor(
  from: IfcColourRgb | IfcNormalisedRatioMeasure,
  surfaceColor: ColorRGBA, alpha: number = 1): ColorRGBA {

  if (from instanceof IfcColourRgb) {
    return extractColorRGB(from, alpha)
  } else {

    const factor = from.Value

    return [
      factor * surfaceColor[0],
      factor * surfaceColor[1],
      factor * surfaceColor[2],
      alpha * surfaceColor[3],
    ]
  }
}

/**
 * Handles Geometry data extraction from a populated IfcStepModel
 * Can export to OBJ, GLTF (Draco), GLB (Draco)
 */
export class IfcGeometryExtraction {

  private wasmModule: WasmModule

  public readonly scene: IfcSceneBuilder

  public readonly materials: IfcMaterialCache

  /**
   *
   * @param conwayModel
   * @param model
   */
  constructor(
    private readonly conwayModel: ConwayGeometry,
    public readonly model: IfcStepModel) {

    this.materials = new IfcMaterialCache()
    this.scene = new IfcSceneBuilder(model, conwayModel, this.materials)

    console.log(`wasmModule: ${conwayModel.wasmModule}`)
    this.wasmModule = conwayModel.wasmModule
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
   * @return {NativeVectorGeometry} - a native std::vector<GeometryObject> from the wasm module
   */
  nativeVectorGeometry(initialSize?: number): NativeVectorGeometry {
    const nativeVectorGeometry_ =
      // eslint-disable-next-line new-cap
      (new (this.wasmModule.geometryArray)()) as NativeVectorGeometry

    if (initialSize) {
      const defaultGeometry = (new (this.wasmModule.IfcGeometry)) as GeometryObject
      // resize has a required second parameter to set default values
      nativeVectorGeometry_.resize(initialSize, defaultGeometry)
    }

    return nativeVectorGeometry_
  }

  /**
   * Create a native material from a canonical one.
   *
   * @param from The material to create the native material from
   * @return {MaterialObject} The created canonical material.
   */
  nativeMaterial(from: CanonicalMaterial): MaterialObject {
    const native: MaterialObject = {

      alphaCutoff: 0,
      alphaMode: toAlphaMode(this.wasmModule, from.blend),
      base: {
        x: from.baseColor[0],
        y: from.baseColor[1],
        z: from.baseColor[2],
        w: from.baseColor[3],
      },
      doubleSided: from.doubleSided,
      /* eslint-disable no-magic-numbers */
      ior: from.ior ?? 1.4,
      metallic: from.metalness ?? 1.0,
      roughness: from.roughness ?? 1.0,
      specular: from.specular !== void 0 ? {
        x: from.specular[0],
        y: from.specular[1],
        z: from.specular[2],
        w: from.specular[3],
      } : void 0,
    }
    /* eslint-enable no-magic-numbers */
    return native
  }

  /**
   *
   * @param initialSize number - initial size of the vector (optional)
   * @return {NativeVectorGlmVec2} - a native std::vector<glm::vec2> from the wasm module
   */
  nativeVectorGlmVec2(initialSize?: number): NativeVectorGlmVec2 {
    // eslint-disable-next-line new-cap
    const nativeVectorGlmVec2_ = new (this.wasmModule.vec2Array)() as NativeVectorGlmVec2

    if (initialSize) {
      // resize has a required second parameter to set default values
      nativeVectorGlmVec2_.resize(initialSize, { x: 0, y: 0 })
    }

    return nativeVectorGlmVec2_
  }

  /**
   * Create a native vector profile to pass across the boundary.
   *
   * @param initialSize number - initial size of the vector (optional)
   * @return {NativeVectorProfile} - a native std::vector<IfcProfile> from the wasm module
   */
  nativeVectorProfile(initialSize?: number): NativeVectorProfile {
    // eslint-disable-next-line new-cap
    const nativeVectorProfile_ = new (this.wasmModule.profileArray)() as NativeVectorProfile

    if (initialSize) {
      // resize has a required second parameter to set default values
      const defaultProfile = new (this.wasmModule.IfcProfile as any)
      nativeVectorProfile_.resize(initialSize, defaultProfile)
    }

    return nativeVectorProfile_
  }

  /**
   * Create a native version of a vector curve to parse across the boundary.
   *
   * @param initialSize number - initial size of the vector (optional)
   * @return {NativeVectorCurve} - a native std::vector<IfcCurve> from the wasm module
   */
  nativeVectorCurve(initialSize?: number): NativeVectorCurve {
    // eslint-disable-next-line new-cap
    const nativeVectorCurve_ = new (this.wasmModule.curveArray)() as NativeVectorCurve

    if (initialSize) {
      // resize has a required second parameter to set default values
      const defaultCurve = new (this.wasmModule.IfcCurve as any)
      nativeVectorCurve_.resize(initialSize, defaultCurve)
    }

    return nativeVectorCurve_
  }


  /**
   * Create a native vector of glm::vec3 to pass across the boundary.
   *
   * @param initialSize number - initial size of the vector (optional)
   * @return {NativeVectorMaterial} - a native std::vector<MaterialObject> from the wasm module
   */
  nativeVectorMaterial(initialSize?: number): NativeVectorMaterial {
    const nativeVectorMaterial_ =
      // eslint-disable-next-line new-cap
      (new (this.wasmModule.materialArray)()) as NativeVectorMaterial

    if (initialSize) {
      // resize has a required second parameter to set default values
      nativeVectorMaterial_.resize(initialSize)
    }

    return nativeVectorMaterial_
  }

  /**
   *
   * @param initialSize number - initial size of the vector (optional)
   * @return {NativeVectorGlmVec3} - a native std::vector<glm::vec3> from the wasm module
   */
  nativeVectorGlmVec3(initialSize?: number): NativeVectorGlmVec3 {
    const nativeVectorGlmVec3_ =
      // eslint-disable-next-line new-cap
      (new (this.wasmModule.glmVec3Array)()) as NativeVectorGlmVec3

    if (initialSize) {
      // resize has a required second parameter to set default values
      nativeVectorGlmVec3_.resize(initialSize, { x: 0, y: 0, z: 0 })
    }

    return nativeVectorGlmVec3_
  }

  /**
   *
   * @param initialSize number - initial size of the vector (optional)
   * @return {NativeVectorGlmVec3} - a native std::vector<glm::vec3> from the wasm module
   */
  nativeVectorGlmdVec3(initialSize?: number): NativeVectorGlmVec3 {
    const nativeVectorGlmdVec3_ =
      // eslint-disable-next-line new-cap
      (new (this.wasmModule.glmdVec3Array)()) as NativeVectorGlmVec3

    if (initialSize) {
      // resize has a required second parameter to set default values
      nativeVectorGlmdVec3_.resize(initialSize, { x: 0, y: 0, z: 0 })
    }

    return nativeVectorGlmdVec3_
  }

  /**
   * Create a native 32bit uint vector.
   *
   * @param initialSize number - initial size of the vector (optional)
   * @return {NativeUintVector} - a native std::vector<uint32_t> from the wasm module
   */
  nativeUintVector(initialize?: number): NativeUintVector {
    const nativeUintVector_ = (new (this.wasmModule.UintVector)()) as NativeUintVector

    if (initialize) {
      // resize has a required second parameter to set default values
      nativeUintVector_.resize(initialize, 0)
    }

    return nativeUintVector_
  }

  /**
   * Create a native 32bit size_t vector.
   *
   * @param initialSize number - initial size of the vector (optional)
   * @return {NativeULongVector} - a native std::vector<size_t> from the wasm module
   */
  nativeULongVector(initialize?: number): NativeULongVector {
    const nativeULongVector_ = new (this.wasmModule.ULongVector)() as NativeULongVector

    if (initialize) {
      // resize has a required second parameter to set default values
      nativeULongVector_.resize(initialize, 0)
    }

    return nativeULongVector_
  }

  /**
   * Create a native vector of indexed polygonal faces uint vector.
   *
   * @param initialSize number - initial size of the vector (optional)
   * @return {NativeVectorIndexedPolygonalFace} - a native object from the wasm module
   */
  nativeIndexedPolygonalFaceVector(initialize?: number): NativeVectorIndexedPolygonalFace {
    const nativeVectorIndexedPolygonalFace = new
      (this.wasmModule.VectorIndexedPolygonalFace)() as NativeVectorIndexedPolygonalFace

    if (initialize) {
      // resize has a required second parameter to set default values
      nativeVectorIndexedPolygonalFace.resize(initialize)
    }

    return nativeVectorIndexedPolygonalFace
  }

  /**
   * Create a native vector of segments.
   *
   * @param initialize number - initial size of the vector (optional)
   * @return {NativeVectorSegment} - a native object from the wasm module
   */
  nativeSegmentVector(initialize?: number): NativeVectorSegment {
    const nativeVectorSegment =
      new (this.wasmModule.VectorSegment)() as NativeVectorSegment

    if (initialize) {
      // resize has a required second parameter to set default values
      nativeVectorSegment.resize(initialize)
    }

    return nativeVectorSegment
  }

  /**
   * 
   * @param initialize 
   * @returns {NativeVectorBound3D}
   */
  nativeBound3DVector(initialize?: number): NativeVectorBound3D {
    const nativeVectorBound3D =
      new (this.wasmModule.bound3DArray)() as NativeVectorBound3D

    if (initialize) {
      // resize has a required second parameter to set default values
      nativeVectorBound3D.resize(initialize)
    }

    return nativeVectorBound3D
  }


  /**
   * Has the wasm module been initialised?
   *
   * @return {boolean} indicating if the wasm module has been initialized
   */
  isInitialized(): Boolean {
    if (this.conwayModel !== void 0) {
      return this.conwayModel.initialized
    }

    return false
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
   * Convert this to a GLTF/GLB
   *
   * @param geometry - GeometryObject to convert to GLTF / GLB
   * @param isGlb boolean - Should the output be a single GLB file?
   * @param outputDraco boolean - Should the output be Draco compressed?
   * @param fileUri string - base filenames for GLTF / GLB files
   * @return {ResultsGltf} - Structure containing GLTF / GLB filenames + data vectors
   */
  toGltf(geometry: NativeVectorGeometry, materials: NativeVectorMaterial, isGlb: boolean,
    outputDraco: boolean, fileUri: string, modelId: number = 0): ResultsGltf {
    const noResults: ResultsGltf = { success: false, bufferUris: undefined, buffers: undefined }
    noResults.success = false
    if (this.conwayModel !== void 0) {

      return this.conwayModel.toGltf(geometry, materials, isGlb, outputDraco, fileUri)
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
    return arr.reduce((totalLength, innerArray) => totalLength + innerArray.length, 0)
  }

  /**
   *
   * @param indices
   * @return {NativeUintVector}
   */
  private createAndPopulateNativeIndices(indices: number[]): NativeUintVector {
    // Create native indices array
    const indexArray: NativeUintVector = this.nativeUintVector(indices.length)

    // Populate the array
    for (let j = 0; j < indices.length; j++) {
      indexArray.set(j, indices[j])
    }

    return indexArray
  }

  /**
   * Create and populate a list of native profiles from an array of canonical profiles.
   *
   * @param profiles The profiles to convert to native profiles.
   * @return {NativeVectorProfile} The populated native profiles.
   */
  private createAndPopulateNativeProfiles(profiles: CanonicalProfile[]): NativeVectorProfile {
    // Create native indices array
    const profileArray: NativeVectorProfile = this.nativeVectorProfile(profiles.length)

    // Populate the array
    for (let j = 0; j < profiles.length; j++) {
      profileArray.set(j, profiles[j].nativeProfile!)
    }

    return profileArray
  }

  // /**
  //  *
  //  * @param geometry - GeometryObject to print information from
  //  */
  // printGeometryInfo(geometry: GeometryObject) {
  //   const vertexDataPtr = geometry.getVertexData()
  //   const vertexDataSize = geometry.getVertexDataSize()
  //   const indexDataPtr = geometry.getIndexData()
  //   const indexDataSize = geometry.getIndexDataSize()

  //   // unwrap vertex data
  //   const returnedVertexData =
  //     new Float32Array(this.wasmModule.HEAPF32.buffer, vertexDataPtr, vertexDataPtr.length)

  //   // unwrap index data
  //   const returnedIndexData =
  //     new Uint32Array(this.wasmModule.HEAPU32.buffer, indexDataPtr, indexDataPtr.length)

  //   console.log(`VertexData Ptr: ${vertexDataPtr}`)
  //   console.log(`VertexData Size: ${vertexDataSize}`)
  //   console.log(`IndexData Ptr: ${indexDataPtr}`)
  //   console.log(`IndexData Size: ${indexDataSize}`)

  //   // Now you can access the vertex Data array in TypeScript using the returnedVertexData object
  //   console.log(`returnedVertexData[0]: ${returnedVertexData[0]}`)

  //   // Now you can access the indexData array in TypeScript using the returnedIndexData object
  //   console.log(`returnedIndexData[0]: ${returnedIndexData[0]}`)
  // }

  /**
   *
   * @param entity - IfcPolygonalFaceSet
   * @param polygonalFaceStartIndices - Vector of face start indices
   * @param modelId - current modelId
   * @return {ExtractResult} - Extraction status result
   */
  private extractPolygonalFaceSet(entity: IfcPolygonalFaceSet,
    polygonalFaceStartIndices: NativeULongVector, temporary: boolean = false): ExtractResult {
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

        const coordIndex = this.createAndPopulateNativeIndices(polygonalFace.CoordIndex)

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

    const geometry: GeometryObject = this.conwayModel.getPolygonalFaceSetGeometry(parameters)

    const canonicalMesh: CanonicalMesh = {
      type: CanonicalMeshType.BUFFER_GEOMETRY,
      geometry: geometry,
      localID: entity.localID,
      model: this.model,
      temporary: temporary,
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
   * Extract a 3D direction vector from an IFC direction.
   *
   * @param from The IFC direction to extract the vector from.
   * @return {Vector3 | undefined} The vector, or undefined if it can't be extracted.
   */
  static extractDirection(from: IfcDirection | null): Vector3 | undefined {

    if (from === null) {
      return void 0
    }

    return {
      x: from.DirectionRatios[0],
      y: from.DirectionRatios[1],
      z: from.DirectionRatios[2],
    }
  }

  /**
   * Extract an IFC 3D cartesian transform operator as a transform matrix.
   *
   * @param from The IFC cartesian transform to extract from.
   * @return {any} The internal matrix type extract.
   */
  extractCartesianTransformOperator3D(from: IfcCartesianTransformationOperator3D) {
    const conwayModel = this.conwayModel

    const position: Vector3 = {
      x: from.LocalOrigin.Coordinates[0],
      y: from.LocalOrigin.Coordinates[1],
      z: from.LocalOrigin.Coordinates[2],
    }

    const axis1Ref: Vector3 =
      IfcGeometryExtraction.extractDirection(from.Axis1) ?? { x: 1, y: 0, z: 0 }
    const axis2Ref: Vector3 =
      IfcGeometryExtraction.extractDirection(from.Axis2) ?? { x: 0, y: 1, z: 0 }
    const axis3Ref: Vector3 =
      IfcGeometryExtraction.extractDirection(from.Axis3) ?? { x: 0, y: 0, z: 1 }

    const parameters: ParamsCartesianTransformationOperator3D = {
      position: position,
      axis1Ref: axis1Ref,
      axis2Ref: axis2Ref,
      axis3Ref: axis3Ref,
      normalizeAxis1: true,
      normalizeAxis2: true,
      normalizeAxis3: true,
      nonUniform: false,
      realScale: true,
      scale1_: from.Scl,
      scale2_: from.Scl,
      scale3_: from.Scl,
    }

    return conwayModel.getCartesianTransformationOperator3D(parameters)
  }


  /**
   * Accepts IfcBooleanResult and IfcBooleanClippingResult
   * @param from
   */
  extractBooleanResult(from: IfcBooleanResult | IfcBooleanClippingResult) {

    if (from.FirstOperand instanceof IfcExtrudedAreaSolid ||
      from.FirstOperand instanceof IfcPolygonalFaceSet ||
      from.FirstOperand instanceof IfcBooleanResult ||
      from.FirstOperand instanceof IfcBooleanClippingResult) {
      this.extractBooleanOperand(from.FirstOperand)
    }

    if (from.SecondOperand instanceof IfcExtrudedAreaSolid ||
      from.SecondOperand instanceof IfcPolygonalFaceSet ||
      from.SecondOperand instanceof IfcBooleanResult ||
      from.SecondOperand instanceof IfcHalfSpaceSolid) {
      this.extractBooleanOperand(from.SecondOperand)
    }

    // get geometry TODO(nickcastel50): eventually support flattening meshes
    const flatFirstMeshVector = this.nativeVectorGeometry(1)
    const firstMesh = this.model.geometry.getByLocalID(from.FirstOperand.localID)

    if (firstMesh !== void 0 && firstMesh.type === CanonicalMeshType.BUFFER_GEOMETRY) {
      flatFirstMeshVector.set(0, firstMesh.geometry)
    } else {
      console.log(
        `Error extracting firstOperand geometry for expressID: 
        ${from.FirstOperand.expressID} - type: ${EntityTypesIfc[from.FirstOperand.type]}`)
      console.log(firstMesh)
      return
    }

    const flatSecondMeshVector = this.nativeVectorGeometry(1)
    const secondMesh = this.model.geometry.getByLocalID(from.SecondOperand.localID)
    if (secondMesh !== void 0 && secondMesh.type === CanonicalMeshType.BUFFER_GEOMETRY) {
      flatSecondMeshVector.set(0, secondMesh.geometry)
    } else {
      console.log(
        `Error extracting secondOperand geometry for expressID: 
        ${from.SecondOperand.localID} - type: ${EntityTypesIfc[from.SecondOperand.type]}`)
      return
    }

    const parameters: ParamsGetBooleanResult = {
      flatFirstMesh: flatFirstMeshVector,
      flatSecondMesh: flatSecondMeshVector,
      operatorType: from.Operator.valueOf(),
    }
    const booleanGeometryObject: GeometryObject = this.conwayModel.getBooleanResult(parameters)

    if (firstMesh.type === CanonicalMeshType.BUFFER_GEOMETRY) {
      if (secondMesh.type === CanonicalMeshType.BUFFER_GEOMETRY) {

        const canonicalMesh: CanonicalMesh = {
          type: CanonicalMeshType.BUFFER_GEOMETRY,
          geometry: booleanGeometryObject,
          localID: from.localID,
          model: this.model,
          temporary: false,
        }

        // add mesh to the list of mesh objects
        this.model.geometry.add(canonicalMesh)
      }
    }
  }

  /**
   * Extract a boolean operand from a boolean result.
   * @param from The operand to extract.
   * @return {void}
   */
  extractBooleanOperand(from: IfcExtrudedAreaSolid | IfcPolygonalFaceSet | IfcBooleanResult | IfcHalfSpaceSolid | IfcBooleanClippingResult) {

    if (from instanceof IfcExtrudedAreaSolid) {
      // mark as temporary
      this.extractExtrudedAreaSolid(from, true)
    } else if (from instanceof IfcPolygonalFaceSet) {
      // initialize new native indices array (free memory with delete())
      const polygonalFaceStartIndices: NativeULongVector = this.nativeULongVector(1)

      polygonalFaceStartIndices.set(0, 0)

      // mark as temporary
      const faceSetResult: ExtractResult =
        this.extractPolygonalFaceSet(from, polygonalFaceStartIndices, true)

      if (faceSetResult !== ExtractResult.COMPLETE) {
        console.log(`Warning, face set express ID: ${from.expressID} extraction incomplete.`)
      }

      polygonalFaceStartIndices.delete()
    } else if (from instanceof IfcHalfSpaceSolid) {
      this.extractHalfspaceSolid(from, true)
    } else if (from instanceof IfcBooleanResult) {

      if (from.FirstOperand instanceof IfcExtrudedAreaSolid ||
        from.FirstOperand instanceof IfcPolygonalFaceSet ||
        from.FirstOperand instanceof IfcBooleanResult ||
        from.FirstOperand instanceof IfcBooleanClippingResult) {
        this.extractBooleanOperand(from.FirstOperand)
      }

      if (from.SecondOperand instanceof IfcExtrudedAreaSolid ||
        from.SecondOperand instanceof IfcPolygonalFaceSet ||
        from.SecondOperand instanceof IfcBooleanResult ||
        from.SecondOperand instanceof IfcHalfSpaceSolid) {
        this.extractBooleanOperand(from.SecondOperand)
      }

      // get geometry TODO(nickcastel50): eventually support flattening meshes
      const flatFirstMeshVector = this.nativeVectorGeometry(1)
      const firstMesh = this.model.geometry.getByLocalID(from.FirstOperand.localID)
      if (firstMesh !== void 0 && firstMesh.type === CanonicalMeshType.BUFFER_GEOMETRY) {
        flatFirstMeshVector.set(0, firstMesh.geometry)
      } else {
        console.log(
          `(Operand) Error extracting firstOperand geometry for expressID: 
          ${from.FirstOperand.expressID} - type: ${EntityTypesIfc[from.FirstOperand.type]}`)
        console.log(firstMesh)
        return
      }

      const flatSecondMeshVector = this.nativeVectorGeometry(1)
      const secondMesh = this.model.geometry.getByLocalID(from.SecondOperand.localID)
      if (secondMesh !== void 0 && secondMesh.type === CanonicalMeshType.BUFFER_GEOMETRY) {
        flatSecondMeshVector.set(0, secondMesh.geometry)
      } else {
        console.log(
          `(Operand) Error extracting secondOperand geometry for expressID: 
          ${from.SecondOperand.expressID} - type: ${EntityTypesIfc[from.SecondOperand.type]}`)
        return
      }

      const parameters: ParamsGetBooleanResult = {
        flatFirstMesh: flatFirstMeshVector,
        flatSecondMesh: flatSecondMeshVector,
        operatorType: from.Operator.valueOf(),
      }

      const booleanGeometryObject: GeometryObject = this.conwayModel.getBooleanResult(parameters)

      const canonicalMesh: CanonicalMesh = {
        type: CanonicalMeshType.BUFFER_GEOMETRY,
        geometry: booleanGeometryObject,
        localID: from.localID,
        model: this.model,
        temporary: true,
      }

      // add mesh to the list of mesh objects
      this.model.geometry.add(canonicalMesh)
    }
  }

  /* eslint-disable no-magic-numbers */ // No magic numbers disabled
  // Cos we have *lots* of default material values.
  /**
   * Extract a canonical material from a surface style.
   *
   * @param from The surface style to extract a material from.
   */
  extractSurfaceStyle(from: IfcSurfaceStyle) {

    const materials = this.materials

    const material = materials.get(from.localID)

    if (material === void 0) {

      const readDoubleSided =
        from.Side === IfcSurfaceSide.BOTH || from.Side === IfcSurfaceSide.POSITIVE

      const newMaterial: Mutable<CanonicalMaterial> = {
        name: `#${from.expressID}`,
        baseColor: [0.8, 0.8, 0.8, 1],
        doubleSided: readDoubleSided,
        blend: BlendMode.OPAQUE,
      }

      for (const style of from.Styles) {

        if (style instanceof IfcSurfaceStyleRefraction) {

          newMaterial.ior = style.RefractionIndex ?? newMaterial.ior

        } else if (style instanceof IfcSurfaceStyleRendering) {

          const transparency = style.Transparency ?? 0
          const surfaceColor = extractColorRGBPremultiplied(style.SurfaceColour, 1 - transparency)

          newMaterial.baseColor = style.DiffuseColour !== null ?
            extractColorOrFactor(style.DiffuseColour, surfaceColor) : surfaceColor

          newMaterial.roughness = extractSpecularHighlight(style.SpecularHighlight)

          newMaterial.specular = style.SpecularColour !== null ?
            extractColorOrFactor(style.SpecularColour, surfaceColor) : void 0

          switch (style.ReflectanceMethod) {

            case IfcReflectanceMethodEnum.NOTDEFINED:
            case IfcReflectanceMethodEnum.PHONG:
            case IfcReflectanceMethodEnum.BLINN: {

              newMaterial.metalness = 0.0
              newMaterial.roughness ??= 1
              newMaterial.ior ??= 1.4
              break
            }

            case IfcReflectanceMethodEnum.FLAT: {

              newMaterial.metalness = 0.0
              newMaterial.roughness ??= 0.9
              newMaterial.ior ??= 1.5
              break

            }

            case IfcReflectanceMethodEnum.GLASS: {

              newMaterial.metalness = 0.0
              newMaterial.roughness ??= 0
              newMaterial.ior ??= 1.52
              break

            }

            case IfcReflectanceMethodEnum.MATT:

              newMaterial.metalness = 0
              newMaterial.roughness ??= 1
              break

            case IfcReflectanceMethodEnum.METAL:

              newMaterial.metalness = 1
              newMaterial.roughness ??= 0.2
              break

            case IfcReflectanceMethodEnum.MIRROR:

              newMaterial.metalness = 1
              newMaterial.roughness ??= 0
              newMaterial.ior ??= 1.52
              break

            case IfcReflectanceMethodEnum.PLASTIC:

              newMaterial.metalness = 0.0
              newMaterial.roughness ??= 0
              newMaterial.ior ??= 1.47
              break

            case IfcReflectanceMethodEnum.STRAUSS:

              newMaterial.metalness = 1.0
              newMaterial.roughness ??= 0.95
              newMaterial.ior ??= 1.47
              break

            default:

          }

        } else if (style instanceof IfcSurfaceStyleShading) {

          const transparency = style.Transparency ?? 0

          newMaterial.baseColor =
            extractColorRGBPremultiplied(style.SurfaceColour, 1 - transparency)
        }

      }

      const isTransparent = newMaterial.baseColor[3] < 1.0

      newMaterial.metalness ??= 0
      newMaterial.roughness ??= 0
      newMaterial.ior ??= 1.4
      newMaterial.doubleSided = isTransparent || newMaterial.doubleSided
      newMaterial.blend = isTransparent ? BlendMode.BLEND : BlendMode.OPAQUE

      materials.add(from.localID, newMaterial)
    }

  }
  /* eslint-enable no-magic-numbers */

  /**
   * Extract a style item.
   *
   * @param from The styled item to extract from
   */
  extractStyledItem(from: IfcStyledItem) {

    let surfaceStyleID: number | undefined = void 0

    for (const style of from.Styles) {

      if (style instanceof IfcPresentationStyleAssignment) {

        for (const innerStyle of style.Styles) {

          if (innerStyle instanceof IfcSurfaceStyle) {

            surfaceStyleID = innerStyle.localID
            this.extractSurfaceStyle(innerStyle)
            break
          }
        }

      } else if (style instanceof IfcSurfaceStyle) {

        surfaceStyleID = style.localID
        this.extractSurfaceStyle(style)
      }
    }

    const item = from.Item

    if (item === null || surfaceStyleID === void 0) {
      return
    }

    this.materials.addGeometryMapping(item.localID, surfaceStyleID)
  }

  /**
   * 
   * @param from 
   * @param temporary 
   */
  extractHalfspaceSolid(from: IfcHalfSpaceSolid, temporary: boolean = false) {

    if (from.BaseSurface instanceof IfcPlane) {
      const paramsAxis2Placement3D: ParamsAxis2Placement3D =
        this.extractAxis2Placement3D(from.BaseSurface.Position, from.localID, true)
      const axis2PlacementTransform = this.conwayModel
        .getAxis2Placement3D(paramsAxis2Placement3D)

      // get geometry
      const parameters: ParamsGetHalfspaceSolid = {
        flipWinding: from.AgreementFlag,
        optionalLinearScalingFactor: 1.0,
      }

      const geometry: GeometryObject = this.conwayModel.GetHalfSpaceSolid(parameters)

      // apply transform
      if (axis2PlacementTransform !== void 0) {
        geometry.applyTransform(axis2PlacementTransform)
      }

      const canonicalMesh: CanonicalMesh = {
        type: CanonicalMeshType.BUFFER_GEOMETRY,
        geometry: geometry,
        localID: from.localID,
        model: this.model,
        temporary: temporary,
      }

      // add mesh to the list of mesh objects
      this.model.geometry.add(canonicalMesh)
    }
  }

  /**
   * 
   * @param from 
   * @param temporary 
   */
  extractPolygonalBoundedHalfSpace(from: IfcPolygonalBoundedHalfSpace, temporary: boolean = false) {

    //extract position 
    let axis2PlacementTransform: any | undefined = (void 0)

    const paramsAxis2Placement3D: ParamsAxis2Placement3D =
      this.extractAxis2Placement3D(from.Position, from.localID, true)
    axis2PlacementTransform = this.conwayModel
      .getAxis2Placement3D(paramsAxis2Placement3D)

    console.log(`[PolygonalBoundedHalfSpace]: from.PolygonalBoundary type: ${EntityTypesIfc[from.PolygonalBoundary.type]}`)


  }

  /**
   *
   * @param from
   * @param temporary
   */
  extractExtrudedAreaSolid(from: IfcExtrudedAreaSolid, temporary: boolean = false) {

    let axis2PlacementTransform: any | undefined = (void 0)
    if (from.Position !== null) {
      const paramsAxis2Placement3D: ParamsAxis2Placement3D =
        this.extractAxis2Placement3D(from.Position, from.localID, true)
      axis2PlacementTransform = this.conwayModel
        .getAxis2Placement3D(paramsAxis2Placement3D)
    }

    const profile: CanonicalProfile | undefined = this.extractProfile(from.SweptArea)

    if (profile !== void 0 && profile.nativeProfile !== void 0) {

      const dir = {
        x: from.ExtrudedDirection.DirectionRatios[0],
        y: from.ExtrudedDirection.DirectionRatios[1],
        z: from.ExtrudedDirection.DirectionRatios[2],
      }

      // get geometry
      const parameters: ParamsGetExtrudedAreaSolid = {
        depth: from.Depth,
        dir: dir,
        profile: profile.nativeProfile,
      }

      const geometry: GeometryObject = this.conwayModel.getExtrudedAreaSolid(parameters)

      // apply transform
      if (axis2PlacementTransform !== void 0) {
        geometry.applyTransform(axis2PlacementTransform)
      }

      const canonicalMesh: CanonicalMesh = {
        type: CanonicalMeshType.BUFFER_GEOMETRY,
        geometry: geometry,
        localID: from.localID,
        model: this.model,
        temporary: temporary,
      }

      // add mesh to the list of mesh objects
      this.model.geometry.add(canonicalMesh)

    } else {
      console.log(`Couldn't parse profile, expressID: ${from.SweptArea.expressID} type: ${EntityTypesIfc[from.SweptArea.type]}`)
    }
  }

  /**
   * Extract a canonical profile from a profile definition.
   *
   * @param from The profile definition to extract from.
   * @return {CanonicalProfile | undefined} The extracted profile,
   * or undefined if one cannot be extracted.
   */
  extractProfile(from: IfcProfileDef): CanonicalProfile | undefined {

    const foundProfile = this.model.profiles.getByLocalID(from.localID)

    if (foundProfile !== void 0) {

      // we already have this profile, return it and exit
      const elementTest = this.model.getElementByLocalID(foundProfile.localID)
      if (elementTest) {
        console.log(`Already have this profile: ${EntityTypesIfc[elementTest.type]}`)
      }
      return foundProfile
    }

    let profile: CanonicalProfile | undefined

    if (from instanceof IfcArbitraryClosedProfileDef) {
      const outerCurve = from.OuterCurve
      if (outerCurve instanceof IfcCompositeCurve) {
        const compositeCurve = this.extractCompositeCurve(outerCurve)

        if (compositeCurve !== void 0) {
          profile = {
            localID: from.localID,
            curve: compositeCurve,
            holes: void 0,
            profiles: (void 0),
            nativeProfile: (void 0),
          }
        }
      }
      else {

        const curveObject = this.extractCurve(outerCurve)

        if (curveObject) {
          profile = {
            localID: from.localID,
            curve: curveObject,
            holes: void 0,
            profiles: (void 0),
            nativeProfile: (void 0),
          }
        }
      }
    } else if (from instanceof IfcCircleProfileDef) {

      const curveObject = this.extractCircleCurve(from)

      if (curveObject) {
        profile = {
          localID: from.localID,
          curve: curveObject,
          holes: (void 0),
          profiles: (void 0),
          nativeProfile: (void 0),
        }
      }
    } else if (from instanceof IfcCompositeProfileDef) {
      profile = {
        localID: from.localID,
        curve: (void 0),
        holes: (void 0),
        profiles: (void 0),
        nativeProfile: (void 0),
      }

      const profiles: CanonicalProfile[] = []

      for (let profileIndex = 0; profileIndex < from.Profiles.length; ++profileIndex) {
        const profile_ = this.extractProfile(from.Profiles[profileIndex])

        if (profile_ !== void 0) {
          profiles.push(profile_)
        }
      }

      profile.profiles = profiles
    }

    // add profile to the list of profile objects
    let isComposite: boolean = false
    if (profile !== void 0) {
      const holesArray: NativeVectorCurve = this.nativeVectorCurve()
      if (profile.profiles !== void 0 && profile.profiles.length > 0) {
        isComposite = true

        const profilesArray: NativeVectorProfile = this.nativeVectorProfile(profile.profiles.length)

        if (!profile.curve) {
          // create a blank curve for a composite profile
          profile.curve = new (this.wasmModule.IfcCurve as any)
        }

        // we must create a native profile for each profile
        for (let profileIndex = 0; profileIndex < profile.profiles.length; ++profileIndex) {
          const profilesArrayCurrent: NativeVectorProfile = this.nativeVectorProfile()
          const parameters: ParamsCreateNativeIfcProfile = {
            curve: profile.profiles[profileIndex].curve,
            // TODO(nickcastel50): support profiles with holes (out of scope at the moment)
            holes: holesArray,
            isConvex: false,
            isComposite: false,
            profiles: profilesArrayCurrent,
          }

          profile.profiles[profileIndex].nativeProfile =
            this.conwayModel.createNativeIfcProfile(parameters)

          profilesArray.set(profileIndex, profile.profiles[profileIndex].nativeProfile)
        }


        // create native IfcProfile vector
        const parameters: ParamsCreateNativeIfcProfile = {
          curve: profile.curve,
          // TODO(nickcastel50): support profiles with holes (out of scope at the moment)
          holes: holesArray,
          isConvex: false,
          isComposite: isComposite,
          profiles: profilesArray,
        }

        profile.nativeProfile = this.conwayModel.createNativeIfcProfile(parameters)
      } else {

        const profilesArray: NativeVectorProfile = this.nativeVectorProfile()
        const parameters: ParamsCreateNativeIfcProfile = {
          curve: profile.curve,
          // TODO(nickcastel50): support profiles with holes (out of scope at the moment)
          holes: holesArray,
          isConvex: false,
          isComposite: isComposite,
          profiles: profilesArray,
        }

        profile.nativeProfile = this.conwayModel.createNativeIfcProfile(parameters)
      }

      // Check if profile is already in the model's profiles
      const existingProfile = this.model.profiles.getByLocalID(profile.localID)

      if (!existingProfile) {
        // If profile is not already in the model's profiles, add it
        this.model.profiles.add(profile)
      }
    }

    return profile
  }

  /**
   * 
   * @param from 
   * @returns {CurveObject | undefined}
   */
  extractCompositeCurve(from: IfcCompositeCurve): CurveObject | undefined {
    const curveObjects: CurveObject[] = []
    let compositeCurve: CurveObject | undefined = undefined
    for (let i = 0; i < from.Segments.length; i++) {

      const parentCurve = from.Segments[i].ParentCurve
      let currentCurveObject = undefined
      if (parentCurve instanceof IfcCompositeCurve) {
        currentCurveObject = this.extractCompositeCurve(parentCurve)
      } else {
        currentCurveObject = this.extractCurve(from.Segments[i].ParentCurve)
      }

      if (currentCurveObject !== undefined) {
        if (i === 0) {
          compositeCurve = currentCurveObject
        } else {
          if (from.Segments[i].Dim === 2) {
            for (let j = 0; j < currentCurveObject.getPointsSize(); ++j) {
              compositeCurve!.add2d(currentCurveObject.get2d(j))
            }
          } else if (from.Segments[i].Dim === 3) {
            for (let j = 0; j < currentCurveObject.getPointsSize(); ++j) {
              compositeCurve!.add3d(currentCurveObject.get3d(j))
            }
          }
        }
      } else {
        console.log(`curve segment parse === undefined`)
      }
    }

    return compositeCurve
  }

  /**
   * 
   * @param from 
   * @returns {CurveObject | undefined}
   */
  extractCurve(from: IfcCurve | IfcTrimmedCurve | IfcPolyline | IfcIndexedPolyCurve | IfcCircle): CurveObject | undefined {
    if (from instanceof IfcTrimmedCurve) {
      return this.extractIfcTrimmedCurve(from)
    }

    if (from instanceof IfcPolyline) {
      return this.extractIfcPolyline(from)
    }

    if (from instanceof IfcIndexedPolyCurve) {
      return this.extractIndexedPolyCurve(from)
    }

    if (from instanceof IfcCircle) {
      return this.extractIfcCircle(from)
    }

    console.log(`Unsupported Curve! Type: ${EntityTypesIfc[from.type]}`)
  }


  extractIfcCircle(from: IfcCircle, parametersTrimmedCurve: ParamsGetIfcTrimmedCurve = {
    masterRepresentation: 0,
    dimensions: 0,
    senseAgreement: false,
    trim1Cartesian2D: undefined,
    trim1Cartesian3D: undefined,
    trim1Double: 0,
    trim2Cartesian2D: undefined,
    trim2Cartesian3D: undefined,
    trim2Double: 0
  }): CurveObject | undefined {

    let axis2Placement2D: any = void 0 //glmdmat3
    let axis2Placement3D: any = void 0 //glmdmat4
    if (from.Position instanceof IfcAxis2Placement2D) {
      axis2Placement2D = this.extractAxis2Placement2D(from.Position)
      axis2Placement3D = (new (this.wasmModule.glmdmat4)) as any
    } else {
      axis2Placement3D = this.extractAxis2Placement3D(from.Position, from.localID, true)
      axis2Placement2D = (new (this.wasmModule.glmdmat3)) as any
    }

    const parametersIfcCircle: ParamsGetIfcCircle = {
      dimensions: from.Dim,
      axis2Placement2D: axis2Placement2D,
      axis2Placement3D: axis2Placement3D,
      radius: from.Radius,
      paramsGetIfcTrimmedCurve: parametersTrimmedCurve
    }

    const curve: CurveObject = this.conwayModel.getIfcCircle(parametersIfcCircle)

    return curve
  }

  /**
   * 
   * @param from 
   * @returns {CurveObject | undefined}
   */
  extractIfcTrimmedCurve(from: IfcTrimmedCurve): CurveObject | undefined {

    let trim1Cartesian2D: Vector2 = { x: 0, y: 0 }
    let trim1Cartesian3D: Vector3 = { x: 0, y: 0, z: 0 }
    let trim1Double: number = 0
    let trim2Cartesian2D: Vector2 = { x: 0, y: 0 }
    let trim2Cartesian3D: Vector3 = { x: 0, y: 0, z: 0 }
    let trim2Double: number = 0

    //use Cartesian if unspecified  
    if (from.MasterRepresentation === IfcTrimmingPreference.CARTESIAN ||
      from.MasterRepresentation === IfcTrimmingPreference.UNSPECIFIED) {
      for (let trimIndex = 0; trimIndex < from.Trim1.length; trimIndex++) {
        const trim1 = from.Trim1[trimIndex]
        if (trim1 instanceof IfcCartesianPoint) {

          if (from.Dim === 2) {
            trim1Cartesian2D = {
              x: trim1.Coordinates[0],
              y: trim1.Coordinates[1]
            }
          } else if (from.Dim === 3) {
            trim1Cartesian3D = {
              x: trim1.Coordinates[0],
              y: trim1.Coordinates[1],
              z: trim1.Coordinates[2],
            }
          }

          break
        }
      }

      for (let trimIndex = 0; trimIndex < from.Trim2.length; trimIndex++) {
        const trim2 = from.Trim2[trimIndex]
        if (trim2 instanceof IfcCartesianPoint) {

          if (from.Dim === 2) {
            trim2Cartesian2D = {
              x: trim2.Coordinates[0],
              y: trim2.Coordinates[1]
            }
          } else if (from.Dim === 3) {
            trim2Cartesian3D = {
              x: trim2.Coordinates[0],
              y: trim2.Coordinates[1],
              z: trim2.Coordinates[2],
            }
          }

          break
        }
      }
    } else {
      //use parameter value 
      for (let trimIndex = 0; trimIndex < from.Trim1.length; trimIndex++) {
        const trim1 = from.Trim1[trimIndex]
        if (trim1 instanceof IfcParameterValue) {
          trim1Double = trim1.Value
          break
        }
      }

      for (let trimIndex = 0; trimIndex < from.Trim2.length; trimIndex++) {
        const trim2 = from.Trim2[trimIndex]
        if (trim2 instanceof IfcParameterValue) {
          trim2Double = trim2.Value
          break
        }
      }
    }


    const paramsGetIfcTrimmedCurve: ParamsGetIfcTrimmedCurve = {
      masterRepresentation: from.MasterRepresentation.valueOf(),
      dimensions: from.Dim,
      senseAgreement: from.SenseAgreement,
      trim1Cartesian2D: trim1Cartesian2D,
      trim1Cartesian3D: trim1Cartesian3D,
      trim1Double: trim1Double,
      trim2Cartesian2D: trim2Cartesian2D,
      trim2Cartesian3D: trim2Cartesian3D,
      trim2Double: trim2Double
    }

    if (from.BasisCurve instanceof IfcCircle) {
      const curveObject = this.extractIfcCircle(from.BasisCurve, paramsGetIfcTrimmedCurve)

      if (curveObject !== void 0) {
        return curveObject
      }

    } else {
      console.log(`[IfcTrimmedCurve]: Unsupported basisCurve type: ${EntityTypesIfc[from.BasisCurve.type]} expressID: ${from.BasisCurve.expressID}`)
    }

    return undefined
  }


  /**
   * 
   * @param from 
   * @returns {CurveObject | undefined }
   */
  extractIfcPolyline(from: IfcPolyline): CurveObject | undefined {

    if (from.Points.length > 0) {
      const nativeCurve = (new (this.wasmModule.IfcCurve)) as CurveObject
      //dims check 
      if (from.Dim == 2) {
        for (let pointsIndex = 0; pointsIndex < from.Points.length; ++pointsIndex) {

          const coords = from.Points[pointsIndex].Coordinates
          const coord = {
            x: coords[0],
            y: coords[1],
          }

          nativeCurve.add2d(coord)
        }
      } else {
        for (let pointsIndex = 0; pointsIndex < from.Points.length; ++pointsIndex) {
          const coords = from.Points[pointsIndex].Coordinates

          const coord = {
            x: coords[0],
            y: coords[1],
            z: coords[2]
          }

          nativeCurve.add3d(coord)
        }
      }

      return nativeCurve

    }
  }


  /**
   * Extract a curve object from a circle profile.
   *
   * @param from The circle definition to extract from.
   * @return {CurveObject | undefined} The extracted circle curve,
   * or undefined if one cannot be extracted.
   */
  extractCircleCurve(from: IfcCircleProfileDef): CurveObject | undefined {
    if (from.Position !== null) {
      const placement2D = this.extractAxis2Placement2D(from.Position)

      const paramsGetCircleCurve: ParamsGetCircleCurve = {
        radius: from.Radius,
        hasPlacement: true,
        placement: placement2D,
      }

      const ifcCurve: CurveObject = this.conwayModel.getCircleCurve(paramsGetCircleCurve)
      return ifcCurve

    } else {
      const paramsGetCircleCurve: ParamsGetCircleCurve = {
        radius: from.Radius,
        hasPlacement: false,
        placement: (void 0),
      }

      const ifcCurve: CurveObject = this.conwayModel.getCircleCurve(paramsGetCircleCurve)
      return ifcCurve
    }
  }

  /**
   * Extract an indexed poly curve and turn it into a curve object.
   *
   * @param from - IfcIndexedPolyCurve to process
   * @return {CurveObject | undefined} The extracted curve or undefined if it
   * can't be extracted.
   */
  extractIndexedPolyCurve(from: IfcIndexedPolyCurve): CurveObject | undefined {

    if (from.Points instanceof IfcCartesianPointList3D) {
      console.log('IfcCartesianPointList3D not supported in IfcIndexedPolycurve.')
      return
    }

    // TODO(Error happening here on access)
    // //console.log(`\t\t\touterCurve.Dim: ${outerCurve.Dim}`)

    // initialize new segment vector
    const segmentVector = this.nativeSegmentVector()

    if (from.Segments !== null) {

      for (let i = 0; i < from.Segments.length; i++) {

        const indexArray = this.createAndPopulateNativeIndices(from.Segments[i].Value)

        const segment: Segment = {
          isArcType: (from.Segments[i].type === EntityTypesIfc.IFCARCINDEX),
          indices: indexArray,
        }

        segmentVector.push_back(segment)
      }
    }

    if (from.Points instanceof IfcCartesianPointList2D) {
      const points = from.Points.CoordList.map(([x, y]) => ({ x: x, y: y } as Vector2))

      // initialize new native glm::vec3 array object (free memory with delete())
      const pointsArray: NativeVectorGlmVec2 = this.nativeVectorGlmVec2(points.length)

      // populate points array
      for (let i = 0; i < points.length; i++) {
        pointsArray.set(i, points[i])
      }

      const paramsGetIndexedPolyCurve: ParamsGetIfcIndexedPolyCurve = {
        dimensions: 2,
        segments: segmentVector,
        points: pointsArray,
      }

      const ifcCurve: CurveObject = this.conwayModel.getIndexedPolyCurve(paramsGetIndexedPolyCurve)

      return ifcCurve
    }

  }

  /**
   * Extract a mapped item to add its transform to instance an item.
   *
   * @param from The mapped item to extract.
   */
  extractMappedItem(from: IfcMappedItem) {

    const representationMap = from.MappingSource
    const mappingTarget = from.MappingTarget

    let popTransform = false

    if (mappingTarget instanceof IfcCartesianTransformationOperator3D) {

      const nativeCartesianTransform =
        this.extractCartesianTransformOperator3D(mappingTarget)

      this.scene.addTransform(
        mappingTarget.localID,
        nativeCartesianTransform.getValues(),
        nativeCartesianTransform)

      popTransform = true
    }

    for (const representationItem of representationMap.MappedRepresentation.Items) {

      this.extractRepresentationItem(representationItem)
    }

    if (popTransform) {

      this.scene.popTransform()
    }
  }

  /**
   * Extract a representation item, including its geometry if necessary,
   * adding it to the current scene walk.
   *
   * Note - memoized result for instancing.
   *
   * @param from The representation to extract from.
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


    } else if (from instanceof IfcBooleanResult) {
      //also handles IfcBooleanClippingResult
      this.extractBooleanResult(from)

      // TODO: (Error with this geometry here for momentum.ifc...)
      // if (from.expressID !== 108680)
      this.scene.addGeometry(from.localID)

    } else if (from instanceof IfcExtrudedAreaSolid) {

      this.extractExtrudedAreaSolid(from)
      this.scene.addGeometry(from.localID)

    } else if (from instanceof IfcHalfSpaceSolid) {
      this.extractHalfspaceSolid(from)
      this.scene.addGeometry(from.localID)


    } else if (from instanceof IfcMappedItem) {

      this.extractMappedItem(from)
    } else if (from instanceof IfcPolyline) {
      //web-ifc ignores IfcPolylines as meshes
    } else if (from instanceof IfcShellBasedSurfaceModel) {
      this.extractIfcShellBasedSurfaceModel(from)
    }
    else {
      console.log(`Unsupported type: ${EntityTypesIfc[from.type]} expressID: ${from.expressID}`)
    }

  }


  extractIfcShellBasedSurfaceModel(from: IfcShellBasedSurfaceModel) {
    const sbsmBoundary = from.SbsmBoundary

    if (sbsmBoundary.length > 0) {
      if (sbsmBoundary[0] instanceof IfcClosedShell) {
        for (let sbsmBoundaryIndex = 0; sbsmBoundaryIndex < sbsmBoundary.length; ++sbsmBoundaryIndex) {
          const currentBoundary: IfcClosedShell = sbsmBoundary[sbsmBoundaryIndex]
          const faces = currentBoundary.CfsFaces

          this.extractFaces(faces, currentBoundary.localID)
        }
      } else if (sbsmBoundary[0] instanceof IfcOpenShell) {
        for (let sbsmBoundaryIndex = 0; sbsmBoundaryIndex < sbsmBoundary.length; ++sbsmBoundaryIndex) {
          const currentBoundary: IfcOpenShell = sbsmBoundary[sbsmBoundaryIndex]
          const faces = currentBoundary.CfsFaces

          this.extractFaces(faces, currentBoundary.localID)
        }
      } else {
        console.log(`Unsupported IfcShellBasedSurfaceModel: ${EntityTypesIfc[from.type]} expressID: ${from.expressID}`)
      }
    }
  }


  extractFaces(from: IfcFace[], parentLocalID: number) {
    const geometry = (new (this.wasmModule.IfcGeometry)) as GeometryObject
    for (let faceIndex = 0; faceIndex < from.length; ++faceIndex) {
      const face: IfcFace = from[faceIndex]
      this.extractFace(face, geometry)
    }

    const canonicalMesh: CanonicalMesh = {
      type: CanonicalMeshType.BUFFER_GEOMETRY,
      geometry: geometry,
      localID: parentLocalID,
      model: this.model,
      temporary: false,
    }

    //console.log(`faces geometry.getIndexDataSize(): ${geometry.getIndexDataSize()}`)

    // add mesh to the list of mesh objects
    this.model.geometry.add(canonicalMesh)
  }

  extractFace(from: IfcFace, geometry: GeometryObject) {
    if (from.Bounds.length > 0) {
      const vec3Array = this.nativeVectorGlmdVec3()
      if (from.Bounds[0] instanceof IfcFaceOuterBound) {
        const bound3DVector = this.nativeBound3DVector()
        for (let boundIndex = 0; boundIndex < from.Bounds.length; ++boundIndex) {
          const bound: IfcFaceBound = from.Bounds[boundIndex]

          if (bound.Bound instanceof IfcPolyLoop) {
            bound.Bound.Polygon

            let prevLocalID: number = -1

            for (let pointIndex = 0; pointIndex < bound.Bound.Polygon.length; ++pointIndex) {
              const vec3 = {
                x: bound.Bound.Polygon[pointIndex].Coordinates[0],
                y: bound.Bound.Polygon[pointIndex].Coordinates[1],
                z: bound.Bound.Polygon[pointIndex].Coordinates[2]
              }

              const currentLocalID: number = bound.Bound.Polygon[pointIndex].localID
              if (currentLocalID !== prevLocalID) {
                vec3Array.push_back(vec3)
                prevLocalID = currentLocalID
              } else {
                console.log(`Pruning duplicate point, localID: ${currentLocalID}`)
              }
            }
          } else {
            console.log(`Unsupported Loop! Type: ${EntityTypesIfc[bound.Bound.type]} expressID: ${from.expressID}`)
          }

          // get curve
          const parameters: ParamsGetLoop = {
            isEdgeLoop: false,
            points: vec3Array,
          }

          const curve: CurveObject = this.conwayModel.getLoop(parameters)

          //create bound vector
          const parametersCreateBounds3D: ParamsCreateBound3D = {
            curve: curve,
            orientation: bound.Orientation,
            type: (bound.type === EntityTypesIfc.IFCFACEOUTERBOUND) ? 0 : 1,
          }

          const bound3D: Bound3DObject = this.conwayModel.createBound3D(parametersCreateBounds3D)

          bound3DVector.push_back(bound3D)
        }

        // add face to geometry
        const defaultSurface = (new (this.wasmModule.IfcSurface)) as SurfaceObject
        const parameters: ParamsAddFaceToGeometry = {
          boundsArray: bound3DVector,
          advancedBrep: false,
          surface: defaultSurface,
        }

        this.conwayModel.addFaceToGeometry(parameters, geometry)

        bound3DVector.delete()
      } else if (from.Bounds[0] instanceof IfcFaceBound) {
        const bound3DVector = this.nativeBound3DVector()
        for (let boundIndex = 0; boundIndex < from.Bounds.length; ++boundIndex) {
          const bound: IfcFaceBound = from.Bounds[boundIndex]

          console.log(`[IfcFaceBound][Bound Loop[${boundIndex}] Type]: ${EntityTypesIfc[bound.Bound.type]}`)

          if (bound.Bound instanceof IfcPolyLoop) {
            bound.Bound.Polygon

            let prevLocalID: number = -1

            for (let pointIndex = 0; pointIndex < bound.Bound.Polygon.length; ++pointIndex) {
              const vec3 = {
                x: bound.Bound.Polygon[pointIndex].Coordinates[0],
                y: bound.Bound.Polygon[pointIndex].Coordinates[1],
                z: bound.Bound.Polygon[pointIndex].Coordinates[2]
              }

              const currentLocalID: number = bound.Bound.Polygon[pointIndex].localID
              if (currentLocalID !== prevLocalID) {
                vec3Array.push_back(vec3)
                prevLocalID = currentLocalID
              } else {
                console.log(`Pruning duplicate point, localID: ${currentLocalID}`)
              }
            }
          }
          // get curve
          const parameters: ParamsGetLoop = {
            isEdgeLoop: true,
            points: vec3Array,
          }

          const curve: CurveObject = this.conwayModel.getLoop(parameters)

          //create bound vector
          const parametersCreateBounds3D: ParamsCreateBound3D = {
            curve: curve,
            orientation: bound.Orientation,
            type: (bound.type === EntityTypesIfc.IFCFACEOUTERBOUND) ? 0 : 1,
          }

          const bound3D: Bound3DObject = this.conwayModel.createBound3D(parametersCreateBounds3D)

          bound3DVector.push_back(bound3D)

        }

        // add face to geometry
        const defaultSurface = (new (this.wasmModule.IfcSurface)) as SurfaceObject
        const parameters: ParamsAddFaceToGeometry = {
          boundsArray: bound3DVector,
          advancedBrep: false,
          surface: defaultSurface,
        }

        this.conwayModel.addFaceToGeometry(parameters, geometry)

        bound3DVector.delete()
      }

    }
  }

  /**
   * Extract an axis placement 2D native object.
   *
   * @param from The axis 2 placement to extract.
   * @return {any} The native placement transform.
   */
  extractAxis2Placement2D(from: IfcAxis2Placement2D): any {

    let normalizeX: boolean = false

    if (from.RefDirection !== null) {
      normalizeX = true
    }

    const position2D = {
      x: from.Location.Coordinates[0],
      y: from.Location.Coordinates[1],
    }

    const xAxisRef = {
      x: from.RefDirection?.DirectionRatios[0],
      y: from.RefDirection?.DirectionRatios[1],
    }

    const axis2Placement2DParameters: ParamsGetAxis2Placement2D = {
      isAxis2Placement2D: true,
      isCartesianTransformationOperator2D: false,
      isCartesianTransformationOperator2DNonUniform: false,
      position2D: position2D,
      customAxis1Ref: normalizeX,
      axis1Ref: xAxisRef,
      customAxis2Ref: false,
      axis2Ref: xAxisRef,
      customScale: false,
      scale1: 0,
      customScale2: false,
      scale2: 0,
    }

    const axis2Placement2DTransform = this.conwayModel
      .getAxis2Placement2D(axis2Placement2DParameters)

    return axis2Placement2DTransform
  }

  /**
   * Extract a placement, adding it to the scene.
   *
   * @param from The transform to extract.
   * @param parentLocalId The parent's local ID.
   * @return {void}
   */
  extractAxis2Placement3D(from: IfcAxis2Placement3D, parentLocalId: number): void
  /**
   * Extract a placement (no memoization/scene creation)
   *
   * @param from The transform to extract.
   * @param parentLocalId The parent's local ID.
   * @param extractOnly {true} Only extract, don't memoize and add to the scene
   * @return {ParamsAxis2Placement3D} The extracted placement.
   */
  // eslint-disable-next-line no-dupe-class-members
  extractAxis2Placement3D(
    from: IfcAxis2Placement3D,
    parentLocalId: number,
    extractOnly: true): ParamsAxis2Placement3D
  // eslint-disable-next-line no-dupe-class-members, require-jsdoc
  extractAxis2Placement3D(
    from: IfcAxis2Placement3D,
    parentLocalId: number,
    extractOnly: boolean = false): void | ParamsAxis2Placement3D {

    if (from === null) {
      return
    }

    const result = this.scene.getTransform(parentLocalId)

    if (result !== void 0) {

      this.scene.pushTransform(result)

      return
    }

    let normalizeZ: boolean = false
    let normalizeX: boolean = false

    if (from.Axis !== null) {
      normalizeZ = true
    }

    if (from.RefDirection !== null) {
      normalizeX = true
    }

    const position = {
      x: from.Location.Coordinates[0],
      y: from.Location.Coordinates[1],
      z: from.Location.Coordinates[2],
    }

    const zAxisRef = {
      x: from.Axis?.DirectionRatios[0],
      y: from.Axis?.DirectionRatios[1],
      z: from.Axis?.DirectionRatios[2],
    }

    const xAxisRef = {
      x: from.RefDirection?.DirectionRatios[0],
      y: from.RefDirection?.DirectionRatios[1],
      z: from.RefDirection?.DirectionRatios[2],
    }

    const axis2Placement3DParameters: ParamsAxis2Placement3D = {
      position: position,
      zAxisRef: zAxisRef,
      xAxisRef: xAxisRef,
      normalizeZ: normalizeZ,
      normalizeX: normalizeX,
    }

    if (extractOnly) {
      return axis2Placement3DParameters
    }

    const axis2PlacementTransform = this.conwayModel
      .getAxis2Placement3D(axis2Placement3DParameters)

    this.scene.addTransform(
      parentLocalId,
      axis2PlacementTransform.getValues(),
      axis2PlacementTransform)
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

      if (relativePlacement instanceof IfcAxis2Placement3D) {

        this.extractAxis2Placement3D(relativePlacement, from.localID)
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

      if (product instanceof IfcOpeningElement ||
        product instanceof IfcSpace ||
        product instanceof IfcOpeningStandardCase) {
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

    const styledItems = this.model.types(IfcStyledItem)

    for (const styledItem of styledItems) {

      this.extractStyledItem(styledItem)
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
