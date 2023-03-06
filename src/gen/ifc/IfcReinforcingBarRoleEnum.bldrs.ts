enum IfcReinforcingBarRoleEnum {
    MAIN = 0,
    SHEAR = 1,
    LIGATURE = 2,
    STUD = 3,
    PUNCHING = 4,
    EDGE = 5,
    RING = 6,
    USERDEFINED = 7,
    NOTDEFINED = 8,
}
export default IfcReinforcingBarRoleEnum;

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcReinforcingBarRoleEnum = new Int32Array( [1,1,88] );

let prefixSumAddressIfcReinforcingBarRoleEnum = new Uint32Array( [0,6,12,22,28,35,45,58,70,76] );

let slotMapIfcReinforcingBarRoleEnum = new Int32Array( [0,6,2,5,1,4,7,8,3] );

let encodedDataIfcReinforcingBarRoleEnum = (new TextEncoder()).encode( ".MAIN..RING..LIGATURE..EDGE..SHEAR..PUNCHING..USERDEFINED..NOTDEFINED..STUD." );

let IfcReinforcingBarRoleEnumSearch = new MinimalPerfectHash< IfcReinforcingBarRoleEnum >( gMapIfcReinforcingBarRoleEnum, prefixSumAddressIfcReinforcingBarRoleEnum, slotMapIfcReinforcingBarRoleEnum, encodedDataIfcReinforcingBarRoleEnum );

export { IfcReinforcingBarRoleEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcReinforcingBarRoleEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcReinforcingBarRoleEnum | undefined
{
    return parser.extract< IfcReinforcingBarRoleEnum >( IfcReinforcingBarRoleEnumSearch, input, cursor, endCursor );
}

