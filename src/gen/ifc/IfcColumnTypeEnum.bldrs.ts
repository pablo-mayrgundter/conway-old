enum IfcColumnTypeEnum {
    COLUMN = 0,
    USERDEFINED = 1,
    NOTDEFINED = 2,
}
export { IfcColumnTypeEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcColumnTypeEnum = new Int32Array( [4] );

let prefixSumAddressIfcColumnTypeEnum = new Uint32Array( [0,12,20,33] );

let slotMapIfcColumnTypeEnum = new Int32Array( [2,0,1] );

let encodedDataIfcColumnTypeEnum = (new TextEncoder()).encode( ".NOTDEFINED..COLUMN..USERDEFINED." );

let IfcColumnTypeEnumSearch = new MinimalPerfectHash< IfcColumnTypeEnum >( gMapIfcColumnTypeEnum, prefixSumAddressIfcColumnTypeEnum, slotMapIfcColumnTypeEnum, encodedDataIfcColumnTypeEnum );

export { IfcColumnTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcColumnTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcColumnTypeEnum | undefined
{
    return parser.extract< IfcColumnTypeEnum >( IfcColumnTypeEnumSearch, input, cursor, endCursor );
}

