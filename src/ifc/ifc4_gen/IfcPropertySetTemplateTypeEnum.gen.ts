/* This is generated code, don't alter */
enum IfcPropertySetTemplateTypeEnum {
  PSET_TYPEDRIVENONLY = 0,
  PSET_TYPEDRIVENOVERRIDE = 1,
  PSET_OCCURRENCEDRIVEN = 2,
  PSET_PERFORMANCEDRIVEN = 3,
  QTO_TYPEDRIVENONLY = 4,
  QTO_TYPEDRIVENOVERRIDE = 5,
  QTO_OCCURRENCEDRIVEN = 6,
  NOTDEFINED = 7,
}

const IfcPropertySetTemplateTypeEnumCount = 8

export { IfcPropertySetTemplateTypeEnum, IfcPropertySetTemplateTypeEnumCount }

/* This is generated code, don't alter */
import MinimalPerfectHash from '../../indexing/minimal_perfect_hash'

let gMapIfcPropertySetTemplateTypeEnum =
  new Int32Array( [3,-3,1] )

let prefixSumAddressIfcPropertySetTemplateTypeEnum =
  new Uint32Array( [0,20,43,67,88,110,134,159,171] )

let slotMapIfcPropertySetTemplateTypeEnum =
  new Int32Array( [4,2,5,0,6,3,1,7] )

let encodedDataIfcPropertySetTemplateTypeEnum =
  (new TextEncoder()).encode( ".QTO_TYPEDRIVENONLY..PSET_OCCURRENCEDRIVEN..QTO_TYPEDRIVENOVERRIDE..PSET_TYPEDRIVENONLY..QTO_OCCURRENCEDRIVEN..PSET_PERFORMANCEDRIVEN..PSET_TYPEDRIVENOVERRIDE..NOTDEFINED." )

let IfcPropertySetTemplateTypeEnumSearch =
  new MinimalPerfectHash< IfcPropertySetTemplateTypeEnum >( gMapIfcPropertySetTemplateTypeEnum, prefixSumAddressIfcPropertySetTemplateTypeEnum, slotMapIfcPropertySetTemplateTypeEnum, encodedDataIfcPropertySetTemplateTypeEnum )

export { IfcPropertySetTemplateTypeEnumSearch }


/* This is generated cold, don't alter */
import StepEnumParser from '../../step/parsing/step_enum_parser'

const parser = StepEnumParser.Instance

export function IfcPropertySetTemplateTypeEnumDeserializeStep(
  input: Uint8Array,
  cursor: number,
  endCursor: number ): IfcPropertySetTemplateTypeEnum | undefined {
  return parser.extract< IfcPropertySetTemplateTypeEnum >( IfcPropertySetTemplateTypeEnumSearch, input, cursor, endCursor )
}
