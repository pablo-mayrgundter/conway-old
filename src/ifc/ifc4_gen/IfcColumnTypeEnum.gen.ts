/* This is generated code, don't alter */
enum IfcColumnTypeEnum {
  COLUMN = 0,
  PILASTER = 1,
  USERDEFINED = 2,
  NOTDEFINED = 3,
}

const IfcColumnTypeEnumCount = 4

export { IfcColumnTypeEnum, IfcColumnTypeEnumCount }

/* This is generated code, don't alter */
import MinimalPerfectHash from '../../indexing/minimal_perfect_hash'

let gMapIfcColumnTypeEnum =
  new Int32Array( [60] )

let prefixSumAddressIfcColumnTypeEnum =
  new Uint32Array( [0,13,21,31,43] )

let slotMapIfcColumnTypeEnum =
  new Int32Array( [2,0,1,3] )

let encodedDataIfcColumnTypeEnum =
  (new TextEncoder()).encode( ".USERDEFINED..COLUMN..PILASTER..NOTDEFINED." )

let IfcColumnTypeEnumSearch =
  new MinimalPerfectHash< IfcColumnTypeEnum >( gMapIfcColumnTypeEnum, prefixSumAddressIfcColumnTypeEnum, slotMapIfcColumnTypeEnum, encodedDataIfcColumnTypeEnum )

export { IfcColumnTypeEnumSearch }


/* This is generated cold, don't alter */
import StepEnumParser from '../../step/parsing/step_enum_parser'

const parser = StepEnumParser.Instance

export function IfcColumnTypeEnumDeserializeStep(
  input: Uint8Array,
  cursor: number,
  endCursor: number ): IfcColumnTypeEnum | undefined {
  return parser.extract< IfcColumnTypeEnum >( IfcColumnTypeEnumSearch, input, cursor, endCursor )
}
