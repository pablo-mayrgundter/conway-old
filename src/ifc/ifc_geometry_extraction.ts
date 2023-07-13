import { array } from 'yargs'
import {
  ConwayGeometry, ParamsPolygonalFaceSet, GeometryObject,
  ResultsGltf, IndexedPolygonalFace, ParamsAxis2Placement3D, Segment, ParamsGetIfcIndexedPolyCurve, CurveObject, ParamsGetAxis2Placement2D, ParamsGetCircleCurve, ParamsCreateNativeIfcProfile, ParamsGetExtrudedAreaSolid
}
  from '../../dependencies/conway-geom/conway_geometry'
import { CanonicalMesh, CanonicalMeshType } from '../core/canonical_mesh'
import { CanonicalProfile } from '../core/canonical_profile'
import {
  IfcArbitraryClosedProfileDef,
  IfcAxis2Placement2D,
  IfcAxis2Placement3D, IfcBoolean, IfcBooleanResult, IfcCartesianPointList2D, IfcCartesianPointList3D, IfcCartesianTransformationOperator3D, IfcCircleProfileDef, IfcCompositeProfileDef, IfcExtrudedAreaSolid, IfcGridPlacement,
  IfcIndexedPolyCurve,
  IfcIndexedPolygonalFaceWithVoids, IfcLocalPlacement, IfcMappedItem,
  IfcObjectPlacement, IfcOpeningElement, IfcOpeningStandardCase,
  IfcPolygonalFaceSet, IfcProduct, IfcProfileDef, IfcRepresentationItem, IfcSpace,
} from './ifc4_gen'
import EntityTypesIfc from './ifc4_gen/entity_types_ifc.gen'
import { IfcSceneBuilder } from './ifc_scene_builder'
import IfcStepModel from './ifc_step_model'


