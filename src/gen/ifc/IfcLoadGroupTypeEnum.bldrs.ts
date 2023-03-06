enum IfcLoadGroupTypeEnum {
    LOAD_GROUP = 0,
    LOAD_CASE = 1,
    LOAD_COMBINATION_GROUP = 2,
    LOAD_COMBINATION = 3,
    USERDEFINED = 4,
    NOTDEFINED = 5,
}
export default IfcLoadGroupTypeEnum;

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcLoadGroupTypeEnum = new Int32Array( [73] );

let prefixSumAddressIfcLoadGroupTypeEnum = new Uint32Array( [0,11,23,41,54,78,90] );

let slotMapIfcLoadGroupTypeEnum = new Int32Array( [1,5,3,4,2,0] );

let encodedDataIfcLoadGroupTypeEnum = (new TextEncoder()).encode( ".LOAD_CASE..NOTDEFINED..LOAD_COMBINATION..USERDEFINED..LOAD_COMBINATION_GROUP..LOAD_GROUP." );

let IfcLoadGroupTypeEnumSearch = new MinimalPerfectHash< IfcLoadGroupTypeEnum >( gMapIfcLoadGroupTypeEnum, prefixSumAddressIfcLoadGroupTypeEnum, slotMapIfcLoadGroupTypeEnum, encodedDataIfcLoadGroupTypeEnum );

export { IfcLoadGroupTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcLoadGroupTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcLoadGroupTypeEnum | undefined
{
    return parser.extract< IfcLoadGroupTypeEnum >( IfcLoadGroupTypeEnumSearch, input, cursor, endCursor );
}

