/* This is generated code, don't alter */
enum IfcDiscreteAccessoryTypeEnum {
  ANCHORPLATE = 0,
  BRACKET = 1,
  SHOE = 2,
  USERDEFINED = 3,
  NOTDEFINED = 4,
}

const IfcDiscreteAccessoryTypeEnumCount = 5

export { IfcDiscreteAccessoryTypeEnum, IfcDiscreteAccessoryTypeEnumCount }

/* This is generated code, don't alter */
import MinimalPerfectHash from '../../indexing/minimal_perfect_hash'

let gMapIfcDiscreteAccessoryTypeEnum =
  new Int32Array( [40] )

let prefixSumAddressIfcDiscreteAccessoryTypeEnum =
  new Uint32Array( [0,13,19,28,41,53] )

let slotMapIfcDiscreteAccessoryTypeEnum =
  new Int32Array( [0,2,1,3,4] )

let encodedDataIfcDiscreteAccessoryTypeEnum =
  (new TextEncoder()).encode( ".ANCHORPLATE..SHOE..BRACKET..USERDEFINED..NOTDEFINED." )

let IfcDiscreteAccessoryTypeEnumSearch =
  new MinimalPerfectHash< IfcDiscreteAccessoryTypeEnum >( gMapIfcDiscreteAccessoryTypeEnum, prefixSumAddressIfcDiscreteAccessoryTypeEnum, slotMapIfcDiscreteAccessoryTypeEnum, encodedDataIfcDiscreteAccessoryTypeEnum )

export { IfcDiscreteAccessoryTypeEnumSearch }


/* This is generated cold, don't alter */
import StepEnumParser from '../../step/parsing/step_enum_parser'

const parser = StepEnumParser.Instance

export function IfcDiscreteAccessoryTypeEnumDeserializeStep(
  input: Uint8Array,
  cursor: number,
  endCursor: number ): IfcDiscreteAccessoryTypeEnum | undefined {
  return parser.extract< IfcDiscreteAccessoryTypeEnum >( IfcDiscreteAccessoryTypeEnumSearch, input, cursor, endCursor )
}
