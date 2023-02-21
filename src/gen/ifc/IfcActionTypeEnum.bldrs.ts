enum IfcActionTypeEnum {
    PERMANENT_G = 0,
    VARIABLE_Q = 1,
    EXTRAORDINARY_A = 2,
    USERDEFINED = 3,
    NOTDEFINED = 4,
}
export default IfcActionTypeEnum;

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcActionTypeEnum = new Int32Array( [23] );

let prefixSumAddressIfcActionTypeEnum = new Uint32Array( [0,13,25,37,50,67] );

let slotMapIfcActionTypeEnum = new Int32Array( [0,1,4,3,2] );

let encodedDataIfcActionTypeEnum = (new TextEncoder()).encode( ".PERMANENT_G..VARIABLE_Q..NOTDEFINED..USERDEFINED..EXTRAORDINARY_A." );

let IfcActionTypeEnumSearch = new MinimalPerfectHash< IfcActionTypeEnum >( gMapIfcActionTypeEnum, prefixSumAddressIfcActionTypeEnum, slotMapIfcActionTypeEnum, encodedDataIfcActionTypeEnum );

export { IfcActionTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcActionTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcActionTypeEnum | undefined
{
    return parser.parse< IfcActionTypeEnum >( IfcActionTypeEnumSearch, input, cursor, endCursor );
}

