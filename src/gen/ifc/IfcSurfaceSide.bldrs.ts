enum IfcSurfaceSide {
    POSITIVE = 0,
    NEGATIVE = 1,
    BOTH = 2,
}
export default IfcSurfaceSide;

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcSurfaceSide = new Int32Array( [11] );

let prefixSumAddressIfcSurfaceSide = new Uint32Array( [0,6,16,26] );

let slotMapIfcSurfaceSide = new Int32Array( [2,1,0] );

let encodedDataIfcSurfaceSide = (new TextEncoder()).encode( ".BOTH..NEGATIVE..POSITIVE." );

let IfcSurfaceSideSearch = new MinimalPerfectHash< IfcSurfaceSide >( gMapIfcSurfaceSide, prefixSumAddressIfcSurfaceSide, slotMapIfcSurfaceSide, encodedDataIfcSurfaceSide );

export { IfcSurfaceSideSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcSurfaceSideDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcSurfaceSide | undefined
{
    return parser.parse< IfcSurfaceSide >( IfcSurfaceSideSearch, input, cursor, endCursor );
}

