enum IfcOpeningElementTypeEnum {
    OPENING = 0,
    RECESS = 1,
    USERDEFINED = 2,
    NOTDEFINED = 3,
}
export { IfcOpeningElementTypeEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcOpeningElementTypeEnum = new Int32Array( [3] );

let prefixSumAddressIfcOpeningElementTypeEnum = new Uint32Array( [0,8,17,29,42] );

let slotMapIfcOpeningElementTypeEnum = new Int32Array( [1,0,3,2] );

let encodedDataIfcOpeningElementTypeEnum = (new TextEncoder()).encode( ".RECESS..OPENING..NOTDEFINED..USERDEFINED." );

let IfcOpeningElementTypeEnumSearch = new MinimalPerfectHash< IfcOpeningElementTypeEnum >( gMapIfcOpeningElementTypeEnum, prefixSumAddressIfcOpeningElementTypeEnum, slotMapIfcOpeningElementTypeEnum, encodedDataIfcOpeningElementTypeEnum );

export { IfcOpeningElementTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcOpeningElementTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcOpeningElementTypeEnum | undefined
{
    return parser.extract< IfcOpeningElementTypeEnum >( IfcOpeningElementTypeEnumSearch, input, cursor, endCursor );
}
