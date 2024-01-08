
import { text_style } from "./index"
import { length_measure } from "./index"
import { ratio_measure } from "./index"
import { measure_with_unit } from "./index"
import { descriptive_measure } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/text_style_with_spacing.htm */
export  class text_style_with_spacing extends text_style {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.TEXT_STYLE_WITH_SPACING
  }
  private character_spacing_? : length_measure | ratio_measure | measure_with_unit | descriptive_measure

  public get character_spacing() : length_measure | ratio_measure | measure_with_unit | descriptive_measure {
    if ( this.character_spacing_ === void 0 ) {
      
      const value : StepEntityBase< EntityTypesIfc > = 
        this.extractReference( 2, false )

      if ( !( value instanceof length_measure ) && !( value instanceof ratio_measure ) && !( value instanceof measure_with_unit ) && !( value instanceof descriptive_measure ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      this.character_spacing_ = value as (length_measure | ratio_measure | measure_with_unit | descriptive_measure)

    }

    return this.character_spacing_ as length_measure | ratio_measure | measure_with_unit | descriptive_measure
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.TEXT_STYLE_WITH_SPACING ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.TEXT_STYLE_WITH_SPACING
}
