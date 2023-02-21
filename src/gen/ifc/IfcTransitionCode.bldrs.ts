enum IfcTransitionCode {
    DISCONTINUOUS = 0,
    CONTINUOUS = 1,
    CONTSAMEGRADIENT = 2,
    CONTSAMEGRADIENTSAMECURVATURE = 3,
}
export default IfcTransitionCode;

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcTransitionCode = new Int32Array( [13] );

let prefixSumAddressIfcTransitionCode = new Uint32Array( [0,31,43,58,76] );

let slotMapIfcTransitionCode = new Int32Array( [3,1,0,2] );

let encodedDataIfcTransitionCode = (new TextEncoder()).encode( ".CONTSAMEGRADIENTSAMECURVATURE..CONTINUOUS..DISCONTINUOUS..CONTSAMEGRADIENT." );

let IfcTransitionCodeSearch = new MinimalPerfectHash< IfcTransitionCode >( gMapIfcTransitionCode, prefixSumAddressIfcTransitionCode, slotMapIfcTransitionCode, encodedDataIfcTransitionCode );

export { IfcTransitionCodeSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcTransitionCodeDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcTransitionCode | undefined
{
    return parser.parse< IfcTransitionCode >( IfcTransitionCodeSearch, input, cursor, endCursor );
}

