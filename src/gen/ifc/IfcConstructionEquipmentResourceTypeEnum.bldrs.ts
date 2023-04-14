enum IfcConstructionEquipmentResourceTypeEnum {
    DEMOLISHING = 0,
    EARTHMOVING = 1,
    ERECTING = 2,
    HEATING = 3,
    LIGHTING = 4,
    PAVING = 5,
    PUMPING = 6,
    TRANSPORTING = 7,
    USERDEFINED = 8,
    NOTDEFINED = 9,
}
const IfcConstructionEquipmentResourceTypeEnumCount = 10;

export { IfcConstructionEquipmentResourceTypeEnum, IfcConstructionEquipmentResourceTypeEnumCount };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcConstructionEquipmentResourceTypeEnum = new Int32Array( [-2,87,3] );

let prefixSumAddressIfcConstructionEquipmentResourceTypeEnum = new Uint32Array( [0,9,22,35,45,54,62,72,86,98,111] );

let slotMapIfcConstructionEquipmentResourceTypeEnum = new Int32Array( [3,1,8,2,6,5,4,7,9,0] );

let encodedDataIfcConstructionEquipmentResourceTypeEnum = (new TextEncoder()).encode( ".HEATING..EARTHMOVING..USERDEFINED..ERECTING..PUMPING..PAVING..LIGHTING..TRANSPORTING..NOTDEFINED..DEMOLISHING." );

let IfcConstructionEquipmentResourceTypeEnumSearch = new MinimalPerfectHash< IfcConstructionEquipmentResourceTypeEnum >( gMapIfcConstructionEquipmentResourceTypeEnum, prefixSumAddressIfcConstructionEquipmentResourceTypeEnum, slotMapIfcConstructionEquipmentResourceTypeEnum, encodedDataIfcConstructionEquipmentResourceTypeEnum );

export { IfcConstructionEquipmentResourceTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcConstructionEquipmentResourceTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcConstructionEquipmentResourceTypeEnum | undefined
{
    return parser.extract< IfcConstructionEquipmentResourceTypeEnum >( IfcConstructionEquipmentResourceTypeEnumSearch, input, cursor, endCursor );
}
