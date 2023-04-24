/* This is generated code, don't alter */
enum IfcPlateTypeEnum {
  CURTAIN_PANEL = 0,
  SHEET = 1,
  USERDEFINED = 2,
  NOTDEFINED = 3,
}

const IfcPlateTypeEnumCount = 4

export { IfcPlateTypeEnum, IfcPlateTypeEnumCount }

/* This is generated code, don't alter */
import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash'

let gMapIfcPlateTypeEnum =
  new Int32Array( [32] )

let prefixSumAddressIfcPlateTypeEnum =
  new Uint32Array( [0,7,20,35,47] )

let slotMapIfcPlateTypeEnum =
  new Int32Array( [1,2,0,3] )

let encodedDataIfcPlateTypeEnum =
  (new TextEncoder()).encode( ".SHEET..USERDEFINED..CURTAIN_PANEL..NOTDEFINED." )

let IfcPlateTypeEnumSearch =
  new MinimalPerfectHash< IfcPlateTypeEnum >( gMapIfcPlateTypeEnum, prefixSumAddressIfcPlateTypeEnum, slotMapIfcPlateTypeEnum, encodedDataIfcPlateTypeEnum )

export { IfcPlateTypeEnumSearch }


/* This is generated cold, don't alter */
import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser'

const parser = StepEnumParser.Instance

export function IfcPlateTypeEnumDeserializeStep(
  input: Uint8Array,
  cursor: number,
  endCursor: number ): IfcPlateTypeEnum | undefined {
  return parser.extract< IfcPlateTypeEnum >( IfcPlateTypeEnumSearch, input, cursor, endCursor )
}
