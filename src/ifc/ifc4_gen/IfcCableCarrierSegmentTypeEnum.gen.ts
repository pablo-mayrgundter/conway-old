/* This is generated code, don't alter */
enum IfcCableCarrierSegmentTypeEnum {
  CABLELADDERSEGMENT = 0,
  CABLETRAYSEGMENT = 1,
  CABLETRUNKINGSEGMENT = 2,
  CONDUITSEGMENT = 3,
  USERDEFINED = 4,
  NOTDEFINED = 5,
}

const IfcCableCarrierSegmentTypeEnumCount = 6

export { IfcCableCarrierSegmentTypeEnum, IfcCableCarrierSegmentTypeEnumCount }

/* This is generated code, don't alter */
import MinimalPerfectHash from '../../indexing/minimal_perfect_hash'

let gMapIfcCableCarrierSegmentTypeEnum =
  new Int32Array( [12] )

let prefixSumAddressIfcCableCarrierSegmentTypeEnum =
  new Uint32Array( [0,13,29,49,67,89,101] )

let slotMapIfcCableCarrierSegmentTypeEnum =
  new Int32Array( [4,3,0,1,2,5] )

let encodedDataIfcCableCarrierSegmentTypeEnum =
  (new TextEncoder()).encode( ".USERDEFINED..CONDUITSEGMENT..CABLELADDERSEGMENT..CABLETRAYSEGMENT..CABLETRUNKINGSEGMENT..NOTDEFINED." )

let IfcCableCarrierSegmentTypeEnumSearch =
  new MinimalPerfectHash< IfcCableCarrierSegmentTypeEnum >( gMapIfcCableCarrierSegmentTypeEnum, prefixSumAddressIfcCableCarrierSegmentTypeEnum, slotMapIfcCableCarrierSegmentTypeEnum, encodedDataIfcCableCarrierSegmentTypeEnum )

export { IfcCableCarrierSegmentTypeEnumSearch }


/* This is generated cold, don't alter */
import StepEnumParser from '../../step/parsing/step_enum_parser'

const parser = StepEnumParser.Instance

export function IfcCableCarrierSegmentTypeEnumDeserializeStep(
  input: Uint8Array,
  cursor: number,
  endCursor: number ): IfcCableCarrierSegmentTypeEnum | undefined {
  return parser.extract< IfcCableCarrierSegmentTypeEnum >( IfcCableCarrierSegmentTypeEnumSearch, input, cursor, endCursor )
}
