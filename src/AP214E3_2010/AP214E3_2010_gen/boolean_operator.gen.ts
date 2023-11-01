/* This is generated code, don't alter */
enum boolean_operator {
  UNION = 0,
  INTERSECTION = 1,
  DIFFERENCE = 2,
}

const boolean_operatorCount = 3

export { boolean_operator, boolean_operatorCount }

/* This is generated code, don't alter */
import MinimalPerfectHash from '../../indexing/minimal_perfect_hash'

let gMapboolean_operator =
  new Int32Array( [3] )

let prefixSumAddressboolean_operator =
  new Uint32Array( [0,7,21,33] )

let slotMapboolean_operator =
  new Int32Array( [0,1,2] )

let encodedDataboolean_operator =
  (new TextEncoder()).encode( ".UNION..INTERSECTION..DIFFERENCE." )

let boolean_operatorSearch =
  new MinimalPerfectHash< boolean_operator >( gMapboolean_operator, prefixSumAddressboolean_operator, slotMapboolean_operator, encodedDataboolean_operator )

export { boolean_operatorSearch }


/* This is generated cold, don't alter */
import StepEnumParser from '../../step/parsing/step_enum_parser'

const parser = StepEnumParser.Instance

export function boolean_operatorDeserializeStep(
  input: Uint8Array,
  cursor: number,
  endCursor: number ): boolean_operator | undefined {
  return parser.extract< boolean_operator >( boolean_operatorSearch, input, cursor, endCursor )
}
