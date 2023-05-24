/* This is generated code, don't alter */
enum IfcSpaceTypeEnum {
  SPACE = 0,
  PARKING = 1,
  GFA = 2,
  INTERNAL = 3,
  EXTERNAL = 4,
  USERDEFINED = 5,
  NOTDEFINED = 6,
}

const IfcSpaceTypeEnumCount = 7

export { IfcSpaceTypeEnum, IfcSpaceTypeEnumCount }

/* This is generated code, don't alter */
import MinimalPerfectHash from '../../indexing/minimal_perfect_hash'

let gMapIfcSpaceTypeEnum =
  new Int32Array( [346] )

let prefixSumAddressIfcSpaceTypeEnum =
  new Uint32Array( [0,10,17,29,39,52,61,66] )

let slotMapIfcSpaceTypeEnum =
  new Int32Array( [4,0,6,3,5,1,2] )

let encodedDataIfcSpaceTypeEnum =
  (new TextEncoder()).encode( ".EXTERNAL..SPACE..NOTDEFINED..INTERNAL..USERDEFINED..PARKING..GFA." )

let IfcSpaceTypeEnumSearch =
  new MinimalPerfectHash< IfcSpaceTypeEnum >( gMapIfcSpaceTypeEnum, prefixSumAddressIfcSpaceTypeEnum, slotMapIfcSpaceTypeEnum, encodedDataIfcSpaceTypeEnum )

export { IfcSpaceTypeEnumSearch }


/* This is generated cold, don't alter */
import StepEnumParser from '../../step/parsing/step_enum_parser'

const parser = StepEnumParser.Instance

export function IfcSpaceTypeEnumDeserializeStep(
  input: Uint8Array,
  cursor: number,
  endCursor: number ): IfcSpaceTypeEnum | undefined {
  return parser.extract< IfcSpaceTypeEnum >( IfcSpaceTypeEnumSearch, input, cursor, endCursor )
}
