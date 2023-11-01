/* This is generated code, don't alter */
enum surface_side {
  POSITIVE = 0,
  NEGATIVE = 1,
  BOTH = 2,
}

const surface_sideCount = 3

export { surface_side, surface_sideCount }

/* This is generated code, don't alter */
import MinimalPerfectHash from '../../indexing/minimal_perfect_hash'

let gMapsurface_side =
  new Int32Array( [11] )

let prefixSumAddresssurface_side =
  new Uint32Array( [0,6,16,26] )

let slotMapsurface_side =
  new Int32Array( [2,1,0] )

let encodedDatasurface_side =
  (new TextEncoder()).encode( ".BOTH..NEGATIVE..POSITIVE." )

let surface_sideSearch =
  new MinimalPerfectHash< surface_side >( gMapsurface_side, prefixSumAddresssurface_side, slotMapsurface_side, encodedDatasurface_side )

export { surface_sideSearch }


/* This is generated cold, don't alter */
import StepEnumParser from '../../step/parsing/step_enum_parser'

const parser = StepEnumParser.Instance

export function surface_sideDeserializeStep(
  input: Uint8Array,
  cursor: number,
  endCursor: number ): surface_side | undefined {
  return parser.extract< surface_side >( surface_sideSearch, input, cursor, endCursor )
}
