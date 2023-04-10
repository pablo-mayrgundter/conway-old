enum IfcEventTypeEnum {
    STARTEVENT = 0,
    ENDEVENT = 1,
    INTERMEDIATEEVENT = 2,
    USERDEFINED = 3,
    NOTDEFINED = 4,
}
const IfcEventTypeEnumCount = 5;

export { IfcEventTypeEnum, IfcEventTypeEnumCount };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcEventTypeEnum = new Int32Array( [21] );

let prefixSumAddressIfcEventTypeEnum = new Uint32Array( [0,19,31,44,56,66] );

let slotMapIfcEventTypeEnum = new Int32Array( [2,4,3,0,1] );

let encodedDataIfcEventTypeEnum = (new TextEncoder()).encode( ".INTERMEDIATEEVENT..NOTDEFINED..USERDEFINED..STARTEVENT..ENDEVENT." );

let IfcEventTypeEnumSearch = new MinimalPerfectHash< IfcEventTypeEnum >( gMapIfcEventTypeEnum, prefixSumAddressIfcEventTypeEnum, slotMapIfcEventTypeEnum, encodedDataIfcEventTypeEnum );

export { IfcEventTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcEventTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcEventTypeEnum | undefined
{
    return parser.extract< IfcEventTypeEnum >( IfcEventTypeEnumSearch, input, cursor, endCursor );
}
