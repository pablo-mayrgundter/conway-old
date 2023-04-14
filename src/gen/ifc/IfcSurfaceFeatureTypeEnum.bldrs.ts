enum IfcSurfaceFeatureTypeEnum {
    MARK = 0,
    TAG = 1,
    TREATMENT = 2,
    USERDEFINED = 3,
    NOTDEFINED = 4,
}
const IfcSurfaceFeatureTypeEnumCount = 5;

export { IfcSurfaceFeatureTypeEnum, IfcSurfaceFeatureTypeEnumCount };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcSurfaceFeatureTypeEnum = new Int32Array( [28] );

let prefixSumAddressIfcSurfaceFeatureTypeEnum = new Uint32Array( [0,11,24,30,35,47] );

let slotMapIfcSurfaceFeatureTypeEnum = new Int32Array( [2,3,0,1,4] );

let encodedDataIfcSurfaceFeatureTypeEnum = (new TextEncoder()).encode( ".TREATMENT..USERDEFINED..MARK..TAG..NOTDEFINED." );

let IfcSurfaceFeatureTypeEnumSearch = new MinimalPerfectHash< IfcSurfaceFeatureTypeEnum >( gMapIfcSurfaceFeatureTypeEnum, prefixSumAddressIfcSurfaceFeatureTypeEnum, slotMapIfcSurfaceFeatureTypeEnum, encodedDataIfcSurfaceFeatureTypeEnum );

export { IfcSurfaceFeatureTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcSurfaceFeatureTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcSurfaceFeatureTypeEnum | undefined
{
    return parser.extract< IfcSurfaceFeatureTypeEnum >( IfcSurfaceFeatureTypeEnumSearch, input, cursor, endCursor );
}
