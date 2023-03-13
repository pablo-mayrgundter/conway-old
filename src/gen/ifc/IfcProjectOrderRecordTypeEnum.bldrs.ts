enum IfcProjectOrderRecordTypeEnum {
    CHANGE = 0,
    MAINTENANCE = 1,
    MOVE = 2,
    PURCHASE = 3,
    WORK = 4,
    USERDEFINED = 5,
    NOTDEFINED = 6,
}
export { IfcProjectOrderRecordTypeEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcProjectOrderRecordTypeEnum = new Int32Array( [230] );

let prefixSumAddressIfcProjectOrderRecordTypeEnum = new Uint32Array( [0,13,19,25,38,46,58,68] );

let slotMapIfcProjectOrderRecordTypeEnum = new Int32Array( [1,4,2,5,0,6,3] );

let encodedDataIfcProjectOrderRecordTypeEnum = (new TextEncoder()).encode( ".MAINTENANCE..WORK..MOVE..USERDEFINED..CHANGE..NOTDEFINED..PURCHASE." );

let IfcProjectOrderRecordTypeEnumSearch = new MinimalPerfectHash< IfcProjectOrderRecordTypeEnum >( gMapIfcProjectOrderRecordTypeEnum, prefixSumAddressIfcProjectOrderRecordTypeEnum, slotMapIfcProjectOrderRecordTypeEnum, encodedDataIfcProjectOrderRecordTypeEnum );

export { IfcProjectOrderRecordTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcProjectOrderRecordTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcProjectOrderRecordTypeEnum | undefined
{
    return parser.extract< IfcProjectOrderRecordTypeEnum >( IfcProjectOrderRecordTypeEnumSearch, input, cursor, endCursor );
}

