/* This is generated code, don't alter */
enum b_spline_surface_form {
  PLANE_SURF = 0,
  CYLINDRICAL_SURF = 1,
  CONICAL_SURF = 2,
  SPHERICAL_SURF = 3,
  TOROIDAL_SURF = 4,
  SURF_OF_REVOLUTION = 5,
  RULED_SURF = 6,
  GENERALISED_CONE = 7,
  QUADRIC_SURF = 8,
  SURF_OF_LINEAR_EXTRUSION = 9,
  UNSPECIFIED = 10,
}

const b_spline_surface_formCount = 11

export { b_spline_surface_form, b_spline_surface_formCount }

/* This is generated code, don't alter */
import MinimalPerfectHash from '../../indexing/minimal_perfect_hash'

let gMapb_spline_surface_form =
  new Int32Array( [7,120,17] )

let prefixSumAddressb_spline_surface_form =
  new Uint32Array( [0,18,34,48,60,86,106,120,132,150,165,178] )

let slotMapb_spline_surface_form =
  new Int32Array( [7,3,2,0,9,5,8,6,1,4,10] )

let encodedDatab_spline_surface_form =
  (new TextEncoder()).encode( ".GENERALISED_CONE..SPHERICAL_SURF..CONICAL_SURF..PLANE_SURF..SURF_OF_LINEAR_EXTRUSION..SURF_OF_REVOLUTION..QUADRIC_SURF..RULED_SURF..CYLINDRICAL_SURF..TOROIDAL_SURF..UNSPECIFIED." )

let b_spline_surface_formSearch =
  new MinimalPerfectHash< b_spline_surface_form >( gMapb_spline_surface_form, prefixSumAddressb_spline_surface_form, slotMapb_spline_surface_form, encodedDatab_spline_surface_form )

export { b_spline_surface_formSearch }


/* This is generated cold, don't alter */
import StepEnumParser from '../../step/parsing/step_enum_parser'

const parser = StepEnumParser.Instance

export function b_spline_surface_formDeserializeStep(
  input: Uint8Array,
  cursor: number,
  endCursor: number ): b_spline_surface_form | undefined {
  return parser.extract< b_spline_surface_form >( b_spline_surface_formSearch, input, cursor, endCursor )
}
