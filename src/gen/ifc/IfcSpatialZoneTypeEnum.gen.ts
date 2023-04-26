/* This is generated code, don't alter */
enum IfcSpatialZoneTypeEnum {
  CONSTRUCTION = 0,
  FIRESAFETY = 1,
  LIGHTING = 2,
  OCCUPANCY = 3,
  SECURITY = 4,
  THERMAL = 5,
  TRANSPORT = 6,
  VENTILATION = 7,
  USERDEFINED = 8,
  NOTDEFINED = 9,
}

const IfcSpatialZoneTypeEnumCount = 10

export { IfcSpatialZoneTypeEnum, IfcSpatialZoneTypeEnumCount }

/* This is generated code, don't alter */
import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash'

let gMapIfcSpatialZoneTypeEnum =
  new Int32Array( [0,40,1] )

let prefixSumAddressIfcSpatialZoneTypeEnum =
  new Uint32Array( [0,13,25,34,46,59,69,80,90,101,115] )

let slotMapIfcSpatialZoneTypeEnum =
  new Int32Array( [8,9,5,1,7,2,3,4,6,0] )

let encodedDataIfcSpatialZoneTypeEnum =
  (new TextEncoder()).encode( ".USERDEFINED..NOTDEFINED..THERMAL..FIRESAFETY..VENTILATION..LIGHTING..OCCUPANCY..SECURITY..TRANSPORT..CONSTRUCTION." )

let IfcSpatialZoneTypeEnumSearch =
  new MinimalPerfectHash< IfcSpatialZoneTypeEnum >( gMapIfcSpatialZoneTypeEnum, prefixSumAddressIfcSpatialZoneTypeEnum, slotMapIfcSpatialZoneTypeEnum, encodedDataIfcSpatialZoneTypeEnum )

export { IfcSpatialZoneTypeEnumSearch }


/* This is generated cold, don't alter */
import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser'

const parser = StepEnumParser.Instance

export function IfcSpatialZoneTypeEnumDeserializeStep(
  input: Uint8Array,
  cursor: number,
  endCursor: number ): IfcSpatialZoneTypeEnum | undefined {
  return parser.extract< IfcSpatialZoneTypeEnum >( IfcSpatialZoneTypeEnumSearch, input, cursor, endCursor )
}
