enum IfcServiceLifeFactorTypeEnum {
    A_QUALITYOFCOMPONENTS = 0,
    B_DESIGNLEVEL = 1,
    C_WORKEXECUTIONLEVEL = 2,
    D_INDOORENVIRONMENT = 3,
    E_OUTDOORENVIRONMENT = 4,
    F_INUSECONDITIONS = 5,
    G_MAINTENANCELEVEL = 6,
    USERDEFINED = 7,
    NOTDEFINED = 8,
}
export default IfcServiceLifeFactorTypeEnum;

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcServiceLifeFactorTypeEnum = new Int32Array( [4,5,2] );

let prefixSumAddressIfcServiceLifeFactorTypeEnum = new Uint32Array( [0,22,34,57,77,92,111,132,154,167] );

let slotMapIfcServiceLifeFactorTypeEnum = new Int32Array( [2,8,0,6,1,5,3,4,7] );

let encodedDataIfcServiceLifeFactorTypeEnum = (new TextEncoder()).encode( ".C_WORKEXECUTIONLEVEL..NOTDEFINED..A_QUALITYOFCOMPONENTS..G_MAINTENANCELEVEL..B_DESIGNLEVEL..F_INUSECONDITIONS..D_INDOORENVIRONMENT..E_OUTDOORENVIRONMENT..USERDEFINED." );

let IfcServiceLifeFactorTypeEnumSearch = new MinimalPerfectHash< IfcServiceLifeFactorTypeEnum >( gMapIfcServiceLifeFactorTypeEnum, prefixSumAddressIfcServiceLifeFactorTypeEnum, slotMapIfcServiceLifeFactorTypeEnum, encodedDataIfcServiceLifeFactorTypeEnum );

export { IfcServiceLifeFactorTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcServiceLifeFactorTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcServiceLifeFactorTypeEnum | undefined
{
    return parser.extract< IfcServiceLifeFactorTypeEnum >( IfcServiceLifeFactorTypeEnumSearch, input, cursor, endCursor );
}

