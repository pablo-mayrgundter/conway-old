/* This is generated code, don't alter */
enum IfcElectricFlowStorageDeviceTypeEnum {
  BATTERY = 0,
  CAPACITORBANK = 1,
  HARMONICFILTER = 2,
  INDUCTORBANK = 3,
  UPS = 4,
  USERDEFINED = 5,
  NOTDEFINED = 6,
}

const IfcElectricFlowStorageDeviceTypeEnumCount = 7

export { IfcElectricFlowStorageDeviceTypeEnum, IfcElectricFlowStorageDeviceTypeEnumCount }

/* This is generated code, don't alter */
import MinimalPerfectHash from '../../indexing/minimal_perfect_hash'

let gMapIfcElectricFlowStorageDeviceTypeEnum =
  new Int32Array( [144] )

let prefixSumAddressIfcElectricFlowStorageDeviceTypeEnum =
  new Uint32Array( [0,9,24,36,49,63,79,84] )

let slotMapIfcElectricFlowStorageDeviceTypeEnum =
  new Int32Array( [0,1,6,5,3,2,4] )

let encodedDataIfcElectricFlowStorageDeviceTypeEnum =
  (new TextEncoder()).encode( ".BATTERY..CAPACITORBANK..NOTDEFINED..USERDEFINED..INDUCTORBANK..HARMONICFILTER..UPS." )

let IfcElectricFlowStorageDeviceTypeEnumSearch =
  new MinimalPerfectHash< IfcElectricFlowStorageDeviceTypeEnum >( gMapIfcElectricFlowStorageDeviceTypeEnum, prefixSumAddressIfcElectricFlowStorageDeviceTypeEnum, slotMapIfcElectricFlowStorageDeviceTypeEnum, encodedDataIfcElectricFlowStorageDeviceTypeEnum )

export { IfcElectricFlowStorageDeviceTypeEnumSearch }


/* This is generated cold, don't alter */
import StepEnumParser from '../../step/parsing/step_enum_parser'

const parser = StepEnumParser.Instance

export function IfcElectricFlowStorageDeviceTypeEnumDeserializeStep(
  input: Uint8Array,
  cursor: number,
  endCursor: number ): IfcElectricFlowStorageDeviceTypeEnum | undefined {
  return parser.extract< IfcElectricFlowStorageDeviceTypeEnum >( IfcElectricFlowStorageDeviceTypeEnumSearch, input, cursor, endCursor )
}
