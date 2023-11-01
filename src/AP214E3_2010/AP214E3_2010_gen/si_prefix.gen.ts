/* This is generated code, don't alter */
enum si_prefix {
  EXA = 0,
  PETA = 1,
  TERA = 2,
  GIGA = 3,
  MEGA = 4,
  KILO = 5,
  HECTO = 6,
  DECA = 7,
  DECI = 8,
  CENTI = 9,
  MILLI = 10,
  MICRO = 11,
  NANO = 12,
  PICO = 13,
  FEMTO = 14,
  ATTO = 15,
}

const si_prefixCount = 16

export { si_prefix, si_prefixCount }

/* This is generated code, don't alter */
import MinimalPerfectHash from '../../indexing/minimal_perfect_hash'

let gMapsi_prefix =
  new Int32Array( [8,35,69,25] )

let prefixSumAddresssi_prefix =
  new Uint32Array( [0,6,12,18,24,29,36,42,48,55,62,69,75,82,88,94,100] )

let slotMapsi_prefix =
  new Int32Array( [1,5,12,13,0,10,15,7,9,11,14,4,6,3,8,2] )

let encodedDatasi_prefix =
  (new TextEncoder()).encode( ".PETA..KILO..NANO..PICO..EXA..MILLI..ATTO..DECA..CENTI..MICRO..FEMTO..MEGA..HECTO..GIGA..DECI..TERA." )

let si_prefixSearch =
  new MinimalPerfectHash< si_prefix >( gMapsi_prefix, prefixSumAddresssi_prefix, slotMapsi_prefix, encodedDatasi_prefix )

export { si_prefixSearch }


/* This is generated cold, don't alter */
import StepEnumParser from '../../step/parsing/step_enum_parser'

const parser = StepEnumParser.Instance

export function si_prefixDeserializeStep(
  input: Uint8Array,
  cursor: number,
  endCursor: number ): si_prefix | undefined {
  return parser.extract< si_prefix >( si_prefixSearch, input, cursor, endCursor )
}
