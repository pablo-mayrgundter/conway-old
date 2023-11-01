/* This is generated code, don't alter */
enum null_style {
  NULL = 0,
}

const null_styleCount = 1

export { null_style, null_styleCount }

/* This is generated code, don't alter */
import MinimalPerfectHash from '../../indexing/minimal_perfect_hash'

let gMapnull_style =
  new Int32Array( [0] )

let prefixSumAddressnull_style =
  new Uint32Array( [0,6] )

let slotMapnull_style =
  new Int32Array( [0] )

let encodedDatanull_style =
  (new TextEncoder()).encode( ".NULL." )

let null_styleSearch =
  new MinimalPerfectHash< null_style >( gMapnull_style, prefixSumAddressnull_style, slotMapnull_style, encodedDatanull_style )

export { null_styleSearch }


/* This is generated cold, don't alter */
import StepEnumParser from '../../step/parsing/step_enum_parser'

const parser = StepEnumParser.Instance

export function null_styleDeserializeStep(
  input: Uint8Array,
  cursor: number,
  endCursor: number ): null_style | undefined {
  return parser.extract< null_style >( null_styleSearch, input, cursor, endCursor )
}
