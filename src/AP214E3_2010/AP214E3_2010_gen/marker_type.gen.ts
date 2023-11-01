/* This is generated code, don't alter */
enum marker_type {
  DOT = 0,
  X = 1,
  PLUS = 2,
  ASTERISK = 3,
  RING = 4,
  SQUARE = 5,
  TRIANGLE = 6,
}

const marker_typeCount = 7

export { marker_type, marker_typeCount }

/* This is generated code, don't alter */
import MinimalPerfectHash from '../../indexing/minimal_perfect_hash'

let gMapmarker_type =
  new Int32Array( [4] )

let prefixSumAddressmarker_type =
  new Uint32Array( [0,10,16,19,27,33,38,48] )

let slotMapmarker_type =
  new Int32Array( [6,4,1,5,2,0,3] )

let encodedDatamarker_type =
  (new TextEncoder()).encode( ".TRIANGLE..RING..X..SQUARE..PLUS..DOT..ASTERISK." )

let marker_typeSearch =
  new MinimalPerfectHash< marker_type >( gMapmarker_type, prefixSumAddressmarker_type, slotMapmarker_type, encodedDatamarker_type )

export { marker_typeSearch }


/* This is generated cold, don't alter */
import StepEnumParser from '../../step/parsing/step_enum_parser'

const parser = StepEnumParser.Instance

export function marker_typeDeserializeStep(
  input: Uint8Array,
  cursor: number,
  endCursor: number ): marker_type | undefined {
  return parser.extract< marker_type >( marker_typeSearch, input, cursor, endCursor )
}
