/* This is generated code, don't alter */
enum b_spline_curve_form {
  POLYLINE_FORM = 0,
  CIRCULAR_ARC = 1,
  ELLIPTIC_ARC = 2,
  PARABOLIC_ARC = 3,
  HYPERBOLIC_ARC = 4,
  UNSPECIFIED = 5,
}

const b_spline_curve_formCount = 6

export { b_spline_curve_form, b_spline_curve_formCount }

/* This is generated code, don't alter */
import MinimalPerfectHash from '../../indexing/minimal_perfect_hash'

let gMapb_spline_curve_form =
  new Int32Array( [4] )

let prefixSumAddressb_spline_curve_form =
  new Uint32Array( [0,16,31,44,59,73,87] )

let slotMapb_spline_curve_form =
  new Int32Array( [4,3,5,0,1,2] )

let encodedDatab_spline_curve_form =
  (new TextEncoder()).encode( ".HYPERBOLIC_ARC..PARABOLIC_ARC..UNSPECIFIED..POLYLINE_FORM..CIRCULAR_ARC..ELLIPTIC_ARC." )

let b_spline_curve_formSearch =
  new MinimalPerfectHash< b_spline_curve_form >( gMapb_spline_curve_form, prefixSumAddressb_spline_curve_form, slotMapb_spline_curve_form, encodedDatab_spline_curve_form )

export { b_spline_curve_formSearch }


/* This is generated cold, don't alter */
import StepEnumParser from '../../step/parsing/step_enum_parser'

const parser = StepEnumParser.Instance

export function b_spline_curve_formDeserializeStep(
  input: Uint8Array,
  cursor: number,
  endCursor: number ): b_spline_curve_form | undefined {
  return parser.extract< b_spline_curve_form >( b_spline_curve_formSearch, input, cursor, endCursor )
}
