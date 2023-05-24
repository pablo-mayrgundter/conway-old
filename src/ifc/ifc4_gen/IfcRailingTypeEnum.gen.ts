/* This is generated code, don't alter */
enum IfcRailingTypeEnum {
  HANDRAIL = 0,
  GUARDRAIL = 1,
  BALUSTRADE = 2,
  USERDEFINED = 3,
  NOTDEFINED = 4,
}

const IfcRailingTypeEnumCount = 5

export { IfcRailingTypeEnum, IfcRailingTypeEnumCount }

/* This is generated code, don't alter */
import MinimalPerfectHash from '../../indexing/minimal_perfect_hash'

let gMapIfcRailingTypeEnum =
  new Int32Array( [16] )

let prefixSumAddressIfcRailingTypeEnum =
  new Uint32Array( [0,12,25,36,46,58] )

let slotMapIfcRailingTypeEnum =
  new Int32Array( [2,3,1,0,4] )

let encodedDataIfcRailingTypeEnum =
  (new TextEncoder()).encode( ".BALUSTRADE..USERDEFINED..GUARDRAIL..HANDRAIL..NOTDEFINED." )

let IfcRailingTypeEnumSearch =
  new MinimalPerfectHash< IfcRailingTypeEnum >( gMapIfcRailingTypeEnum, prefixSumAddressIfcRailingTypeEnum, slotMapIfcRailingTypeEnum, encodedDataIfcRailingTypeEnum )

export { IfcRailingTypeEnumSearch }


/* This is generated cold, don't alter */
import StepEnumParser from '../../step/parsing/step_enum_parser'

const parser = StepEnumParser.Instance

export function IfcRailingTypeEnumDeserializeStep(
  input: Uint8Array,
  cursor: number,
  endCursor: number ): IfcRailingTypeEnum | undefined {
  return parser.extract< IfcRailingTypeEnum >( IfcRailingTypeEnumSearch, input, cursor, endCursor )
}
