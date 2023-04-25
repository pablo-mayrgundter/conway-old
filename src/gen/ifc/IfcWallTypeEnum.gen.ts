/* This is generated code, don't alter */
enum IfcWallTypeEnum {
  MOVABLE = 0,
  PARAPET = 1,
  PARTITIONING = 2,
  PLUMBINGWALL = 3,
  SHEAR = 4,
  SOLIDWALL = 5,
  STANDARD = 6,
  POLYGONAL = 7,
  ELEMENTEDWALL = 8,
  USERDEFINED = 9,
  NOTDEFINED = 10,
}

const IfcWallTypeEnumCount = 11

export { IfcWallTypeEnum, IfcWallTypeEnumCount }

/* This is generated code, don't alter */
import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash'

let gMapIfcWallTypeEnum =
  new Int32Array( [165,0,2] )

let prefixSumAddressIfcWallTypeEnum =
  new Uint32Array( [0,10,22,29,40,54,65,74,89,98,111,125] )

let slotMapIfcWallTypeEnum =
  new Int32Array( [6,10,4,5,3,7,0,8,1,9,2] )

let encodedDataIfcWallTypeEnum =
  (new TextEncoder()).encode( ".STANDARD..NOTDEFINED..SHEAR..SOLIDWALL..PLUMBINGWALL..POLYGONAL..MOVABLE..ELEMENTEDWALL..PARAPET..USERDEFINED..PARTITIONING." )

let IfcWallTypeEnumSearch =
  new MinimalPerfectHash< IfcWallTypeEnum >( gMapIfcWallTypeEnum, prefixSumAddressIfcWallTypeEnum, slotMapIfcWallTypeEnum, encodedDataIfcWallTypeEnum )

export { IfcWallTypeEnumSearch }


/* This is generated cold, don't alter */
import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser'

const parser = StepEnumParser.Instance

export function IfcWallTypeEnumDeserializeStep(
  input: Uint8Array,
  cursor: number,
  endCursor: number ): IfcWallTypeEnum | undefined {
  return parser.extract< IfcWallTypeEnum >( IfcWallTypeEnumSearch, input, cursor, endCursor )
}
