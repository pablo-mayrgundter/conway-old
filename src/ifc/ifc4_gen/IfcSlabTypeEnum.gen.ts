/* This is generated code, don't alter */
enum IfcSlabTypeEnum {
  FLOOR = 0,
  ROOF = 1,
  LANDING = 2,
  BASESLAB = 3,
  USERDEFINED = 4,
  NOTDEFINED = 5,
}

const IfcSlabTypeEnumCount = 6

export { IfcSlabTypeEnum, IfcSlabTypeEnumCount }

/* This is generated code, don't alter */
import MinimalPerfectHash from '../../indexing/minimal_perfect_hash'

let gMapIfcSlabTypeEnum =
  new Int32Array( [19] )

let prefixSumAddressIfcSlabTypeEnum =
  new Uint32Array( [0,7,13,26,38,47,57] )

let slotMapIfcSlabTypeEnum =
  new Int32Array( [0,1,4,5,2,3] )

let encodedDataIfcSlabTypeEnum =
  (new TextEncoder()).encode( ".FLOOR..ROOF..USERDEFINED..NOTDEFINED..LANDING..BASESLAB." )

let IfcSlabTypeEnumSearch =
  new MinimalPerfectHash< IfcSlabTypeEnum >( gMapIfcSlabTypeEnum, prefixSumAddressIfcSlabTypeEnum, slotMapIfcSlabTypeEnum, encodedDataIfcSlabTypeEnum )

export { IfcSlabTypeEnumSearch }


/* This is generated cold, don't alter */
import StepEnumParser from '../../step/parsing/step_enum_parser'

const parser = StepEnumParser.Instance

export function IfcSlabTypeEnumDeserializeStep(
  input: Uint8Array,
  cursor: number,
  endCursor: number ): IfcSlabTypeEnum | undefined {
  return parser.extract< IfcSlabTypeEnum >( IfcSlabTypeEnumSearch, input, cursor, endCursor )
}
