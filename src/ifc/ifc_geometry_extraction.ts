import {
  ConwayGeometry,
  ParamsPolygonalFaceSet,
  GeometryObject,
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
  ParamsGetRectangleProfileCurve,
  ParamsRelVoidSubtract,
  StdVector,
  ParamsAxis1Placement3D,
  ParamsGetBSplineCurve,
  BSplineSurface,
} from '../../dependencies/conway-geom/conway_geometry'
import { CanonicalMaterial, ColorRGBA, exponentToRoughness } from '../core/canonical_material'
import { CanonicalMesh, CanonicalMeshType } from '../core/canonical_mesh'
import { CanonicalProfile } from '../core/canonical_profile'
import {
  NativeTransform,
  NativeULongVector,
  NativeUintVector,
  NativeVectorBound3D,
  NativeVectorCurve,
  NativeVectorGeometry,
  NativeVectorGeometryCollection,
  NativeVectorGlmVec2,
  NativeVectorGlmVec3,
  NativeVectorIndexedPolygonalFace,
  NativeVectorProfile,
  NativeVectorSegment,
  WasmModule,
} from '../core/native_types'
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
  IfcPolyLoop,
  IfcFacetedBrep,
  IfcRelAssociatesMaterial,
  IfcShapeRepresentation,
  IfcMaterialList,
  IfcMaterialDefinitionRepresentation,
  IfcMaterialLayerSetUsage,
  IfcMaterial,
  IfcRelVoidsElement,
  IfcRectangleProfileDef,
  IfcFeatureElementSubtraction,
  IfcMaterialProfileSet,
  IfcMaterialConstituentSet,
  IfcMaterialConstituent,
  IfcMaterialProfile,
  IfcProject,
  IfcSIUnit,
  IfcSIPrefix,
  IfcUnitEnum,
  IfcSIUnitName,
  IfcConversionBasedUnit,
  IfcFaceBasedSurfaceModel,
  IfcConnectedFaceSet,
  IfcArbitraryProfileDefWithVoids,
  IfcAdvancedBrep,
  IfcAdvancedFace,
  IfcBSplineCurve,
  IfcBSplineSurface,
  IfcBSplineSurfaceWithKnots,
  IfcRationalBSplineSurfaceWithKnots,
  IfcCylindricalSurface,
  IfcSurfaceOfRevolution,
  IfcSurfaceOfLinearExtrusion,
  IfcRationalBSplineCurveWithKnots,
  IfcAxis1Placement,
  IfcArbitraryOpenProfileDef,
  IfcBSplineCurveWithKnots,
  IfcEdgeLoop,
  IfcEdgeCurve,
  IfcVertexPoint,
} from './ifc4_gen'
import EntityTypesIfc from './ifc4_gen/entity_types_ifc.gen'
import { IfcMaterialCache } from './ifc_material_cache'
import { IfcSceneBuilder, IfcSceneTransform } from './ifc_scene_builder'
import IfcStepModel from './ifc_step_model'


type Mutable<T> = { -readonly [P in keyof T]: T[P] }

