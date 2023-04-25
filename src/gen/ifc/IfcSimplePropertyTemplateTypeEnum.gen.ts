/* This is generated code, don't alter */
enum IfcSimplePropertyTemplateTypeEnum {
  P_SINGLEVALUE = 0,
  P_ENUMERATEDVALUE = 1,
  P_BOUNDEDVALUE = 2,
  P_LISTVALUE = 3,
  P_TABLEVALUE = 4,
  P_REFERENCEVALUE = 5,
  Q_LENGTH = 6,
  Q_AREA = 7,
  Q_VOLUME = 8,
  Q_COUNT = 9,
  Q_WEIGHT = 10,
  Q_TIME = 11,
}

const IfcSimplePropertyTemplateTypeEnumCount = 12

export { IfcSimplePropertyTemplateTypeEnum, IfcSimplePropertyTemplateTypeEnumCount }

/* This is generated code, don't alter */
import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash'

let gMapIfcSimplePropertyTemplateTypeEnum =
  new Int32Array( [136,21,3] )

let prefixSumAddressIfcSimplePropertyTemplateTypeEnum =
  new Uint32Array( [0,14,24,32,40,53,63,79,94,103,121,131,150] )

let slotMapIfcSimplePropertyTemplateTypeEnum =
  new Int32Array( [4,8,7,11,3,10,2,0,9,5,6,1] )

let encodedDataIfcSimplePropertyTemplateTypeEnum =
  (new TextEncoder()).encode( ".P_TABLEVALUE..Q_VOLUME..Q_AREA..Q_TIME..P_LISTVALUE..Q_WEIGHT..P_BOUNDEDVALUE..P_SINGLEVALUE..Q_COUNT..P_REFERENCEVALUE..Q_LENGTH..P_ENUMERATEDVALUE." )

let IfcSimplePropertyTemplateTypeEnumSearch =
  new MinimalPerfectHash< IfcSimplePropertyTemplateTypeEnum >( gMapIfcSimplePropertyTemplateTypeEnum, prefixSumAddressIfcSimplePropertyTemplateTypeEnum, slotMapIfcSimplePropertyTemplateTypeEnum, encodedDataIfcSimplePropertyTemplateTypeEnum )

export { IfcSimplePropertyTemplateTypeEnumSearch }


/* This is generated cold, don't alter */
import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser'

const parser = StepEnumParser.Instance

export function IfcSimplePropertyTemplateTypeEnumDeserializeStep(
  input: Uint8Array,
  cursor: number,
  endCursor: number ): IfcSimplePropertyTemplateTypeEnum | undefined {
  return parser.extract< IfcSimplePropertyTemplateTypeEnum >( IfcSimplePropertyTemplateTypeEnumSearch, input, cursor, endCursor )
}
