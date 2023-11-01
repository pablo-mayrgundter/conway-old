/* This is generated code, don't alter */
enum shading_curve_method {
  CONSTANT_COLOUR = 0,
  LINEAR_COLOUR = 1,
}

const shading_curve_methodCount = 2

export { shading_curve_method, shading_curve_methodCount }

/* This is generated code, don't alter */
import MinimalPerfectHash from '../../indexing/minimal_perfect_hash'

let gMapshading_curve_method =
  new Int32Array( [2] )

let prefixSumAddressshading_curve_method =
  new Uint32Array( [0,17,32] )

let slotMapshading_curve_method =
  new Int32Array( [0,1] )

let encodedDatashading_curve_method =
  (new TextEncoder()).encode( ".CONSTANT_COLOUR..LINEAR_COLOUR." )

let shading_curve_methodSearch =
  new MinimalPerfectHash< shading_curve_method >( gMapshading_curve_method, prefixSumAddressshading_curve_method, slotMapshading_curve_method, encodedDatashading_curve_method )

export { shading_curve_methodSearch }


/* This is generated cold, don't alter */
import StepEnumParser from '../../step/parsing/step_enum_parser'

const parser = StepEnumParser.Instance

export function shading_curve_methodDeserializeStep(
  input: Uint8Array,
  cursor: number,
  endCursor: number ): shading_curve_method | undefined {
  return parser.extract< shading_curve_method >( shading_curve_methodSearch, input, cursor, endCursor )
}
