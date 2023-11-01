/* This is generated code, don't alter */
enum unlimited_range {
  UNLIMITED = 0,
}

const unlimited_rangeCount = 1

export { unlimited_range, unlimited_rangeCount }

/* This is generated code, don't alter */
import MinimalPerfectHash from '../../indexing/minimal_perfect_hash'

let gMapunlimited_range =
  new Int32Array( [0] )

let prefixSumAddressunlimited_range =
  new Uint32Array( [0,11] )

let slotMapunlimited_range =
  new Int32Array( [0] )

let encodedDataunlimited_range =
  (new TextEncoder()).encode( ".UNLIMITED." )

let unlimited_rangeSearch =
  new MinimalPerfectHash< unlimited_range >( gMapunlimited_range, prefixSumAddressunlimited_range, slotMapunlimited_range, encodedDataunlimited_range )

export { unlimited_rangeSearch }


/* This is generated cold, don't alter */
import StepEnumParser from '../../step/parsing/step_enum_parser'

const parser = StepEnumParser.Instance

export function unlimited_rangeDeserializeStep(
  input: Uint8Array,
  cursor: number,
  endCursor: number ): unlimited_range | undefined {
  return parser.extract< unlimited_range >( unlimited_rangeSearch, input, cursor, endCursor )
}
