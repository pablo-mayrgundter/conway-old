enum IfcEventTriggerTypeEnum {
    EVENTRULE = 0,
    EVENTMESSAGE = 1,
    EVENTTIME = 2,
    EVENTCOMPLEX = 3,
    USERDEFINED = 4,
    NOTDEFINED = 5,
}
export { IfcEventTriggerTypeEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcEventTriggerTypeEnum = new Int32Array( [33] );

let prefixSumAddressIfcEventTriggerTypeEnum = new Uint32Array( [0,11,22,35,49,61,75] );

let slotMapIfcEventTriggerTypeEnum = new Int32Array( [2,0,4,1,5,3] );

let encodedDataIfcEventTriggerTypeEnum = (new TextEncoder()).encode( ".EVENTTIME..EVENTRULE..USERDEFINED..EVENTMESSAGE..NOTDEFINED..EVENTCOMPLEX." );

let IfcEventTriggerTypeEnumSearch = new MinimalPerfectHash< IfcEventTriggerTypeEnum >( gMapIfcEventTriggerTypeEnum, prefixSumAddressIfcEventTriggerTypeEnum, slotMapIfcEventTriggerTypeEnum, encodedDataIfcEventTriggerTypeEnum );

export { IfcEventTriggerTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcEventTriggerTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcEventTriggerTypeEnum | undefined
{
    return parser.extract< IfcEventTriggerTypeEnum >( IfcEventTriggerTypeEnumSearch, input, cursor, endCursor );
}
