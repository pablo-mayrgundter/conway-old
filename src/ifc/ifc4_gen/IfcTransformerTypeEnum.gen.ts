/* This is generated code, don't alter */
enum IfcTransformerTypeEnum {
  CURRENT = 0,
  FREQUENCY = 1,
  INVERTER = 2,
  RECTIFIER = 3,
  VOLTAGE = 4,
  USERDEFINED = 5,
  NOTDEFINED = 6,
}

const IfcTransformerTypeEnumCount = 7

export { IfcTransformerTypeEnum, IfcTransformerTypeEnumCount }

/* This is generated code, don't alter */
import MinimalPerfectHash from '../../indexing/minimal_perfect_hash'

let gMapIfcTransformerTypeEnum =
  new Int32Array( [495] )

let prefixSumAddressIfcTransformerTypeEnum =
  new Uint32Array( [0,9,18,29,42,53,65,75] )

let slotMapIfcTransformerTypeEnum =
  new Int32Array( [0,4,3,5,1,6,2] )

let encodedDataIfcTransformerTypeEnum =
  (new TextEncoder()).encode( ".CURRENT..VOLTAGE..RECTIFIER..USERDEFINED..FREQUENCY..NOTDEFINED..INVERTER." )

let IfcTransformerTypeEnumSearch =
  new MinimalPerfectHash< IfcTransformerTypeEnum >( gMapIfcTransformerTypeEnum, prefixSumAddressIfcTransformerTypeEnum, slotMapIfcTransformerTypeEnum, encodedDataIfcTransformerTypeEnum )

export { IfcTransformerTypeEnumSearch }


/* This is generated cold, don't alter */
import StepEnumParser from '../../step/parsing/step_enum_parser'

const parser = StepEnumParser.Instance

export function IfcTransformerTypeEnumDeserializeStep(
  input: Uint8Array,
  cursor: number,
  endCursor: number ): IfcTransformerTypeEnum | undefined {
  return parser.extract< IfcTransformerTypeEnum >( IfcTransformerTypeEnumSearch, input, cursor, endCursor )
}
