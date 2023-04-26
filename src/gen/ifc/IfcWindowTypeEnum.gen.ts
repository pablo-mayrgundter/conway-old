/* This is generated code, don't alter */
enum IfcWindowTypeEnum {
  WINDOW = 0,
  SKYLIGHT = 1,
  LIGHTDOME = 2,
  USERDEFINED = 3,
  NOTDEFINED = 4,
}

const IfcWindowTypeEnumCount = 5

export { IfcWindowTypeEnum, IfcWindowTypeEnumCount }

/* This is generated code, don't alter */
import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash'

let gMapIfcWindowTypeEnum =
  new Int32Array( [7] )

let prefixSumAddressIfcWindowTypeEnum =
  new Uint32Array( [0,12,25,33,44,54] )

let slotMapIfcWindowTypeEnum =
  new Int32Array( [4,3,0,2,1] )

let encodedDataIfcWindowTypeEnum =
  (new TextEncoder()).encode( ".NOTDEFINED..USERDEFINED..WINDOW..LIGHTDOME..SKYLIGHT." )

let IfcWindowTypeEnumSearch =
  new MinimalPerfectHash< IfcWindowTypeEnum >( gMapIfcWindowTypeEnum, prefixSumAddressIfcWindowTypeEnum, slotMapIfcWindowTypeEnum, encodedDataIfcWindowTypeEnum )

export { IfcWindowTypeEnumSearch }


/* This is generated cold, don't alter */
import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser'

const parser = StepEnumParser.Instance

export function IfcWindowTypeEnumDeserializeStep(
  input: Uint8Array,
  cursor: number,
  endCursor: number ): IfcWindowTypeEnum | undefined {
  return parser.extract< IfcWindowTypeEnum >( IfcWindowTypeEnumSearch, input, cursor, endCursor )
}
