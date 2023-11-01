/* This is generated code, don't alter */
enum preferred_surface_curve_representation {
  CURVE_3D = 0,
  PCURVE_S1 = 1,
  PCURVE_S2 = 2,
}

const preferred_surface_curve_representationCount = 3

export { preferred_surface_curve_representation, preferred_surface_curve_representationCount }

/* This is generated code, don't alter */
import MinimalPerfectHash from '../../indexing/minimal_perfect_hash'

let gMappreferred_surface_curve_representation =
  new Int32Array( [1] )

let prefixSumAddresspreferred_surface_curve_representation =
  new Uint32Array( [0,10,21,32] )

let slotMappreferred_surface_curve_representation =
  new Int32Array( [0,2,1] )

let encodedDatapreferred_surface_curve_representation =
  (new TextEncoder()).encode( ".CURVE_3D..PCURVE_S2..PCURVE_S1." )

let preferred_surface_curve_representationSearch =
  new MinimalPerfectHash< preferred_surface_curve_representation >( gMappreferred_surface_curve_representation, prefixSumAddresspreferred_surface_curve_representation, slotMappreferred_surface_curve_representation, encodedDatapreferred_surface_curve_representation )

export { preferred_surface_curve_representationSearch }


/* This is generated cold, don't alter */
import StepEnumParser from '../../step/parsing/step_enum_parser'

const parser = StepEnumParser.Instance

export function preferred_surface_curve_representationDeserializeStep(
  input: Uint8Array,
  cursor: number,
  endCursor: number ): preferred_surface_curve_representation | undefined {
  return parser.extract< preferred_surface_curve_representation >( preferred_surface_curve_representationSearch, input, cursor, endCursor )
}
