/* This is generated code, don't alter */
enum IfcSystemFurnitureElementTypeEnum {
  PANEL = 0,
  WORKSURFACE = 1,
  USERDEFINED = 2,
  NOTDEFINED = 3,
}

const IfcSystemFurnitureElementTypeEnumCount = 4

export { IfcSystemFurnitureElementTypeEnum, IfcSystemFurnitureElementTypeEnumCount }

/* This is generated code, don't alter */
import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash'

let gMapIfcSystemFurnitureElementTypeEnum =
  new Int32Array( [11] )

let prefixSumAddressIfcSystemFurnitureElementTypeEnum =
  new Uint32Array( [0,7,20,33,45] )

let slotMapIfcSystemFurnitureElementTypeEnum =
  new Int32Array( [0,2,1,3] )

let encodedDataIfcSystemFurnitureElementTypeEnum =
  (new TextEncoder()).encode( ".PANEL..USERDEFINED..WORKSURFACE..NOTDEFINED." )

let IfcSystemFurnitureElementTypeEnumSearch =
  new MinimalPerfectHash< IfcSystemFurnitureElementTypeEnum >( gMapIfcSystemFurnitureElementTypeEnum, prefixSumAddressIfcSystemFurnitureElementTypeEnum, slotMapIfcSystemFurnitureElementTypeEnum, encodedDataIfcSystemFurnitureElementTypeEnum )

export { IfcSystemFurnitureElementTypeEnumSearch }


/* This is generated cold, don't alter */
import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser'

const parser = StepEnumParser.Instance

export function IfcSystemFurnitureElementTypeEnumDeserializeStep(
  input: Uint8Array,
  cursor: number,
  endCursor: number ): IfcSystemFurnitureElementTypeEnum | undefined {
  return parser.extract< IfcSystemFurnitureElementTypeEnum >( IfcSystemFurnitureElementTypeEnumSearch, input, cursor, endCursor )
}
