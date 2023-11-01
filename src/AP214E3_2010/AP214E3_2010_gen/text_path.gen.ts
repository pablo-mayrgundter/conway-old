/* This is generated code, don't alter */
enum text_path {
  LEFT = 0,
  RIGHT = 1,
  UP = 2,
  DOWN = 3,
}

const text_pathCount = 4

export { text_path, text_pathCount }

/* This is generated code, don't alter */
import MinimalPerfectHash from '../../indexing/minimal_perfect_hash'

let gMaptext_path =
  new Int32Array( [2] )

let prefixSumAddresstext_path =
  new Uint32Array( [0,4,11,17,23] )

let slotMaptext_path =
  new Int32Array( [2,1,3,0] )

let encodedDatatext_path =
  (new TextEncoder()).encode( ".UP..RIGHT..DOWN..LEFT." )

let text_pathSearch =
  new MinimalPerfectHash< text_path >( gMaptext_path, prefixSumAddresstext_path, slotMaptext_path, encodedDatatext_path )

export { text_pathSearch }


/* This is generated cold, don't alter */
import StepEnumParser from '../../step/parsing/step_enum_parser'

const parser = StepEnumParser.Instance

export function text_pathDeserializeStep(
  input: Uint8Array,
  cursor: number,
  endCursor: number ): text_path | undefined {
  return parser.extract< text_path >( text_pathSearch, input, cursor, endCursor )
}
