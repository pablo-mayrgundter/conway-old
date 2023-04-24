/* This is generated code, don't alter */
enum IfcAddressTypeEnum {
  OFFICE = 0,
  SITE = 1,
  HOME = 2,
  DISTRIBUTIONPOINT = 3,
  USERDEFINED = 4,
}

const IfcAddressTypeEnumCount = 5

export { IfcAddressTypeEnum, IfcAddressTypeEnumCount }

/* This is generated code, don't alter */
import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash'

let gMapIfcAddressTypeEnum =
  new Int32Array( [35] )

let prefixSumAddressIfcAddressTypeEnum =
  new Uint32Array( [0,6,14,27,46,52] )

let slotMapIfcAddressTypeEnum =
  new Int32Array( [2,0,4,3,1] )

let encodedDataIfcAddressTypeEnum =
  (new TextEncoder()).encode( ".HOME..OFFICE..USERDEFINED..DISTRIBUTIONPOINT..SITE." )

let IfcAddressTypeEnumSearch =
  new MinimalPerfectHash< IfcAddressTypeEnum >( gMapIfcAddressTypeEnum, prefixSumAddressIfcAddressTypeEnum, slotMapIfcAddressTypeEnum, encodedDataIfcAddressTypeEnum )

export { IfcAddressTypeEnumSearch }


/* This is generated cold, don't alter */
import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser'

const parser = StepEnumParser.Instance

export function IfcAddressTypeEnumDeserializeStep(
  input: Uint8Array,
  cursor: number,
  endCursor: number ): IfcAddressTypeEnum | undefined {
  return parser.extract< IfcAddressTypeEnum >( IfcAddressTypeEnumSearch, input, cursor, endCursor )
}
