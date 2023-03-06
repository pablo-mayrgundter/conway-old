enum IfcNullStyle {
    NULL = 0,
}
export default IfcNullStyle;

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcNullStyle = new Int32Array( [0] );

let prefixSumAddressIfcNullStyle = new Uint32Array( [0,6] );

let slotMapIfcNullStyle = new Int32Array( [0] );

let encodedDataIfcNullStyle = (new TextEncoder()).encode( ".NULL." );

let IfcNullStyleSearch = new MinimalPerfectHash< IfcNullStyle >( gMapIfcNullStyle, prefixSumAddressIfcNullStyle, slotMapIfcNullStyle, encodedDataIfcNullStyle );

export { IfcNullStyleSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcNullStyleDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcNullStyle | undefined
{
    return parser.extract< IfcNullStyle >( IfcNullStyleSearch, input, cursor, endCursor );
}

