/* This is generated code, don't alter */
enum IfcWindowStyleConstructionEnum {
  ALUMINIUM = 0,
  HIGH_GRADE_STEEL = 1,
  STEEL = 2,
  WOOD = 3,
  ALUMINIUM_WOOD = 4,
  PLASTIC = 5,
  OTHER_CONSTRUCTION = 6,
  NOTDEFINED = 7,
}

const IfcWindowStyleConstructionEnumCount = 8

export { IfcWindowStyleConstructionEnum, IfcWindowStyleConstructionEnumCount }

/* This is generated code, don't alter */
import MinimalPerfectHash from '../../indexing/minimal_perfect_hash'

let gMapIfcWindowStyleConstructionEnum =
  new Int32Array( [16,-2,2] )

let prefixSumAddressIfcWindowStyleConstructionEnum =
  new Uint32Array( [0,12,23,32,48,55,75,93,99] )

let slotMapIfcWindowStyleConstructionEnum =
  new Int32Array( [7,0,5,4,2,6,1,3] )

let encodedDataIfcWindowStyleConstructionEnum =
  (new TextEncoder()).encode( ".NOTDEFINED..ALUMINIUM..PLASTIC..ALUMINIUM_WOOD..STEEL..OTHER_CONSTRUCTION..HIGH_GRADE_STEEL..WOOD." )

let IfcWindowStyleConstructionEnumSearch =
  new MinimalPerfectHash< IfcWindowStyleConstructionEnum >( gMapIfcWindowStyleConstructionEnum, prefixSumAddressIfcWindowStyleConstructionEnum, slotMapIfcWindowStyleConstructionEnum, encodedDataIfcWindowStyleConstructionEnum )

export { IfcWindowStyleConstructionEnumSearch }


/* This is generated cold, don't alter */
import StepEnumParser from '../../step/parsing/step_enum_parser'

const parser = StepEnumParser.Instance

export function IfcWindowStyleConstructionEnumDeserializeStep(
  input: Uint8Array,
  cursor: number,
  endCursor: number ): IfcWindowStyleConstructionEnum | undefined {
  return parser.extract< IfcWindowStyleConstructionEnum >( IfcWindowStyleConstructionEnumSearch, input, cursor, endCursor )
}
