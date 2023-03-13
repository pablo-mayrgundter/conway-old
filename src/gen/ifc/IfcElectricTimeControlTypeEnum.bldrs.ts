enum IfcElectricTimeControlTypeEnum {
    TIMECLOCK = 0,
    TIMEDELAY = 1,
    RELAY = 2,
    USERDEFINED = 3,
    NOTDEFINED = 4,
}
export { IfcElectricTimeControlTypeEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcElectricTimeControlTypeEnum = new Int32Array( [28] );

let prefixSumAddressIfcElectricTimeControlTypeEnum = new Uint32Array( [0,7,20,31,42,54] );

let slotMapIfcElectricTimeControlTypeEnum = new Int32Array( [2,3,0,1,4] );

let encodedDataIfcElectricTimeControlTypeEnum = (new TextEncoder()).encode( ".RELAY..USERDEFINED..TIMECLOCK..TIMEDELAY..NOTDEFINED." );

let IfcElectricTimeControlTypeEnumSearch = new MinimalPerfectHash< IfcElectricTimeControlTypeEnum >( gMapIfcElectricTimeControlTypeEnum, prefixSumAddressIfcElectricTimeControlTypeEnum, slotMapIfcElectricTimeControlTypeEnum, encodedDataIfcElectricTimeControlTypeEnum );

export { IfcElectricTimeControlTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcElectricTimeControlTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcElectricTimeControlTypeEnum | undefined
{
    return parser.extract< IfcElectricTimeControlTypeEnum >( IfcElectricTimeControlTypeEnumSearch, input, cursor, endCursor );
}

