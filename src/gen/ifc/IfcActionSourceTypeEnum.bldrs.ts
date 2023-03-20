enum IfcActionSourceTypeEnum {
    DEAD_LOAD_G = 0,
    COMPLETION_G1 = 1,
    LIVE_LOAD_Q = 2,
    SNOW_S = 3,
    WIND_W = 4,
    PRESTRESSING_P = 5,
    SETTLEMENT_U = 6,
    TEMPERATURE_T = 7,
    EARTHQUAKE_E = 8,
    FIRE = 9,
    IMPULSE = 10,
    IMPACT = 11,
    TRANSPORT = 12,
    ERECTION = 13,
    PROPPING = 14,
    SYSTEM_IMPERFECTION = 15,
    SHRINKAGE = 16,
    CREEP = 17,
    LACK_OF_FIT = 18,
    BUOYANCY = 19,
    ICE = 20,
    CURRENT = 21,
    WAVE = 22,
    RAIN = 23,
    BRAKES = 24,
    USERDEFINED = 25,
    NOTDEFINED = 26,
}
export { IfcActionSourceTypeEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcActionSourceTypeEnum = new Int32Array( [15,-6,3,100,201,42] );

let prefixSumAddressIfcActionSourceTypeEnum = new Uint32Array( [0,21,29,41,54,62,77,85,99,105,111,127,141,151,162,168,177,187,196,204,215,220,230,243,256,263,276,291] );

let slotMapIfcActionSourceTypeEnum = new Int32Array( [15,24,26,0,3,7,11,6,9,23,5,8,19,16,22,21,13,10,4,12,20,14,18,2,17,25,1] );

let encodedDataIfcActionSourceTypeEnum = (new TextEncoder()).encode( ".SYSTEM_IMPERFECTION..BRAKES..NOTDEFINED..DEAD_LOAD_G..SNOW_S..TEMPERATURE_T..IMPACT..SETTLEMENT_U..FIRE..RAIN..PRESTRESSING_P..EARTHQUAKE_E..BUOYANCY..SHRINKAGE..WAVE..CURRENT..ERECTION..IMPULSE..WIND_W..TRANSPORT..ICE..PROPPING..LACK_OF_FIT..LIVE_LOAD_Q..CREEP..USERDEFINED..COMPLETION_G1." );

let IfcActionSourceTypeEnumSearch = new MinimalPerfectHash< IfcActionSourceTypeEnum >( gMapIfcActionSourceTypeEnum, prefixSumAddressIfcActionSourceTypeEnum, slotMapIfcActionSourceTypeEnum, encodedDataIfcActionSourceTypeEnum );

export { IfcActionSourceTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcActionSourceTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcActionSourceTypeEnum | undefined
{
    return parser.extract< IfcActionSourceTypeEnum >( IfcActionSourceTypeEnumSearch, input, cursor, endCursor );
}
