import { FlatMesh, IfcGeometry, RawLineData, Vector } from './ifc_api'


export interface IfcApiModelPassthrough {
  getFlatMesh(expressID: number): FlatMesh
  loadAllGeometry(): Vector<FlatMesh>
  streamAllMeshesWithTypes(types: number[], meshCallback: (mesh: FlatMesh) => void): void
  streamAllMeshes(meshCallback: (mesh: FlatMesh) => void): void
  getCoordinationMatrix(): number[]
  getAllLines(): Vector<number>
  getRawLineData(expressID: number): RawLineData
  flattenLine(line: any): void
  getLine(expressID: number, flatten: boolean): string
  getGeometry(geometryExpressID: number): IfcGeometry
}
