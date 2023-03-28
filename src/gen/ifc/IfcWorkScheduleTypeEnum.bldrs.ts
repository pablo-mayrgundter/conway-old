enum IfcWorkScheduleTypeEnum {
    ACTUAL = 0,
    BASELINE = 1,
    PLANNED = 2,
    USERDEFINED = 3,
    NOTDEFINED = 4,
}
export { IfcWorkScheduleTypeEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcWorkScheduleTypeEnum = new Int32Array( [14] );

let prefixSumAddressIfcWorkScheduleTypeEnum = new Uint32Array( [0,10,19,31,39,52] );

let slotMapIfcWorkScheduleTypeEnum = new Int32Array( [1,2,4,0,3] );

let encodedDataIfcWorkScheduleTypeEnum = (new TextEncoder()).encode( ".BASELINE..PLANNED..NOTDEFINED..ACTUAL..USERDEFINED." );

let IfcWorkScheduleTypeEnumSearch = new MinimalPerfectHash< IfcWorkScheduleTypeEnum >( gMapIfcWorkScheduleTypeEnum, prefixSumAddressIfcWorkScheduleTypeEnum, slotMapIfcWorkScheduleTypeEnum, encodedDataIfcWorkScheduleTypeEnum );

export { IfcWorkScheduleTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcWorkScheduleTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcWorkScheduleTypeEnum | undefined
{
    return parser.extract< IfcWorkScheduleTypeEnum >( IfcWorkScheduleTypeEnumSearch, input, cursor, endCursor );
}
