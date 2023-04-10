enum IfcBuildingElementProxyTypeEnum {
    COMPLEX = 0,
    ELEMENT = 1,
    PARTIAL = 2,
    PROVISIONFORVOID = 3,
    PROVISIONFORSPACE = 4,
    USERDEFINED = 5,
    NOTDEFINED = 6,
}
const IfcBuildingElementProxyTypeEnumCount = 7;

export { IfcBuildingElementProxyTypeEnum, IfcBuildingElementProxyTypeEnumCount };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcBuildingElementProxyTypeEnum = new Int32Array( [4] );

let prefixSumAddressIfcBuildingElementProxyTypeEnum = new Uint32Array( [0,12,30,39,48,67,80,89] );

let slotMapIfcBuildingElementProxyTypeEnum = new Int32Array( [6,3,2,0,4,5,1] );

let encodedDataIfcBuildingElementProxyTypeEnum = (new TextEncoder()).encode( ".NOTDEFINED..PROVISIONFORVOID..PARTIAL..COMPLEX..PROVISIONFORSPACE..USERDEFINED..ELEMENT." );

let IfcBuildingElementProxyTypeEnumSearch = new MinimalPerfectHash< IfcBuildingElementProxyTypeEnum >( gMapIfcBuildingElementProxyTypeEnum, prefixSumAddressIfcBuildingElementProxyTypeEnum, slotMapIfcBuildingElementProxyTypeEnum, encodedDataIfcBuildingElementProxyTypeEnum );

export { IfcBuildingElementProxyTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcBuildingElementProxyTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcBuildingElementProxyTypeEnum | undefined
{
    return parser.extract< IfcBuildingElementProxyTypeEnum >( IfcBuildingElementProxyTypeEnumSearch, input, cursor, endCursor );
}
