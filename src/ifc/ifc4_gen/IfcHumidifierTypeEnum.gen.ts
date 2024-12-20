/* This is generated code, don't alter */
enum IfcHumidifierTypeEnum {
  STEAMINJECTION = 0,
  ADIABATICAIRWASHER = 1,
  ADIABATICPAN = 2,
  ADIABATICWETTEDELEMENT = 3,
  ADIABATICATOMIZING = 4,
  ADIABATICULTRASONIC = 5,
  ADIABATICRIGIDMEDIA = 6,
  ADIABATICCOMPRESSEDAIRNOZZLE = 7,
  ASSISTEDELECTRIC = 8,
  ASSISTEDNATURALGAS = 9,
  ASSISTEDPROPANE = 10,
  ASSISTEDBUTANE = 11,
  ASSISTEDSTEAM = 12,
  USERDEFINED = 13,
  NOTDEFINED = 14,
}

const IfcHumidifierTypeEnumCount = 15

export { IfcHumidifierTypeEnum, IfcHumidifierTypeEnumCount }

/* This is generated code, don't alter */
import MinimalPerfectHash from '../../indexing/minimal_perfect_hash'

let gMapIfcHumidifierTypeEnum =
  new Int32Array( [0,216,4,44] )

let prefixSumAddressIfcHumidifierTypeEnum =
  new Uint32Array( [0,18,31,47,62,82,99,119,140,152,168,182,203,233,257,277] )

let slotMapIfcHumidifierTypeEnum =
  new Int32Array( [8,13,0,12,4,10,9,6,14,11,2,5,7,3,1] )

let encodedDataIfcHumidifierTypeEnum =
  (new TextEncoder()).encode( ".ASSISTEDELECTRIC..USERDEFINED..STEAMINJECTION..ASSISTEDSTEAM..ADIABATICATOMIZING..ASSISTEDPROPANE..ASSISTEDNATURALGAS..ADIABATICRIGIDMEDIA..NOTDEFINED..ASSISTEDBUTANE..ADIABATICPAN..ADIABATICULTRASONIC..ADIABATICCOMPRESSEDAIRNOZZLE..ADIABATICWETTEDELEMENT..ADIABATICAIRWASHER." )

let IfcHumidifierTypeEnumSearch =
  new MinimalPerfectHash< IfcHumidifierTypeEnum >( gMapIfcHumidifierTypeEnum, prefixSumAddressIfcHumidifierTypeEnum, slotMapIfcHumidifierTypeEnum, encodedDataIfcHumidifierTypeEnum )

export { IfcHumidifierTypeEnumSearch }


/* This is generated cold, don't alter */
import StepEnumParser from '../../step/parsing/step_enum_parser'

const parser = StepEnumParser.Instance

export function IfcHumidifierTypeEnumDeserializeStep(
  input: Uint8Array,
  cursor: number,
  endCursor: number ): IfcHumidifierTypeEnum | undefined {
  return parser.extract< IfcHumidifierTypeEnum >( IfcHumidifierTypeEnumSearch, input, cursor, endCursor )
}
