enum IfcGasTerminalTypeEnum {
    GASAPPLIANCE = 0,
    GASBOOSTER = 1,
    GASBURNER = 2,
    USERDEFINED = 3,
    NOTDEFINED = 4,
}
export { IfcGasTerminalTypeEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcGasTerminalTypeEnum = new Int32Array( [81] );

let prefixSumAddressIfcGasTerminalTypeEnum = new Uint32Array( [0,13,25,39,51,62] );

let slotMapIfcGasTerminalTypeEnum = new Int32Array( [3,1,0,4,2] );

let encodedDataIfcGasTerminalTypeEnum = (new TextEncoder()).encode( ".USERDEFINED..GASBOOSTER..GASAPPLIANCE..NOTDEFINED..GASBURNER." );

let IfcGasTerminalTypeEnumSearch = new MinimalPerfectHash< IfcGasTerminalTypeEnum >( gMapIfcGasTerminalTypeEnum, prefixSumAddressIfcGasTerminalTypeEnum, slotMapIfcGasTerminalTypeEnum, encodedDataIfcGasTerminalTypeEnum );

export { IfcGasTerminalTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcGasTerminalTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcGasTerminalTypeEnum | undefined
{
    return parser.extract< IfcGasTerminalTypeEnum >( IfcGasTerminalTypeEnumSearch, input, cursor, endCursor );
}
