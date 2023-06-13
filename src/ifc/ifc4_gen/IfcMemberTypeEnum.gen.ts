/* This is generated code, don't alter */
enum IfcMemberTypeEnum {
  BRACE = 0,
  CHORD = 1,
  COLLAR = 2,
  MEMBER = 3,
  MULLION = 4,
  PLATE = 5,
  POST = 6,
  PURLIN = 7,
  RAFTER = 8,
  STRINGER = 9,
  STRUT = 10,
  STUD = 11,
  USERDEFINED = 12,
  NOTDEFINED = 13,
}

const IfcMemberTypeEnumCount = 14

export { IfcMemberTypeEnum, IfcMemberTypeEnumCount }

/* This is generated code, don't alter */
import MinimalPerfectHash from '../../indexing/minimal_perfect_hash'

let gMapIfcMemberTypeEnum =
  new Int32Array( [0,5,36,32] )

let prefixSumAddressIfcMemberTypeEnum =
  new Uint32Array( [0,10,19,25,33,41,49,57,70,77,89,95,102,109,116] )

let slotMapIfcMemberTypeEnum =
  new Int32Array( [9,4,11,2,3,7,8,12,1,13,6,5,10,0] )

let encodedDataIfcMemberTypeEnum =
  (new TextEncoder()).encode( ".STRINGER..MULLION..STUD..COLLAR..MEMBER..PURLIN..RAFTER..USERDEFINED..CHORD..NOTDEFINED..POST..PLATE..STRUT..BRACE." )

let IfcMemberTypeEnumSearch =
  new MinimalPerfectHash< IfcMemberTypeEnum >( gMapIfcMemberTypeEnum, prefixSumAddressIfcMemberTypeEnum, slotMapIfcMemberTypeEnum, encodedDataIfcMemberTypeEnum )

export { IfcMemberTypeEnumSearch }


/* This is generated cold, don't alter */
import StepEnumParser from '../../step/parsing/step_enum_parser'

const parser = StepEnumParser.Instance

export function IfcMemberTypeEnumDeserializeStep(
  input: Uint8Array,
  cursor: number,
  endCursor: number ): IfcMemberTypeEnum | undefined {
  return parser.extract< IfcMemberTypeEnum >( IfcMemberTypeEnumSearch, input, cursor, endCursor )
}
