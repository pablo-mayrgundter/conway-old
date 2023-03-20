enum IfcBuildingElementProxyTypeEnum {
    USERDEFINED = 0,
    NOTDEFINED = 1,
}
export { IfcBuildingElementProxyTypeEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcBuildingElementProxyTypeEnum = new Int32Array( [1] );

let prefixSumAddressIfcBuildingElementProxyTypeEnum = new Uint32Array( [0,13,25] );

let slotMapIfcBuildingElementProxyTypeEnum = new Int32Array( [0,1] );

let encodedDataIfcBuildingElementProxyTypeEnum = (new TextEncoder()).encode( ".USERDEFINED..NOTDEFINED." );

let IfcBuildingElementProxyTypeEnumSearch = new MinimalPerfectHash< IfcBuildingElementProxyTypeEnum >( gMapIfcBuildingElementProxyTypeEnum, prefixSumAddressIfcBuildingElementProxyTypeEnum, slotMapIfcBuildingElementProxyTypeEnum, encodedDataIfcBuildingElementProxyTypeEnum );

export { IfcBuildingElementProxyTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcBuildingElementProxyTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcBuildingElementProxyTypeEnum | undefined
{
    return parser.extract< IfcBuildingElementProxyTypeEnum >( IfcBuildingElementProxyTypeEnumSearch, input, cursor, endCursor );
}
