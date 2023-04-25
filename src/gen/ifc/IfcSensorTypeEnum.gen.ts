/* This is generated code, don't alter */
enum IfcSensorTypeEnum {
  COSENSOR = 0,
  CO2SENSOR = 1,
  CONDUCTANCESENSOR = 2,
  CONTACTSENSOR = 3,
  FIRESENSOR = 4,
  FLOWSENSOR = 5,
  FROSTSENSOR = 6,
  GASSENSOR = 7,
  HEATSENSOR = 8,
  HUMIDITYSENSOR = 9,
  IDENTIFIERSENSOR = 10,
  IONCONCENTRATIONSENSOR = 11,
  LEVELSENSOR = 12,
  LIGHTSENSOR = 13,
  MOISTURESENSOR = 14,
  MOVEMENTSENSOR = 15,
  PHSENSOR = 16,
  PRESSURESENSOR = 17,
  RADIATIONSENSOR = 18,
  RADIOACTIVITYSENSOR = 19,
  SMOKESENSOR = 20,
  SOUNDSENSOR = 21,
  TEMPERATURESENSOR = 22,
  WINDSENSOR = 23,
  USERDEFINED = 24,
  NOTDEFINED = 25,
}

const IfcSensorTypeEnumCount = 26

export { IfcSensorTypeEnum, IfcSensorTypeEnumCount }

/* This is generated code, don't alter */
import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash'

let gMapIfcSensorTypeEnum =
  new Int32Array( [1,32,74,1,903,21] )

let prefixSumAddressIfcSensorTypeEnum =
  new Uint32Array( [0,19,43,56,69,87,99,115,127,146,162,173,189,201,212,222,234,247,260,273,288,301,318,328,349,365,377] )

let slotMapIfcSensorTypeEnum =
  new Int32Array( [2,11,21,20,10,5,17,4,22,9,1,14,25,7,0,8,6,13,12,3,24,18,16,19,15,23] )

let encodedDataIfcSensorTypeEnum =
  (new TextEncoder()).encode( ".CONDUCTANCESENSOR..IONCONCENTRATIONSENSOR..SOUNDSENSOR..SMOKESENSOR..IDENTIFIERSENSOR..FLOWSENSOR..PRESSURESENSOR..FIRESENSOR..TEMPERATURESENSOR..HUMIDITYSENSOR..CO2SENSOR..MOISTURESENSOR..NOTDEFINED..GASSENSOR..COSENSOR..HEATSENSOR..FROSTSENSOR..LIGHTSENSOR..LEVELSENSOR..CONTACTSENSOR..USERDEFINED..RADIATIONSENSOR..PHSENSOR..RADIOACTIVITYSENSOR..MOVEMENTSENSOR..WINDSENSOR." )

let IfcSensorTypeEnumSearch =
  new MinimalPerfectHash< IfcSensorTypeEnum >( gMapIfcSensorTypeEnum, prefixSumAddressIfcSensorTypeEnum, slotMapIfcSensorTypeEnum, encodedDataIfcSensorTypeEnum )

export { IfcSensorTypeEnumSearch }


/* This is generated cold, don't alter */
import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser'

const parser = StepEnumParser.Instance

export function IfcSensorTypeEnumDeserializeStep(
  input: Uint8Array,
  cursor: number,
  endCursor: number ): IfcSensorTypeEnum | undefined {
  return parser.extract< IfcSensorTypeEnum >( IfcSensorTypeEnumSearch, input, cursor, endCursor )
}
