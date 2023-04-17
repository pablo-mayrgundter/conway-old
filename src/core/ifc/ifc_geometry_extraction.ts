

import { ConwayGeometry, ParamsPolygonalFaceSet, GeometryObject, ResultsGltf } from "../../../dependencies/conway-geom/conway_geometry"
import { IfcPolygonalFaceSet } from '../../gen/ifc'
import IfcStepModel from './ifc_step_model'

type NativeVectorGlmVec3 = any
type NativeUintVector = any

export enum ExtractResult {

  COMPLETE     = 0,
  INCOMPLETE   = 1,
  SYNTAX_ERROR = 2,
  MISSING_TYPE = 3,
  INVALID_STEP = 4 
}


export class IfcGeometryExtraction {
  private conwayGeom: ConwayGeometry

  private geometryArray: GeometryObject[]

  constructor() {
    this.conwayGeom = new ConwayGeometry()
    this.geometryArray = []
  }

  async initialize() {
    await this.conwayGeom.initialize()
  }

  getGeometry(): GeometryObject[] {
    return this.geometryArray
  }

  getWasmModule(): any {
    return this.conwayGeom.wasmModule
  }

  /*
  These native memory helpers should probably be in their own class ...
   */
  nativeVectorGlmVec3(initialSize?: number): NativeVectorGlmVec3 {
    let nativeVectorGlmVec3_ = new (this.getWasmModule().glmVec3Array as NativeVectorGlmVec3)()

    if (initialSize) {
      //resize has a required second parameter to set default values if new vector size > old vector size
      nativeVectorGlmVec3_.resize(initialSize, { x: 0, y: 0, z: 0 })
    }

    return nativeVectorGlmVec3_
  }

  /*
  These native memory helpers should probably be in their own class ...
   */
  nativeUintVector(initialize?: number): NativeUintVector {
    let nativeUintVector_ = new (this.getWasmModule().UintVector as NativeUintVector)()

    if (initialize) {
      //resize has a required second parameter to set default values if new vector size > old vector size
      nativeUintVector_.resize(initialize, 0)
    }

    return nativeUintVector_
  }


  isInitialized(): Boolean {
    return this.conwayGeom.initialized
  }

  getModelId(): Number {
    if (this.isInitialized()) {
      return this.conwayGeom.modelId
    } else {
      return -1
    }
  }

  addGeometry(geometry: GeometryObject) {
    this.geometryArray.push(geometry)
  }

  toObj(geometry: GeometryObject): string {
    return this.conwayGeom.toObj(geometry)
  }

  toGltf(geometry: GeometryObject, isGlb: boolean, outputDraco: boolean, fileUri: string): ResultsGltf {
    return this.conwayGeom.toGltf(geometry, isGlb, outputDraco, fileUri)
  }

  destroy() {
    this.conwayGeom.destroy()
    this.conwayGeom.initialized = false;
  }

  printGeometryInfo(geometry: GeometryObject) {
    const vertexDataPtr = geometry.GetVertexData()
    const vertexDataSize = geometry.GetVertexDataSize()
    const indexDataPtr = geometry.GetIndexData()
    const indexDataSize = geometry.GetIndexDataSize()

    //unwrap vertex data
    const returnedVertexData = new Float32Array(this.getWasmModule().HEAPF32.buffer, vertexDataPtr, vertexDataPtr.length)

    //unwrap index data
    const returnedIndexData = new Uint32Array(this.getWasmModule().HEAPU32.buffer, indexDataPtr, indexDataPtr.length)

    console.log("VertexData Ptr: " + vertexDataPtr)
    console.log("VertexData Size: " + vertexDataSize)
    console.log("IndexData Ptr: " + indexDataPtr)
    console.log("IndexData Size: " + indexDataSize)

    // Now you can access the vertex Data array in TypeScript using the returnedVertexData object
    console.log("returnedVertexData[0]: " + returnedVertexData[0]) // prints the first element of vertexData

    // Now you can access the indexData array in TypeScript using the returnedIndexData object
    console.log("returnedIndexData[0]: " + returnedIndexData[0]) // prints the first element of indexData
  }

  extractIFCGeometryData(model: IfcStepModel, logTime: boolean = false): ExtractResult {
    let result: ExtractResult = ExtractResult.COMPLETE

    const startTime = Date.now()

    let polygonalFaceSets = model.types(IfcPolygonalFaceSet)
    let entities = Array.from(polygonalFaceSets)


    for (const entity of entities) {
      //map points 
      const points = entity.Coordinates.CoordList.map(([x, y, z]) => ({ x, y, z }))

      //map indices 
      const faces = entity.Faces.values()

      let indicesPerFace: number = -1

      //if the first Face is valid, we can set the indicesPerFace here. 
      if (entity.Faces.at(0) != undefined) {
        indicesPerFace = entity.Faces.at(0)!.CoordIndex.length
      }
      else {
        result = ExtractResult.INCOMPLETE
        continue
      }

      const indices = Array.from(faces, (face) => face.CoordIndex).flat()

      //initialize new native glm::vec3 array object (free memory with delete())
      const pointsArray: NativeVectorGlmVec3 = this.nativeVectorGlmVec3(points.length)

      //populate points array 
      for (let i = 0; i < points.length; i++) {
        pointsArray.set(i, points[i])
      }

      //initialize new native indices array (free memory with delete())
      const indicesArray: NativeUintVector = this.nativeUintVector(indices.length)

      for (let i = 0; i < indices.length; i++) {
        indicesArray.set(i, indices[i])
      }

      const parameters: ParamsPolygonalFaceSet = {
        numPoints: pointsArray.size(),
        numIndices: indicesArray.size(),
        indicesPerFace: indicesPerFace,
        indexedPolygonalFaceWithVoids: false,
        points: pointsArray,
        indices: indicesArray,
      }

      const geometry: GeometryObject = this.conwayGeom.getGeometry(parameters)

      //add geometry to the list of geometry objects returned by wasm module 
      this.addGeometry(geometry)

      //free allocated wasm vectors
      pointsArray.delete()
      indicesArray.delete()
    }

    const endTime = Date.now()
    const executionTimeInMs = endTime - startTime

    if (logTime) {
      console.log(`Geometry Extraction took ${executionTimeInMs} milliseconds to execute.`)
    }

    return result
  }
}