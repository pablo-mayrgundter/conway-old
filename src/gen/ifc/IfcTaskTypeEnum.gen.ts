/* This is generated code, don't alter */
enum IfcTaskTypeEnum {
  ATTENDANCE = 0,
  CONSTRUCTION = 1,
  DEMOLITION = 2,
  DISMANTLE = 3,
  DISPOSAL = 4,
  INSTALLATION = 5,
  LOGISTIC = 6,
  MAINTENANCE = 7,
  MOVE = 8,
  OPERATION = 9,
  REMOVAL = 10,
  RENOVATION = 11,
  USERDEFINED = 12,
  NOTDEFINED = 13,
}

const IfcTaskTypeEnumCount = 14

export { IfcTaskTypeEnum, IfcTaskTypeEnumCount }

/* This is generated code, don't alter */
import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash'

let gMapIfcTaskTypeEnum =
  new Int32Array( [95,-9,2,9] )

let prefixSumAddressIfcTaskTypeEnum =
  new Uint32Array( [0,14,25,35,47,60,72,84,96,105,119,125,135,146,159] )

let slotMapIfcTaskTypeEnum =
  new Int32Array( [1,3,6,11,12,2,13,0,10,5,8,4,9,7] )

let encodedDataIfcTaskTypeEnum =
  (new TextEncoder()).encode( ".CONSTRUCTION..DISMANTLE..LOGISTIC..RENOVATION..USERDEFINED..DEMOLITION..NOTDEFINED..ATTENDANCE..REMOVAL..INSTALLATION..MOVE..DISPOSAL..OPERATION..MAINTENANCE." )

let IfcTaskTypeEnumSearch =
  new MinimalPerfectHash< IfcTaskTypeEnum >( gMapIfcTaskTypeEnum, prefixSumAddressIfcTaskTypeEnum, slotMapIfcTaskTypeEnum, encodedDataIfcTaskTypeEnum )

export { IfcTaskTypeEnumSearch }


/* This is generated cold, don't alter */
import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser'

const parser = StepEnumParser.Instance

export function IfcTaskTypeEnumDeserializeStep(
  input: Uint8Array,
  cursor: number,
  endCursor: number ): IfcTaskTypeEnum | undefined {
  return parser.extract< IfcTaskTypeEnum >( IfcTaskTypeEnumSearch, input, cursor, endCursor )
}