/**
 * Enum presenting the extraction results.
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

  /* eslint-disable no-magic-numbers */
  private readonly TWO_DIMENSIONS: number = 2
  private readonly THREE_DIMENSIONS: number = 3

  private wasmModule: WasmModule

  public readonly scene: IfcSceneBuilder

  public readonly voidScene: IfcSceneBuilder

  public readonly materials: IfcMaterialCache

  public readonly voidMaterials: IfcMaterialCache

  private readonly relVoidsMap: Map<number, number>

  private readonly productToVoidGeometryMap: Map<number, number[]>
  private linearScalingFactor: number

  /**
   * Construct a geometry extraction from an IFC step model and conway model
   *
   * @param conwayModel
   * @param model
   */
  constructor(
    private readonly conwayModel: ConwayGeometry,
    public readonly model: IfcStepModel) {

    this.materials = new IfcMaterialCache()
    this.scene = new IfcSceneBuilder(model, conwayModel, this.materials)

    this.voidMaterials = new IfcMaterialCache()
    this.voidScene = new IfcSceneBuilder(model, conwayModel, this.voidMaterials)

    this.relVoidsMap = new Map<number, number>()
    this.productToVoidGeometryMap = new Map<number, number[]>()
    this.linearScalingFactor = 1
    this.wasmModule = conwayModel.wasmModule
  }

  /**
   *
   * @return {number} linear matrix scaling factor for geometry
   */
  getLinearScalingFactor(): number {
    return this.linearScalingFactor
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
   * Create a native vector of geometry collections.
   *
   * @return {NativeVectorGeometryCollection} A newly initialised native
   * vector of geometry collections
   */
  nativeVectorGeometryCollection(): NativeVectorGeometryCollection {
    const nativeVectorGeometryCollection =
      // eslint-disable-next-line new-cap
      (new (this.wasmModule.geometryCollectionArray)()) as NativeVectorGeometryCollection

    return nativeVectorGeometryCollection
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
  nativeVectorVectorGlmdVec3(): StdVector< NativeVectorGlmVec3 > {
    const nativeVectorVectorGlmdVec3_ =
      // eslint-disable-next-line new-cap
      (new (this.wasmModule.glmdVec3ArrayArray)()) as StdVector< NativeVectorGlmVec3 >

    return nativeVectorVectorGlmdVec3_
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
   *
   * @param initialSize number - initial size of the vector (optional)
   * @return {NativeVectorGlmVec3} - a native std::vector<glm::vec3> from the wasm module
   */
  nativeVectorGlmdVec2(initialSize?: number): NativeVectorGlmVec2 {
    const nativeVectorGlmdVec2_ =
      // eslint-disable-next-line new-cap
      (new (this.wasmModule.glmdVec2Array)()) as NativeVectorGlmVec2

    if (initialSize) {
      // resize has a required second parameter to set default values
      nativeVectorGlmdVec2_.resize(initialSize, { x: 0, y: 0 })
    }

    return nativeVectorGlmdVec2_
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

  private readonly freeVectorPolygonalFaces_: NativeVectorIndexedPolygonalFace[] = []

  /**
   * Drop and delete all the indexed polygonal face vectors.
   */
  dropAllNativeIndexedPolygonalFaceVector(): void {

    while ( this.freeVectorPolygonalFaces_.length > 0 ) {

      this.freeVectorPolygonalFaces_.pop()?.delete()
    }
  }

  /**
   * Free the native indexed polygon face.
   *
   * @param nativeVectorIndexedPolygonalFace The native item to free.
   */
  freeNativeIndexedPolygonalFaceVector(
      nativeVectorIndexedPolygonalFace: NativeVectorIndexedPolygonalFace ): void {

    this.freeVectorPolygonalFaces_.push( nativeVectorIndexedPolygonalFace )
  }

  /**
   * Create a native vector of indexed polygonal faces uint vector.
   *
   * @param initialSize number - initial size of the vector (optional)
   * @return {NativeVectorIndexedPolygonalFace} - a native object from the wasm module
   */
  nativeIndexedPolygonalFaceVector(initialize?: number): NativeVectorIndexedPolygonalFace {
    let nativeVectorIndexedPolygonalFace: NativeVectorIndexedPolygonalFace

    if ( this.freeVectorPolygonalFaces_.length > 0 ) {
      nativeVectorIndexedPolygonalFace = this.freeVectorPolygonalFaces_.pop() as
        NativeVectorIndexedPolygonalFace

      if ( nativeVectorIndexedPolygonalFace.size() > 0 ) {

        nativeVectorIndexedPolygonalFace.resize( 0, nativeVectorIndexedPolygonalFace.get( 0 ) )
      }
    } else {
      nativeVectorIndexedPolygonalFace = new
        (this.wasmModule.VectorIndexedPolygonalFace)() as NativeVectorIndexedPolygonalFace
    }

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
   * @return {NativeVectorBound3D}
   */
  nativeBound3DVector(initialize?: number): NativeVectorBound3D {
    const nativeVectorBound3D =
      new (this.wasmModule.Bound3DArray)() as NativeVectorBound3D

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
  isInitialized(): boolean {
    if (this.conwayModel !== void 0) {
      return this.conwayModel.initialized
    }

    return false
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

  /**
   *
   * @param entity - IfcPolygonalFaceSet
   * @param polygonalFaceStartIndices - Vector of face start indices
   * @param modelId - current modelId
   * @return {ExtractResult} - Extraction status result
   */
  private extractPolygonalFaceSet(entity: IfcPolygonalFaceSet,
      polygonalFaceStartIndices: NativeULongVector,
      temporary: boolean = false,
      isRelVoid: boolean = false): ExtractResult {
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

        coordIndex.delete()
        polygonalFaceStartIndicesVoids.delete()

      } else {

        indicesPerFace = polygonalFace.CoordIndex.length

        const coordIndex = this.createAndPopulateNativeIndices(polygonalFace.CoordIndex)

        const indexedPolygonalFaceParameters: IndexedPolygonalFace = {
          indices: coordIndex,
          face_starts: polygonalFaceStartIndices,
        }

        polygonalFaceVector.push_back(indexedPolygonalFaceParameters)

        coordIndex.delete()
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

    // free allocated wasm vectors
    pointsArray.delete()

    this.freeNativeIndexedPolygonalFaceVector(
        polygonalFaceVector )

    const canonicalMesh: CanonicalMesh = {
      type: CanonicalMeshType.BUFFER_GEOMETRY,
      geometry: geometry,
      localID: entity.localID,
      model: this.model,
      temporary: temporary,
    }

    // add mesh to the list of mesh objects
    if (!isRelVoid) {
      this.model.geometry.add(canonicalMesh)
    } else {
      this.model.voidGeometry.add(canonicalMesh)
    }

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
   *
   * @param from
   */
  extractBooleanResult(from: IfcBooleanResult | IfcBooleanClippingResult,
      isRelVoid: boolean = false) {

    if (from.FirstOperand instanceof IfcExtrudedAreaSolid ||
      from.FirstOperand instanceof IfcPolygonalFaceSet ||
      from.FirstOperand instanceof IfcBooleanResult ||
      from.FirstOperand instanceof IfcBooleanClippingResult) {
      this.extractBooleanOperand(from.FirstOperand, isRelVoid)
    }

    if (from.SecondOperand instanceof IfcExtrudedAreaSolid ||
      from.SecondOperand instanceof IfcPolygonalFaceSet ||
      from.SecondOperand instanceof IfcBooleanResult ||
      from.SecondOperand instanceof IfcHalfSpaceSolid) {
      this.extractBooleanOperand(from.SecondOperand, isRelVoid)
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
        if (!isRelVoid) {
          this.model.geometry.add(canonicalMesh)
        } else {
          this.model.voidGeometry.add(canonicalMesh)
        }
      }
    }

    flatFirstMeshVector.delete()
    flatSecondMeshVector.delete()
  }

  /**
   * Extract a boolean operand from a boolean result.
   *
   * @param from The operand to extract.
   * @return {void}
   */
  extractBooleanOperand(from: IfcExtrudedAreaSolid |
    IfcPolygonalFaceSet |
    IfcBooleanResult |
    IfcHalfSpaceSolid |
    IfcBooleanClippingResult,
  isRelVoid: boolean = false) {

    if (from instanceof IfcExtrudedAreaSolid) {
      // mark as temporary
      this.extractExtrudedAreaSolid(from, true, isRelVoid)
    } else if (from instanceof IfcPolygonalFaceSet) {
      // initialize new native indices array (free memory with delete())
      const polygonalFaceStartIndices: NativeULongVector = this.nativeULongVector(1)

      polygonalFaceStartIndices.set(0, 0)

      // mark as temporary
      const faceSetResult: ExtractResult =
        this.extractPolygonalFaceSet(from, polygonalFaceStartIndices, true, isRelVoid)

      if (faceSetResult !== ExtractResult.COMPLETE) {
        console.log(`Warning, face set express ID: ${from.expressID} extraction incomplete.`)
      }

      polygonalFaceStartIndices.delete()
    } else if (from instanceof IfcHalfSpaceSolid) {
      this.extractHalfspaceSolid(from, true, isRelVoid)
    } else if (from instanceof IfcBooleanResult) {

      if (from.FirstOperand instanceof IfcExtrudedAreaSolid ||
        from.FirstOperand instanceof IfcPolygonalFaceSet ||
        from.FirstOperand instanceof IfcBooleanResult ||
        from.FirstOperand instanceof IfcBooleanClippingResult) {
        this.extractBooleanOperand(from.FirstOperand, isRelVoid)
      }

      if (from.SecondOperand instanceof IfcExtrudedAreaSolid ||
        from.SecondOperand instanceof IfcPolygonalFaceSet ||
        from.SecondOperand instanceof IfcBooleanResult ||
        from.SecondOperand instanceof IfcHalfSpaceSolid) {
        this.extractBooleanOperand(from.SecondOperand, isRelVoid)
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
      if (!isRelVoid) {
        this.model.geometry.add(canonicalMesh)
      } else {
        this.model.voidGeometry.add(canonicalMesh)
      }
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

      const readDoubleSided = from.Side === IfcSurfaceSide.BOTH ||
        from.Side === IfcSurfaceSide.POSITIVE

      const newMaterial: Mutable<CanonicalMaterial> = {
        name: `#${from.expressID}`,
        baseColor: [0.8, 0.8, 0.8, 1],
        legacyColor: [0.8, 0.8, 0.8, 1],
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

          newMaterial.legacyColor = surfaceColor

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
   * @return {number | undefined}
   */
  extractStyledItem(from: IfcStyledItem,
      representationItem?: IfcRepresentationItem): number | undefined {

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


    if (surfaceStyleID === void 0) {
      return
    }

    if (representationItem !== undefined) {
      this.materials.addGeometryMapping(representationItem.localID, surfaceStyleID)
    } else if (from.Item !== null) {
      this.materials.addGeometryMapping(from.Item.localID, surfaceStyleID)
    }

    return surfaceStyleID
  }

  /**
   *
   * @param from
   * @param temporary
   */
  extractHalfspaceSolid(from: IfcHalfSpaceSolid,
      temporary: boolean = false,
      isRelVoid: boolean = false) {

    if (from.BaseSurface instanceof IfcPlane) {
      const paramsAxis2Placement3D: ParamsAxis2Placement3D =
        this.extractAxis2Placement3D(from.BaseSurface.Position, from.localID, true)
      const axis2PlacementTransform = this.conwayModel
          .getAxis2Placement3D(paramsAxis2Placement3D)

      // get geometry
      const parameters: ParamsGetHalfspaceSolid = {
        flipWinding: from.AgreementFlag,
        optionalLinearScalingFactor: this.linearScalingFactor,
      }

      const geometry: GeometryObject = this.conwayModel.getHalfSpaceSolid(parameters)

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
      if (!isRelVoid) {
        this.model.geometry.add(canonicalMesh)
      } else {
        this.model.voidGeometry.add(canonicalMesh)
      }
    }
  }

  /**
   *
   * @param from
   * @param temporary
   */
  /* extractPolygonalBoundedHalfSpace(from: IfcPolygonalBoundedHalfSpace,
    temporary: boolean = false) {
    // TODO(nickcastel50):unfinished - not needed at the moment -
    //also pass this.linearScalingFactor in parameters
    // extract position
    let axis2PlacementTransform: any | undefined = (void 0)

    const paramsAxis2Placement3D: ParamsAxis2Placement3D =
      this.extractAxis2Placement3D(from.Position, from.localID, true)
    axis2PlacementTransform = this.conwayModel
        .getAxis2Placement3D(paramsAxis2Placement3D)
  }*/

  /**
   *
   * @param from
   * @param temporary
   */
  extractExtrudedAreaSolid(from: IfcExtrudedAreaSolid,
      temporary: boolean = false,
      isRelVoid: boolean = false) {

    let axis2PlacementTransform: any | undefined = (void 0)
    if (from.Position !== null) {

      if (!isRelVoid) {
        const paramsAxis2Placement3D: ParamsAxis2Placement3D =
          this.extractAxis2Placement3D(from.Position, from.localID, true)
        axis2PlacementTransform = this.conwayModel
            .getAxis2Placement3D(paramsAxis2Placement3D)
      } else {
        // const paramsAxis2Placement3D: ParamsAxis2Placement3D =
        // this.extractAxis2Placement3DRelVoid(from.Position, from.localID)
        // axis2PlacementTransform = this.conwayModel
        //  .getAxis2Placement3D(paramsAxis2Placement3D)
      }
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
      if (!isRelVoid) {
        this.model.geometry.add(canonicalMesh)
      } else {
        this.model.voidGeometry.add(canonicalMesh)
      }

    } else {
      console.log(`Couldn't parse profile, 
      expressID: ${from.SweptArea.expressID} type: ${EntityTypesIfc[from.SweptArea.type]}`)
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
      return foundProfile
    }

    let profile: CanonicalProfile | undefined

    if (from instanceof IfcArbitraryProfileDefWithVoids ) {
      const outerCurve = from.OuterCurve
      if (outerCurve instanceof IfcCompositeCurve) {
        const compositeCurve = this.extractCompositeCurve(outerCurve)
        const holesArray: NativeVectorCurve = this.nativeVectorCurve()
        if (compositeCurve !== void 0) {
          for (let holeIndex = 0; holeIndex < from.InnerCurves.length; ++holeIndex) {
            const holeCurve = from.InnerCurves[holeIndex]

            if (holeCurve instanceof IfcCompositeCurve) {
              const compositeCurve_ = this.extractCompositeCurve(holeCurve)

              if (compositeCurve_ !== void 0) {
                holesArray.push_back(compositeCurve_)
              }
            } else {

              const curveObject = this.extractCurve(holeCurve)

              if (curveObject !== void 0) {
                holesArray.push_back(curveObject)
              }
            }
          }
          profile = {
            localID: from.localID,
            curve: compositeCurve,
            holes: holesArray,
            profiles: (void 0),
            nativeProfile: (void 0),
          }
        }
      } else {

        const curveObject = this.extractCurve(outerCurve)

        if (curveObject !== void 0) {
          const holesArray: NativeVectorCurve = this.nativeVectorCurve()
          for (let holeIndex = 0; holeIndex < from.InnerCurves.length; ++holeIndex) {
            const holeCurve = from.InnerCurves[holeIndex]

            if (holeCurve instanceof IfcCompositeCurve) {
              const compositeCurve = this.extractCompositeCurve(holeCurve)

              if (compositeCurve !== void 0) {
                holesArray.push_back(compositeCurve)
              }
            } else {

              const curveObject_ = this.extractCurve(holeCurve)
              if (curveObject_ !== void 0) {
                holesArray.push_back(curveObject_)
              }
            }
          }

          profile = {
            localID: from.localID,
            curve: curveObject,
            holes: holesArray,
            profiles: (void 0),
            nativeProfile: (void 0),
          }
        }
      }
    } else if (
      from instanceof IfcArbitraryClosedProfileDef ||
      from instanceof IfcArbitraryOpenProfileDef) {

      const profileCurve =
        from instanceof IfcArbitraryClosedProfileDef ? from.OuterCurve : from.Curve

      if (profileCurve instanceof IfcCompositeCurve) {
        const compositeCurve = this.extractCompositeCurve(profileCurve)
        const holesArray: NativeVectorCurve = this.nativeVectorCurve()

        if (compositeCurve !== void 0) {
          profile = {
            localID: from.localID,
            curve: compositeCurve,
            holes: holesArray,
          }
        }
      } else {

        const curveObject = this.extractCurve(profileCurve)

        if (curveObject !== void 0) {
          const holesArray: NativeVectorCurve = this.nativeVectorCurve()
          profile = {
            localID: from.localID,
            curve: curveObject,
            holes: holesArray,
          }
        }
      }
    } else if (from instanceof IfcCircleProfileDef) {

      const curveObject = this.extractCircleCurve(from)

      if (curveObject !== void 0) {
        if (curveObject !== void 0) {
          if (!curveObject.isCCW()) {
            // console.log("inverting curve")
            curveObject.invert()
          }
        }
        const holesArray: NativeVectorCurve = this.nativeVectorCurve()
        profile = {
          localID: from.localID,
          curve: curveObject,
          holes: holesArray,
        }
      }
    } else if (from instanceof IfcCompositeProfileDef) {
      const holesArray: NativeVectorCurve = this.nativeVectorCurve()
      profile = {
        localID: from.localID,
        curve: (void 0),
        holes: holesArray,
      }

      const profiles: CanonicalProfile[] = []

      for (let profileIndex = 0; profileIndex < from.Profiles.length; ++profileIndex) {
        const profile_ = this.extractProfile(from.Profiles[profileIndex])

        if (profile_ !== void 0) {
          profiles.push(profile_)
        }
      }

      profile.profiles = profiles
    } else if (from instanceof IfcRectangleProfileDef) {
      // console.log("profile expressID: " + from.expressID)
      const curveObject = this.extractRectangleCurve(from)

      if (curveObject !== void 0) {
        const holesArray: NativeVectorCurve = this.nativeVectorCurve()
        profile = {
          localID: from.localID,
          curve: curveObject,
          holes: holesArray,
        }
      }

    } else {
      console.log(`Unsupported Profile! Type: 
      ${EntityTypesIfc[from.type]} expressID: ${from.expressID}`)
    }

    // add profile to the list of profile objects
    let isComposite: boolean = false
    if (profile !== void 0) {

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
            holes: profile.profiles[profileIndex].holes,
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
          holes: profile.holes,
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
          holes: profile.holes,
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
   * @return {CurveObject | undefined}
   */
  extractCompositeCurve(from: IfcCompositeCurve): CurveObject | undefined {
    let compositeCurve: CurveObject | undefined
    for (let i = 0; i < from.Segments.length; i++) {
      const parentCurve = from.Segments[i].ParentCurve
      let currentCurveObject
      if (parentCurve instanceof IfcCompositeCurve) {
        currentCurveObject = this.extractCompositeCurve(parentCurve)
      } else {
        currentCurveObject = this.extractCurve(from.Segments[i].ParentCurve)
      }

      if (currentCurveObject !== undefined) {
        if (i === 0) {
          compositeCurve = currentCurveObject
        } else if (from.Segments[i].Dim === this.TWO_DIMENSIONS) {
          for (let j = 0; j < currentCurveObject.getPointsSize(); ++j) {
            compositeCurve!.add2d(currentCurveObject.get2d(j))
          }
        } else if (from.Segments[i].Dim === this.THREE_DIMENSIONS) {
          for (let j = 0; j < currentCurveObject.getPointsSize(); ++j) {
            compositeCurve!.add3d(currentCurveObject.get3d(j))
          }
        }
      }
    }

    return compositeCurve
  }

  /**
   *
   * @param from
   * @return {CurveObject | undefined}
   */
  extractCurve(from: IfcCurve |
    IfcTrimmedCurve |
    IfcPolyline |
    IfcIndexedPolyCurve |
    IfcCircle |
    IfcBSplineCurve |
    IfcBSplineCurveWithKnots |
    IfcRationalBSplineCurveWithKnots ): CurveObject | undefined {

    if ( from instanceof IfcBSplineCurve ) {

      const ifcCurve = this.extractBSplineCurve( from )

      if (ifcCurve !== void 0) {
        if (!ifcCurve.isCCW()) {
          // console.log("inverting curve")
          ifcCurve.invert()
        }
      }
      return ifcCurve
    }

    if (from instanceof IfcTrimmedCurve) {
      const ifcCurve = this.extractIfcTrimmedCurve(from)

      if (ifcCurve !== void 0) {
        if (!ifcCurve.isCCW()) {
          // console.log("inverting curve")
          ifcCurve.invert()
        }
      }
      return ifcCurve
    }

    if (from instanceof IfcPolyline) {
      const ifcCurve = this.extractIfcPolyline(from)

      if (ifcCurve !== void 0) {
        if (!ifcCurve.isCCW()) {
          // console.log("inverting curve")
          ifcCurve.invert()
        }
      }

      return ifcCurve
    }

    if (from instanceof IfcIndexedPolyCurve) {
      const ifcCurve = this.extractIndexedPolyCurve(from)

      if (ifcCurve !== void 0) {
        if (!ifcCurve.isCCW()) {
          // console.log("inverting curve")
          ifcCurve.invert()
        }
      }

      return ifcCurve
    }

    if (from instanceof IfcCircle) {
      const ifcCurve = this.extractIfcCircle(from)

      if (ifcCurve !== void 0) {
        if (!ifcCurve.isCCW()) {
          // console.log("inverting curve")
          ifcCurve.invert()
        }
      }

      return ifcCurve
    }

    console.log(`Unsupported Curve! Type: ${EntityTypesIfc[from.type]}`)
  }

  /**
   * Exctact a BSpline Curve
   *
   * @param from The bspline curve, potentially with knots/rational.
   * @return {CurveObject} The constructed curve object.
   */
  extractBSplineCurve(from: IfcBSplineCurve): CurveObject {

    const params: ParamsGetBSplineCurve = {
      degree: from.Degree,
      points2: this.nativeVectorGlmdVec2(),
      points3: this.nativeVectorGlmdVec3(),
      knots: this.conwayModel.nativeVectorDouble(),
      weights: this.conwayModel.nativeVectorDouble(),
    }

    // eslint-disable-next-line no-magic-numbers
    if ( params.degree === 2 ) {

      const outputPoints = params.points2

      for ( const point of from.ControlPointsList ) {

        const coords = point.Coordinates

        outputPoints.push_back( { x: coords[ 0 ], y: coords[ 1 ] })
      }

    } else {

      const outputPoints = params.points3

      for ( const point of from.ControlPointsList ) {

        // eslint-disable-next-line no-magic-numbers
        if ( point.Dim !== 3 ) {
          continue
        }

        const coords = point.Coordinates

        outputPoints.push_back( { x: coords[ 0 ], y: coords[ 1 ], z: coords[ 2 ] })
      }

    }

    if ( from instanceof IfcBSplineCurveWithKnots ) {

      const outputKnots = params.knots

      for ( const knot of from.Knots ) {

        outputKnots.push_back( knot )
      }

      if ( from instanceof IfcRationalBSplineCurveWithKnots ) {

        const outputWeights = params.weights

        for ( const weight of from.WeightsData ) {

          outputWeights.push_back( weight )
        }
      }
    }

    return this.conwayModel.getBSplineCurve( params )
  }


  /**
   *
   * @param from
   * @param parametersTrimmedCurve
   * @return {CurveObject | undefined}
   */
  extractIfcCircle(from: IfcCircle, parametersTrimmedCurve: ParamsGetIfcTrimmedCurve = {
    masterRepresentation: 0,
    dimensions: 0,
    senseAgreement: false,
    trim1Cartesian2D: undefined,
    trim1Cartesian3D: undefined,
    trim1Double: 0,
    trim2Cartesian2D: undefined,
    trim2Cartesian3D: undefined,
    trim2Double: 0,
  }): CurveObject | undefined {

    let axis2Placement2D: any = void 0 // glmdmat3
    let axis2Placement3D: any = void 0 // glmdmat4
    if (from.Position instanceof IfcAxis2Placement2D) {
      axis2Placement2D = this.extractAxis2Placement2D(from.Position)
      axis2Placement3D = (new (this.wasmModule.Glmdmat4)) as any
    } else {
      axis2Placement3D = this.extractAxis2Placement3D(from.Position, from.localID, true)
      axis2Placement2D = (new (this.wasmModule.Glmdmat3)) as any
    }

    const parametersIfcCircle: ParamsGetIfcCircle = {
      dimensions: from.Dim,
      axis2Placement2D: axis2Placement2D,
      axis2Placement3D: axis2Placement3D,
      radius: from.Radius,
      paramsGetIfcTrimmedCurve: parametersTrimmedCurve,
    }

    const curve: CurveObject = this.conwayModel.getIfcCircle(parametersIfcCircle)

    return curve
  }

  /**
   *
   * @param from
   * @return {CurveObject | undefined}
   */
  extractIfcTrimmedCurve(from: IfcTrimmedCurve): CurveObject | undefined {

    let trim1Cartesian2D: Vector2 = { x: 0, y: 0 }
    let trim1Cartesian3D: Vector3 = { x: 0, y: 0, z: 0 }
    let trim1Double: number = 0
    let trim2Cartesian2D: Vector2 = { x: 0, y: 0 }
    let trim2Cartesian3D: Vector3 = { x: 0, y: 0, z: 0 }
    let trim2Double: number = 0

    // use Cartesian if unspecified
    if (from.MasterRepresentation === IfcTrimmingPreference.CARTESIAN ||
      from.MasterRepresentation === IfcTrimmingPreference.UNSPECIFIED) {
      for (let trimIndex = 0; trimIndex < from.Trim1.length; trimIndex++) {
        const trim1 = from.Trim1[trimIndex]
        if (trim1 instanceof IfcCartesianPoint) {

          if (from.Dim === this.TWO_DIMENSIONS) {
            trim1Cartesian2D = {
              x: trim1.Coordinates[0],
              y: trim1.Coordinates[1],
            }
          } else if (from.Dim === this.THREE_DIMENSIONS) {
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

          if (from.Dim === this.TWO_DIMENSIONS) {
            trim2Cartesian2D = {
              x: trim2.Coordinates[0],
              y: trim2.Coordinates[1],
            }
          } else if (from.Dim === this.THREE_DIMENSIONS) {
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
      // use parameter value
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
      trim2Double: trim2Double,
    }

    if (from.BasisCurve instanceof IfcCircle) {
      const curveObject = this.extractIfcCircle(from.BasisCurve, paramsGetIfcTrimmedCurve)

      if (curveObject !== void 0) {
        return curveObject
      }
    }

    return undefined
  }


  /**
   *
   * @param from
   * @return {CurveObject | undefined }
   */
  extractIfcPolyline(from: IfcPolyline): CurveObject | undefined {

    if (from.Points.length > 0) {
      const nativeCurve = (new (this.wasmModule.IfcCurve)) as CurveObject
      // dims check
      if (from.Dim === this.TWO_DIMENSIONS) {
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
            z: coords[2],
          }

          nativeCurve.add3d(coord)
        }
      }

      return nativeCurve

    }
  }

  /**
   *
   * @param from
   * @return {CurveObject | undefined}
   */
  extractRectangleCurve(from: IfcRectangleProfileDef): CurveObject | undefined {
    if (from.Position !== null) {
      const placement2D = this.extractAxis2Placement2D(from.Position)

      const paramsGetCircleCurve: ParamsGetRectangleProfileCurve = {
        xDim: from.XDim,
        yDim: from.YDim,
        hasPlacement: true,
        matrix: placement2D,
      }

      const ifcCurve: CurveObject = this.conwayModel.getRectangleProfileCurve(paramsGetCircleCurve)
      return ifcCurve

    } else {
      const paramsGetCircleCurve: ParamsGetRectangleProfileCurve = {
        xDim: from.XDim,
        yDim: from.YDim,
        hasPlacement: false,
        matrix: (new (this.wasmModule.Glmdmat3)),
      }

      const ifcCurve: CurveObject = this.conwayModel.getRectangleProfileCurve(paramsGetCircleCurve)

      paramsGetCircleCurve.matrix.delete()
      return ifcCurve
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
    // ////console.log(`\t\t\touterCurve.Dim: ${outerCurve.Dim}`)

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

      segmentVector.delete()

      return ifcCurve
    }

  }

  /**
   * Extract a mapped item to add its transform to instance an item.
   *
   * @param from The mapped item to extract.
   */
  extractMappedItem(from: IfcMappedItem, owningElementLocalID?: number) {

    const representationMap = from.MappingSource
    const mappingTarget = from.MappingTarget

    let popTransform = false

    if (mappingTarget instanceof IfcCartesianTransformationOperator3D) {

      const nativeCartesianTransform =
        this.extractCartesianTransformOperator3D(mappingTarget)

      this.scene.addTransform(
          from.localID,
          nativeCartesianTransform.getValues(),
          nativeCartesianTransform)

      popTransform = true
    }

    for (const representationItem of representationMap.MappedRepresentation.Items) {

      this.extractRepresentationItem(representationItem, owningElementLocalID)

      const styledItemLocalID_ = this.materials.styledItemMap.get(representationItem.localID)
      if (styledItemLocalID_ !== undefined) {
        const styledItem_ = this.model.getElementByLocalID(styledItemLocalID_) as IfcStyledItem
        this.extractStyledItem(styledItem_)
      } else {
        console.log(`no styled item for mapped item express ID: ${  representationItem.expressID}`)
      }
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
  extractRepresentationItem(from: IfcRepresentationItem,
      owningElementLocalID?: number,
      isRelVoid: boolean = false) {

    let foundGeometry

    if (!isRelVoid) {
      foundGeometry = this.model.geometry.getByLocalID(from.localID)
    } else {
      foundGeometry = this.model.voidGeometry.getByLocalID(from.localID)
    }

    if (foundGeometry !== void 0) {

      if (!isRelVoid) {
        this.scene.addGeometry(from.localID, owningElementLocalID)
      }
      return
    }

    if (from instanceof IfcPolygonalFaceSet) {

      // initialize new native indices array (free memory with delete())
      const polygonalFaceStartIndices: NativeULongVector = this.nativeULongVector(1)

      polygonalFaceStartIndices.set(0, 0)

      const faceSetResult: ExtractResult =
        this.extractPolygonalFaceSet(from, polygonalFaceStartIndices, false, isRelVoid)

      if (faceSetResult !== ExtractResult.COMPLETE) {
        console.log(`Warning, face set express ID: ${from.expressID} extraction incomplete.`)
      }

      polygonalFaceStartIndices.delete()

      if (!isRelVoid) {
        this.scene.addGeometry(from.localID, owningElementLocalID)
      }
    } else if (from instanceof IfcBooleanResult) {
      // also handles IfcBooleanClippingResult
      this.extractBooleanResult(from, isRelVoid)

      if (!isRelVoid) {
        this.scene.addGeometry(from.localID, owningElementLocalID)
      }

    } else if (from instanceof IfcExtrudedAreaSolid) {
      this.extractExtrudedAreaSolid(from, false, isRelVoid)
      if (!isRelVoid) {
        this.scene.addGeometry(from.localID, owningElementLocalID)
      }
    } else if (from instanceof IfcHalfSpaceSolid) {
      this.extractHalfspaceSolid(from, false, isRelVoid)
      if (!isRelVoid) {
        this.scene.addGeometry(from.localID, owningElementLocalID)
      }
    } else if (from instanceof IfcMappedItem) {
      this.extractMappedItem(from, owningElementLocalID)
    } else if (from instanceof IfcPolyline) {
      // web-ifc ignores IfcPolylines as meshes
      // //console.log(`IFCPOLYLINE, expressID: ${from.expressID}`)
    } else if (from instanceof IfcFacetedBrep) {
      this.extractIfcFacetedBrep(from, isRelVoid)
      if (!isRelVoid) {
        this.scene.addGeometry(from.localID, owningElementLocalID)
      }
    } else if (from instanceof IfcShellBasedSurfaceModel) {
      this.extractIfcShellBasedSurfaceModel(from, owningElementLocalID, isRelVoid)
      // todo, fix these
      /* if (!isRelVoid) {
        this.scene.addGeometry(from.localID, owningElementLocalID)
      }*/
    } else if (from instanceof IfcBoundingBox) {
      // I don't think this is necessary right now
    } else if (from instanceof IfcFaceBasedSurfaceModel) {

      this.extractIfcFaceBasedSurfaceModel(from, isRelVoid)
      if (!isRelVoid) {
        this.scene.addGeometry(from.localID, owningElementLocalID)
      }
    } else if (from instanceof IfcAdvancedBrep) {

      this.extractIfcAdvancedBrep(from, isRelVoid)

      if (!isRelVoid) {
        this.scene.addGeometry(from.localID, owningElementLocalID)
      }
    } else {
      console.log(`Unsupported type: ${EntityTypesIfc[from.type]} 
      expressID: ${from.expressID}`)
    }
  }

  /**
   * Extract an advanced b-rep (NURBS)
   *
   * @param from The brep to extract
   * @param isRelVoid Is this b-rep a relative void?
   */
  public extractIfcAdvancedBrep(from: IfcAdvancedBrep, isRelVoid: boolean) {
    const faces = from.Outer.CfsFaces

    this.extractFaces(faces, from.localID, undefined, isRelVoid)
  }

  /**
   *
   * @param from array of IfcConnectedFaceSet
   * @param isRelVoid is from a relative void (default false)
   * @param parentLocalID parent element local ID
   */
  extractConnectedFaceSets(from: IfcConnectedFaceSet[],
      parentLocalID: number,
      isRelVoid: boolean = false) {

    let geometry = (new (this.wasmModule.IfcGeometry)) as GeometryObject
    for (let faceSetIndex = 0; faceSetIndex < from.length; ++faceSetIndex) {
      const faceSet: IfcConnectedFaceSet = from[faceSetIndex]

      geometry = this.extractFaces(faceSet.CfsFaces, faceSet.localID, geometry, isRelVoid)
    }

    const canonicalMesh: CanonicalMesh = {
      type: CanonicalMeshType.BUFFER_GEOMETRY,
      geometry: geometry,
      localID: parentLocalID,
      model: this.model,
      temporary: false,
    }

    // add mesh to the list of mesh objects
    if (!isRelVoid) {
      this.model.geometry.add(canonicalMesh)
    } else {
      this.model.voidGeometry.add(canonicalMesh)
    }
  }


  /**
   *
   * @param from
   * @param isRelVoid
   */
  extractIfcFaceBasedSurfaceModel(from: IfcFaceBasedSurfaceModel, isRelVoid: boolean = false) {
    const fbsmFaces = from.FbsmFaces

    this.extractConnectedFaceSets(fbsmFaces, from.localID, isRelVoid)
  }

  /**
   *
   * @param from
   */
  extractIfcFacetedBrep(from: IfcFacetedBrep, isRelVoid: boolean = false) {
    const faces = from.Outer.CfsFaces

    this.extractFaces(faces, from.localID, undefined, isRelVoid)
  }


  /**
   *
   * @param from
   */
  extractIfcShellBasedSurfaceModel(from: IfcShellBasedSurfaceModel,
      owningElementLocalID?: number,
      isRelVoid: boolean = false) {
    const sbsmBoundary = from.SbsmBoundary

    if (sbsmBoundary.length > 0) {
      if (sbsmBoundary[0] instanceof IfcClosedShell) {
        for (let sbsmBoundaryIndex = 0; sbsmBoundaryIndex < sbsmBoundary.length;
          ++sbsmBoundaryIndex) {
          const currentBoundary: IfcClosedShell = sbsmBoundary[sbsmBoundaryIndex]
          const faces = currentBoundary.CfsFaces

          this.extractFaces(faces, currentBoundary.localID, undefined, isRelVoid)

          if (!isRelVoid) {
            this.scene.addGeometry(currentBoundary.localID, owningElementLocalID)
          }
        }
      } else if (sbsmBoundary[0] instanceof IfcOpenShell) {
        for (let sbsmBoundaryIndex = 0; sbsmBoundaryIndex < sbsmBoundary.length;
          ++sbsmBoundaryIndex) {
          const currentBoundary: IfcOpenShell = sbsmBoundary[sbsmBoundaryIndex]
          const faces = currentBoundary.CfsFaces

          this.extractFaces(faces, currentBoundary.localID, undefined, isRelVoid)

          if (!isRelVoid) {
            this.scene.addGeometry(currentBoundary.localID, owningElementLocalID)
          }
        }
      }
    }
  }

  /**
   *
   * @param from
   * @param parentLocalID
   * @param geometry_
   * @param isRelVoid
   * @return {GeometryObject}
   */
  extractFaces(
      from: IfcFace[],
      parentLocalID: number,
      geometry_?: GeometryObject | undefined,
      isRelVoid: boolean = false): GeometryObject {

    let passedGeometry: boolean = true
    if (geometry_ === void 0) {
      passedGeometry = false
      geometry_ = (new (this.wasmModule.IfcGeometry)) as GeometryObject
    }
    // const geometry = (new (this.wasmModule.IfcGeometry)) as GeometryObject
    for ( const face of from ) {

      if ( face instanceof IfcAdvancedFace ) {

        this.extractAdvancedFace( face, geometry_ )

      } else {

        this.extractFace(face, geometry_)
      }
    }

    if (!passedGeometry) {
      const canonicalMesh: CanonicalMesh = {
        type: CanonicalMeshType.BUFFER_GEOMETRY,
        geometry: geometry_,
        localID: parentLocalID,
        model: this.model,
        temporary: false,
      }

      // add mesh to the list of mesh objects
      if (!isRelVoid) {
        this.model.geometry.add(canonicalMesh)
      } else {
        this.model.voidGeometry.add(canonicalMesh)
      }
    }

    return geometry_
  }

  /**
   * Extract an IFC plane.
   *
   * @param from The plane to extract from
   * @return {NativeTransform} The transform matching the plane.
   */
  extractPlane( from: IfcPlane ): NativeTransform {

    const location = from.Position

    const transform =
      this.extractAxis2Placement3D( location, from.localID, true )

    return this.conwayModel.getAxis2Placement3D(transform)
  }

  /**
   * Extract a pointlist to a native vector.
   *
   * @param from
   * @return {StdVector< Vector3 >} The native vector of 3D vectors.
   */
  extractPointList3D( from: Array<IfcCartesianPoint> ): StdVector< Vector3 > {

    const result = this.nativeVectorGlmdVec3()

    for ( const point of from ) {

      const coords = point.Coordinates

      // eslint-disable-next-line no-magic-numbers
      if ( coords.length !== 3 ) {
        continue
      }

      result.push_back( { x: coords[ 0 ], y: coords[ 1 ], z: coords[ 2 ] } )
    }

    return result
  }

  /**
   * Extract a list of a list of points to a native object.
   *
   * @param from the list of lists of cartesian points
   * @param to {out} the native vector of vector of points.
   * @return {void}
   */
  extractPointListList3D(
      from: Array< Array<IfcCartesianPoint> >,
      to: StdVector< StdVector< Vector3 > > ): void {

    for ( const list of from ) {
      to.push_back( this.extractPointList3D( list ) )
    }
  }

  /**
   * Extract a bspline surface
   *
   * @param from The bspline surface to extract
   * @return {BSplineSurface}
   */
  extractBSplineSurface( from: IfcBSplineSurface ): BSplineSurface {

    const bsplineSurface: BSplineSurface = {
      active: true,
      uDegree: from.UDegree,
      vDegree: from.VDegree,
      closedU: from.UClosed ?? false,
      closedV: from.VClosed ?? false,
      controlPoints: this.nativeVectorVectorGlmdVec3(),
      uMultiplicity: this.conwayModel.nativeVectorDouble(),
      vMultiplicity: this.conwayModel.nativeVectorDouble(),
      uKnots: this.conwayModel.nativeVectorDouble(),
      vKnots: this.conwayModel.nativeVectorDouble(),
      weightPoints: this.conwayModel.nativeVectorVectorDouble(),
    }

    this.extractPointListList3D( from.ControlPointsList, bsplineSurface.controlPoints )

    return bsplineSurface
  }

  /**
   * Extract a bspline surface
   *
   * @param from The bspline surface to extract
   * @param to The surface to extract to
   */
  extractToDoubleVector(
      from: Array< number >,
      to: StdVector< number >,
      start = 0,
      end = from.length ): void {

    to.resize( end - start, 0 )

    for ( let where = start; where < end; ++where ) {
      to.set( where - start, from[ where ] )
    }
  }

  /**
   * Extract a bspline surface
   *
   * @param from The bspline surface to extract
   * @param to The surface to extract to
   */
  extractToDoubleVectorVector(
      from: Array< Array< number > >,
      to: StdVector< StdVector< number > > ): void {

    to.resize( from.length )

    for ( let where = 0, end = from.length; where < end; ++where ) {

      this.extractToDoubleVector( from[ where ], to.get( where ) )
    }
  }


  /**
   * Extract a bspline surface
   *
   * @param from The bspline surface to extract
   * @return {BSplineSurface}
   */
  extractBSplineSurfaceWithKnots( from: IfcBSplineSurfaceWithKnots ): BSplineSurface {

    const result = this.extractBSplineSurface( from )

    this.extractToDoubleVector( from.UMultiplicities, result.uMultiplicity )
    this.extractToDoubleVector( from.VMultiplicities, result.vMultiplicity )
    this.extractToDoubleVector( from.UKnots, result.uKnots )
    this.extractToDoubleVector( from.VKnots, result.vKnots )

    return result
  }

  /**
   * Extract a bspline surface
   *
   * @param from The bspline surface to extract
   * @return {BSplineSurface} The extracted surface
   */
  extractRationalBSplineSurfaceWithKnots(
      from: IfcRationalBSplineSurfaceWithKnots ): BSplineSurface {

    const result = this.extractBSplineSurfaceWithKnots( from )

    this.extractToDoubleVectorVector( from.WeightsData, result.weightPoints )

    return result
  }


  /**
   * Extract an advanced (NURBS) b-rep face.
   *
   * @param from
   * @param geometry
   */
  extractAdvancedFace(from: IfcAdvancedFace, geometry: GeometryObject) {

    if (from.Bounds.length > 0) {

      const bound3DVector = this.nativeBound3DVector()

      for ( const bound of from.Bounds ) {
        const vec3Array = this.nativeVectorGlmdVec3()

        const innerBound = bound.Bound

        let isEdgeLoop = false

        if (innerBound instanceof IfcPolyLoop) {

          let prevLocalID: number = -1

          for (let pointIndex = 0; pointIndex < innerBound.Polygon.length; ++pointIndex) {
            const vec3 = {
              x: innerBound.Polygon[pointIndex].Coordinates[0],
              y: innerBound.Polygon[pointIndex].Coordinates[1],
              z: innerBound.Polygon[pointIndex].Coordinates[2],
            }

            const currentLocalID: number = innerBound.Polygon[pointIndex].localID

            if (currentLocalID !== prevLocalID) {
              vec3Array.push_back(vec3)
              prevLocalID = currentLocalID
            }
          }
        } else if ( innerBound instanceof IfcEdgeLoop ) {

          for ( const edge of innerBound.EdgeList ) {

            if ( edge instanceof IfcEdgeCurve ) {

              const edgeCurve = edge.EdgeGeometry

              const curve = this.extractCurve( edgeCurve )

              if ( curve !== void 0 ) {

                for (
                  let where = 0, pointCount = curve.getPointsSize() - 1;
                  where < pointCount;
                  ++where ) {

                  vec3Array.push_back( curve.get3d( where ))
                }

              }

            } else {

              const start = edge.EdgeStart

              if ( start instanceof IfcVertexPoint ) {

                const startPoint = start.VertexGeometry

                // eslint-disable-next-line no-magic-numbers
                if ( startPoint instanceof IfcCartesianPoint && startPoint.Dim === 3 ) {

                  const startCoords = startPoint.Coordinates

                  vec3Array.push_back( {
                    x: startCoords[ 0 ],
                    y: startCoords[ 1 ],
                    z: startCoords[ 2 ],
                  } )
                }
              }
            }

          }

          isEdgeLoop = true

        } else {
          console.log( `Unsupported bound ${bound.Bound}` )
          return
        }

        // get curve
        const parameters: ParamsGetLoop = {
          isEdgeLoop: isEdgeLoop,
          points: vec3Array,
        }

        const curve: CurveObject = this.conwayModel.getLoop(parameters)

        // create bound vector
        const parametersCreateBounds3D: ParamsCreateBound3D = {
          curve: curve,
          orientation: bound.Orientation,
          type: (bound.type === EntityTypesIfc.IFCFACEOUTERBOUND) ? 0 : 1,
        }

        const bound3D: Bound3DObject = this.conwayModel.createBound3D(parametersCreateBounds3D)

        bound3DVector.push_back(bound3D)
        vec3Array.delete()
      }

      const surface = from.FaceSurface

      // add face to geometry
      const nativeSurface = (new (this.wasmModule.IfcSurface)) as SurfaceObject

      if ( surface instanceof IfcPlane ) {

        nativeSurface.transformation = this.extractPlane( surface )

      } else if ( surface instanceof IfcRationalBSplineSurfaceWithKnots ) {

        nativeSurface.bspline = this.extractRationalBSplineSurfaceWithKnots( surface )

        if ( !nativeSurface.bspline.active ) {
          return
        }

      } else if ( surface instanceof IfcBSplineSurfaceWithKnots ) {

        nativeSurface.bspline = this.extractBSplineSurfaceWithKnots( surface )

        if ( !nativeSurface.bspline.active ) {
          return
        }

      } else if ( surface instanceof IfcBSplineSurface ) {

        nativeSurface.bspline = this.extractBSplineSurface( surface )

        if ( !nativeSurface.bspline.active ) {
          return
        }

      } else if ( surface instanceof IfcCylindricalSurface ) {

        this.extractCylindricalSurface( surface, nativeSurface )

        if ( !nativeSurface.cylinder.active ) {
          return
        }

      } else if ( surface instanceof IfcSurfaceOfRevolution ) {

        this.extractSurfaceOfRevolution( surface, nativeSurface )

        if ( !nativeSurface.revolution.active ) {
          return
        }

      } else if ( surface instanceof IfcSurfaceOfLinearExtrusion ) {

        this.extractSurfaceOfLinearExtrusion( surface, nativeSurface )

        if ( !nativeSurface.extrusion.active ) {
          return
        }

      } else {

        console.log( `Unknown surface type: ${surface}`)
      }

      const parameters: ParamsAddFaceToGeometry = {
        boundsArray: bound3DVector,
        advancedBrep: true,
        surface: nativeSurface,
      }

      this.conwayModel.addFaceToGeometry(parameters, geometry)

      bound3DVector.delete()
    }
  }

  /**
   * Extract a linear extrusion/sweep surface
   *
   * @param from
   * @param nativeSurface
   */
  extractSurfaceOfLinearExtrusion(from: IfcSurfaceOfLinearExtrusion, nativeSurface: SurfaceObject) {

    const profile = this.extractProfile( from.SweptCurve )

    if ( profile?.nativeProfile === void 0 ) {

      console.log( 'Couldn\'t get curve profile for linear extrusion surface' )
      return
    }

    const directionCoords = from.ExtrudedDirection.DirectionRatios

    nativeSurface.extrusion = {
      active: true,
      length: from.Depth,
      direction: {
        x: directionCoords[ 0 ],
        y: directionCoords[ 1 ],
        z: directionCoords[ 2 ],
      },
      profile: profile?.nativeProfile!,
    }
  }

  /**
   * Extract a surface of revolution/rotational sweep surface
   *
   * @param from
   * @param nativeSurface
   */
  extractSurfaceOfRevolution(from: IfcSurfaceOfRevolution, nativeSurface: SurfaceObject) {

    const sweptCurve = from.SweptCurve

    if ( !(sweptCurve instanceof IfcArbitraryOpenProfileDef ) ) {
      console.log( 'Unexpected 3D profile type for surface of revolution' )
      return
    }

    const profile = this.extractProfile( sweptCurve )

    if ( profile === void 0 || profile.curve === void 0 ) {

      console.log( 'Missing profile type for surface of revolution' )
      return
    }

    const axisDirection = this.extractAxis1Placement3D( from.AxisPosition, from.localID, true )

    nativeSurface.revolution = {
      active: true,
      direction: this.conwayModel.getAxis1Placement3D( axisDirection ),
      profile: {
        type: from.SweptCurve.ProfileName ?? '',
        curve: profile.curve,
        isConvex: false,
      },
    }
  }

  /**
   * Extract a cylindrical surface.
   *
   * @param from The IFC object to extract from.
   * @param nativeSurface The native surface representation.
   */
  extractCylindricalSurface(from: IfcCylindricalSurface, nativeSurface: SurfaceObject) {

    const location = from.Position

    const transform =
      this.extractAxis2Placement3D( location, from.localID, true )

    nativeSurface.transformation = this.conwayModel.getAxis2Placement3D(transform)
    nativeSurface.cylinder = { active: true, radius: from.Radius }
  }

  /**
   *
   * @param from
   * @param geometry
   */
  extractFace(from: IfcFace, geometry: GeometryObject) {
    if (from.Bounds.length > 0) {

      const bound3DVector = this.nativeBound3DVector()

      for (let boundIndex = 0; boundIndex < from.Bounds.length; ++boundIndex) {
        const vec3Array = this.nativeVectorGlmdVec3()
        const bound = from.Bounds[boundIndex]

        if (bound.Bound instanceof IfcPolyLoop) {

          let prevLocalID: number = -1

          for (let pointIndex = 0; pointIndex < bound.Bound.Polygon.length; ++pointIndex) {
            const vec3 = {
              x: bound.Bound.Polygon[pointIndex].Coordinates[0],
              y: bound.Bound.Polygon[pointIndex].Coordinates[1],
              z: bound.Bound.Polygon[pointIndex].Coordinates[2],
            }

            const currentLocalID: number = bound.Bound.Polygon[pointIndex].localID
            if (currentLocalID !== prevLocalID) {
              vec3Array.push_back(vec3)
              prevLocalID = currentLocalID
            }
          }
        }

        // get curve
        const parameters: ParamsGetLoop = {
          isEdgeLoop: false,
          points: vec3Array,
        }

        const curve: CurveObject = this.conwayModel.getLoop(parameters)

        // create bound vector
        const parametersCreateBounds3D: ParamsCreateBound3D = {
          curve: curve,
          orientation: bound.Orientation,
          type: (bound.type === EntityTypesIfc.IFCFACEOUTERBOUND) ? 0 : 1,
        }

        const bound3D: Bound3DObject = this.conwayModel.createBound3D(parametersCreateBounds3D)

        bound3DVector.push_back(bound3D)
        vec3Array.delete()
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
  extractAxis1Placement3D(from: IfcAxis1Placement, parentLocalId: number): void
  /**
   * Extract a placement (no memoization/scene creation)
   *
   * @param from The transform to extract.
   * @param parentLocalId The parent's local ID.
   * @param extractOnly {true} Only extract, don't memoize and add to the scene
   * @return {ParamsAxis1Placement3D} The extracted placement.
   */
  // eslint-disable-next-line no-dupe-class-members
  extractAxis1Placement3D(
    from: IfcAxis1Placement,
    parentLocalId: number,
    extractOnly: true): ParamsAxis1Placement3D
  // eslint-disable-next-line no-dupe-class-members, require-jsdoc
  extractAxis1Placement3D(
      from: IfcAxis1Placement,
      parentLocalId: number,
      extractOnly: boolean = false): void | ParamsAxis1Placement3D {

    if (from === null) {
      return
    }

    const result = this.scene.getTransform(parentLocalId)

    if (result !== void 0) {

      this.scene.pushTransform(result)

      return
    }

    let normalizeZ: boolean = false

    if (from.Axis !== null) {
      normalizeZ = true
    }

    const position = {
      x: from.Location.Coordinates[0],
      y: from.Location.Coordinates[1],
      z: from.Location.Coordinates[2],
    }

    const zAxisRef = {
      x: from.Axis?.DirectionRatios[0] ?? 0,
      y: from.Axis?.DirectionRatios[1] ?? 0,
      z: from.Axis?.DirectionRatios[2] ?? 1,
    }

    const axis1Placement3DParameters: ParamsAxis1Placement3D = {
      position: position,
      zAxisRef: zAxisRef,
      normalizeZ: normalizeZ,
    }

    if (extractOnly) {
      return axis1Placement3DParameters
    }

    const axis1PlacementTransform = this.conwayModel
        .getAxis1Placement3D(axis1Placement3DParameters)

    this.scene.addTransform(
        parentLocalId,
        axis1PlacementTransform.getValues(),
        axis1PlacementTransform)
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
      x: from.Axis?.DirectionRatios[0] ?? 0,
      y: from.Axis?.DirectionRatios[1] ?? 0,
      z: from.Axis?.DirectionRatios[2] ?? 1,
    }

    const xAxisRef = {
      x: from.RefDirection?.DirectionRatios[0] ?? 1,
      y: from.RefDirection?.DirectionRatios[1] ?? 0,
      z: from.RefDirection?.DirectionRatios[2] ?? 0,
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
   * Extract a placement, adding it to the scene.
   *
   * @param from The transform to extract.
   * @param parentLocalId The parent's local ID.
   * @return {void}
   */
  extractAxis2Placement3DRelVoid(from: IfcAxis2Placement3D, parentLocalId: number): void
  /**
   * Extract a placement (no memoization/scene creation)
   *
   * @param from The transform to extract.
   * @param parentLocalId The parent's local ID.
   * @param extractOnly {true} Only extract, don't memoize and add to the scene
   * @return {ParamsAxis2Placement3D} The extracted placement.
   */
  // eslint-disable-next-line no-dupe-class-members
  extractAxis2Placement3DRelVoid(
    from: IfcAxis2Placement3D,
    parentLocalId: number,
    extractOnly: true): ParamsAxis2Placement3D
  // eslint-disable-next-line no-dupe-class-members, require-jsdoc
  extractAxis2Placement3DRelVoid(
      from: IfcAxis2Placement3D,
      parentLocalId: number,
      extractOnly: boolean = false): void | ParamsAxis2Placement3D {

    if (from === null) {
      return
    }

    const result = this.voidScene.getTransform(parentLocalId)

    if (result !== void 0) {

      this.voidScene.pushTransform(result)

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
      x: from.Axis?.DirectionRatios[0] ?? 0,
      y: from.Axis?.DirectionRatios[1] ?? 0,
      z: from.Axis?.DirectionRatios[2] ?? 1,
    }

    const xAxisRef = {
      x: from.RefDirection?.DirectionRatios[0] ?? 1,
      y: from.RefDirection?.DirectionRatios[1] ?? 0,
      z: from.RefDirection?.DirectionRatios[2] ?? 0,
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

    this.voidScene.addTransform(
        parentLocalId,
        axis2PlacementTransform.getValues(),
        axis2PlacementTransform)
  }

  /**
   *
   * @param from
   */
  extractPlacement(from: IfcObjectPlacement, isRelVoid: boolean = false) {

    let result: IfcSceneTransform | undefined
    if (!isRelVoid) {
      result = this.scene.getTransform(from.localID)
    } else {
      result = this.voidScene.getTransform(from.localID)
    }

    if (result !== void 0) {

      if (!isRelVoid) {
        this.scene.pushTransform(result)
      } else {
        this.voidScene.pushTransform(result)
      }

      return
    }

    if (from instanceof IfcLocalPlacement) {

      const relativeTo = from.PlacementRelTo

      if (relativeTo !== null) {

        this.extractPlacement(relativeTo, isRelVoid)
      }

      const relativePlacement = from.RelativePlacement

      if (relativePlacement instanceof IfcAxis2Placement3D) {

        if (!isRelVoid) {
          this.extractAxis2Placement3D(relativePlacement, from.localID)
        } else {
          this.extractAxis2Placement3DRelVoid(relativePlacement, from.localID)
        }
      }

    } else if (from instanceof IfcGridPlacement) {
      // TODO(nickcastel50) Implement IfcGridPlacement
      // console.log('IfcGridPlacement: unimplemented.')
    }
  }

  /**
   *
   * @param from
   * @param relVoidMeshVector
   * @param flattenedGeometry
   * @param relVoidLocalID
   * @param geometryCount
   */
  applyRelVoidToRepresentation(from: IfcRepresentationItem,
      relVoidMeshVector: NativeVectorGeometry,
      owningElementLocalID: number) {
    // get geometry from product and flatten it
    let flattenedGeometry: GeometryObject | undefined

    let productTransform: IfcSceneTransform | undefined

    const productElement = this.model.getElementByLocalID(owningElementLocalID) as IfcProduct

    if (productElement.ObjectPlacement !== null) {
      productTransform = this.scene.getTransform(productElement.ObjectPlacement.localID)
    }

    const mesh = this.model.voidGeometry.getByLocalID(from.localID)

    if (mesh !== undefined && mesh.type === CanonicalMeshType.BUFFER_GEOMETRY) {

      if (flattenedGeometry === undefined) {
        flattenedGeometry = mesh.geometry.clone()

        if (from instanceof IfcExtrudedAreaSolid) {
          if (from.Position !== null) {

            const paramsAxis2Placement3D: ParamsAxis2Placement3D =
              this.extractAxis2Placement3DRelVoid(from.Position, from.localID, true)
            const axis2PlacementTransform = this.conwayModel
                .getAxis2Placement3D(paramsAxis2Placement3D)

            if (axis2PlacementTransform !== void 0) {

              if (productTransform !== void 0) {
                const multiplyResultMat =
                  this.conwayModel.multiplyNativeMatrices(
                      productTransform.absoluteNativeTransform, axis2PlacementTransform)

                flattenedGeometry.applyTransform(multiplyResultMat)
              } else {
                flattenedGeometry.applyTransform(axis2PlacementTransform.absoluteNativeTransform)
              }
            }
          }
        }
      }

      // flatten the relvoid mesh vector
      const relVoidFlattenedMesh = relVoidMeshVector.get(0)

      if (relVoidFlattenedMesh === undefined) {
        const canonicalMesh: CanonicalMesh = {
          type: CanonicalMeshType.BUFFER_GEOMETRY,
          geometry: mesh.geometry,
          localID: from.localID,
          model: this.model,
          temporary: false,
        }

        // add mesh to the list of mesh objects
        this.model.geometry.add(canonicalMesh)
        this.scene.addGeometry(from.localID, owningElementLocalID)

        return

      }
      for (let vectorIndex = 1; vectorIndex < relVoidMeshVector.size(); ++vectorIndex) {
        relVoidFlattenedMesh.appendGeometry(relVoidMeshVector.get(vectorIndex))
      }

      // set mesh back to vector
      const relVoidMeshVector_ = this.nativeVectorGeometry()
      relVoidMeshVector_.push_back(relVoidFlattenedMesh)

      const relatedBuildingElementMeshVector = this.nativeVectorGeometry(1)

      relatedBuildingElementMeshVector.set(0, flattenedGeometry)

      const parameters: ParamsRelVoidSubtract = {
        flatFirstMesh: relatedBuildingElementMeshVector,
        flatSecondMesh: relVoidMeshVector_,
        operatorType: 2,
        parentMatrix: productTransform?.absoluteNativeTransform,
      }
      const booleanGeometryObject: GeometryObject = this.conwayModel.relVoidSubtract(parameters)
      const canonicalMesh: CanonicalMesh = {
        type: CanonicalMeshType.BUFFER_GEOMETRY,
        geometry: booleanGeometryObject,
        localID: from.localID,
        model: this.model,
        temporary: false,
      }

      this.model.geometry.add(canonicalMesh)

      this.scene.addGeometry(from.localID, owningElementLocalID)

      relatedBuildingElementMeshVector.delete()
      relVoidMeshVector_.delete()
    }
  }
  /**
   *
   * @param from
   * @return {[NativeVectorGeometry, number[]] | undefined}
   */
  extractRelVoids(from: IfcProduct): [NativeVectorGeometry, number[]] | undefined {
    let isRelVoid: boolean = false
    let relVoidLocalIDs: number[] | undefined
    if (this.productToVoidGeometryMap.has(from.localID)) {
      // product has voids
      relVoidLocalIDs = this.productToVoidGeometryMap.get(from.localID)
      const relVoidMeshVector = this.nativeVectorGeometry()

      if (relVoidLocalIDs !== void 0) {

        for (const relVoidLocalID of relVoidLocalIDs) {
          let flattenedVoidGeometry: GeometryObject | undefined

          const relVoid =
            this.model.getElementByLocalID(relVoidLocalID) as IfcFeatureElementSubtraction


          const relVoidObjectPlacement = relVoid.ObjectPlacement
          let relVoidPlacementTransform: IfcSceneTransform | undefined
          if (relVoidObjectPlacement !== null) {
            this.extractPlacement(relVoidObjectPlacement, true)
            relVoidPlacementTransform = this.voidScene.getTransform(relVoidObjectPlacement.localID)
          }

          if (relVoid.Representation !== null) {
            for (const representation of relVoid.Representation.Representations) {

              if (representation instanceof IfcShapeRepresentation) {

                // this check is essential -
                // if RepresentationIdentifier !== Body or Facetation we must skip it
                if (representation.RepresentationIdentifier !== 'Body' &&
                  representation.RepresentationIdentifier !== 'Facetation') {
                  continue
                }
              }

              for (const item of representation.Items) {
                // extract geometry here and flatten
                this.extractRepresentationItem(item, undefined, true)
                const mesh = this.model.voidGeometry.getByLocalID(item.localID)
                if (mesh !== undefined && mesh.type === CanonicalMeshType.BUFFER_GEOMETRY) {

                  isRelVoid = true
                  const localGeometry = mesh.geometry.clone()

                  if (item instanceof IfcExtrudedAreaSolid) {
                    if (item.Position !== null) {
                      const paramsAxis2Placement3D: ParamsAxis2Placement3D =
                        this.extractAxis2Placement3DRelVoid(item.Position, item.localID, true)
                      const axis2PlacementTransform = this.conwayModel
                          .getAxis2Placement3D(paramsAxis2Placement3D)

                      if (axis2PlacementTransform !== void 0) {
                        if (relVoidPlacementTransform !== void 0) {
                          const multiplyResultMat =
                            this.conwayModel.multiplyNativeMatrices(
                                relVoidPlacementTransform.absoluteNativeTransform,
                                axis2PlacementTransform)

                          localGeometry.applyTransform(multiplyResultMat)
                        } else {
                          localGeometry.applyTransform(
                              axis2PlacementTransform.absoluteNativeTransform)
                        }
                      }
                    }
                  }

                  if (flattenedVoidGeometry === undefined) {
                    // TODO: not sure if we need to clone here..
                    flattenedVoidGeometry = localGeometry
                  } else {
                    flattenedVoidGeometry.appendGeometry(localGeometry)
                  }

                }
              }
            }

            if (isRelVoid && flattenedVoidGeometry !== void 0) {
              relVoidMeshVector.push_back(flattenedVoidGeometry)
            }
          }
        }

        return [relVoidMeshVector, relVoidLocalIDs]
      }
    }
  }

  /**
   *
   * @param from
   * @return {number | undefined}
   */
  extractMaterial(
      from: IfcMaterial |
      IfcMaterialList |
      IfcMaterialProfile |
      IfcMaterialProfileSet |
      IfcMaterialConstituent |
      IfcMaterialLayerSetUsage |
      IfcMaterialConstituentSet): number | undefined {
    if (from instanceof IfcMaterial) {
      return this.materials.materialDefinitionsMap.get(from.localID)
    } else if (from instanceof IfcMaterialLayerSetUsage) {
      for (const layer of from.ForLayerSet.MaterialLayers) {
        if (layer.Material) {
          const styledItemID = this.extractMaterial(layer.Material)
          if (styledItemID !== undefined) {
            return styledItemID
          }
        }
      }
    } else if (from instanceof IfcMaterialList) {
      for (const _material of from.Materials) {
        if (_material instanceof IfcMaterial) {
          const styledItemID = this.extractMaterial(_material)
          if (styledItemID !== undefined) {
            return styledItemID
          }
        }
      }
    } else if (from instanceof IfcMaterialProfile) {
      if (from.Material !== null) {
        const styledItemID = this.extractMaterial(from.Material)
        if (styledItemID !== undefined) {
          return styledItemID
        }
      } else {
        console.log(`from.Material === null`)
      }
    } else if (from instanceof IfcMaterialProfileSet) {
      for (const material of from.MaterialProfiles) {
        const styledItemID = this.extractMaterial(material)

        if (styledItemID !== undefined) {
          return styledItemID
        }
      }
    } else if (from instanceof IfcMaterialConstituent) {
      const styledItemID = this.extractMaterial(from.Material)
      if (styledItemID !== undefined) {
        return styledItemID
      }
    } else if (from instanceof IfcMaterialConstituentSet) {
      if (from.MaterialConstituents !== null) {
        for (const materialConstituents of from.MaterialConstituents) {
          const styledItemID = this.extractMaterial(materialConstituents)
          if (styledItemID !== undefined) {
            return styledItemID
          }
        }
      }
    }
  }

  /**
   *
   * @param from
   * @return {number | undefined}
   */
  extractMaterialStyle(from: IfcProduct): number | undefined {
    let styledItemID: number | undefined
    const materialID = this.materials.relMaterialsMap.get(from.localID)
    if (materialID !== undefined) {
      if (this.materials.materialDefinitionsMap.has(materialID)) {
        // found material for mesh
        styledItemID = this.materials.materialDefinitionsMap.get(materialID)
      } else {
        const material = this.model.getElementByLocalID(materialID)
        if (material) {
          if (material instanceof IfcMaterial) {
            styledItemID = this.extractMaterial(material)
          } else if (material instanceof IfcMaterialLayerSetUsage) {
            styledItemID = this.extractMaterial(material)
          } else if (material instanceof IfcMaterialList) {
            styledItemID = this.extractMaterial(material)
          } else if (material instanceof IfcMaterialProfile) {
            styledItemID = this.extractMaterial(material)
          } else if (material instanceof IfcMaterialProfileSet) {
            styledItemID = this.extractMaterial(material)
          } else if (material instanceof IfcMaterialConstituent) {
            styledItemID = this.extractMaterial(material)
          } else if (material instanceof IfcMaterialConstituentSet) {
            styledItemID = this.extractMaterial(material)
          } else {
            console.log(`Material type not supported - type: ${EntityTypesIfc[material.type]}`)
          }
        }
      }
    }

    return styledItemID
  }

  /**
   *
   */
  populateStyledItemsMap() {
    const styledItems = this.model.types(IfcStyledItem)

    for (const styledItem of styledItems) {

      if (styledItem.Item !== null) {
        this.materials.styledItemMap.set(styledItem.Item.localID, styledItem.localID)
      }
    }
  }

  /**
   *
   */
  populateMaterialDefinitionsMap() {
    // populate MaterialDefinitionsMap
    const materialDefinitionRepresentations = this.model.types(IfcMaterialDefinitionRepresentation)

    for (const materialDefinitionRep of materialDefinitionRepresentations) {

      for (const representation of materialDefinitionRep.Representations) {
        for (let itemIndex = 0; itemIndex < representation.Items.length; ++itemIndex) {
          // save mapping of IfcMaterial --> IfcStyledItem
          this.materials.materialDefinitionsMap.set(
              materialDefinitionRep.RepresentedMaterial.localID,
              representation.Items[itemIndex].localID)
        }
      }
    }
  }

  /**
   *
   */
  populateRelVoidsMap() {
    // populate relvoids map
    const relVoids = this.model.types(IfcRelVoidsElement)
    for (const relVoid of relVoids) {
      // map product --> relvoids opening elements
      const geometryLocalIDArray =
      this.productToVoidGeometryMap.get(relVoid.RelatingBuildingElement.localID)

      if (geometryLocalIDArray === void 0) {
        const localIDArray: number[] = []
        localIDArray.push(relVoid.RelatedOpeningElement.localID)
        this.productToVoidGeometryMap.set(relVoid.RelatingBuildingElement.localID, localIDArray)
      } else {
        // append to it
        geometryLocalIDArray.push(relVoid.RelatedOpeningElement.localID)
        this.productToVoidGeometryMap.set(
            relVoid.RelatingBuildingElement.localID, geometryLocalIDArray)
      }
    }
  }

  /**
   * Extracts linear scaling factor
   */
  extractLinearScalingFactor() {
    const projects = this.model.types(IfcProject)

    const projectsArray = Array.from(projects)


    if (projectsArray.length <= 0) {
      console.log('No IfcProjects found?')
      return
    }

    const project = projectsArray[0]
    const unitsInContext = project.UnitsInContext

    if (unitsInContext === null) {
      console.log('No units defined.')
      return
    }

    // console.log(`UnitsInContext expressID: ${unitsInContext.expressID}`)
    for (const unit of unitsInContext.Units) {
      // console.log(`Unit type: ${EntityTypesIfc[unit.type]}, expressID: ${unit.expressID}`)

      if (unit instanceof IfcSIUnit) {
        const unitType = unit.UnitType
        const unitName = unit.Name
        const unitPrefix = unit.Prefix

        if (unitPrefix === null) {
          // console.log("Unit prefix not found")
          continue
        }

        const unitPrefixVal = this.convertPrefix(unitPrefix)
        if (unitType === IfcUnitEnum.LENGTHUNIT &&
          unitName === IfcSIUnitName.METRE &&
          unitPrefixVal !== null) {
          this.linearScalingFactor *= unitPrefixVal
          continue
        } else {
          // console.log("linear scaling factor not set for IfcSIUnit")
        }
      } else if (unit instanceof IfcConversionBasedUnit) {
        // TODO: Linear scaling factor for IfcConversionBasedUnit
        /* const unitType = unit.UnitType
        unit.ConversionFactor.UnitComponent
        unit.Dimensions
        console.log("unit.Name: " + unit.Name)*/
      }
    }
  }

  /**
   *
   * @param prefix
   * @return {number | null}
   */
  convertPrefix(prefix: IfcSIPrefix): number | null {
    /* eslint-disable no-magic-numbers */
    switch (prefix) {
      case IfcSIPrefix.EXA:
        return 1e18
      case IfcSIPrefix.PETA:
        return 1e15
      case IfcSIPrefix.TERA:
        return 1e12
      case IfcSIPrefix.GIGA:
        return 1e9
      case IfcSIPrefix.MEGA:
        return 1e6
      case IfcSIPrefix.KILO:
        return 1e3
      case IfcSIPrefix.HECTO:
        return 1e2
      case IfcSIPrefix.DECA:
        return 1e1
      case IfcSIPrefix.DECI:
        return 1e-1
      case IfcSIPrefix.CENTI:
        return 1e-2
      case IfcSIPrefix.MILLI:
        return 1e-3
      case IfcSIPrefix.MICRO:
        return 1e-6
      case IfcSIPrefix.NANO:
        return 1e-9
      case IfcSIPrefix.PICO:
        return 1e-12
      case IfcSIPrefix.FEMTO:
        return 1e-15
      case IfcSIPrefix.ATTO:
        return 1e-18
      default:
        return null
    }
    /* eslint-enable no-case-declarations */
  }

  /**
   * Extract the geometry data from the IFC
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

    this.extractLinearScalingFactor()
    const previousMemoizationState = this.model.elementMemoization

    // populate relMaterialsMap
    const relAssociatesMaterials = this.model.types(IfcRelAssociatesMaterial)

    try {

      this.model.elementMemoization = false

      for (const relAssociateMaterial of relAssociatesMaterials) {
        const relatingMaterial = relAssociateMaterial.RelatingMaterial
        for (const relatedObject of relAssociateMaterial.RelatedObjects) {
          const product = relatedObject

          if (product instanceof IfcProduct) {
            if (product instanceof IfcOpeningElement ||
              product instanceof IfcSpace ||
              product instanceof IfcOpeningStandardCase) {
              continue
            }

            // save mapping of IfcProduct --> IfcMaterial
            this.materials.relMaterialsMap.set(
                product.localID,
                relatingMaterial.localID)
          } else {
            //     console.log(`type other than IfcProduct: ${EntityTypesIfc[product.type]}`)
          }
        }
      }

      // populate MaterialDefinitionsMap
      this.populateMaterialDefinitionsMap()

      // populate relvoids map
      this.populateRelVoidsMap()

      // populate styled items map
      this.populateStyledItemsMap()

      const products = this.model.types(IfcProduct)

      for (const product of products) {

        this.scene.clearParentStack()

        if (
          product instanceof IfcOpeningElement ||
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
          // extract styledItem material
          const styledItemID: number | undefined =
            this.extractMaterialStyle( product )

          let hasRelVoid: boolean = false
          const extractRelVoidsResult = this.extractRelVoids(product)
          let relVoidsMeshVector: NativeVectorGeometry | undefined
          let relVoidLocalIDs: number[] | undefined

          if (extractRelVoidsResult !== void 0) {
            // eslint-disable-next-line no-unused-vars
            [relVoidsMeshVector, relVoidLocalIDs] = extractRelVoidsResult
          }

          if (relVoidsMeshVector !== void 0) {
            hasRelVoid = true
          }

          if (styledItemID) {
            // optimization: extract the first representation item and cache
            // the styleID to apply to the rest of the product geometry
            const styledItem = this.model.getElementByLocalID(styledItemID)
            let reusableStyleID: number | undefined

            for (const representation of representations.Representations) {
              if (representation instanceof IfcShapeRepresentation) {

                // this check is essential -
                // if RepresentationIdentifier !== Body or Facetation we must skip it
                if (representation.RepresentationIdentifier !== 'Body' &&
                representation.RepresentationIdentifier !== 'Facetation') {
                  continue
                }
              }
              for (const item of representation.Items) {

                this.extractRepresentationItem(item, product.localID, hasRelVoid)

                if (hasRelVoid) {
                  this.applyRelVoidToRepresentation(
                      item,
                    relVoidsMeshVector!,
                    product.localID)
                }
                const styledItemLocalID_ = this.materials.styledItemMap.get(item.localID)
                if (styledItemLocalID_ !== undefined) {
                  const styledItem_ =
                  this.model.getElementByLocalID(styledItemLocalID_) as IfcStyledItem
                  this.extractStyledItem(styledItem_)
                } else if (reusableStyleID !== void 0) {
                  this.materials.addGeometryMapping(item.localID, reusableStyleID)
                } else if (styledItem instanceof IfcStyledItem) {
                  // here we have the styled item, apply it to all geometry in this IfcProduct
                  reusableStyleID = this.extractStyledItem(styledItem, item)
                }
              }
            }
          } else {
            for (const representation of representations.Representations) {
              if (representation instanceof IfcShapeRepresentation) {

                // this check is essential -
                // if RepresentationIdentifier !== Body or Facetation we must skip it
                if (representation.RepresentationIdentifier !== 'Body' &&
                representation.RepresentationIdentifier !== 'Facetation') {
                  continue
                }
              }
              for (const item of representation.Items) {
                this.extractRepresentationItem(item, product.localID, hasRelVoid)

                const styledItemLocalID_ = this.materials.styledItemMap.get(item.localID)
                if (styledItemLocalID_ !== void 0) {
                  const styledItem_ =
                  this.model.getElementByLocalID(styledItemLocalID_) as IfcStyledItem
                  this.extractStyledItem(styledItem_)
                }

                if (hasRelVoid) {
                  this.applyRelVoidToRepresentation(
                      item,
                    relVoidsMeshVector!,
                    product.localID)
                }
              }
            }
          }

          relVoidsMeshVector?.delete()
        }
      }

      result = ExtractResult.COMPLETE

      const endTime = Date.now()
      const executionTimeInMs = endTime - startTime

      if (logTime) {
        console.log(`Geometry Extraction took ${executionTimeInMs} milliseconds to execute.`)
      }

      return [result, this.scene]
    } finally {
      this.model.elementMemoization = previousMemoizationState
    }
  }
}
