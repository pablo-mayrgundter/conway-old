enum IfcCostItemTypeEnum {
    USERDEFINED = 0,
    NOTDEFINED = 1,
}
export { IfcCostItemTypeEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcCostItemTypeEnum = new Int32Array( [1] );

let prefixSumAddressIfcCostItemTypeEnum = new Uint32Array( [0,13,25] );

let slotMapIfcCostItemTypeEnum = new Int32Array( [0,1] );

let encodedDataIfcCostItemTypeEnum = (new TextEncoder()).encode( ".USERDEFINED..NOTDEFINED." );

let IfcCostItemTypeEnumSearch = new MinimalPerfectHash< IfcCostItemTypeEnum >( gMapIfcCostItemTypeEnum, prefixSumAddressIfcCostItemTypeEnum, slotMapIfcCostItemTypeEnum, encodedDataIfcCostItemTypeEnum );

export { IfcCostItemTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcCostItemTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcCostItemTypeEnum | undefined
{
    return parser.extract< IfcCostItemTypeEnum >( IfcCostItemTypeEnumSearch, input, cursor, endCursor );
}
