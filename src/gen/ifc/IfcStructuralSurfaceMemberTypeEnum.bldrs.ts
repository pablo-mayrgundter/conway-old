enum IfcStructuralSurfaceMemberTypeEnum {
    BENDING_ELEMENT = 0,
    MEMBRANE_ELEMENT = 1,
    SHELL = 2,
    USERDEFINED = 3,
    NOTDEFINED = 4,
}
const IfcStructuralSurfaceMemberTypeEnumCount = 5;

export { IfcStructuralSurfaceMemberTypeEnum, IfcStructuralSurfaceMemberTypeEnumCount };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcStructuralSurfaceMemberTypeEnum = new Int32Array( [27] );

let prefixSumAddressIfcStructuralSurfaceMemberTypeEnum = new Uint32Array( [0,12,30,37,54,67] );

let slotMapIfcStructuralSurfaceMemberTypeEnum = new Int32Array( [4,1,2,0,3] );

let encodedDataIfcStructuralSurfaceMemberTypeEnum = (new TextEncoder()).encode( ".NOTDEFINED..MEMBRANE_ELEMENT..SHELL..BENDING_ELEMENT..USERDEFINED." );

let IfcStructuralSurfaceMemberTypeEnumSearch = new MinimalPerfectHash< IfcStructuralSurfaceMemberTypeEnum >( gMapIfcStructuralSurfaceMemberTypeEnum, prefixSumAddressIfcStructuralSurfaceMemberTypeEnum, slotMapIfcStructuralSurfaceMemberTypeEnum, encodedDataIfcStructuralSurfaceMemberTypeEnum );

export { IfcStructuralSurfaceMemberTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcStructuralSurfaceMemberTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcStructuralSurfaceMemberTypeEnum | undefined
{
    return parser.extract< IfcStructuralSurfaceMemberTypeEnum >( IfcStructuralSurfaceMemberTypeEnumSearch, input, cursor, endCursor );
}
