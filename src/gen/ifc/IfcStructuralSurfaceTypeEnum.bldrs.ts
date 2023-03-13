enum IfcStructuralSurfaceTypeEnum {
    BENDING_ELEMENT = 0,
    MEMBRANE_ELEMENT = 1,
    SHELL = 2,
    USERDEFINED = 3,
    NOTDEFINED = 4,
}
export { IfcStructuralSurfaceTypeEnum };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcStructuralSurfaceTypeEnum = new Int32Array( [27] );

let prefixSumAddressIfcStructuralSurfaceTypeEnum = new Uint32Array( [0,12,30,37,54,67] );

let slotMapIfcStructuralSurfaceTypeEnum = new Int32Array( [4,1,2,0,3] );

let encodedDataIfcStructuralSurfaceTypeEnum = (new TextEncoder()).encode( ".NOTDEFINED..MEMBRANE_ELEMENT..SHELL..BENDING_ELEMENT..USERDEFINED." );

let IfcStructuralSurfaceTypeEnumSearch = new MinimalPerfectHash< IfcStructuralSurfaceTypeEnum >( gMapIfcStructuralSurfaceTypeEnum, prefixSumAddressIfcStructuralSurfaceTypeEnum, slotMapIfcStructuralSurfaceTypeEnum, encodedDataIfcStructuralSurfaceTypeEnum );

export { IfcStructuralSurfaceTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcStructuralSurfaceTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcStructuralSurfaceTypeEnum | undefined
{
    return parser.extract< IfcStructuralSurfaceTypeEnum >( IfcStructuralSurfaceTypeEnumSearch, input, cursor, endCursor );
}

