/* This is generated code, don't alter */
enum interpolation_type {
  UNDEFINED = 0,
  SYNCHRONOUS = 1,
  LINEAR = 2,
}

const interpolation_typeCount = 3

export { interpolation_type, interpolation_typeCount }

/* This is generated code, don't alter */
import MinimalPerfectHash from '../../indexing/minimal_perfect_hash'

let gMapinterpolation_type =
  new Int32Array( [9] )

let prefixSumAddressinterpolation_type =
  new Uint32Array( [0,13,21,32] )

let slotMapinterpolation_type =
  new Int32Array( [1,2,0] )

let encodedDatainterpolation_type =
  (new TextEncoder()).encode( ".SYNCHRONOUS..LINEAR..UNDEFINED." )

let interpolation_typeSearch =
  new MinimalPerfectHash< interpolation_type >( gMapinterpolation_type, prefixSumAddressinterpolation_type, slotMapinterpolation_type, encodedDatainterpolation_type )

export { interpolation_typeSearch }


/* This is generated cold, don't alter */
import StepEnumParser from '../../step/parsing/step_enum_parser'

const parser = StepEnumParser.Instance

export function interpolation_typeDeserializeStep(
  input: Uint8Array,
  cursor: number,
  endCursor: number ): interpolation_type | undefined {
  return parser.extract< interpolation_type >( interpolation_typeSearch, input, cursor, endCursor )
}
