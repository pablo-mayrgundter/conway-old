/* This is generated code, don't alter */
enum IfcCableCarrierFittingTypeEnum {
  BEND = 0,
  CROSS = 1,
  REDUCER = 2,
  TEE = 3,
  USERDEFINED = 4,
  NOTDEFINED = 5,
}

const IfcCableCarrierFittingTypeEnumCount = 6

export { IfcCableCarrierFittingTypeEnum, IfcCableCarrierFittingTypeEnumCount }

/* This is generated code, don't alter */
import MinimalPerfectHash from '../../indexing/minimal_perfect_hash'

let gMapIfcCableCarrierFittingTypeEnum =
  new Int32Array( [54] )

let prefixSumAddressIfcCableCarrierFittingTypeEnum =
  new Uint32Array( [0,13,22,34,40,47,52] )

let slotMapIfcCableCarrierFittingTypeEnum =
  new Int32Array( [4,2,5,0,1,3] )

let encodedDataIfcCableCarrierFittingTypeEnum =
  (new TextEncoder()).encode( ".USERDEFINED..REDUCER..NOTDEFINED..BEND..CROSS..TEE." )

let IfcCableCarrierFittingTypeEnumSearch =
  new MinimalPerfectHash< IfcCableCarrierFittingTypeEnum >( gMapIfcCableCarrierFittingTypeEnum, prefixSumAddressIfcCableCarrierFittingTypeEnum, slotMapIfcCableCarrierFittingTypeEnum, encodedDataIfcCableCarrierFittingTypeEnum )

export { IfcCableCarrierFittingTypeEnumSearch }


/* This is generated cold, don't alter */
import StepEnumParser from '../../step/parsing/step_enum_parser'

const parser = StepEnumParser.Instance

export function IfcCableCarrierFittingTypeEnumDeserializeStep(
  input: Uint8Array,
  cursor: number,
  endCursor: number ): IfcCableCarrierFittingTypeEnum | undefined {
  return parser.extract< IfcCableCarrierFittingTypeEnum >( IfcCableCarrierFittingTypeEnumSearch, input, cursor, endCursor )
}
