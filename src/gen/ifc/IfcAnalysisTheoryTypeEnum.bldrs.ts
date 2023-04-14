enum IfcAnalysisTheoryTypeEnum {
    FIRST_ORDER_THEORY = 0,
    SECOND_ORDER_THEORY = 1,
    THIRD_ORDER_THEORY = 2,
    FULL_NONLINEAR_THEORY = 3,
    USERDEFINED = 4,
    NOTDEFINED = 5,
}
const IfcAnalysisTheoryTypeEnumCount = 6;

export { IfcAnalysisTheoryTypeEnum, IfcAnalysisTheoryTypeEnumCount };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcAnalysisTheoryTypeEnum = new Int32Array( [230] );

let prefixSumAddressIfcAnalysisTheoryTypeEnum = new Uint32Array( [0,23,44,56,76,96,109] );

let slotMapIfcAnalysisTheoryTypeEnum = new Int32Array( [3,1,5,0,2,4] );

let encodedDataIfcAnalysisTheoryTypeEnum = (new TextEncoder()).encode( ".FULL_NONLINEAR_THEORY..SECOND_ORDER_THEORY..NOTDEFINED..FIRST_ORDER_THEORY..THIRD_ORDER_THEORY..USERDEFINED." );

let IfcAnalysisTheoryTypeEnumSearch = new MinimalPerfectHash< IfcAnalysisTheoryTypeEnum >( gMapIfcAnalysisTheoryTypeEnum, prefixSumAddressIfcAnalysisTheoryTypeEnum, slotMapIfcAnalysisTheoryTypeEnum, encodedDataIfcAnalysisTheoryTypeEnum );

export { IfcAnalysisTheoryTypeEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcAnalysisTheoryTypeEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcAnalysisTheoryTypeEnum | undefined
{
    return parser.extract< IfcAnalysisTheoryTypeEnum >( IfcAnalysisTheoryTypeEnumSearch, input, cursor, endCursor );
}
