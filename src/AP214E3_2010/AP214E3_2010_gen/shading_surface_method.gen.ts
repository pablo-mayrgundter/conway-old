/* This is generated code, don't alter */
enum shading_surface_method {
  CONSTANT_SHADING = 0,
  COLOUR_SHADING = 1,
  DOT_SHADING = 2,
  NORMAL_SHADING = 3,
}

const shading_surface_methodCount = 4

export { shading_surface_method, shading_surface_methodCount }

/* This is generated code, don't alter */
import MinimalPerfectHash from '../../indexing/minimal_perfect_hash'

let gMapshading_surface_method =
  new Int32Array( [1] )

let prefixSumAddressshading_surface_method =
  new Uint32Array( [0,16,34,47,63] )

let slotMapshading_surface_method =
  new Int32Array( [1,0,2,3] )

let encodedDatashading_surface_method =
  (new TextEncoder()).encode( ".COLOUR_SHADING..CONSTANT_SHADING..DOT_SHADING..NORMAL_SHADING." )

let shading_surface_methodSearch =
  new MinimalPerfectHash< shading_surface_method >( gMapshading_surface_method, prefixSumAddressshading_surface_method, slotMapshading_surface_method, encodedDatashading_surface_method )

export { shading_surface_methodSearch }


/* This is generated cold, don't alter */
import StepEnumParser from '../../step/parsing/step_enum_parser'

const parser = StepEnumParser.Instance

export function shading_surface_methodDeserializeStep(
  input: Uint8Array,
  cursor: number,
  endCursor: number ): shading_surface_method | undefined {
  return parser.extract< shading_surface_method >( shading_surface_methodSearch, input, cursor, endCursor )
}
