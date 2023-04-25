/* This is generated code, don't alter */
enum IfcFurnitureTypeEnum {
  CHAIR = 0,
  TABLE = 1,
  DESK = 2,
  BED = 3,
  FILECABINET = 4,
  SHELF = 5,
  SOFA = 6,
  USERDEFINED = 7,
  NOTDEFINED = 8,
}

const IfcFurnitureTypeEnumCount = 9

export { IfcFurnitureTypeEnum, IfcFurnitureTypeEnumCount }

/* This is generated code, don't alter */
import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash'

let gMapIfcFurnitureTypeEnum =
  new Int32Array( [159,1,1] )

let prefixSumAddressIfcFurnitureTypeEnum =
  new Uint32Array( [0,7,20,26,33,46,51,58,64,76] )

let slotMapIfcFurnitureTypeEnum =
  new Int32Array( [1,4,2,5,7,3,0,6,8] )

let encodedDataIfcFurnitureTypeEnum =
  (new TextEncoder()).encode( ".TABLE..FILECABINET..DESK..SHELF..USERDEFINED..BED..CHAIR..SOFA..NOTDEFINED." )

let IfcFurnitureTypeEnumSearch =
  new MinimalPerfectHash< IfcFurnitureTypeEnum >( gMapIfcFurnitureTypeEnum, prefixSumAddressIfcFurnitureTypeEnum, slotMapIfcFurnitureTypeEnum, encodedDataIfcFurnitureTypeEnum )

export { IfcFurnitureTypeEnumSearch }


/* This is generated cold, don't alter */
import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser'

const parser = StepEnumParser.Instance

export function IfcFurnitureTypeEnumDeserializeStep(
  input: Uint8Array,
  cursor: number,
  endCursor: number ): IfcFurnitureTypeEnum | undefined {
  return parser.extract< IfcFurnitureTypeEnum >( IfcFurnitureTypeEnumSearch, input, cursor, endCursor )
}
