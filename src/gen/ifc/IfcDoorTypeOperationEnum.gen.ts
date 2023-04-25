/* This is generated code, don't alter */
enum IfcDoorTypeOperationEnum {
  SINGLE_SWING_LEFT = 0,
  SINGLE_SWING_RIGHT = 1,
  DOUBLE_DOOR_SINGLE_SWING = 2,
  DOUBLE_DOOR_SINGLE_SWING_OPPOSITE_LEFT = 3,
  DOUBLE_DOOR_SINGLE_SWING_OPPOSITE_RIGHT = 4,
  DOUBLE_SWING_LEFT = 5,
  DOUBLE_SWING_RIGHT = 6,
  DOUBLE_DOOR_DOUBLE_SWING = 7,
  SLIDING_TO_LEFT = 8,
  SLIDING_TO_RIGHT = 9,
  DOUBLE_DOOR_SLIDING = 10,
  FOLDING_TO_LEFT = 11,
  FOLDING_TO_RIGHT = 12,
  DOUBLE_DOOR_FOLDING = 13,
  REVOLVING = 14,
  ROLLINGUP = 15,
  SWING_FIXED_LEFT = 16,
  SWING_FIXED_RIGHT = 17,
  USERDEFINED = 18,
  NOTDEFINED = 19,
}

const IfcDoorTypeOperationEnumCount = 20

export { IfcDoorTypeOperationEnum, IfcDoorTypeOperationEnumCount }

/* This is generated code, don't alter */
import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash'

let gMapIfcDoorTypeOperationEnum =
  new Int32Array( [32,25,131,-18,3] )

let prefixSumAddressIfcDoorTypeOperationEnum =
  new Uint32Array( [0,26,39,59,76,95,106,146,164,190,208,249,267,288,309,320,337,356,376,388,407] )

let slotMapIfcDoorTypeOperationEnum =
  new Int32Array( [7,18,1,8,5,15,3,16,2,9,4,12,13,10,14,11,0,6,19,17] )

let encodedDataIfcDoorTypeOperationEnum =
  (new TextEncoder()).encode( ".DOUBLE_DOOR_DOUBLE_SWING..USERDEFINED..SINGLE_SWING_RIGHT..SLIDING_TO_LEFT..DOUBLE_SWING_LEFT..ROLLINGUP..DOUBLE_DOOR_SINGLE_SWING_OPPOSITE_LEFT..SWING_FIXED_LEFT..DOUBLE_DOOR_SINGLE_SWING..SLIDING_TO_RIGHT..DOUBLE_DOOR_SINGLE_SWING_OPPOSITE_RIGHT..FOLDING_TO_RIGHT..DOUBLE_DOOR_FOLDING..DOUBLE_DOOR_SLIDING..REVOLVING..FOLDING_TO_LEFT..SINGLE_SWING_LEFT..DOUBLE_SWING_RIGHT..NOTDEFINED..SWING_FIXED_RIGHT." )

let IfcDoorTypeOperationEnumSearch =
  new MinimalPerfectHash< IfcDoorTypeOperationEnum >( gMapIfcDoorTypeOperationEnum, prefixSumAddressIfcDoorTypeOperationEnum, slotMapIfcDoorTypeOperationEnum, encodedDataIfcDoorTypeOperationEnum )

export { IfcDoorTypeOperationEnumSearch }


/* This is generated cold, don't alter */
import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser'

const parser = StepEnumParser.Instance

export function IfcDoorTypeOperationEnumDeserializeStep(
  input: Uint8Array,
  cursor: number,
  endCursor: number ): IfcDoorTypeOperationEnum | undefined {
  return parser.extract< IfcDoorTypeOperationEnum >( IfcDoorTypeOperationEnumSearch, input, cursor, endCursor )
}
