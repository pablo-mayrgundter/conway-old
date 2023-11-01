/* This is generated code, don't alter */
enum central_or_parallel {
  CENTRAL = 0,
  PARALLEL = 1,
}

const central_or_parallelCount = 2

export { central_or_parallel, central_or_parallelCount }

/* This is generated code, don't alter */
import MinimalPerfectHash from '../../indexing/minimal_perfect_hash'

let gMapcentral_or_parallel =
  new Int32Array( [1] )

let prefixSumAddresscentral_or_parallel =
  new Uint32Array( [0,10,19] )

let slotMapcentral_or_parallel =
  new Int32Array( [1,0] )

let encodedDatacentral_or_parallel =
  (new TextEncoder()).encode( ".PARALLEL..CENTRAL." )

let central_or_parallelSearch =
  new MinimalPerfectHash< central_or_parallel >( gMapcentral_or_parallel, prefixSumAddresscentral_or_parallel, slotMapcentral_or_parallel, encodedDatacentral_or_parallel )

export { central_or_parallelSearch }


/* This is generated cold, don't alter */
import StepEnumParser from '../../step/parsing/step_enum_parser'

const parser = StepEnumParser.Instance

export function central_or_parallelDeserializeStep(
  input: Uint8Array,
  cursor: number,
  endCursor: number ): central_or_parallel | undefined {
  return parser.extract< central_or_parallel >( central_or_parallelSearch, input, cursor, endCursor )
}