type NativeVectorGlmVec2 = any
type NativeVectorGlmVec3 = any
type NativeUintVector = any
type NativeULongVector = any
type NativeVectorIndexedPolygonalFace = any
type NativeVectorSegment = any
type NativeVectorProfile = any
type NativeVectorCurve = any
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

  private wasmModule: WasmModule
  private scene: IfcSceneBuilder

  /**
   *
   * @param conwayModel
   * @param model
   */
  constructor(
    private readonly conwayModel: ConwayGeometry,
    public readonly model: IfcStepModel) {
    this.scene = new IfcSceneBuilder(model, conwayModel)

    this.wasmModule = conwayModel.wasmModule
  }

  /**
   * @return {IfcSceneBuilder} - Current scene representation 
   */
  getScene(): IfcSceneBuilder {
    return this.scene
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
   * @return {NativeVectorGlmVec2} - a native std::vector<glm::vec2> from the wasm module
   */
  nativeVectorGlmVec2(initialSize?: number): NativeVectorGlmVec2 {
    const nativeVectorGlmVec2_ = new (this.wasmModule.vec2Array as NativeVectorGlmVec2)()

    if (initialSize) {
      // resize has a required second parameter to set default values
      nativeVectorGlmVec2_.resize(initialSize, { x: 0, y: 0 })
    }

    return nativeVectorGlmVec2_
  }

  /**
   * 
   * @param initialSize number - initial size of the vector (optional)
   * @returns {NativeVectorProfile} - a native std::vector<IfcProfile> from the wasm module
   */
  nativeVectorProfile(initialSize?: number): NativeVectorProfile {
    const nativeVectorProfile_ = new (this.wasmModule.profileArray as NativeVectorProfile)()

    if (initialSize) {
      // resize has a required second parameter to set default values
      const defaultProfile = new (this.wasmModule.IfcProfile as any)
      nativeVectorProfile_.resize(initialSize, defaultProfile)
    }

    return nativeVectorProfile_
  }

  /**
   * 
   * @param initialSize number - initial size of the vector (optional)
   * @returns {NativeVectorCurve} - a native std::vector<IfcCurve> from the wasm module
   */
  nativeVectorCurve(initialSize?: number): NativeVectorCurve {
    const nativeVectorCurve_ = new (this.wasmModule.curveArray as NativeVectorCurve)()

    if (initialSize) {
      // resize has a required second parameter to set default values
      nativeVectorCurve_.resize(initialSize, {})
    }

    return nativeVectorCurve_
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
   * 
   * @param initialize number - initial size of the vector (optional)
   * @returns {NativeVectorSegment} - a native object from the wasm module
   */
  nativeSegmentVector(initialize?: number): NativeVectorSegment {
    const nativeVectorSegment = new
      (this.wasmModule.VectorSegment as NativeVectorSegment)()

    if (initialize) {
      // resize has a required second parameter to set default values
      nativeVectorSegment.resize(initialize)
    }

    return nativeVectorSegment
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
    return arr.reduce((totalLength, innerArray) => totalLength + innerArray.length, 0)
  }

  /**
   * 
   * @param indices 
   * @returns {NativeUintVector}
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

  private createAndPopulateNativeProfiles(profiles: CanonicalProfile[]): NativeVectorProfile {
    // Create native indices array
    const profileArray: NativeVectorProfile = this.nativeVectorProfile(profiles.length)

    // Populate the array
    for (let j = 0; j < profiles.length; j++) {
      console.log(`profiles[j].nativeProfile type ${j}: ${profiles[j].nativeProfile!.getType()} `)
      profileArray.set(j, profiles[j].nativeProfile!)
    }

    return profileArray
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

    //console.log(`VertexData Ptr: ${vertexDataPtr}`)
    //console.log(`VertexData Size: ${vertexDataSize}`)
    //console.log(`IndexData Ptr: ${indexDataPtr}`)
    //console.log(`IndexData Size: ${indexDataSize}`)

    // Now you can access the vertex Data array in TypeScript using the returnedVertexData object
    //console.log(`returnedVertexData[0]: ${returnedVertexData[0]}`)

    // Now you can access the indexData array in TypeScript using the returnedIndexData object
    //console.log(`returnedIndexData[0]: ${returnedIndexData[0]}`)
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
        // ////console.log("coordIndex: " + polygonalFace.CoordIndex + "\n")

        // ////console.log("innerCoordIndicesLength: " + polygonalFace.InnerCoordIndices.length)

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
          // ////console.log("innerCoordIndex: " + polygonalFace.InnerCoordIndices[i] + "\n")
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
        //console.log(`Warning, face set express ID: ${entity.expressID} extraction incomplete.`)
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
  extractBooleanResult(from: IfcBooleanResult) {

    console.log(`IFCBooleanResult: ${from}`)
    console.log(`\tFirstOperand: ${EntityTypesIfc[from.FirstOperand.type]}`)
    console.log(`\tSecondOperand: ${EntityTypesIfc[from.SecondOperand.type]}`)

     from.Operator.valueOf()
    // from.SecondOperand

    if (from.FirstOperand instanceof IfcExtrudedAreaSolid 
      || from.FirstOperand instanceof IfcPolygonalFaceSet 
      || from.FirstOperand instanceof IfcBooleanResult) {
      this.extractBooleanOperand(from.FirstOperand)
    }

    if (from.SecondOperand instanceof IfcExtrudedAreaSolid 
      || from.SecondOperand instanceof IfcPolygonalFaceSet 
      || from.SecondOperand instanceof IfcBooleanResult) {
      this.extractBooleanOperand(from.SecondOperand)
    }

  }


  extractBooleanOperand(from: IfcExtrudedAreaSolid | IfcPolygonalFaceSet | IfcBooleanResult) {
    if (from instanceof IfcExtrudedAreaSolid) {
      this.extractExtrudedAreaSolid(from)
      this.scene.addGeometry(from.localID)
    } else if (from instanceof IfcPolygonalFaceSet) {
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
      if (from.FirstOperand instanceof IfcExtrudedAreaSolid 
        || from.FirstOperand instanceof IfcPolygonalFaceSet 
        || from.FirstOperand instanceof IfcBooleanResult) {
        this.extractBooleanOperand(from.FirstOperand)
      }
  
      if (from.SecondOperand instanceof IfcExtrudedAreaSolid 
        || from.SecondOperand instanceof IfcPolygonalFaceSet 
        || from.SecondOperand instanceof IfcBooleanResult) {
        this.extractBooleanOperand(from.SecondOperand)
      }
    }
  }


  /**
   * 
   * @param from 
   */
  extractExtrudedAreaSolid(from: IfcExtrudedAreaSolid) {
    /*//console.log(`IfcExtrudedAreaSolid: ${from}`)
    //console.log(`\tExtrudedDirection: ${EntityTypesIfc[from.ExtrudedDirection.type]}`)
    //console.log(`\tPosition: ${EntityTypesIfc[from.Position!.type]}`)
    //console.log(`\tSweptArea: ${EntityTypesIfc[from.SweptArea.type]}`)
    //console.log(`\tNumber: ${from.Depth}`)*/


    if (from.Position !== null) {
      this.extractAxis2Placement3D(from.Position, from.localID)
    }

    const profile: CanonicalProfile | undefined = this.extractProfile(from.SweptArea)

    if (profile && profile.nativeProfile) {
      const dir = {
        x: from.ExtrudedDirection.DirectionRatios[0],
        y: from.ExtrudedDirection.DirectionRatios[1],
        z: from.ExtrudedDirection.DirectionRatios[2],
      }

      //get geometry 
      const parameters: ParamsGetExtrudedAreaSolid = {
        depth: from.Depth,
        dir: dir,
        profile: profile.nativeProfile
      }

      const geometry: GeometryObject = this.conwayModel.getExtrudedAreaSolid(parameters)

      const canonicalMesh: CanonicalMesh = {
        type: CanonicalMeshType.BUFFER_GEOMETRY,
        geometry: geometry,
        localID: from.localID,
        model: this.model,
      }

      // add mesh to the list of mesh objects
      //console.log("adding ExtrudedAreaSolid to geometry cache")
      this.model.geometry.add(canonicalMesh)

    }
  }

  /**
   * 
   * @param from 
   */
  extractProfile(from: IfcProfileDef): CanonicalProfile | undefined {

    const foundProfile = this.model.profiles.getByLocalID(from.localID)

    if (foundProfile !== void 0) {

      //we already have this profile, return it and exit
      return foundProfile
    }

    let profile: CanonicalProfile | undefined = undefined

    if (from instanceof IfcArbitraryClosedProfileDef) {
      //console.log(`\t\tOuterCurve: ${EntityTypesIfc[from.OuterCurve.type]}`)
      const outerCurve = from.OuterCurve
      if (outerCurve instanceof IfcIndexedPolyCurve) {

        const curveObject = this.extractIndexedPolyCurve(outerCurve)

        if (curveObject) {
          profile = {
            localID: from.localID,
            curve: curveObject,
            holes: void 0,
            profiles: (void 0),
            nativeProfile: (void 0)
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
          nativeProfile: (void 0)
        }
      }
    } else if (from instanceof IfcCompositeProfileDef) {
      profile = {
        localID: from.localID,
        curve: (void 0),
        holes: (void 0),
        profiles: (void 0),
        nativeProfile: (void 0)
      }

      const profiles: CanonicalProfile[] = new Array(from.Profiles.length)

      profile.profiles = profiles

      for (let profileIndex = 0; profileIndex < from.Profiles.length; ++profileIndex) {
        const profile_ = this.extractProfile(from.Profiles[profileIndex])
        if (profile_) {

          profile.profiles[profileIndex] = profile_
        }
      }
    }

    // add profile to the list of profile objects
    let isComposite: boolean = false
    if (profile) {
      const holesArray: NativeVectorProfile = this.nativeVectorCurve()
      if (profile.profiles && profile.profiles.length > 0) {
        isComposite = true

        const profilesArray = this.createAndPopulateNativeProfiles(profile.profiles)

        if (!profile.curve) {
          //create a blank curve for a composite profile 
          profile.curve = new (this.wasmModule.IfcCurve as any)
        }
        //create native IfcProfile vector
        const parameters: ParamsCreateNativeIfcProfile = {
          curve: profile.curve,
          //TODO(nickcastel50): support profiles with holes (out of scope at the moment)
          holes: holesArray,
          isConvex: false,
          isComposite: isComposite,
          profiles: profilesArray
        }
        console.log(`test 1 profilesArray.size(): ${profilesArray.size()}`)
       
        profile.nativeProfile = this.conwayModel.createNativeIfcProfile(parameters)
      } else {

        const profilesArray: NativeVectorProfile = this.nativeVectorProfile()
        const parameters: ParamsCreateNativeIfcProfile = {
          curve: profile.curve,
          //TODO(nickcastel50): support profiles with holes (out of scope at the moment)
          holes: holesArray,
          isConvex: false,
          isComposite: isComposite,
          profiles: profilesArray
        }
        console.log("test 2")
        profile.nativeProfile = this.conwayModel.createNativeIfcProfile(parameters)
      }

      this.model.profiles.add(profile)
    }

    return profile
  }


  /**
   * 
   * @param from 
   */
  extractCircleCurve(from: IfcCircleProfileDef): CurveObject | undefined {
    //console.log("IfcCircleProfileDef")
    if (from.Position !== null) {

      const placement2D = this.extractAxis2Placement2D(from.Position)

      const paramsGetCircleCurve: ParamsGetCircleCurve = {
        radius: from.Radius,
        hasPlacement: true,
        placement: placement2D
      }

      const ifcCurve: CurveObject = this.conwayModel.getCircleCurve(paramsGetCircleCurve)
      //console.log(`ifcCurve: ${ifcCurve}`)
      return ifcCurve

    } else {
      const paramsGetCircleCurve: ParamsGetCircleCurve = {
        radius: from.Radius,
        hasPlacement: false,
        placement: (void 0)
      }

      const ifcCurve: CurveObject = this.conwayModel.getCircleCurve(paramsGetCircleCurve)
      //console.log(`ifcCurve: ${ifcCurve}`)
      return ifcCurve
    }
  }

  /**
   * 
   * @param from - IfcIndexedPolyCurve to process 
   */
  extractIndexedPolyCurve(from: IfcIndexedPolyCurve): CurveObject | undefined {
    //console.log("IfcIndexedPolyCurve")
    if (from.Points instanceof IfcCartesianPointList2D) {
      //console.log(`\t\t\touterCurve.Points (2D): ${from.Points.CoordList}`)
    } else if (from.Points instanceof IfcCartesianPointList3D) {
      //console.log(`\t\t\touterCurve.Points (3D): ${from.Points.CoordList}`)
      //console.log("IfcCartesianPointList3D not supported.")
      return
    }

    //TODO(Error happening here on access)
    ////console.log(`\t\t\touterCurve.Dim: ${outerCurve.Dim}`)

    let segmentVector: NativeVectorSegment
    if (from.Segments !== null) {
      // initialize new segment vector
      segmentVector = this.nativeSegmentVector()

      for (let i = 0; i < from.Segments.length; i++) {

        const indexArray = this.createAndPopulateNativeIndices(from.Segments[i].Value)

        const segment: Segment = {
          isArcType: (from.Segments[i].type == EntityTypesIfc.IFCARCINDEX) ? true : false,
          indices: indexArray
        }

        segmentVector.push_back(segment)

        //console.log(`\t\t\t\tSegment Type: ${EntityTypesIfc[from.Segments[i].type]}`)
        //console.log(`\t\t\t\tSegment Value: ${from.Segments[i].Value}`)
      }
    }

    if (from.Points instanceof IfcCartesianPointList2D) {
      const points = from.Points.CoordList.map(([x, y]) => ({ x, y }))

      // initialize new native glm::vec3 array object (free memory with delete())
      const pointsArray: NativeVectorGlmVec2 = this.nativeVectorGlmVec2(points.length)

      // populate points array
      for (let i = 0; i < points.length; i++) {
        pointsArray.set(i, points[i])
      }

      const paramsGetIndexedPolyCurve: ParamsGetIfcIndexedPolyCurve = {
        dimensions: 2,
        segments: segmentVector,
        points: pointsArray
      }

      //console.log(`paramsGetIndexedPolycurve.dimensions: ${paramsGetIndexedPolyCurve.dimensions}`)
      //console.log(`paramsGetIndexedPolycurve.segments: ${paramsGetIndexedPolyCurve.segments}`)
      //console.log(`paramsGetIndexedPolycurve.points: ${paramsGetIndexedPolyCurve.points}`)

      const ifcCurve: CurveObject = this.conwayModel.getIndexedPolyCurve(paramsGetIndexedPolyCurve)
      //console.log(`ifcCurve: ${ifcCurve}`)

      return ifcCurve
    } else {
      //console.log("IfcCartesianPointList3D not supported.")
    }

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
        //console.log(`Warning, face set express ID: ${from.expressID} extraction incomplete.`)
      }

      polygonalFaceStartIndices.delete()
      this.scene.addGeometry(from.localID)


    } else if (from instanceof IfcBooleanResult) {

      this.extractBooleanResult(from)

    } else if (from instanceof IfcExtrudedAreaSolid) {

      this.extractExtrudedAreaSolid(from)
      this.scene.addGeometry(from.localID)

    }
    else if (from instanceof IfcMappedItem) {

      this.extractMappedItem(from)
    }

  }

  /**
   * 
   * @param from 
   */
  extractAxis2Placement2D(from: IfcAxis2Placement2D): any {

    let normalizeX: boolean = false

    if (from.RefDirection !== null) {
      normalizeX = true
    }

    //console.log(`from.SweptArea.Position.Location.Coordinates (len): ${from.Location.Coordinates.length}`)

    const position2D = {
      x: from.Location.Coordinates[0],
      y: from.Location.Coordinates[1]
    }


    //console.log(`from.SweptArea.Position.RefDirection (len): ${from.RefDirection?.DirectionRatios.length}`)
    const xAxisRef = {
      x: from.RefDirection?.DirectionRatios[0],
      y: from.RefDirection?.DirectionRatios[1]
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
      scale2: 0
    }

    const axis2Placement2DTransform = this.conwayModel
      .getAxis2Placement2D(axis2Placement2DParameters)

    return axis2Placement2DTransform
  }

  /**
   * 
   * @param from 
   * @param parentLocalId 
   * @returns 
   */
  extractAxis2Placement3D(from: IfcAxis2Placement3D, parentLocalId: number,) {

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
      //console.log('IfcGridPlacement: unimplemented.')
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

    result = ExtractResult.COMPLETE

    const endTime = Date.now()
    const executionTimeInMs = endTime - startTime
    if (logTime) {
      //console.log(`Geometry Extraction took ${executionTimeInMs} milliseconds to execute.`)
    }


    return [result, this.scene]
  }
}
