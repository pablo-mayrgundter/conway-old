/* This is generated code, don't alter */
enum product_or_presentation_space {
  PRODUCT_SHAPE_SPACE = 0,
  PRESENTATION_AREA_SPACE = 1,
}

const product_or_presentation_spaceCount = 2

export { product_or_presentation_space, product_or_presentation_spaceCount }

/* This is generated code, don't alter */
import MinimalPerfectHash from '../../indexing/minimal_perfect_hash'

let gMapproduct_or_presentation_space =
  new Int32Array( [2] )

let prefixSumAddressproduct_or_presentation_space =
  new Uint32Array( [0,21,46] )

let slotMapproduct_or_presentation_space =
  new Int32Array( [0,1] )

let encodedDataproduct_or_presentation_space =
  (new TextEncoder()).encode( ".PRODUCT_SHAPE_SPACE..PRESENTATION_AREA_SPACE." )

let product_or_presentation_spaceSearch =
  new MinimalPerfectHash< product_or_presentation_space >( gMapproduct_or_presentation_space, prefixSumAddressproduct_or_presentation_space, slotMapproduct_or_presentation_space, encodedDataproduct_or_presentation_space )

export { product_or_presentation_spaceSearch }


/* This is generated cold, don't alter */
import StepEnumParser from '../../step/parsing/step_enum_parser'

const parser = StepEnumParser.Instance

export function product_or_presentation_spaceDeserializeStep(
  input: Uint8Array,
  cursor: number,
  endCursor: number ): product_or_presentation_space | undefined {
  return parser.extract< product_or_presentation_space >( product_or_presentation_spaceSearch, input, cursor, endCursor )
}
