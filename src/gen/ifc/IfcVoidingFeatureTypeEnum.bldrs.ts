enum IfcVoidingFeatureTypeEnum {
    CUTOUT = 0,
    NOTCH = 1,
    HOLE = 2,
    MITER = 3,
    CHAMFER = 4,
    EDGE = 5,
    USERDEFINED = 6,
    NOTDEFINED = 7,
}
const IfcVoidingFeatureTypeEnumCount = 8;

export { IfcVoidingFeatureTypeEnum, IfcVoidingFeatureTypeEnumCount };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcVoidingFeatureTypeEnum = new Int32Array( [1,-1,4] );

let prefixSumAddressIfcVoidingFeatureTypeEnum = new Uint32Array( [0,6,15,27,34,42,48,61,68] );

let slotMapIfcVoidingFeatureTypeEnum = new Int32Array( [2,4,7,1,0,5,6,3] );

let encodedDataIfcVoidingFeatureTypeEnum = (new TextEncoder()).encode( ".HOLE..CHAMFER..NOTDEFINED..NOTCH..CUTOUT..EDGE..USERDEFINED..MITER." );

let IfcVoidingFeatureTypeEnumSearch = new MinimalPerfectHash< IfcVoidingFeatureTypeEnum >( gMapIfcVoidingFeatureTypeEnum, prefixSumAddressIfcVoidingFeatureTypeEnum, slotMapIfcVoidingFeatureTypeEnum, encodedDataIfcVoidingFeatureTypeEnum );

export { IfcVoidingFeatureTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcVoidingFeatureTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcVoidingFeatureTypeEnum | undefined
{
    return parser.extract< IfcVoidingFeatureTypeEnum >( IfcVoidingFeatureTypeEnumSearch, input, cursor, endCursor );
}
