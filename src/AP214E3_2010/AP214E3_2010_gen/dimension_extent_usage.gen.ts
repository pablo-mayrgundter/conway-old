/* This is generated code, don't alter */
enum dimension_extent_usage {
  ORIGIN = 0,
  TARGET = 1,
}

const dimension_extent_usageCount = 2

export { dimension_extent_usage, dimension_extent_usageCount }

/* This is generated code, don't alter */
import MinimalPerfectHash from '../../indexing/minimal_perfect_hash'

let gMapdimension_extent_usage =
  new Int32Array( [1] )

let prefixSumAddressdimension_extent_usage =
  new Uint32Array( [0,8,16] )

let slotMapdimension_extent_usage =
  new Int32Array( [0,1] )

let encodedDatadimension_extent_usage =
  (new TextEncoder()).encode( ".ORIGIN..TARGET." )

let dimension_extent_usageSearch =
  new MinimalPerfectHash< dimension_extent_usage >( gMapdimension_extent_usage, prefixSumAddressdimension_extent_usage, slotMapdimension_extent_usage, encodedDatadimension_extent_usage )

export { dimension_extent_usageSearch }


/* This is generated cold, don't alter */
import StepEnumParser from '../../step/parsing/step_enum_parser'

const parser = StepEnumParser.Instance

export function dimension_extent_usageDeserializeStep(
  input: Uint8Array,
  cursor: number,
  endCursor: number ): dimension_extent_usage | undefined {
  return parser.extract< dimension_extent_usage >( dimension_extent_usageSearch, input, cursor, endCursor )
}
