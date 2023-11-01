/* This is generated code, don't alter */
enum limit_condition {
  MAXIMUM_MATERIAL_CONDITION = 0,
  LEAST_MATERIAL_CONDITION = 1,
  REGARDLESS_OF_FEATURE_SIZE = 2,
}

const limit_conditionCount = 3

export { limit_condition, limit_conditionCount }

/* This is generated code, don't alter */
import MinimalPerfectHash from '../../indexing/minimal_perfect_hash'

let gMaplimit_condition =
  new Int32Array( [2] )

let prefixSumAddresslimit_condition =
  new Uint32Array( [0,28,56,82] )

let slotMaplimit_condition =
  new Int32Array( [0,2,1] )

let encodedDatalimit_condition =
  (new TextEncoder()).encode( ".MAXIMUM_MATERIAL_CONDITION..REGARDLESS_OF_FEATURE_SIZE..LEAST_MATERIAL_CONDITION." )

let limit_conditionSearch =
  new MinimalPerfectHash< limit_condition >( gMaplimit_condition, prefixSumAddresslimit_condition, slotMaplimit_condition, encodedDatalimit_condition )

export { limit_conditionSearch }


/* This is generated cold, don't alter */
import StepEnumParser from '../../step/parsing/step_enum_parser'

const parser = StepEnumParser.Instance

export function limit_conditionDeserializeStep(
  input: Uint8Array,
  cursor: number,
  endCursor: number ): limit_condition | undefined {
  return parser.extract< limit_condition >( limit_conditionSearch, input, cursor, endCursor )
}
