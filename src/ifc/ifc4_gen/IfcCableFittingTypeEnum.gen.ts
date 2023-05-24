/* This is generated code, don't alter */
enum IfcCableFittingTypeEnum {
  CONNECTOR = 0,
  ENTRY = 1,
  EXIT = 2,
  JUNCTION = 3,
  TRANSITION = 4,
  USERDEFINED = 5,
  NOTDEFINED = 6,
}

const IfcCableFittingTypeEnumCount = 7

export { IfcCableFittingTypeEnum, IfcCableFittingTypeEnumCount }

/* This is generated code, don't alter */
import MinimalPerfectHash from '../../indexing/minimal_perfect_hash'

let gMapIfcCableFittingTypeEnum =
  new Int32Array( [92] )

let prefixSumAddressIfcCableFittingTypeEnum =
  new Uint32Array( [0,7,19,25,38,48,60,71] )

let slotMapIfcCableFittingTypeEnum =
  new Int32Array( [1,4,2,5,3,6,0] )

let encodedDataIfcCableFittingTypeEnum =
  (new TextEncoder()).encode( ".ENTRY..TRANSITION..EXIT..USERDEFINED..JUNCTION..NOTDEFINED..CONNECTOR." )

let IfcCableFittingTypeEnumSearch =
  new MinimalPerfectHash< IfcCableFittingTypeEnum >( gMapIfcCableFittingTypeEnum, prefixSumAddressIfcCableFittingTypeEnum, slotMapIfcCableFittingTypeEnum, encodedDataIfcCableFittingTypeEnum )

export { IfcCableFittingTypeEnumSearch }


/* This is generated cold, don't alter */
import StepEnumParser from '../../step/parsing/step_enum_parser'

const parser = StepEnumParser.Instance

export function IfcCableFittingTypeEnumDeserializeStep(
  input: Uint8Array,
  cursor: number,
  endCursor: number ): IfcCableFittingTypeEnum | undefined {
  return parser.extract< IfcCableFittingTypeEnum >( IfcCableFittingTypeEnumSearch, input, cursor, endCursor )
}
