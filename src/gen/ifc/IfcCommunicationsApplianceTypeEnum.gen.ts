/* This is generated code, don't alter */
enum IfcCommunicationsApplianceTypeEnum {
  ANTENNA = 0,
  COMPUTER = 1,
  FAX = 2,
  GATEWAY = 3,
  MODEM = 4,
  NETWORKAPPLIANCE = 5,
  NETWORKBRIDGE = 6,
  NETWORKHUB = 7,
  PRINTER = 8,
  REPEATER = 9,
  ROUTER = 10,
  SCANNER = 11,
  USERDEFINED = 12,
  NOTDEFINED = 13,
}

const IfcCommunicationsApplianceTypeEnumCount = 14

export { IfcCommunicationsApplianceTypeEnum, IfcCommunicationsApplianceTypeEnumCount }

/* This is generated code, don't alter */
import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash'

let gMapIfcCommunicationsApplianceTypeEnum =
  new Int32Array( [0,92,10,271] )

let prefixSumAddressIfcCommunicationsApplianceTypeEnum =
  new Uint32Array( [0,9,21,26,35,50,63,75,85,103,113,121,130,137,146] )

let slotMapIfcCommunicationsApplianceTypeEnum =
  new Int32Array( [3,7,2,11,6,12,13,1,5,9,10,0,4,8] )

let encodedDataIfcCommunicationsApplianceTypeEnum =
  (new TextEncoder()).encode( ".GATEWAY..NETWORKHUB..FAX..SCANNER..NETWORKBRIDGE..USERDEFINED..NOTDEFINED..COMPUTER..NETWORKAPPLIANCE..REPEATER..ROUTER..ANTENNA..MODEM..PRINTER." )

let IfcCommunicationsApplianceTypeEnumSearch =
  new MinimalPerfectHash< IfcCommunicationsApplianceTypeEnum >( gMapIfcCommunicationsApplianceTypeEnum, prefixSumAddressIfcCommunicationsApplianceTypeEnum, slotMapIfcCommunicationsApplianceTypeEnum, encodedDataIfcCommunicationsApplianceTypeEnum )

export { IfcCommunicationsApplianceTypeEnumSearch }


/* This is generated cold, don't alter */
import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser'

const parser = StepEnumParser.Instance

export function IfcCommunicationsApplianceTypeEnumDeserializeStep(
  input: Uint8Array,
  cursor: number,
  endCursor: number ): IfcCommunicationsApplianceTypeEnum | undefined {
  return parser.extract< IfcCommunicationsApplianceTypeEnum >( IfcCommunicationsApplianceTypeEnumSearch, input, cursor, endCursor )
}
