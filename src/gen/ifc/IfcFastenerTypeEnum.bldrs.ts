enum IfcFastenerTypeEnum {
    GLUE = 0,
    MORTAR = 1,
    WELD = 2,
    USERDEFINED = 3,
    NOTDEFINED = 4,
}
export { IfcFastenerTypeEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcFastenerTypeEnum = new Int32Array( [44] );

let prefixSumAddressIfcFastenerTypeEnum = new Uint32Array( [0,8,21,27,39,45] );

let slotMapIfcFastenerTypeEnum = new Int32Array( [1,3,0,4,2] );

let encodedDataIfcFastenerTypeEnum = (new TextEncoder()).encode( ".MORTAR..USERDEFINED..GLUE..NOTDEFINED..WELD." );

let IfcFastenerTypeEnumSearch = new MinimalPerfectHash< IfcFastenerTypeEnum >( gMapIfcFastenerTypeEnum, prefixSumAddressIfcFastenerTypeEnum, slotMapIfcFastenerTypeEnum, encodedDataIfcFastenerTypeEnum );

export { IfcFastenerTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcFastenerTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcFastenerTypeEnum | undefined
{
    return parser.extract< IfcFastenerTypeEnum >( IfcFastenerTypeEnumSearch, input, cursor, endCursor );
}
