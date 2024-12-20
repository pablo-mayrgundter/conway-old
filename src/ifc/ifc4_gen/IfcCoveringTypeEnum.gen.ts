/* This is generated code, don't alter */
enum IfcCoveringTypeEnum {
  CEILING = 0,
  FLOORING = 1,
  CLADDING = 2,
  ROOFING = 3,
  MOLDING = 4,
  SKIRTINGBOARD = 5,
  INSULATION = 6,
  MEMBRANE = 7,
  SLEEVING = 8,
  WRAPPING = 9,
  USERDEFINED = 10,
  NOTDEFINED = 11,
}

const IfcCoveringTypeEnumCount = 12

export { IfcCoveringTypeEnum, IfcCoveringTypeEnumCount }

/* This is generated code, don't alter */
import MinimalPerfectHash from '../../indexing/minimal_perfect_hash'

let gMapIfcCoveringTypeEnum =
  new Int32Array( [317,3,6] )

let prefixSumAddressIfcCoveringTypeEnum =
  new Uint32Array( [0,10,19,28,41,50,62,72,84,99,109,119,129] )

let slotMapIfcCoveringTypeEnum =
  new Int32Array( [8,0,3,10,4,6,2,11,5,9,1,7] )

let encodedDataIfcCoveringTypeEnum =
  (new TextEncoder()).encode( ".SLEEVING..CEILING..ROOFING..USERDEFINED..MOLDING..INSULATION..CLADDING..NOTDEFINED..SKIRTINGBOARD..WRAPPING..FLOORING..MEMBRANE." )

let IfcCoveringTypeEnumSearch =
  new MinimalPerfectHash< IfcCoveringTypeEnum >( gMapIfcCoveringTypeEnum, prefixSumAddressIfcCoveringTypeEnum, slotMapIfcCoveringTypeEnum, encodedDataIfcCoveringTypeEnum )

export { IfcCoveringTypeEnumSearch }


/* This is generated cold, don't alter */
import StepEnumParser from '../../step/parsing/step_enum_parser'

const parser = StepEnumParser.Instance

export function IfcCoveringTypeEnumDeserializeStep(
  input: Uint8Array,
  cursor: number,
  endCursor: number ): IfcCoveringTypeEnum | undefined {
  return parser.extract< IfcCoveringTypeEnum >( IfcCoveringTypeEnumSearch, input, cursor, endCursor )
}
