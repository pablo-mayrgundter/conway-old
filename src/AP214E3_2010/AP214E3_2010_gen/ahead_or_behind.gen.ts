/* This is generated code, don't alter */
enum ahead_or_behind {
  AHEAD = 0,
  EXACT = 1,
  BEHIND = 2,
}

const ahead_or_behindCount = 3

export { ahead_or_behind, ahead_or_behindCount }

/* This is generated code, don't alter */
import MinimalPerfectHash from '../../indexing/minimal_perfect_hash'

let gMapahead_or_behind =
  new Int32Array( [7] )

let prefixSumAddressahead_or_behind =
  new Uint32Array( [0,8,15,22] )

let slotMapahead_or_behind =
  new Int32Array( [2,0,1] )

let encodedDataahead_or_behind =
  (new TextEncoder()).encode( ".BEHIND..AHEAD..EXACT." )

let ahead_or_behindSearch =
  new MinimalPerfectHash< ahead_or_behind >( gMapahead_or_behind, prefixSumAddressahead_or_behind, slotMapahead_or_behind, encodedDataahead_or_behind )

export { ahead_or_behindSearch }


/* This is generated cold, don't alter */
import StepEnumParser from '../../step/parsing/step_enum_parser'

const parser = StepEnumParser.Instance

export function ahead_or_behindDeserializeStep(
  input: Uint8Array,
  cursor: number,
  endCursor: number ): ahead_or_behind | undefined {
  return parser.extract< ahead_or_behind >( ahead_or_behindSearch, input, cursor, endCursor )
}
