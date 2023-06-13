/* This is generated code, don't alter */
enum IfcBuildingElementPartTypeEnum {
  INSULATION = 0,
  PRECASTPANEL = 1,
  USERDEFINED = 2,
  NOTDEFINED = 3,
}

const IfcBuildingElementPartTypeEnumCount = 4

export { IfcBuildingElementPartTypeEnum, IfcBuildingElementPartTypeEnumCount }

/* This is generated code, don't alter */
import MinimalPerfectHash from '../../indexing/minimal_perfect_hash'

let gMapIfcBuildingElementPartTypeEnum =
  new Int32Array( [11] )

let prefixSumAddressIfcBuildingElementPartTypeEnum =
  new Uint32Array( [0,14,27,39,51] )

let slotMapIfcBuildingElementPartTypeEnum =
  new Int32Array( [1,2,0,3] )

let encodedDataIfcBuildingElementPartTypeEnum =
  (new TextEncoder()).encode( ".PRECASTPANEL..USERDEFINED..INSULATION..NOTDEFINED." )

let IfcBuildingElementPartTypeEnumSearch =
  new MinimalPerfectHash< IfcBuildingElementPartTypeEnum >( gMapIfcBuildingElementPartTypeEnum, prefixSumAddressIfcBuildingElementPartTypeEnum, slotMapIfcBuildingElementPartTypeEnum, encodedDataIfcBuildingElementPartTypeEnum )

export { IfcBuildingElementPartTypeEnumSearch }


/* This is generated cold, don't alter */
import StepEnumParser from '../../step/parsing/step_enum_parser'

const parser = StepEnumParser.Instance

export function IfcBuildingElementPartTypeEnumDeserializeStep(
  input: Uint8Array,
  cursor: number,
  endCursor: number ): IfcBuildingElementPartTypeEnum | undefined {
  return parser.extract< IfcBuildingElementPartTypeEnum >( IfcBuildingElementPartTypeEnumSearch, input, cursor, endCursor )
}
