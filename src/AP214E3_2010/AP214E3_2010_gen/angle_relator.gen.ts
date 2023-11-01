/* This is generated code, don't alter */
enum angle_relator {
  EQUAL = 0,
  LARGE = 1,
  SMALL = 2,
}

const angle_relatorCount = 3

export { angle_relator, angle_relatorCount }

/* This is generated code, don't alter */
import MinimalPerfectHash from '../../indexing/minimal_perfect_hash'

let gMapangle_relator =
  new Int32Array( [2] )

let prefixSumAddressangle_relator =
  new Uint32Array( [0,7,14,21] )

let slotMapangle_relator =
  new Int32Array( [1,2,0] )

let encodedDataangle_relator =
  (new TextEncoder()).encode( ".LARGE..SMALL..EQUAL." )

let angle_relatorSearch =
  new MinimalPerfectHash< angle_relator >( gMapangle_relator, prefixSumAddressangle_relator, slotMapangle_relator, encodedDataangle_relator )

export { angle_relatorSearch }


/* This is generated cold, don't alter */
import StepEnumParser from '../../step/parsing/step_enum_parser'

const parser = StepEnumParser.Instance

export function angle_relatorDeserializeStep(
  input: Uint8Array,
  cursor: number,
  endCursor: number ): angle_relator | undefined {
  return parser.extract< angle_relator >( angle_relatorSearch, input, cursor, endCursor )
}
