enum IfcSensorTypeEnum {
    CO2SENSOR = 0,
    FIRESENSOR = 1,
    FLOWSENSOR = 2,
    GASSENSOR = 3,
    HEATSENSOR = 4,
    HUMIDITYSENSOR = 5,
    LIGHTSENSOR = 6,
    MOISTURESENSOR = 7,
    MOVEMENTSENSOR = 8,
    PRESSURESENSOR = 9,
    SMOKESENSOR = 10,
    SOUNDSENSOR = 11,
    TEMPERATURESENSOR = 12,
    USERDEFINED = 13,
    NOTDEFINED = 14,
}
export { IfcSensorTypeEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcSensorTypeEnum = new Int32Array( [46,11,36,3] );

let prefixSumAddressIfcSensorTypeEnum = new Uint32Array( [0,13,29,41,57,70,82,95,111,123,135,154,165,176,189,205] );

let slotMapIfcSensorTypeEnum = new Int32Array( [13,8,2,5,6,1,11,9,14,4,12,3,0,10,7] );

let encodedDataIfcSensorTypeEnum = (new TextEncoder()).encode( ".USERDEFINED..MOVEMENTSENSOR..FLOWSENSOR..HUMIDITYSENSOR..LIGHTSENSOR..FIRESENSOR..SOUNDSENSOR..PRESSURESENSOR..NOTDEFINED..HEATSENSOR..TEMPERATURESENSOR..GASSENSOR..CO2SENSOR..SMOKESENSOR..MOISTURESENSOR." );

let IfcSensorTypeEnumSearch = new MinimalPerfectHash< IfcSensorTypeEnum >( gMapIfcSensorTypeEnum, prefixSumAddressIfcSensorTypeEnum, slotMapIfcSensorTypeEnum, encodedDataIfcSensorTypeEnum );

export { IfcSensorTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcSensorTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcSensorTypeEnum | undefined
{
    return parser.extract< IfcSensorTypeEnum >( IfcSensorTypeEnumSearch, input, cursor, endCursor );
}
