/* This is generated code, don't alter */
enum source {
  MADE = 0,
  BOUGHT = 1,
  NOT_KNOWN = 2,
}

const sourceCount = 3

export { source, sourceCount }

/* This is generated code, don't alter */
import MinimalPerfectHash from '../../indexing/minimal_perfect_hash'

let gMapsource =
  new Int32Array( [4] )

let prefixSumAddresssource =
  new Uint32Array( [0,8,19,25] )

let slotMapsource =
  new Int32Array( [1,2,0] )

let encodedDatasource =
  (new TextEncoder()).encode( ".BOUGHT..NOT_KNOWN..MADE." )

let sourceSearch =
  new MinimalPerfectHash< source >( gMapsource, prefixSumAddresssource, slotMapsource, encodedDatasource )

export { sourceSearch }


/* This is generated cold, don't alter */
import StepEnumParser from '../../step/parsing/step_enum_parser'

const parser = StepEnumParser.Instance

export function sourceDeserializeStep(
  input: Uint8Array,
  cursor: number,
  endCursor: number ): source | undefined {
  return parser.extract< source >( sourceSearch, input, cursor, endCursor )
}
