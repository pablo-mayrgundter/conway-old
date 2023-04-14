enum IfcAnalysisModelTypeEnum {
    IN_PLANE_LOADING_2D = 0,
    OUT_PLANE_LOADING_2D = 1,
    LOADING_3D = 2,
    USERDEFINED = 3,
    NOTDEFINED = 4,
}
const IfcAnalysisModelTypeEnumCount = 5;

export { IfcAnalysisModelTypeEnum, IfcAnalysisModelTypeEnumCount };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcAnalysisModelTypeEnum = new Int32Array( [40] );

let prefixSumAddressIfcAnalysisModelTypeEnum = new Uint32Array( [0,22,43,55,68,80] );

let slotMapIfcAnalysisModelTypeEnum = new Int32Array( [1,0,2,3,4] );

let encodedDataIfcAnalysisModelTypeEnum = (new TextEncoder()).encode( ".OUT_PLANE_LOADING_2D..IN_PLANE_LOADING_2D..LOADING_3D..USERDEFINED..NOTDEFINED." );

let IfcAnalysisModelTypeEnumSearch = new MinimalPerfectHash< IfcAnalysisModelTypeEnum >( gMapIfcAnalysisModelTypeEnum, prefixSumAddressIfcAnalysisModelTypeEnum, slotMapIfcAnalysisModelTypeEnum, encodedDataIfcAnalysisModelTypeEnum );

export { IfcAnalysisModelTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcAnalysisModelTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcAnalysisModelTypeEnum | undefined
{
    return parser.extract< IfcAnalysisModelTypeEnum >( IfcAnalysisModelTypeEnumSearch, input, cursor, endCursor );
}
