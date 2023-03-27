enum IfcColumnTypeEnum {
    COLUMN = 0,
    PILASTER = 1,
    USERDEFINED = 2,
    NOTDEFINED = 3,
}
export { IfcColumnTypeEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcColumnTypeEnum = new Int32Array( [60] );

let prefixSumAddressIfcColumnTypeEnum = new Uint32Array( [0,13,21,31,43] );

let slotMapIfcColumnTypeEnum = new Int32Array( [2,0,1,3] );

let encodedDataIfcColumnTypeEnum = (new TextEncoder()).encode( ".USERDEFINED..COLUMN..PILASTER..NOTDEFINED." );

let IfcColumnTypeEnumSearch = new MinimalPerfectHash< IfcColumnTypeEnum >( gMapIfcColumnTypeEnum, prefixSumAddressIfcColumnTypeEnum, slotMapIfcColumnTypeEnum, encodedDataIfcColumnTypeEnum );

export { IfcColumnTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcColumnTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcColumnTypeEnum | undefined
{
    return parser.extract< IfcColumnTypeEnum >( IfcColumnTypeEnumSearch, input, cursor, endCursor );
}
