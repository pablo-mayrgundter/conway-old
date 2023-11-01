/* This is generated code, don't alter */
enum approximation_method {
  CHORDAL_DEVIATION = 0,
  CHORDAL_LENGTH = 1,
}

const approximation_methodCount = 2

export { approximation_method, approximation_methodCount }

/* This is generated code, don't alter */
import MinimalPerfectHash from '../../indexing/minimal_perfect_hash'

let gMapapproximation_method =
  new Int32Array( [2] )

let prefixSumAddressapproximation_method =
  new Uint32Array( [0,19,35] )

let slotMapapproximation_method =
  new Int32Array( [0,1] )

let encodedDataapproximation_method =
  (new TextEncoder()).encode( ".CHORDAL_DEVIATION..CHORDAL_LENGTH." )

let approximation_methodSearch =
  new MinimalPerfectHash< approximation_method >( gMapapproximation_method, prefixSumAddressapproximation_method, slotMapapproximation_method, encodedDataapproximation_method )

export { approximation_methodSearch }


/* This is generated cold, don't alter */
import StepEnumParser from '../../step/parsing/step_enum_parser'

const parser = StepEnumParser.Instance

export function approximation_methodDeserializeStep(
  input: Uint8Array,
  cursor: number,
  endCursor: number ): approximation_method | undefined {
  return parser.extract< approximation_method >( approximation_methodSearch, input, cursor, endCursor )
}
