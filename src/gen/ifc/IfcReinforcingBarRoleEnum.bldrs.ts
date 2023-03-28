enum IfcReinforcingBarRoleEnum {
    MAIN = 0,
    SHEAR = 1,
    LIGATURE = 2,
    STUD = 3,
    PUNCHING = 4,
    EDGE = 5,
    RING = 6,
    ANCHORING = 7,
    USERDEFINED = 8,
    NOTDEFINED = 9,
}
export { IfcReinforcingBarRoleEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcReinforcingBarRoleEnum = new Int32Array( [2,15,11] );

let prefixSumAddressIfcReinforcingBarRoleEnum = new Uint32Array( [0,10,22,29,40,50,56,62,68,74,87] );

let slotMapIfcReinforcingBarRoleEnum = new Int32Array( [4,9,1,7,2,3,6,5,0,8] );

let encodedDataIfcReinforcingBarRoleEnum = (new TextEncoder()).encode( ".PUNCHING..NOTDEFINED..SHEAR..ANCHORING..LIGATURE..STUD..RING..EDGE..MAIN..USERDEFINED." );

let IfcReinforcingBarRoleEnumSearch = new MinimalPerfectHash< IfcReinforcingBarRoleEnum >( gMapIfcReinforcingBarRoleEnum, prefixSumAddressIfcReinforcingBarRoleEnum, slotMapIfcReinforcingBarRoleEnum, encodedDataIfcReinforcingBarRoleEnum );

export { IfcReinforcingBarRoleEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcReinforcingBarRoleEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcReinforcingBarRoleEnum | undefined
{
    return parser.extract< IfcReinforcingBarRoleEnum >( IfcReinforcingBarRoleEnumSearch, input, cursor, endCursor );
}
