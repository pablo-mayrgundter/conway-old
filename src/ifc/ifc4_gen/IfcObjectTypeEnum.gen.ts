/* This is generated code, don't alter */
enum IfcObjectTypeEnum {
  PRODUCT = 0,
  PROCESS = 1,
  CONTROL = 2,
  RESOURCE = 3,
  ACTOR = 4,
  GROUP = 5,
  PROJECT = 6,
  NOTDEFINED = 7,
}

const IfcObjectTypeEnumCount = 8

export { IfcObjectTypeEnum, IfcObjectTypeEnumCount }

/* This is generated code, don't alter */
import MinimalPerfectHash from '../../indexing/minimal_perfect_hash'

let gMapIfcObjectTypeEnum =
  new Int32Array( [1,-5,7] )

let prefixSumAddressIfcObjectTypeEnum =
  new Uint32Array( [0,10,19,26,35,47,56,63,72] )

let slotMapIfcObjectTypeEnum =
  new Int32Array( [3,1,5,2,7,6,4,0] )

let encodedDataIfcObjectTypeEnum =
  (new TextEncoder()).encode( ".RESOURCE..PROCESS..GROUP..CONTROL..NOTDEFINED..PROJECT..ACTOR..PRODUCT." )

let IfcObjectTypeEnumSearch =
  new MinimalPerfectHash< IfcObjectTypeEnum >( gMapIfcObjectTypeEnum, prefixSumAddressIfcObjectTypeEnum, slotMapIfcObjectTypeEnum, encodedDataIfcObjectTypeEnum )

export { IfcObjectTypeEnumSearch }


/* This is generated cold, don't alter */
import StepEnumParser from '../../step/parsing/step_enum_parser'

const parser = StepEnumParser.Instance

export function IfcObjectTypeEnumDeserializeStep(
  input: Uint8Array,
  cursor: number,
  endCursor: number ): IfcObjectTypeEnum | undefined {
  return parser.extract< IfcObjectTypeEnum >( IfcObjectTypeEnumSearch, input, cursor, endCursor )
}
