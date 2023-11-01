/* This is generated code, don't alter */
enum trimming_preference {
  CARTESIAN = 0,
  PARAMETER = 1,
  UNSPECIFIED = 2,
}

const trimming_preferenceCount = 3

export { trimming_preference, trimming_preferenceCount }

/* This is generated code, don't alter */
import MinimalPerfectHash from '../../indexing/minimal_perfect_hash'

let gMaptrimming_preference =
  new Int32Array( [2] )

let prefixSumAddresstrimming_preference =
  new Uint32Array( [0,13,24,35] )

let slotMaptrimming_preference =
  new Int32Array( [2,0,1] )

let encodedDatatrimming_preference =
  (new TextEncoder()).encode( ".UNSPECIFIED..CARTESIAN..PARAMETER." )

let trimming_preferenceSearch =
  new MinimalPerfectHash< trimming_preference >( gMaptrimming_preference, prefixSumAddresstrimming_preference, slotMaptrimming_preference, encodedDatatrimming_preference )

export { trimming_preferenceSearch }


/* This is generated cold, don't alter */
import StepEnumParser from '../../step/parsing/step_enum_parser'

const parser = StepEnumParser.Instance

export function trimming_preferenceDeserializeStep(
  input: Uint8Array,
  cursor: number,
  endCursor: number ): trimming_preference | undefined {
  return parser.extract< trimming_preference >( trimming_preferenceSearch, input, cursor, endCursor )
}
