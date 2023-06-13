/* This is generated code, don't alter */
enum IfcNullStyle {
  NULL = 0,
}

const IfcNullStyleCount = 1

export { IfcNullStyle, IfcNullStyleCount }

/* This is generated code, don't alter */
import MinimalPerfectHash from '../../indexing/minimal_perfect_hash'

let gMapIfcNullStyle =
  new Int32Array( [0] )

let prefixSumAddressIfcNullStyle =
  new Uint32Array( [0,6] )

let slotMapIfcNullStyle =
  new Int32Array( [0] )

let encodedDataIfcNullStyle =
  (new TextEncoder()).encode( ".NULL." )

let IfcNullStyleSearch =
  new MinimalPerfectHash< IfcNullStyle >( gMapIfcNullStyle, prefixSumAddressIfcNullStyle, slotMapIfcNullStyle, encodedDataIfcNullStyle )

export { IfcNullStyleSearch }


/* This is generated cold, don't alter */
import StepEnumParser from '../../step/parsing/step_enum_parser'

const parser = StepEnumParser.Instance

export function IfcNullStyleDeserializeStep(
  input: Uint8Array,
  cursor: number,
  endCursor: number ): IfcNullStyle | undefined {
  return parser.extract< IfcNullStyle >( IfcNullStyleSearch, input, cursor, endCursor )
}
