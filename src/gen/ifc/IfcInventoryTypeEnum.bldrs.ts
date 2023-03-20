enum IfcInventoryTypeEnum {
    ASSETINVENTORY = 0,
    SPACEINVENTORY = 1,
    FURNITUREINVENTORY = 2,
    USERDEFINED = 3,
    NOTDEFINED = 4,
}
export { IfcInventoryTypeEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcInventoryTypeEnum = new Int32Array( [35] );

let prefixSumAddressIfcInventoryTypeEnum = new Uint32Array( [0,16,36,49,61,77] );

let slotMapIfcInventoryTypeEnum = new Int32Array( [1,2,3,4,0] );

let encodedDataIfcInventoryTypeEnum = (new TextEncoder()).encode( ".SPACEINVENTORY..FURNITUREINVENTORY..USERDEFINED..NOTDEFINED..ASSETINVENTORY." );

let IfcInventoryTypeEnumSearch = new MinimalPerfectHash< IfcInventoryTypeEnum >( gMapIfcInventoryTypeEnum, prefixSumAddressIfcInventoryTypeEnum, slotMapIfcInventoryTypeEnum, encodedDataIfcInventoryTypeEnum );

export { IfcInventoryTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcInventoryTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcInventoryTypeEnum | undefined
{
    return parser.extract< IfcInventoryTypeEnum >( IfcInventoryTypeEnumSearch, input, cursor, endCursor );
}
