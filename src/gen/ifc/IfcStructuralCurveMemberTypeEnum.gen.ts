/* This is generated code, don't alter */
enum IfcStructuralCurveMemberTypeEnum {
  RIGID_JOINED_MEMBER = 0,
  PIN_JOINED_MEMBER = 1,
  CABLE = 2,
  TENSION_MEMBER = 3,
  COMPRESSION_MEMBER = 4,
  USERDEFINED = 5,
  NOTDEFINED = 6,
}

const IfcStructuralCurveMemberTypeEnumCount = 7

export { IfcStructuralCurveMemberTypeEnum, IfcStructuralCurveMemberTypeEnumCount }

/* This is generated code, don't alter */
import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash'

let gMapIfcStructuralCurveMemberTypeEnum =
  new Int32Array( [486] )

let prefixSumAddressIfcStructuralCurveMemberTypeEnum =
  new Uint32Array( [0,13,25,32,53,73,92,108] )

let slotMapIfcStructuralCurveMemberTypeEnum =
  new Int32Array( [5,6,2,0,4,1,3] )

let encodedDataIfcStructuralCurveMemberTypeEnum =
  (new TextEncoder()).encode( ".USERDEFINED..NOTDEFINED..CABLE..RIGID_JOINED_MEMBER..COMPRESSION_MEMBER..PIN_JOINED_MEMBER..TENSION_MEMBER." )

let IfcStructuralCurveMemberTypeEnumSearch =
  new MinimalPerfectHash< IfcStructuralCurveMemberTypeEnum >( gMapIfcStructuralCurveMemberTypeEnum, prefixSumAddressIfcStructuralCurveMemberTypeEnum, slotMapIfcStructuralCurveMemberTypeEnum, encodedDataIfcStructuralCurveMemberTypeEnum )

export { IfcStructuralCurveMemberTypeEnumSearch }


/* This is generated cold, don't alter */
import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser'

const parser = StepEnumParser.Instance

export function IfcStructuralCurveMemberTypeEnumDeserializeStep(
  input: Uint8Array,
  cursor: number,
  endCursor: number ): IfcStructuralCurveMemberTypeEnum | undefined {
  return parser.extract< IfcStructuralCurveMemberTypeEnum >( IfcStructuralCurveMemberTypeEnumSearch, input, cursor, endCursor )
}
