enum IfcSlabTypeEnum {
    FLOOR = 0,
    ROOF = 1,
    LANDING = 2,
    BASESLAB = 3,
    USERDEFINED = 4,
    NOTDEFINED = 5,
}
export default IfcSlabTypeEnum;

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcSlabTypeEnum = new Int32Array( [19] );

let prefixSumAddressIfcSlabTypeEnum = new Uint32Array( [0,7,13,26,38,47,57] );

let slotMapIfcSlabTypeEnum = new Int32Array( [0,1,4,5,2,3] );

let encodedDataIfcSlabTypeEnum = (new TextEncoder()).encode( ".FLOOR..ROOF..USERDEFINED..NOTDEFINED..LANDING..BASESLAB." );

let IfcSlabTypeEnumSearch = new MinimalPerfectHash< IfcSlabTypeEnum >( gMapIfcSlabTypeEnum, prefixSumAddressIfcSlabTypeEnum, slotMapIfcSlabTypeEnum, encodedDataIfcSlabTypeEnum );

export { IfcSlabTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcSlabTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcSlabTypeEnum | undefined
{
    return parser.parse< IfcSlabTypeEnum >( IfcSlabTypeEnumSearch, input, cursor, endCursor );
}

