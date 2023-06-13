/* This is generated code, don't alter */
enum IfcAlarmTypeEnum {
  BELL = 0,
  BREAKGLASSBUTTON = 1,
  LIGHT = 2,
  MANUALPULLBOX = 3,
  SIREN = 4,
  WHISTLE = 5,
  USERDEFINED = 6,
  NOTDEFINED = 7,
}

const IfcAlarmTypeEnumCount = 8

export { IfcAlarmTypeEnum, IfcAlarmTypeEnumCount }

/* This is generated code, don't alter */
import MinimalPerfectHash from '../../indexing/minimal_perfect_hash'

let gMapIfcAlarmTypeEnum =
  new Int32Array( [6,-4,21] )

let prefixSumAddressIfcAlarmTypeEnum =
  new Uint32Array( [0,12,19,28,46,53,59,74,87] )

let slotMapIfcAlarmTypeEnum =
  new Int32Array( [7,4,5,1,2,0,3,6] )

let encodedDataIfcAlarmTypeEnum =
  (new TextEncoder()).encode( ".NOTDEFINED..SIREN..WHISTLE..BREAKGLASSBUTTON..LIGHT..BELL..MANUALPULLBOX..USERDEFINED." )

let IfcAlarmTypeEnumSearch =
  new MinimalPerfectHash< IfcAlarmTypeEnum >( gMapIfcAlarmTypeEnum, prefixSumAddressIfcAlarmTypeEnum, slotMapIfcAlarmTypeEnum, encodedDataIfcAlarmTypeEnum )

export { IfcAlarmTypeEnumSearch }


/* This is generated cold, don't alter */
import StepEnumParser from '../../step/parsing/step_enum_parser'

const parser = StepEnumParser.Instance

export function IfcAlarmTypeEnumDeserializeStep(
  input: Uint8Array,
  cursor: number,
  endCursor: number ): IfcAlarmTypeEnum | undefined {
  return parser.extract< IfcAlarmTypeEnum >( IfcAlarmTypeEnumSearch, input, cursor, endCursor )
}
