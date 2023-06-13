/* This is generated code, don't alter */
enum IfcProjectionElementTypeEnum {
  USERDEFINED = 0,
  NOTDEFINED = 1,
}

const IfcProjectionElementTypeEnumCount = 2

export { IfcProjectionElementTypeEnum, IfcProjectionElementTypeEnumCount }

/* This is generated code, don't alter */
import MinimalPerfectHash from '../../indexing/minimal_perfect_hash'

let gMapIfcProjectionElementTypeEnum =
  new Int32Array( [1] )

let prefixSumAddressIfcProjectionElementTypeEnum =
  new Uint32Array( [0,13,25] )

let slotMapIfcProjectionElementTypeEnum =
  new Int32Array( [0,1] )

let encodedDataIfcProjectionElementTypeEnum =
  (new TextEncoder()).encode( ".USERDEFINED..NOTDEFINED." )

let IfcProjectionElementTypeEnumSearch =
  new MinimalPerfectHash< IfcProjectionElementTypeEnum >( gMapIfcProjectionElementTypeEnum, prefixSumAddressIfcProjectionElementTypeEnum, slotMapIfcProjectionElementTypeEnum, encodedDataIfcProjectionElementTypeEnum )

export { IfcProjectionElementTypeEnumSearch }


/* This is generated cold, don't alter */
import StepEnumParser from '../../step/parsing/step_enum_parser'

const parser = StepEnumParser.Instance

export function IfcProjectionElementTypeEnumDeserializeStep(
  input: Uint8Array,
  cursor: number,
  endCursor: number ): IfcProjectionElementTypeEnum | undefined {
  return parser.extract< IfcProjectionElementTypeEnum >( IfcProjectionElementTypeEnumSearch, input, cursor, endCursor )
}
