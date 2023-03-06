enum IfcStructuralCurveTypeEnum {
    RIGID_JOINED_MEMBER = 0,
    PIN_JOINED_MEMBER = 1,
    CABLE = 2,
    TENSION_MEMBER = 3,
    COMPRESSION_MEMBER = 4,
    USERDEFINED = 5,
    NOTDEFINED = 6,
}
export default IfcStructuralCurveTypeEnum;

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcStructuralCurveTypeEnum = new Int32Array( [486] );

let prefixSumAddressIfcStructuralCurveTypeEnum = new Uint32Array( [0,13,25,32,53,73,92,108] );

let slotMapIfcStructuralCurveTypeEnum = new Int32Array( [5,6,2,0,4,1,3] );

let encodedDataIfcStructuralCurveTypeEnum = (new TextEncoder()).encode( ".USERDEFINED..NOTDEFINED..CABLE..RIGID_JOINED_MEMBER..COMPRESSION_MEMBER..PIN_JOINED_MEMBER..TENSION_MEMBER." );

let IfcStructuralCurveTypeEnumSearch = new MinimalPerfectHash< IfcStructuralCurveTypeEnum >( gMapIfcStructuralCurveTypeEnum, prefixSumAddressIfcStructuralCurveTypeEnum, slotMapIfcStructuralCurveTypeEnum, encodedDataIfcStructuralCurveTypeEnum );

export { IfcStructuralCurveTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcStructuralCurveTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcStructuralCurveTypeEnum | undefined
{
    return parser.extract< IfcStructuralCurveTypeEnum >( IfcStructuralCurveTypeEnumSearch, input, cursor, endCursor );
}

