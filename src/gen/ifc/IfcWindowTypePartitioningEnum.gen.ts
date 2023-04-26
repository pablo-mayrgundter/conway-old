/* This is generated code, don't alter */
enum IfcWindowTypePartitioningEnum {
  SINGLE_PANEL = 0,
  DOUBLE_PANEL_VERTICAL = 1,
  DOUBLE_PANEL_HORIZONTAL = 2,
  TRIPLE_PANEL_VERTICAL = 3,
  TRIPLE_PANEL_BOTTOM = 4,
  TRIPLE_PANEL_TOP = 5,
  TRIPLE_PANEL_LEFT = 6,
  TRIPLE_PANEL_RIGHT = 7,
  TRIPLE_PANEL_HORIZONTAL = 8,
  USERDEFINED = 9,
  NOTDEFINED = 10,
}

const IfcWindowTypePartitioningEnumCount = 11

export { IfcWindowTypePartitioningEnum, IfcWindowTypePartitioningEnumCount }

/* This is generated code, don't alter */
import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash'

let gMapIfcWindowTypePartitioningEnum =
  new Int32Array( [2,3,321] )

let prefixSumAddressIfcWindowTypePartitioningEnum =
  new Uint32Array( [0,13,38,61,79,93,105,124,147,167,188,213] )

let slotMapIfcWindowTypePartitioningEnum =
  new Int32Array( [9,8,1,5,0,10,6,3,7,4,2] )

let encodedDataIfcWindowTypePartitioningEnum =
  (new TextEncoder()).encode( ".USERDEFINED..TRIPLE_PANEL_HORIZONTAL..DOUBLE_PANEL_VERTICAL..TRIPLE_PANEL_TOP..SINGLE_PANEL..NOTDEFINED..TRIPLE_PANEL_LEFT..TRIPLE_PANEL_VERTICAL..TRIPLE_PANEL_RIGHT..TRIPLE_PANEL_BOTTOM..DOUBLE_PANEL_HORIZONTAL." )

let IfcWindowTypePartitioningEnumSearch =
  new MinimalPerfectHash< IfcWindowTypePartitioningEnum >( gMapIfcWindowTypePartitioningEnum, prefixSumAddressIfcWindowTypePartitioningEnum, slotMapIfcWindowTypePartitioningEnum, encodedDataIfcWindowTypePartitioningEnum )

export { IfcWindowTypePartitioningEnumSearch }


/* This is generated cold, don't alter */
import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser'

const parser = StepEnumParser.Instance

export function IfcWindowTypePartitioningEnumDeserializeStep(
  input: Uint8Array,
  cursor: number,
  endCursor: number ): IfcWindowTypePartitioningEnum | undefined {
  return parser.extract< IfcWindowTypePartitioningEnum >( IfcWindowTypePartitioningEnumSearch, input, cursor, endCursor )
}
