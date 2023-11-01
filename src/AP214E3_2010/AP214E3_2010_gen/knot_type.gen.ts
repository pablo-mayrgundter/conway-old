/* This is generated code, don't alter */
enum knot_type {
  UNIFORM_KNOTS = 0,
  QUASI_UNIFORM_KNOTS = 1,
  PIECEWISE_BEZIER_KNOTS = 2,
  UNSPECIFIED = 3,
}

const knot_typeCount = 4

export { knot_type, knot_typeCount }

/* This is generated code, don't alter */
import MinimalPerfectHash from '../../indexing/minimal_perfect_hash'

let gMapknot_type =
  new Int32Array( [3] )

let prefixSumAddressknot_type =
  new Uint32Array( [0,21,36,60,73] )

let slotMapknot_type =
  new Int32Array( [1,0,2,3] )

let encodedDataknot_type =
  (new TextEncoder()).encode( ".QUASI_UNIFORM_KNOTS..UNIFORM_KNOTS..PIECEWISE_BEZIER_KNOTS..UNSPECIFIED." )

let knot_typeSearch =
  new MinimalPerfectHash< knot_type >( gMapknot_type, prefixSumAddressknot_type, slotMapknot_type, encodedDataknot_type )

export { knot_typeSearch }


/* This is generated cold, don't alter */
import StepEnumParser from '../../step/parsing/step_enum_parser'

const parser = StepEnumParser.Instance

export function knot_typeDeserializeStep(
  input: Uint8Array,
  cursor: number,
  endCursor: number ): knot_type | undefined {
  return parser.extract< knot_type >( knot_typeSearch, input, cursor, endCursor )
}
