import { ParamsAxis2Placement3D } from '../../../dependencies/conway-geom/conway_geometry'
import { IndexedPolygonalFace } from '../../../dependencies/conway-geom/conway_geometry'
import { ParamsLocalPlacement } from '../../../dependencies/conway-geom/conway_geometry'
import { ConwayGeometry, ParamsPolygonalFaceSet, GeometryObject, ResultsGltf }
  from '../../../dependencies/conway-geom/conway_geometry'
import { IfcAxis2Placement3D, IfcBooleanResult, IfcBoundingBox, IfcBuildingElementPart, IfcBuildingElementProxy, IfcExtrudedAreaSolid, IfcGridPlacement, IfcIndexedPolygonalFaceWithVoids, IfcLocalPlacement, IfcPolygonalFaceSet, IfcProduct, IfcProductDefinitionShape, IfcTessellatedFaceSet } from '../../gen/ifc'
import EntityTypesIfc from '../../gen/ifc/entity_types_ifc.gen'
import IfcStepModel from './ifc_step_model'


type NativeGlmDVec3 = any
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

  // Define the map
  private static conwayGeomMap = new Map<number, ConwayGeometry>()

  //Map<modelID, Map<localID, ConwayMesh>>
  private static geometryMap: Map<number, Map<number, ConwayMesh>> = new Map();

  private static wasmModule: WasmModule

  /**
   * NOTE* Must be called before any other functions in this class
   */
  static async create(): Promise<number> {

    let localIDMap:Map<number, ConwayMesh> = new Map()
    // Check if the map is empty
    if (this.conwayGeomMap.size === 0) {
      const temp: ConwayGeometry = new ConwayGeometry()
      const modelId = await temp.initialize()
      this.conwayGeomMap.set(modelId, temp)
      this.geometryMap.set(modelId, localIDMap)
      // set wasm module
      this.wasmModule = temp.wasmModule
      return modelId
    } else {
      // initialize new ConwayGeometry module passing in the wasm module
      const temp: ConwayGeometry = new ConwayGeometry(this.wasmModule)
      const modelId = await temp.initialize()
      this.conwayGeomMap.set(modelId, temp)
      this.geometryMap.set(modelId, localIDMap)
      return modelId
    }
  }

  /**
   *
   * @return { Map<number, ConwayMesh>} - Map containing all geometry data that was extracted
   */
  static getMeshes(modelId: number = 0): Map<number, ConwayMesh> {
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
   * @param geometry ConwayMesh to add to the ConwayMesh array
   */
  static addMesh(mesh: ConwayMesh, modelId: number = 0) {

    if (this.geometryMap.get(modelId)) {
      this.geometryMap.get(modelId)!.set(mesh.localID, mesh)
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

    //console.log(`VertexData Ptr: ${vertexDataPtr}`)
    //console.log(`VertexData Size: ${vertexDataSize}`)
    //console.log(`IndexData Ptr: ${indexDataPtr}`)
    //console.log(`IndexData Size: ${indexDataSize}`)

    // Now you can access the vertex Data array in TypeScript using the returnedVertexData object
    //console.log(`returnedVertexData[0]: ${returnedVertexData[0]}`)

    // Now you can access the indexData array in TypeScript using the returnedIndexData object
    //console.log(`returnedIndexData[0]: ${returnedIndexData[0]}`)
  }

  private static extractPolygonalFaceSet(entity:IfcPolygonalFaceSet, polygonalFaceStartIndices: NativeULongVector, modelId: number = 0): ExtractResult {
    let result: ExtractResult = ExtractResult.COMPLETE

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
        ////console.log("coordIndex: " + polygonalFace.CoordIndex + "\n")

        ////console.log("innerCoordIndicesLength: " + polygonalFace.InnerCoordIndices.length)

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
    let conwayMesh: ConwayMesh = {
      geometry: geometry,
      localID: entity.localID,
      transform: undefined
    }

    // add mesh to the list of mesh objects returned by wasm module
    this.addMesh(conwayMesh, modelId)

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

  private static extractPolygonalFaceSets(entities: IfcPolygonalFaceSet[], modelId: number = 0): ExtractResult {

    let result: ExtractResult = ExtractResult.COMPLETE
    let faceSetResult:ExtractResult = ExtractResult.INCOMPLETE
    // initialize new native indices array (free memory with delete())
    const polygonalFaceStartIndices: NativeULongVector = this.nativeULongVector(1)

    polygonalFaceStartIndices.set(0, 0)


    for (const entity of entities) {
      faceSetResult = this.extractPolygonalFaceSet(entity, polygonalFaceStartIndices, modelId)

      if (faceSetResult !== ExtractResult.COMPLETE) {
        //console.log("Warning, face set express ID: " + entity.expressID + " extraction incomplete.")
        result = ExtractResult.INCOMPLETE
      }
    }

    polygonalFaceStartIndices.delete()

    return result
  }

  /**
   *
   * @param model - Input IfcStepModel to extract geometry data from
   * @param logTime boolean - print execution time (default no)
   * @return {[ExtractResult, ConwayMesh[]]} - Enum indicating extraction result
   * + Geometry array
   */
  static extractIFCGeometryData(model: IfcStepModel, logTime: boolean = false, modelId: number = 0):
    [ExtractResult, ConwayMesh[]] {
    let result: ExtractResult = ExtractResult.INCOMPLETE

    const startTime = Date.now()


    const products = model.types(IfcProduct)
    const productEntities = Array.from(products)

    ////console.log("productEntities size: " + productEntities.length)
    let count = 0
    let tesselatedFaceSetCount = 0
    for (const product of productEntities) {
      if (product.ObjectPlacement instanceof IfcLocalPlacement) {

        let localGeometryIDs: number[] = []
       // //console.log("localPlacement #" + ++count + ": " + product.ObjectPlacement.RelativePlacement.Location.Coordinates)

        if (product.Representation instanceof IfcProductDefinitionShape) {
          ////console.log("product.Representation: " + product.Representation.expressID)
          for (const representation of product.Representation.Representations) {
            for (const item of representation.Items) {
              if (item instanceof IfcPolygonalFaceSet) {
                localGeometryIDs.push(item.localID)
                this.conwayGeomMap.get(modelId)!.graph.addEdge(product.localID, item.localID)
              } else if (item instanceof IfcBooleanResult) {
                let recursiveElement: any = item
                this.conwayGeomMap.get(modelId)!.graph.addEdge(product.localID, item.localID)
                while (recursiveElement.FirstOperand !== undefined) {
                  this.conwayGeomMap.get(modelId)!.graph.addEdge(recursiveElement.localID, recursiveElement.FirstOperand.localID)
                  this.conwayGeomMap.get(modelId)!.graph.addEdge(recursiveElement.localID, recursiveElement.SecondOperand.localID)
                  recursiveElement = recursiveElement.FirstOperand
                }

                recursiveElement = item

                while (recursiveElement.SecondOperand !== undefined) {
                  this.conwayGeomMap.get(modelId)!.graph.addEdge(recursiveElement.localID, recursiveElement.FirstOperand.localID)
                  this.conwayGeomMap.get(modelId)!.graph.addEdge(recursiveElement.localID, recursiveElement.SecondOperand.localID)
                  recursiveElement = recursiveElement.SecondOperand
                }
              }
            }
          }

          //add to transform mapping 
          this.conwayGeomMap.get(modelId)!.transformMapping.set(product.ObjectPlacement.localID, localGeometryIDs)
        } else {

          if (product.Representation) {
            ;//console.log("product.Representation: " + EntityTypesIfc[model.getElementByLocalID(product.Representation!.localID)!.type])
          } else {
            ;//console.log("product.representation == null")
          }
        }

      } else if (product.ObjectPlacement instanceof IfcGridPlacement) {
        ;//console.log("gridPlacement #" + ++count + ": " + product.ObjectPlacement.PlacementLocation.IntersectingAxes)
      } else {
        ;//console.log("product.ObjectPlacement: " + EntityTypesIfc[model.getElementByLocalID(product.ObjectPlacement!.localID)!.type])
      }

    }

    const sortedIfcElements = this.conwayGeomMap.get(modelId)!.topologicalSort(this.conwayGeomMap.get(modelId)!.graph) as number[]

    //console.log("Extracting IfcPolygonalFaceSet geometries...")
    const polygonalFaceSets = model.types(IfcPolygonalFaceSet)
    const entities = Array.from(polygonalFaceSets)
    result = this.extractPolygonalFaceSets(entities, modelId)

    //console.log("Topographically Sorted IFC Elements:")
    let polygonalFaceSetCount = 0
    let ifcBuildingElementProxyCount = 0
    let ifcBooleanResultCount = 0
    let ifcExtrudedAreaSolidCount = 0

    let previousElementsCount = 0
    for (let elementIndex = sortedIfcElements.length - 1; elementIndex >= 0; elementIndex--) {
      const element = model.getElementByLocalID(sortedIfcElements[elementIndex])!
      //console.log("(" + element + "):" + element.localID + " - " + EntityTypesIfc[element.type])
      if (element instanceof IfcPolygonalFaceSet) {
        polygonalFaceSetCount++
      } else if (element instanceof IfcBuildingElementProxy) {
        ifcBuildingElementProxyCount++

        let relativeTransformArray: any[] = []
        //map the transform from BuildingElementProxy to our geometry 
        let recursiveElement: any = element.ObjectPlacement

        while (recursiveElement instanceof IfcLocalPlacement) {
          let relativePlacement = recursiveElement.RelativePlacement
          let normalizeZ: boolean = false
          let normalizeX: boolean = false
          if (relativePlacement instanceof IfcAxis2Placement3D) {
            if (relativePlacement.Axis !== null) {
              //console.log("Location: " + relativePlacement.Location + " - " + relativePlacement.Location.Coordinates)
              //console.log("Z-Axis Ref: " + relativePlacement.Axis + " - Direction: " + relativePlacement.Axis.DirectionRatios)
              normalizeZ = true
            }

            if (relativePlacement.RefDirection !== null) {
              //console.log("X-Axis Ref: " + relativePlacement.RefDirection + " - Direction: " + relativePlacement.RefDirection.DirectionRatios)
              normalizeX = true
            }

            const position = {
              x: relativePlacement.Location.Coordinates[0],
              y: relativePlacement.Location.Coordinates[1],
              z: relativePlacement.Location.Coordinates[2]
            }

            const zAxisRef = {
              x: relativePlacement.Axis?.DirectionRatios[0],
              y: relativePlacement.Axis?.DirectionRatios[1],
              z: relativePlacement.Axis?.DirectionRatios[2]
            }

            const xAxisRef = {
              x: relativePlacement.RefDirection?.DirectionRatios[0],
              y: relativePlacement.RefDirection?.DirectionRatios[1],
              z: relativePlacement.RefDirection?.DirectionRatios[2]
            }

            const axis2Placement3DParameters: ParamsAxis2Placement3D = {
              position: position,
              zAxisRef: zAxisRef,
              xAxisRef: xAxisRef,
              normalizeZ: normalizeZ,
              normalizeX: normalizeX
            }

            const axis2PlacementTransform = this.conwayGeomMap.get(modelId)!.getAxis2Placement3D(axis2Placement3DParameters)
            //console.log("Geometry Transform: " + axis2PlacementTransform.getValues())

            relativeTransformArray.push(axis2PlacementTransform)

            recursiveElement = recursiveElement.PlacementRelTo

            //now we should have all the absolute transforms, lets loop back through all the geometry we processed and set them
          }
        }

        ////console.log("relative transform array: " + relativeTransformArray.length)
        //now we should have all our relative transform matrices, lets create the absolute transforms
        let absoluteTransformArray: any[] = []
        for (let index = relativeTransformArray.length - 1; index >= 0; index--) {
          const currentTransform = relativeTransformArray[index]

          if (index == relativeTransformArray.length - 1) {
            const localPlacementParameters: ParamsLocalPlacement = {
              useRelPlacement: false,
              axis2Placement: currentTransform,
              // TODO(nickcastel50): shouldn't have to pass anything here but need to figure out how to pass null 
              relPlacement: currentTransform 
            }

            const localPlacement = this.conwayGeomMap.get(modelId)!.getLocalPlacement(localPlacementParameters)
            //console.log("Local Placement: " + localPlacement)
            //console.log("Absolute Placement: " + localPlacement.getValues())
            absoluteTransformArray.push(localPlacement)
          } else {
            const localPlacementParameters: ParamsLocalPlacement = {
              useRelPlacement: true,
              axis2Placement: currentTransform,
              relPlacement: absoluteTransformArray[absoluteTransformArray.length - 1]
            }

            const localPlacement = this.conwayGeomMap.get(modelId)!.getLocalPlacement(localPlacementParameters)
            //console.log("Local Placement: " + localPlacement)
            //console.log("Absolute Placement: " + localPlacement.getValues())
            absoluteTransformArray.push(localPlacement)
          }
        }

        //now we have the absolute transforms, lets assign them to our ConwayMeshes
        const absoluteTransform = absoluteTransformArray[absoluteTransformArray.length - 1]

        /*//console.log("absolute transform array set: " + absoluteTransform.getValues())
        //console.log("elementIndex: " + elementIndex)
        //console.log("previousElementsCount: " + previousElementsCount)*/
        for (let currentIndex = 1; currentIndex < previousElementsCount + 1; currentIndex++) {
          const currentElement = model.getElementByLocalID(sortedIfcElements[elementIndex + currentIndex])!

          if (currentElement instanceof IfcPolygonalFaceSet) {
            //use localID as map into ConwayMeshes
            const currentMesh = this.geometryMap.get(modelId)!.get(currentElement.localID)
            //console.log("currentMesh: " + currentMesh)
            if (currentMesh !== undefined) {
              currentMesh.transform = absoluteTransform
              ////console.log("Set transform for current mesh, localID: " + currentMesh.localID)
              ////console.log("currentMesh transform: " + currentMesh.transform.getValues())
            }
          }
        }

      } else if (element instanceof IfcBooleanResult) {
        ifcBooleanResultCount++
      } else if (element instanceof IfcExtrudedAreaSolid) {
        ifcExtrudedAreaSolidCount++
      }

      if (element instanceof IfcBuildingElementProxy) {
        previousElementsCount = 0
      } else {
        previousElementsCount++
      }
      
    }

    //console.log("Number of polygonalFaceSet: " + polygonalFaceSetCount)
    //console.log("Number of ifcBuildingElementProxys: " + ifcBuildingElementProxyCount)
    //console.log("Number of ifcBooleanResult: " + ifcBooleanResultCount)
    //console.log("Number of ifcExtrudedAreaSolid: " + ifcExtrudedAreaSolidCount)

    //const flatArray = Array.from(this.conwayGeomMap.get(modelId)!.transformMapping.values()).flatMap((arr) => arr) as number[]
    const allEntities: number[] = []

    ////console.log("Number Of IfcPolygonalFaceSets: " + valueCount)

    //console.log("polygonalFaceSets size: " + entities.length)

    for (const entity of entities) {
      allEntities.push(entity.localID)
    }

    const uniqueArr = allEntities.filter((value) => !sortedIfcElements.includes(value))

    for (const localID of uniqueArr) {
      const element = model.getElementByLocalID(localID)

      //console.log("unique element: " + element)
    }

    //TODO(nickcastel50): Not sure when we actually want to apply these transforms
    //apply transformations to the geometry 
    let meshes = Array.from(this.getMeshes(modelId).values())

    for (let index = 0; index < meshes.length; index++) {
      if (meshes[index].transform !== undefined ) {
        meshes[index].geometry.applyTransform(meshes[index].transform)
        //console.log("Applied geometry transform for geometry at localID: " + meshes[index].localID)
      } else {
        meshes.splice(index--, 1)

        console.log("mesh.transform undefined at localID: " + meshes[index].localID + "removing from mesh array...")
      }
    }

    const endTime = Date.now()
    const executionTimeInMs = endTime - startTime

    if (logTime) {
      console.log(`Geometry Extraction took ${executionTimeInMs} milliseconds to execute.`)
    }

    return [result, meshes]
  }
}
