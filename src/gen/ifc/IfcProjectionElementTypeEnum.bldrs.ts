enum IfcProjectionElementTypeEnum {
    USERDEFINED = 0,
    NOTDEFINED = 1,
}
export { IfcProjectionElementTypeEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcProjectionElementTypeEnum = new Int32Array( [1] );

let prefixSumAddressIfcProjectionElementTypeEnum = new Uint32Array( [0,13,25] );

let slotMapIfcProjectionElementTypeEnum = new Int32Array( [0,1] );

let encodedDataIfcProjectionElementTypeEnum = (new TextEncoder()).encode( ".USERDEFINED..NOTDEFINED." );

let IfcProjectionElementTypeEnumSearch = new MinimalPerfectHash< IfcProjectionElementTypeEnum >( gMapIfcProjectionElementTypeEnum, prefixSumAddressIfcProjectionElementTypeEnum, slotMapIfcProjectionElementTypeEnum, encodedDataIfcProjectionElementTypeEnum );

export { IfcProjectionElementTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcProjectionElementTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcProjectionElementTypeEnum | undefined
{
    return parser.extract< IfcProjectionElementTypeEnum >( IfcProjectionElementTypeEnumSearch, input, cursor, endCursor );
}
