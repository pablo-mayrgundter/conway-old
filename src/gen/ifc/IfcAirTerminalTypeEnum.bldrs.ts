enum IfcAirTerminalTypeEnum {
    GRILLE = 0,
    REGISTER = 1,
    DIFFUSER = 2,
    EYEBALL = 3,
    IRIS = 4,
    LINEARGRILLE = 5,
    LINEARDIFFUSER = 6,
    USERDEFINED = 7,
    NOTDEFINED = 8,
}
export { IfcAirTerminalTypeEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcAirTerminalTypeEnum = new Int32Array( [7,18,29] );

let prefixSumAddressIfcAirTerminalTypeEnum = new Uint32Array( [0,10,23,39,51,59,65,79,88,98] );

let slotMapIfcAirTerminalTypeEnum = new Int32Array( [2,7,6,8,0,4,5,3,1] );

let encodedDataIfcAirTerminalTypeEnum = (new TextEncoder()).encode( ".DIFFUSER..USERDEFINED..LINEARDIFFUSER..NOTDEFINED..GRILLE..IRIS..LINEARGRILLE..EYEBALL..REGISTER." );

let IfcAirTerminalTypeEnumSearch = new MinimalPerfectHash< IfcAirTerminalTypeEnum >( gMapIfcAirTerminalTypeEnum, prefixSumAddressIfcAirTerminalTypeEnum, slotMapIfcAirTerminalTypeEnum, encodedDataIfcAirTerminalTypeEnum );

export { IfcAirTerminalTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcAirTerminalTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcAirTerminalTypeEnum | undefined
{
    return parser.extract< IfcAirTerminalTypeEnum >( IfcAirTerminalTypeEnumSearch, input, cursor, endCursor );
}

