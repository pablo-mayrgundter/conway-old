/* This is generated code, don't alter */
enum IfcCostScheduleTypeEnum {
  BUDGET = 0,
  COSTPLAN = 1,
  ESTIMATE = 2,
  TENDER = 3,
  PRICEDBILLOFQUANTITIES = 4,
  UNPRICEDBILLOFQUANTITIES = 5,
  SCHEDULEOFRATES = 6,
  USERDEFINED = 7,
  NOTDEFINED = 8,
}

const IfcCostScheduleTypeEnumCount = 9

export { IfcCostScheduleTypeEnum, IfcCostScheduleTypeEnumCount }

/* This is generated code, don't alter */
import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash'

let gMapIfcCostScheduleTypeEnum =
  new Int32Array( [-8,-2,43] )

let prefixSumAddressIfcCostScheduleTypeEnum =
  new Uint32Array( [0,8,25,49,57,83,95,105,115,128] )

let slotMapIfcCostScheduleTypeEnum =
  new Int32Array( [3,6,4,0,5,8,1,2,7] )

let encodedDataIfcCostScheduleTypeEnum =
  (new TextEncoder()).encode( ".TENDER..SCHEDULEOFRATES..PRICEDBILLOFQUANTITIES..BUDGET..UNPRICEDBILLOFQUANTITIES..NOTDEFINED..COSTPLAN..ESTIMATE..USERDEFINED." )

let IfcCostScheduleTypeEnumSearch =
  new MinimalPerfectHash< IfcCostScheduleTypeEnum >( gMapIfcCostScheduleTypeEnum, prefixSumAddressIfcCostScheduleTypeEnum, slotMapIfcCostScheduleTypeEnum, encodedDataIfcCostScheduleTypeEnum )

export { IfcCostScheduleTypeEnumSearch }


/* This is generated cold, don't alter */
import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser'

const parser = StepEnumParser.Instance

export function IfcCostScheduleTypeEnumDeserializeStep(
  input: Uint8Array,
  cursor: number,
  endCursor: number ): IfcCostScheduleTypeEnum | undefined {
  return parser.extract< IfcCostScheduleTypeEnum >( IfcCostScheduleTypeEnumSearch, input, cursor, endCursor )
}
