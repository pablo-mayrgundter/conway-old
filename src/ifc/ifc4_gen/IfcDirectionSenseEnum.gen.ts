/* This is generated code, don't alter */
enum IfcDirectionSenseEnum {
  POSITIVE = 0,
  NEGATIVE = 1,
}

const IfcDirectionSenseEnumCount = 2

export { IfcDirectionSenseEnum, IfcDirectionSenseEnumCount }

/* This is generated code, don't alter */
import MinimalPerfectHash from '../../indexing/minimal_perfect_hash'

let gMapIfcDirectionSenseEnum =
  new Int32Array( [1] )

let prefixSumAddressIfcDirectionSenseEnum =
  new Uint32Array( [0,10,20] )

let slotMapIfcDirectionSenseEnum =
  new Int32Array( [1,0] )

let encodedDataIfcDirectionSenseEnum =
  (new TextEncoder()).encode( ".NEGATIVE..POSITIVE." )

let IfcDirectionSenseEnumSearch =
  new MinimalPerfectHash< IfcDirectionSenseEnum >( gMapIfcDirectionSenseEnum, prefixSumAddressIfcDirectionSenseEnum, slotMapIfcDirectionSenseEnum, encodedDataIfcDirectionSenseEnum )

export { IfcDirectionSenseEnumSearch }


/* This is generated cold, don't alter */
import StepEnumParser from '../../step/parsing/step_enum_parser'

const parser = StepEnumParser.Instance

export function IfcDirectionSenseEnumDeserializeStep(
  input: Uint8Array,
  cursor: number,
  endCursor: number ): IfcDirectionSenseEnum | undefined {
  return parser.extract< IfcDirectionSenseEnum >( IfcDirectionSenseEnumSearch, input, cursor, endCursor )
}
