/* This is generated code, don't alter */
enum IfcSequenceEnum {
  START_START = 0,
  START_FINISH = 1,
  FINISH_START = 2,
  FINISH_FINISH = 3,
  USERDEFINED = 4,
  NOTDEFINED = 5,
}

const IfcSequenceEnumCount = 6

export { IfcSequenceEnum, IfcSequenceEnumCount }

/* This is generated code, don't alter */
import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash'

let gMapIfcSequenceEnum =
  new Int32Array( [86] )

let prefixSumAddressIfcSequenceEnum =
  new Uint32Array( [0,13,28,42,54,67,81] )

let slotMapIfcSequenceEnum =
  new Int32Array( [0,3,1,5,4,2] )

let encodedDataIfcSequenceEnum =
  (new TextEncoder()).encode( ".START_START..FINISH_FINISH..START_FINISH..NOTDEFINED..USERDEFINED..FINISH_START." )

let IfcSequenceEnumSearch =
  new MinimalPerfectHash< IfcSequenceEnum >( gMapIfcSequenceEnum, prefixSumAddressIfcSequenceEnum, slotMapIfcSequenceEnum, encodedDataIfcSequenceEnum )

export { IfcSequenceEnumSearch }


/* This is generated cold, don't alter */
import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser'

const parser = StepEnumParser.Instance

export function IfcSequenceEnumDeserializeStep(
  input: Uint8Array,
  cursor: number,
  endCursor: number ): IfcSequenceEnum | undefined {
  return parser.extract< IfcSequenceEnum >( IfcSequenceEnumSearch, input, cursor, endCursor )
}
