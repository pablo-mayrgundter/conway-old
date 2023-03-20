enum IfcStackTerminalTypeEnum {
    BIRDCAGE = 0,
    COWL = 1,
    RAINWATERHOPPER = 2,
    USERDEFINED = 3,
    NOTDEFINED = 4,
}
export { IfcStackTerminalTypeEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcStackTerminalTypeEnum = new Int32Array( [7] );

let prefixSumAddressIfcStackTerminalTypeEnum = new Uint32Array( [0,12,25,35,41,58] );

let slotMapIfcStackTerminalTypeEnum = new Int32Array( [4,3,0,1,2] );

let encodedDataIfcStackTerminalTypeEnum = (new TextEncoder()).encode( ".NOTDEFINED..USERDEFINED..BIRDCAGE..COWL..RAINWATERHOPPER." );

let IfcStackTerminalTypeEnumSearch = new MinimalPerfectHash< IfcStackTerminalTypeEnum >( gMapIfcStackTerminalTypeEnum, prefixSumAddressIfcStackTerminalTypeEnum, slotMapIfcStackTerminalTypeEnum, encodedDataIfcStackTerminalTypeEnum );

export { IfcStackTerminalTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcStackTerminalTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcStackTerminalTypeEnum | undefined
{
    return parser.extract< IfcStackTerminalTypeEnum >( IfcStackTerminalTypeEnumSearch, input, cursor, endCursor );
}
