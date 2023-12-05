
import { representation } from "./index"
import { text_literal } from "./index"
import { annotation_text } from "./index"
import { annotation_text_character } from "./index"
import { defined_character_glyph } from "./index"
import { composite_text } from "./index"
import { axis2_placement_2d } from "./index"
import { axis2_placement_3d } from "./index"
import {
  stepExtractOptional,
  stepExtractArrayToken,
  stepExtractArrayBegin,
  skipValue,
} from '../../step/parsing/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/text_string_representation.htm */
export  class text_string_representation extends representation {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.TEXT_STRING_REPRESENTATION
  }
  private items_? : Array<text_literal | annotation_text | annotation_text_character | defined_character_glyph | composite_text | axis2_placement_2d | axis2_placement_3d>

  public get items() : Array<text_literal | annotation_text | annotation_text_character | defined_character_glyph | composite_text | axis2_placement_2d | axis2_placement_3d> {
    if ( this.items_ === void 0 ) {
      
      let   cursor    = this.getOffsetCursor( 3 )
      const buffer    = this.buffer
      const endCursor = buffer.length

      if ( stepExtractOptional( buffer, cursor, endCursor ) === null ) {
        return []
      }

      const value : Array<text_literal | annotation_text | annotation_text_character | defined_character_glyph | composite_text | axis2_placement_2d | axis2_placement_3d> = []

      let signedCursor0 = stepExtractArrayBegin( buffer, cursor, endCursor )
      cursor = Math.abs( signedCursor0 )

      while ( signedCursor0 >= 0 ) {
        const value1Untyped : StepEntityBase< EntityTypesIfc > | undefined =
          this.extractBufferReference( buffer, cursor, endCursor )

        if ( !( value1Untyped instanceof text_literal ) && !( value1Untyped instanceof annotation_text ) && !( value1Untyped instanceof annotation_text_character ) && !( value1Untyped instanceof defined_character_glyph ) && !( value1Untyped instanceof composite_text ) && !( value1Untyped instanceof axis2_placement_2d ) && !( value1Untyped instanceof axis2_placement_3d ) ) {
          throw new Error( 'Value in select must be populated' )
        }

        const value1 = value1Untyped as (text_literal | annotation_text | annotation_text_character | defined_character_glyph | composite_text | axis2_placement_2d | axis2_placement_3d)
        if ( value1 === void 0 ) {
          throw new Error( 'Value in STEP was incorrectly typed' )
        }
        cursor = skipValue( buffer, cursor, endCursor )
        value.push( value1 )
        signedCursor0 = stepExtractArrayToken( buffer, cursor, endCursor )
        cursor = Math.abs( signedCursor0 )
      }

      this.items_ = value
    }

    return this.items_ as Array<text_literal | annotation_text | annotation_text_character | defined_character_glyph | composite_text | axis2_placement_2d | axis2_placement_3d>
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.TEXT_STRING_REPRESENTATION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.TEXT_STRING_REPRESENTATION
}
