enum IfcAlarmTypeEnum {
    BELL = 0,
    BREAKGLASSBUTTON = 1,
    LIGHT = 2,
    MANUALPULLBOX = 3,
    SIREN = 4,
    WHISTLE = 5,
    USERDEFINED = 6,
    NOTDEFINED = 7,
}
export { IfcAlarmTypeEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcAlarmTypeEnum = new Int32Array( [6,-4,21] );

let prefixSumAddressIfcAlarmTypeEnum = new Uint32Array( [0,12,19,28,46,53,59,74,87] );

let slotMapIfcAlarmTypeEnum = new Int32Array( [7,4,5,1,2,0,3,6] );

let encodedDataIfcAlarmTypeEnum = (new TextEncoder()).encode( ".NOTDEFINED..SIREN..WHISTLE..BREAKGLASSBUTTON..LIGHT..BELL..MANUALPULLBOX..USERDEFINED." );

let IfcAlarmTypeEnumSearch = new MinimalPerfectHash< IfcAlarmTypeEnum >( gMapIfcAlarmTypeEnum, prefixSumAddressIfcAlarmTypeEnum, slotMapIfcAlarmTypeEnum, encodedDataIfcAlarmTypeEnum );

export { IfcAlarmTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcAlarmTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcAlarmTypeEnum | undefined
{
    return parser.extract< IfcAlarmTypeEnum >( IfcAlarmTypeEnumSearch, input, cursor, endCursor );
}

