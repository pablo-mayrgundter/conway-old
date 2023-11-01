/* This is generated code, don't alter */
enum si_unit_name {
  METRE = 0,
  GRAM = 1,
  SECOND = 2,
  AMPERE = 3,
  KELVIN = 4,
  MOLE = 5,
  CANDELA = 6,
  RADIAN = 7,
  STERADIAN = 8,
  HERTZ = 9,
  NEWTON = 10,
  PASCAL = 11,
  JOULE = 12,
  WATT = 13,
  COULOMB = 14,
  VOLT = 15,
  FARAD = 16,
  OHM = 17,
  SIEMENS = 18,
  WEBER = 19,
  TESLA = 20,
  HENRY = 21,
  DEGREE_CELSIUS = 22,
  LUMEN = 23,
  LUX = 24,
  BECQUEREL = 25,
  GRAY = 26,
  SIEVERT = 27,
}

const si_unit_nameCount = 28

export { si_unit_name, si_unit_nameCount }

/* This is generated code, don't alter */
import MinimalPerfectHash from '../../indexing/minimal_perfect_hash'

let gMapsi_unit_name =
  new Int32Array( [1,137,188,1,39,171,410] )

let prefixSumAddresssi_unit_name =
  new Uint32Array( [0,9,18,24,30,37,45,52,61,77,84,92,101,109,115,123,130,138,144,151,156,167,174,181,189,195,202,213,218] )

let slotMapsi_unit_name =
  new Int32Array( [18,14,5,13,19,7,0,27,22,12,4,6,3,1,10,21,2,26,20,17,25,23,9,11,15,16,8,24] )

let encodedDatasi_unit_name =
  (new TextEncoder()).encode( ".SIEMENS..COULOMB..MOLE..WATT..WEBER..RADIAN..METRE..SIEVERT..DEGREE_CELSIUS..JOULE..KELVIN..CANDELA..AMPERE..GRAM..NEWTON..HENRY..SECOND..GRAY..TESLA..OHM..BECQUEREL..LUMEN..HERTZ..PASCAL..VOLT..FARAD..STERADIAN..LUX." )

let si_unit_nameSearch =
  new MinimalPerfectHash< si_unit_name >( gMapsi_unit_name, prefixSumAddresssi_unit_name, slotMapsi_unit_name, encodedDatasi_unit_name )

export { si_unit_nameSearch }


/* This is generated cold, don't alter */
import StepEnumParser from '../../step/parsing/step_enum_parser'

const parser = StepEnumParser.Instance

export function si_unit_nameDeserializeStep(
  input: Uint8Array,
  cursor: number,
  endCursor: number ): si_unit_name | undefined {
  return parser.extract< si_unit_name >( si_unit_nameSearch, input, cursor, endCursor )
}
