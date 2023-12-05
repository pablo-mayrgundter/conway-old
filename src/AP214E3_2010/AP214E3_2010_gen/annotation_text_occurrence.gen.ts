
import { annotation_occurrence } from "./index"
import { text_literal } from "./index"
import { annotation_text } from "./index"
import { annotation_text_character } from "./index"
import { defined_character_glyph } from "./index"
import { composite_text } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/annotation_text_occurrence.htm */
export  class annotation_text_occurrence extends annotation_occurrence {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.ANNOTATION_TEXT_OCCURRENCE
  }
  private item_? : text_literal | annotation_text | annotation_text_character | defined_character_glyph | composite_text

  public get item() : text_literal | annotation_text | annotation_text_character | defined_character_glyph | composite_text {
    if ( this.item_ === void 0 ) {
      
      const value : StepEntityBase< EntityTypesIfc > =
        this.extractReference( 3, false )

      if ( !( value instanceof text_literal ) && !( value instanceof annotation_text ) && !( value instanceof annotation_text_character ) && !( value instanceof defined_character_glyph ) && !( value instanceof composite_text ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      this.item_ = value as (text_literal | annotation_text | annotation_text_character | defined_character_glyph | composite_text)

    }

    return this.item_ as text_literal | annotation_text | annotation_text_character | defined_character_glyph | composite_text
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.ANNOTATION_TEXT_OCCURRENCE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.ANNOTATION_TEXT_OCCURRENCE
}
