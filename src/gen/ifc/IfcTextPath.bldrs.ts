enum IfcTextPath {
    LEFT = 0,
    RIGHT = 1,
    UP = 2,
    DOWN = 3,
}
export { IfcTextPath };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcTextPath = new Int32Array( [2] );

let prefixSumAddressIfcTextPath = new Uint32Array( [0,4,11,17,23] );

let slotMapIfcTextPath = new Int32Array( [2,1,3,0] );

let encodedDataIfcTextPath = (new TextEncoder()).encode( ".UP..RIGHT..DOWN..LEFT." );

let IfcTextPathSearch = new MinimalPerfectHash< IfcTextPath >( gMapIfcTextPath, prefixSumAddressIfcTextPath, slotMapIfcTextPath, encodedDataIfcTextPath );

export { IfcTextPathSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcTextPathDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcTextPath | undefined
{
    return parser.extract< IfcTextPath >( IfcTextPathSearch, input, cursor, endCursor );
}

