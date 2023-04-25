/* This is generated code, don't alter */
enum IfcInternalOrExternalEnum {
  INTERNAL = 0,
  EXTERNAL = 1,
  EXTERNAL_EARTH = 2,
  EXTERNAL_WATER = 3,
  EXTERNAL_FIRE = 4,
  NOTDEFINED = 5,
}

const IfcInternalOrExternalEnumCount = 6

export { IfcInternalOrExternalEnum, IfcInternalOrExternalEnumCount }

/* This is generated code, don't alter */
import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash'

let gMapIfcInternalOrExternalEnum =
  new Int32Array( [107] )

let prefixSumAddressIfcInternalOrExternalEnum =
  new Uint32Array( [0,16,28,38,54,64,79] )

let slotMapIfcInternalOrExternalEnum =
  new Int32Array( [3,5,1,2,0,4] )

let encodedDataIfcInternalOrExternalEnum =
  (new TextEncoder()).encode( ".EXTERNAL_WATER..NOTDEFINED..EXTERNAL..EXTERNAL_EARTH..INTERNAL..EXTERNAL_FIRE." )

let IfcInternalOrExternalEnumSearch =
  new MinimalPerfectHash< IfcInternalOrExternalEnum >( gMapIfcInternalOrExternalEnum, prefixSumAddressIfcInternalOrExternalEnum, slotMapIfcInternalOrExternalEnum, encodedDataIfcInternalOrExternalEnum )

export { IfcInternalOrExternalEnumSearch }


/* This is generated cold, don't alter */
import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser'

const parser = StepEnumParser.Instance

export function IfcInternalOrExternalEnumDeserializeStep(
  input: Uint8Array,
  cursor: number,
  endCursor: number ): IfcInternalOrExternalEnum | undefined {
  return parser.extract< IfcInternalOrExternalEnum >( IfcInternalOrExternalEnumSearch, input, cursor, endCursor )
}
