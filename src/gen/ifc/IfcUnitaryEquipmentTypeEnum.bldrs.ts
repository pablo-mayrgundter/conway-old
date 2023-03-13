enum IfcUnitaryEquipmentTypeEnum {
    AIRHANDLER = 0,
    AIRCONDITIONINGUNIT = 1,
    SPLITSYSTEM = 2,
    ROOFTOPUNIT = 3,
    USERDEFINED = 4,
    NOTDEFINED = 5,
}
export { IfcUnitaryEquipmentTypeEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcUnitaryEquipmentTypeEnum = new Int32Array( [55] );

let prefixSumAddressIfcUnitaryEquipmentTypeEnum = new Uint32Array( [0,13,25,37,50,63,84] );

let slotMapIfcUnitaryEquipmentTypeEnum = new Int32Array( [4,0,5,3,2,1] );

let encodedDataIfcUnitaryEquipmentTypeEnum = (new TextEncoder()).encode( ".USERDEFINED..AIRHANDLER..NOTDEFINED..ROOFTOPUNIT..SPLITSYSTEM..AIRCONDITIONINGUNIT." );

let IfcUnitaryEquipmentTypeEnumSearch = new MinimalPerfectHash< IfcUnitaryEquipmentTypeEnum >( gMapIfcUnitaryEquipmentTypeEnum, prefixSumAddressIfcUnitaryEquipmentTypeEnum, slotMapIfcUnitaryEquipmentTypeEnum, encodedDataIfcUnitaryEquipmentTypeEnum );

export { IfcUnitaryEquipmentTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcUnitaryEquipmentTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcUnitaryEquipmentTypeEnum | undefined
{
    return parser.extract< IfcUnitaryEquipmentTypeEnum >( IfcUnitaryEquipmentTypeEnumSearch, input, cursor, endCursor );
}

