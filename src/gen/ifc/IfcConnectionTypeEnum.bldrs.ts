enum IfcConnectionTypeEnum {
    ATPATH = 0,
    ATSTART = 1,
    ATEND = 2,
    NOTDEFINED = 3,
}
export default IfcConnectionTypeEnum;

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcConnectionTypeEnum = new Int32Array( [4] );

let prefixSumAddressIfcConnectionTypeEnum = new Uint32Array( [0,9,16,28,36] );

let slotMapIfcConnectionTypeEnum = new Int32Array( [1,2,3,0] );

let encodedDataIfcConnectionTypeEnum = (new TextEncoder()).encode( ".ATSTART..ATEND..NOTDEFINED..ATPATH." );

let IfcConnectionTypeEnumSearch = new MinimalPerfectHash< IfcConnectionTypeEnum >( gMapIfcConnectionTypeEnum, prefixSumAddressIfcConnectionTypeEnum, slotMapIfcConnectionTypeEnum, encodedDataIfcConnectionTypeEnum );

export { IfcConnectionTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcConnectionTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcConnectionTypeEnum | undefined
{
    return parser.parse< IfcConnectionTypeEnum >( IfcConnectionTypeEnumSearch, input, cursor, endCursor );
}

