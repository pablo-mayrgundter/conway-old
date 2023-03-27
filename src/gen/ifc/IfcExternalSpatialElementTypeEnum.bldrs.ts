enum IfcExternalSpatialElementTypeEnum {
    EXTERNAL = 0,
    EXTERNAL_EARTH = 1,
    EXTERNAL_WATER = 2,
    EXTERNAL_FIRE = 3,
    USERDEFINED = 4,
    NOTDEFINED = 5,
}
export { IfcExternalSpatialElementTypeEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcExternalSpatialElementTypeEnum = new Int32Array( [14] );

let prefixSumAddressIfcExternalSpatialElementTypeEnum = new Uint32Array( [0,10,26,38,53,66,82] );

let slotMapIfcExternalSpatialElementTypeEnum = new Int32Array( [0,1,5,3,4,2] );

let encodedDataIfcExternalSpatialElementTypeEnum = (new TextEncoder()).encode( ".EXTERNAL..EXTERNAL_EARTH..NOTDEFINED..EXTERNAL_FIRE..USERDEFINED..EXTERNAL_WATER." );

let IfcExternalSpatialElementTypeEnumSearch = new MinimalPerfectHash< IfcExternalSpatialElementTypeEnum >( gMapIfcExternalSpatialElementTypeEnum, prefixSumAddressIfcExternalSpatialElementTypeEnum, slotMapIfcExternalSpatialElementTypeEnum, encodedDataIfcExternalSpatialElementTypeEnum );

export { IfcExternalSpatialElementTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcExternalSpatialElementTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcExternalSpatialElementTypeEnum | undefined
{
    return parser.extract< IfcExternalSpatialElementTypeEnum >( IfcExternalSpatialElementTypeEnumSearch, input, cursor, endCursor );
}
