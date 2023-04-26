/* This is generated code, don't alter */
enum IfcCableSegmentTypeEnum {
  BUSBARSEGMENT = 0,
  CABLESEGMENT = 1,
  CONDUCTORSEGMENT = 2,
  CORESEGMENT = 3,
  USERDEFINED = 4,
  NOTDEFINED = 5,
}

const IfcCableSegmentTypeEnumCount = 6

export { IfcCableSegmentTypeEnum, IfcCableSegmentTypeEnumCount }

/* This is generated code, don't alter */
import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash'

let gMapIfcCableSegmentTypeEnum =
  new Int32Array( [28] )

let prefixSumAddressIfcCableSegmentTypeEnum =
  new Uint32Array( [0,13,31,43,57,70,85] )

let slotMapIfcCableSegmentTypeEnum =
  new Int32Array( [4,2,5,1,3,0] )

let encodedDataIfcCableSegmentTypeEnum =
  (new TextEncoder()).encode( ".USERDEFINED..CONDUCTORSEGMENT..NOTDEFINED..CABLESEGMENT..CORESEGMENT..BUSBARSEGMENT." )

let IfcCableSegmentTypeEnumSearch =
  new MinimalPerfectHash< IfcCableSegmentTypeEnum >( gMapIfcCableSegmentTypeEnum, prefixSumAddressIfcCableSegmentTypeEnum, slotMapIfcCableSegmentTypeEnum, encodedDataIfcCableSegmentTypeEnum )

export { IfcCableSegmentTypeEnumSearch }


/* This is generated cold, don't alter */
import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser'

const parser = StepEnumParser.Instance

export function IfcCableSegmentTypeEnumDeserializeStep(
  input: Uint8Array,
  cursor: number,
  endCursor: number ): IfcCableSegmentTypeEnum | undefined {
  return parser.extract< IfcCableSegmentTypeEnum >( IfcCableSegmentTypeEnumSearch, input, cursor, endCursor )
}
