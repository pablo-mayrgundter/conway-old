enum IfcElectricApplianceTypeEnum {
    COMPUTER = 0,
    DIRECTWATERHEATER = 1,
    DISHWASHER = 2,
    ELECTRICCOOKER = 3,
    ELECTRICHEATER = 4,
    FACSIMILE = 5,
    FREESTANDINGFAN = 6,
    FREEZER = 7,
    FRIDGE_FREEZER = 8,
    HANDDRYER = 9,
    INDIRECTWATERHEATER = 10,
    MICROWAVE = 11,
    PHOTOCOPIER = 12,
    PRINTER = 13,
    REFRIGERATOR = 14,
    RADIANTHEATER = 15,
    SCANNER = 16,
    TELEPHONE = 17,
    TUMBLEDRYER = 18,
    TV = 19,
    VENDINGMACHINE = 20,
    WASHINGMACHINE = 21,
    WATERHEATER = 22,
    WATERCOOLER = 23,
    USERDEFINED = 24,
    NOTDEFINED = 25,
}
export default IfcElectricApplianceTypeEnum;

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcElectricApplianceTypeEnum = new Int32Array( [-6,84,938,1,7,1] );

let prefixSumAddressIfcElectricApplianceTypeEnum = new Uint32Array( [0,16,25,41,52,68,82,95,104,117,129,142,152,167,183,196,207,223,240,259,271,284,305,309,318,329,340] );

let slotMapIfcElectricApplianceTypeEnum = new Int32Array( [4,13,21,9,20,14,23,16,12,25,18,0,15,8,22,17,3,6,1,2,24,10,19,7,5,11] );

let encodedDataIfcElectricApplianceTypeEnum = (new TextEncoder()).encode( ".ELECTRICHEATER..PRINTER..WASHINGMACHINE..HANDDRYER..VENDINGMACHINE..REFRIGERATOR..WATERCOOLER..SCANNER..PHOTOCOPIER..NOTDEFINED..TUMBLEDRYER..COMPUTER..RADIANTHEATER..FRIDGE_FREEZER..WATERHEATER..TELEPHONE..ELECTRICCOOKER..FREESTANDINGFAN..DIRECTWATERHEATER..DISHWASHER..USERDEFINED..INDIRECTWATERHEATER..TV..FREEZER..FACSIMILE..MICROWAVE." );

let IfcElectricApplianceTypeEnumSearch = new MinimalPerfectHash< IfcElectricApplianceTypeEnum >( gMapIfcElectricApplianceTypeEnum, prefixSumAddressIfcElectricApplianceTypeEnum, slotMapIfcElectricApplianceTypeEnum, encodedDataIfcElectricApplianceTypeEnum );

export { IfcElectricApplianceTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcElectricApplianceTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcElectricApplianceTypeEnum | undefined
{
    return parser.extract< IfcElectricApplianceTypeEnum >( IfcElectricApplianceTypeEnumSearch, input, cursor, endCursor );
}

