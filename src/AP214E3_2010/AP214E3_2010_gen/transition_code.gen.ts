/* This is generated code, don't alter */
enum transition_code {
  DISCONTINUOUS = 0,
  CONTINUOUS = 1,
  CONT_SAME_GRADIENT = 2,
  CONT_SAME_GRADIENT_SAME_CURVATURE = 3,
}

const transition_codeCount = 4

export { transition_code, transition_codeCount }

/* This is generated code, don't alter */
import MinimalPerfectHash from '../../indexing/minimal_perfect_hash'

let gMaptransition_code =
  new Int32Array( [4] )

let prefixSumAddresstransition_code =
  new Uint32Array( [0,20,35,47,82] )

let slotMaptransition_code =
  new Int32Array( [2,0,1,3] )

let encodedDatatransition_code =
  (new TextEncoder()).encode( ".CONT_SAME_GRADIENT..DISCONTINUOUS..CONTINUOUS..CONT_SAME_GRADIENT_SAME_CURVATURE." )

let transition_codeSearch =
  new MinimalPerfectHash< transition_code >( gMaptransition_code, prefixSumAddresstransition_code, slotMaptransition_code, encodedDatatransition_code )

export { transition_codeSearch }


/* This is generated cold, don't alter */
import StepEnumParser from '../../step/parsing/step_enum_parser'

const parser = StepEnumParser.Instance

export function transition_codeDeserializeStep(
  input: Uint8Array,
  cursor: number,
  endCursor: number ): transition_code | undefined {
  return parser.extract< transition_code >( transition_codeSearch, input, cursor, endCursor )
}
