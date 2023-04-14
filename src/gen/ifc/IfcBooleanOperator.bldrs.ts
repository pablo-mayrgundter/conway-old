enum IfcBooleanOperator {
    UNION = 0,
    INTERSECTION = 1,
    DIFFERENCE = 2,
}
const IfcBooleanOperatorCount = 3;

export { IfcBooleanOperator, IfcBooleanOperatorCount };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcBooleanOperator = new Int32Array( [3] );

let prefixSumAddressIfcBooleanOperator = new Uint32Array( [0,7,21,33] );

let slotMapIfcBooleanOperator = new Int32Array( [0,1,2] );

let encodedDataIfcBooleanOperator = (new TextEncoder()).encode( ".UNION..INTERSECTION..DIFFERENCE." );

let IfcBooleanOperatorSearch = new MinimalPerfectHash< IfcBooleanOperator >( gMapIfcBooleanOperator, prefixSumAddressIfcBooleanOperator, slotMapIfcBooleanOperator, encodedDataIfcBooleanOperator );

export { IfcBooleanOperatorSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcBooleanOperatorDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcBooleanOperator | undefined
{
    return parser.extract< IfcBooleanOperator >( IfcBooleanOperatorSearch, input, cursor, endCursor );
}
