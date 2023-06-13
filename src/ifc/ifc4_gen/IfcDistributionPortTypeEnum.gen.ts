/* This is generated code, don't alter */
enum IfcDistributionPortTypeEnum {
  CABLE = 0,
  CABLECARRIER = 1,
  DUCT = 2,
  PIPE = 3,
  USERDEFINED = 4,
  NOTDEFINED = 5,
}

const IfcDistributionPortTypeEnumCount = 6

export { IfcDistributionPortTypeEnum, IfcDistributionPortTypeEnumCount }

/* This is generated code, don't alter */
import MinimalPerfectHash from '../../indexing/minimal_perfect_hash'

let gMapIfcDistributionPortTypeEnum =
  new Int32Array( [121] )

let prefixSumAddressIfcDistributionPortTypeEnum =
  new Uint32Array( [0,6,13,26,38,52,58] )

let slotMapIfcDistributionPortTypeEnum =
  new Int32Array( [2,0,4,5,1,3] )

let encodedDataIfcDistributionPortTypeEnum =
  (new TextEncoder()).encode( ".DUCT..CABLE..USERDEFINED..NOTDEFINED..CABLECARRIER..PIPE." )

let IfcDistributionPortTypeEnumSearch =
  new MinimalPerfectHash< IfcDistributionPortTypeEnum >( gMapIfcDistributionPortTypeEnum, prefixSumAddressIfcDistributionPortTypeEnum, slotMapIfcDistributionPortTypeEnum, encodedDataIfcDistributionPortTypeEnum )

export { IfcDistributionPortTypeEnumSearch }


/* This is generated cold, don't alter */
import StepEnumParser from '../../step/parsing/step_enum_parser'

const parser = StepEnumParser.Instance

export function IfcDistributionPortTypeEnumDeserializeStep(
  input: Uint8Array,
  cursor: number,
  endCursor: number ): IfcDistributionPortTypeEnum | undefined {
  return parser.extract< IfcDistributionPortTypeEnum >( IfcDistributionPortTypeEnumSearch, input, cursor, endCursor )
}
