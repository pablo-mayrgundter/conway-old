enum IfcLoadGroupTypeEnum {
    LOAD_GROUP = 0,
    LOAD_CASE = 1,
    LOAD_COMBINATION = 2,
    USERDEFINED = 3,
    NOTDEFINED = 4,
}
export { IfcLoadGroupTypeEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcLoadGroupTypeEnum = new Int32Array( [18] );

let prefixSumAddressIfcLoadGroupTypeEnum = new Uint32Array( [0,18,30,42,55,66] );

let slotMapIfcLoadGroupTypeEnum = new Int32Array( [2,4,0,3,1] );

let encodedDataIfcLoadGroupTypeEnum = (new TextEncoder()).encode( ".LOAD_COMBINATION..NOTDEFINED..LOAD_GROUP..USERDEFINED..LOAD_CASE." );

let IfcLoadGroupTypeEnumSearch = new MinimalPerfectHash< IfcLoadGroupTypeEnum >( gMapIfcLoadGroupTypeEnum, prefixSumAddressIfcLoadGroupTypeEnum, slotMapIfcLoadGroupTypeEnum, encodedDataIfcLoadGroupTypeEnum );

export { IfcLoadGroupTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcLoadGroupTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcLoadGroupTypeEnum | undefined
{
    return parser.extract< IfcLoadGroupTypeEnum >( IfcLoadGroupTypeEnumSearch, input, cursor, endCursor );
}
