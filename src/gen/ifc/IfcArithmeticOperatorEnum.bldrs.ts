enum IfcArithmeticOperatorEnum {
    ADD = 0,
    DIVIDE = 1,
    MULTIPLY = 2,
    SUBTRACT = 3,
}
export default IfcArithmeticOperatorEnum;

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcArithmeticOperatorEnum = new Int32Array( [8] );

let prefixSumAddressIfcArithmeticOperatorEnum = new Uint32Array( [0,8,18,28,33] );

let slotMapIfcArithmeticOperatorEnum = new Int32Array( [1,2,3,0] );

let encodedDataIfcArithmeticOperatorEnum = (new TextEncoder()).encode( ".DIVIDE..MULTIPLY..SUBTRACT..ADD." );

let IfcArithmeticOperatorEnumSearch = new MinimalPerfectHash< IfcArithmeticOperatorEnum >( gMapIfcArithmeticOperatorEnum, prefixSumAddressIfcArithmeticOperatorEnum, slotMapIfcArithmeticOperatorEnum, encodedDataIfcArithmeticOperatorEnum );

export { IfcArithmeticOperatorEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcArithmeticOperatorEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcArithmeticOperatorEnum | undefined
{
    return parser.extract< IfcArithmeticOperatorEnum >( IfcArithmeticOperatorEnumSearch, input, cursor, endCursor );
}

