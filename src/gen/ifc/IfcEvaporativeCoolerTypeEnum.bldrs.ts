enum IfcEvaporativeCoolerTypeEnum {
    DIRECTEVAPORATIVERANDOMMEDIAAIRCOOLER = 0,
    DIRECTEVAPORATIVERIGIDMEDIAAIRCOOLER = 1,
    DIRECTEVAPORATIVESLINGERSPACKAGEDAIRCOOLER = 2,
    DIRECTEVAPORATIVEPACKAGEDROTARYAIRCOOLER = 3,
    DIRECTEVAPORATIVEAIRWASHER = 4,
    INDIRECTEVAPORATIVEPACKAGEAIRCOOLER = 5,
    INDIRECTEVAPORATIVEWETCOIL = 6,
    INDIRECTEVAPORATIVECOOLINGTOWERORCOILCOOLER = 7,
    INDIRECTDIRECTCOMBINATION = 8,
    USERDEFINED = 9,
    NOTDEFINED = 10,
}
export { IfcEvaporativeCoolerTypeEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcEvaporativeCoolerTypeEnum = new Int32Array( [3,32,26] );

let prefixSumAddressIfcEvaporativeCoolerTypeEnum = new Uint32Array( [0,28,41,53,95,132,160,187,225,264,309,353] );

let slotMapIfcEvaporativeCoolerTypeEnum = new Int32Array( [4,9,10,3,5,6,8,1,0,7,2] );

let encodedDataIfcEvaporativeCoolerTypeEnum = (new TextEncoder()).encode( ".DIRECTEVAPORATIVEAIRWASHER..USERDEFINED..NOTDEFINED..DIRECTEVAPORATIVEPACKAGEDROTARYAIRCOOLER..INDIRECTEVAPORATIVEPACKAGEAIRCOOLER..INDIRECTEVAPORATIVEWETCOIL..INDIRECTDIRECTCOMBINATION..DIRECTEVAPORATIVERIGIDMEDIAAIRCOOLER..DIRECTEVAPORATIVERANDOMMEDIAAIRCOOLER..INDIRECTEVAPORATIVECOOLINGTOWERORCOILCOOLER..DIRECTEVAPORATIVESLINGERSPACKAGEDAIRCOOLER." );

let IfcEvaporativeCoolerTypeEnumSearch = new MinimalPerfectHash< IfcEvaporativeCoolerTypeEnum >( gMapIfcEvaporativeCoolerTypeEnum, prefixSumAddressIfcEvaporativeCoolerTypeEnum, slotMapIfcEvaporativeCoolerTypeEnum, encodedDataIfcEvaporativeCoolerTypeEnum );

export { IfcEvaporativeCoolerTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcEvaporativeCoolerTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcEvaporativeCoolerTypeEnum | undefined
{
    return parser.extract< IfcEvaporativeCoolerTypeEnum >( IfcEvaporativeCoolerTypeEnumSearch, input, cursor, endCursor );
}
