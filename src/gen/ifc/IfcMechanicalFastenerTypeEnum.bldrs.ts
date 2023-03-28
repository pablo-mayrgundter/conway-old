enum IfcMechanicalFastenerTypeEnum {
    ANCHORBOLT = 0,
    BOLT = 1,
    DOWEL = 2,
    NAIL = 3,
    NAILPLATE = 4,
    RIVET = 5,
    SCREW = 6,
    SHEARCONNECTOR = 7,
    STAPLE = 8,
    STUDSHEARCONNECTOR = 9,
    USERDEFINED = 10,
    NOTDEFINED = 11,
}
export { IfcMechanicalFastenerTypeEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcMechanicalFastenerTypeEnum = new Int32Array( [60,46,8] );

let prefixSumAddressIfcMechanicalFastenerTypeEnum = new Uint32Array( [0,13,24,32,44,64,71,77,83,99,106,113,125] );

let slotMapIfcMechanicalFastenerTypeEnum = new Int32Array( [10,4,8,0,9,5,3,1,7,2,6,11] );

let encodedDataIfcMechanicalFastenerTypeEnum = (new TextEncoder()).encode( ".USERDEFINED..NAILPLATE..STAPLE..ANCHORBOLT..STUDSHEARCONNECTOR..RIVET..NAIL..BOLT..SHEARCONNECTOR..DOWEL..SCREW..NOTDEFINED." );

let IfcMechanicalFastenerTypeEnumSearch = new MinimalPerfectHash< IfcMechanicalFastenerTypeEnum >( gMapIfcMechanicalFastenerTypeEnum, prefixSumAddressIfcMechanicalFastenerTypeEnum, slotMapIfcMechanicalFastenerTypeEnum, encodedDataIfcMechanicalFastenerTypeEnum );

export { IfcMechanicalFastenerTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcMechanicalFastenerTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcMechanicalFastenerTypeEnum | undefined
{
    return parser.extract< IfcMechanicalFastenerTypeEnum >( IfcMechanicalFastenerTypeEnumSearch, input, cursor, endCursor );
}
