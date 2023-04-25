/* This is generated code, don't alter */
enum IfcGeographicElementTypeEnum {
  TERRAIN = 0,
  USERDEFINED = 1,
  NOTDEFINED = 2,
}

const IfcGeographicElementTypeEnumCount = 3

export { IfcGeographicElementTypeEnum, IfcGeographicElementTypeEnumCount }

/* This is generated code, don't alter */
import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash'

let gMapIfcGeographicElementTypeEnum =
  new Int32Array( [2] )

let prefixSumAddressIfcGeographicElementTypeEnum =
  new Uint32Array( [0,9,21,34] )

let slotMapIfcGeographicElementTypeEnum =
  new Int32Array( [0,2,1] )

let encodedDataIfcGeographicElementTypeEnum =
  (new TextEncoder()).encode( ".TERRAIN..NOTDEFINED..USERDEFINED." )

let IfcGeographicElementTypeEnumSearch =
  new MinimalPerfectHash< IfcGeographicElementTypeEnum >( gMapIfcGeographicElementTypeEnum, prefixSumAddressIfcGeographicElementTypeEnum, slotMapIfcGeographicElementTypeEnum, encodedDataIfcGeographicElementTypeEnum )

export { IfcGeographicElementTypeEnumSearch }


/* This is generated cold, don't alter */
import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser'

const parser = StepEnumParser.Instance

export function IfcGeographicElementTypeEnumDeserializeStep(
  input: Uint8Array,
  cursor: number,
  endCursor: number ): IfcGeographicElementTypeEnum | undefined {
  return parser.extract< IfcGeographicElementTypeEnum >( IfcGeographicElementTypeEnumSearch, input, cursor, endCursor )
}
