/* This is generated code, don't alter */
enum IfcDoorPanelOperationEnum {
  SWINGING = 0,
  DOUBLE_ACTING = 1,
  SLIDING = 2,
  FOLDING = 3,
  REVOLVING = 4,
  ROLLINGUP = 5,
  FIXEDPANEL = 6,
  USERDEFINED = 7,
  NOTDEFINED = 8,
}

const IfcDoorPanelOperationEnumCount = 9

export { IfcDoorPanelOperationEnum, IfcDoorPanelOperationEnumCount }

/* This is generated code, don't alter */
import MinimalPerfectHash from '../../indexing/minimal_perfect_hash'

let gMapIfcDoorPanelOperationEnum =
  new Int32Array( [2,15,-3] )

let prefixSumAddressIfcDoorPanelOperationEnum =
  new Uint32Array( [0,10,19,28,40,51,66,78,89,102] )

let slotMapIfcDoorPanelOperationEnum =
  new Int32Array( [0,3,2,8,4,1,6,5,7] )

let encodedDataIfcDoorPanelOperationEnum =
  (new TextEncoder()).encode( ".SWINGING..FOLDING..SLIDING..NOTDEFINED..REVOLVING..DOUBLE_ACTING..FIXEDPANEL..ROLLINGUP..USERDEFINED." )

let IfcDoorPanelOperationEnumSearch =
  new MinimalPerfectHash< IfcDoorPanelOperationEnum >( gMapIfcDoorPanelOperationEnum, prefixSumAddressIfcDoorPanelOperationEnum, slotMapIfcDoorPanelOperationEnum, encodedDataIfcDoorPanelOperationEnum )

export { IfcDoorPanelOperationEnumSearch }


/* This is generated cold, don't alter */
import StepEnumParser from '../../step/parsing/step_enum_parser'

const parser = StepEnumParser.Instance

export function IfcDoorPanelOperationEnumDeserializeStep(
  input: Uint8Array,
  cursor: number,
  endCursor: number ): IfcDoorPanelOperationEnum | undefined {
  return parser.extract< IfcDoorPanelOperationEnum >( IfcDoorPanelOperationEnumSearch, input, cursor, endCursor )
}
