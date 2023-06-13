/* This is generated code, don't alter */
enum IfcReinforcingBarTypeEnum {
  ANCHORING = 0,
  EDGE = 1,
  LIGATURE = 2,
  MAIN = 3,
  PUNCHING = 4,
  RING = 5,
  SHEAR = 6,
  STUD = 7,
  USERDEFINED = 8,
  NOTDEFINED = 9,
}

const IfcReinforcingBarTypeEnumCount = 10

export { IfcReinforcingBarTypeEnum, IfcReinforcingBarTypeEnumCount }

/* This is generated code, don't alter */
import MinimalPerfectHash from '../../indexing/minimal_perfect_hash'

let gMapIfcReinforcingBarTypeEnum =
  new Int32Array( [2,15,11] )

let prefixSumAddressIfcReinforcingBarTypeEnum =
  new Uint32Array( [0,10,22,29,40,50,56,62,68,74,87] )

let slotMapIfcReinforcingBarTypeEnum =
  new Int32Array( [4,9,6,0,2,7,5,1,3,8] )

let encodedDataIfcReinforcingBarTypeEnum =
  (new TextEncoder()).encode( ".PUNCHING..NOTDEFINED..SHEAR..ANCHORING..LIGATURE..STUD..RING..EDGE..MAIN..USERDEFINED." )

let IfcReinforcingBarTypeEnumSearch =
  new MinimalPerfectHash< IfcReinforcingBarTypeEnum >( gMapIfcReinforcingBarTypeEnum, prefixSumAddressIfcReinforcingBarTypeEnum, slotMapIfcReinforcingBarTypeEnum, encodedDataIfcReinforcingBarTypeEnum )

export { IfcReinforcingBarTypeEnumSearch }


/* This is generated cold, don't alter */
import StepEnumParser from '../../step/parsing/step_enum_parser'

const parser = StepEnumParser.Instance

export function IfcReinforcingBarTypeEnumDeserializeStep(
  input: Uint8Array,
  cursor: number,
  endCursor: number ): IfcReinforcingBarTypeEnum | undefined {
  return parser.extract< IfcReinforcingBarTypeEnum >( IfcReinforcingBarTypeEnumSearch, input, cursor, endCursor )
}
