/* This is generated code, don't alter */
enum ypr_enumeration {
  YAW = 0,
  PITCH = 1,
  ROLL = 2,
}

const ypr_enumerationCount = 3

export { ypr_enumeration, ypr_enumerationCount }

/* This is generated code, don't alter */
import MinimalPerfectHash from '../../indexing/minimal_perfect_hash'

let gMapypr_enumeration =
  new Int32Array( [1] )

let prefixSumAddressypr_enumeration =
  new Uint32Array( [0,6,13,18] )

let slotMapypr_enumeration =
  new Int32Array( [2,1,0] )

let encodedDataypr_enumeration =
  (new TextEncoder()).encode( ".ROLL..PITCH..YAW." )

let ypr_enumerationSearch =
  new MinimalPerfectHash< ypr_enumeration >( gMapypr_enumeration, prefixSumAddressypr_enumeration, slotMapypr_enumeration, encodedDataypr_enumeration )

export { ypr_enumerationSearch }


/* This is generated cold, don't alter */
import StepEnumParser from '../../step/parsing/step_enum_parser'

const parser = StepEnumParser.Instance

export function ypr_enumerationDeserializeStep(
  input: Uint8Array,
  cursor: number,
  endCursor: number ): ypr_enumeration | undefined {
  return parser.extract< ypr_enumeration >( ypr_enumerationSearch, input, cursor, endCursor )
}
