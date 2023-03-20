enum IfcAheadOrBehind {
    AHEAD = 0,
    BEHIND = 1,
}
export { IfcAheadOrBehind };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcAheadOrBehind = new Int32Array( [5] );

let prefixSumAddressIfcAheadOrBehind = new Uint32Array( [0,7,15] );

let slotMapIfcAheadOrBehind = new Int32Array( [0,1] );

let encodedDataIfcAheadOrBehind = (new TextEncoder()).encode( ".AHEAD..BEHIND." );

let IfcAheadOrBehindSearch = new MinimalPerfectHash< IfcAheadOrBehind >( gMapIfcAheadOrBehind, prefixSumAddressIfcAheadOrBehind, slotMapIfcAheadOrBehind, encodedDataIfcAheadOrBehind );

export { IfcAheadOrBehindSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcAheadOrBehindDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcAheadOrBehind | undefined
{
    return parser.extract< IfcAheadOrBehind >( IfcAheadOrBehindSearch, input, cursor, endCursor );
}
