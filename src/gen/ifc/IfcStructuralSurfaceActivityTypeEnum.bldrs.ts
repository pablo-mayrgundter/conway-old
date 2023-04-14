enum IfcStructuralSurfaceActivityTypeEnum {
    CONST = 0,
    BILINEAR = 1,
    DISCRETE = 2,
    ISOCONTOUR = 3,
    USERDEFINED = 4,
    NOTDEFINED = 5,
}
const IfcStructuralSurfaceActivityTypeEnumCount = 6;

export { IfcStructuralSurfaceActivityTypeEnum, IfcStructuralSurfaceActivityTypeEnumCount };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcStructuralSurfaceActivityTypeEnum = new Int32Array( [42] );

let prefixSumAddressIfcStructuralSurfaceActivityTypeEnum = new Uint32Array( [0,13,23,35,42,52,64] );

let slotMapIfcStructuralSurfaceActivityTypeEnum = new Int32Array( [4,2,5,0,1,3] );

let encodedDataIfcStructuralSurfaceActivityTypeEnum = (new TextEncoder()).encode( ".USERDEFINED..DISCRETE..NOTDEFINED..CONST..BILINEAR..ISOCONTOUR." );

let IfcStructuralSurfaceActivityTypeEnumSearch = new MinimalPerfectHash< IfcStructuralSurfaceActivityTypeEnum >( gMapIfcStructuralSurfaceActivityTypeEnum, prefixSumAddressIfcStructuralSurfaceActivityTypeEnum, slotMapIfcStructuralSurfaceActivityTypeEnum, encodedDataIfcStructuralSurfaceActivityTypeEnum );

export { IfcStructuralSurfaceActivityTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcStructuralSurfaceActivityTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcStructuralSurfaceActivityTypeEnum | undefined
{
    return parser.extract< IfcStructuralSurfaceActivityTypeEnum >( IfcStructuralSurfaceActivityTypeEnumSearch, input, cursor, endCursor );
}
