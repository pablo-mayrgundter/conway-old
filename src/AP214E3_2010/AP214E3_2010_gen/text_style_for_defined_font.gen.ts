
import { colour } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/text_style_for_defined_font.htm */
export  class text_style_for_defined_font extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.TEXT_STYLE_FOR_DEFINED_FONT
  }
  private text_colour_? : colour

  public get text_colour() : colour {
    if ( this.text_colour_ === void 0 ) {
      this.text_colour_ = this.extractElement( 0, false, colour )
    }

    return this.text_colour_ as colour
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.TEXT_STYLE_FOR_DEFINED_FONT ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.TEXT_STYLE_FOR_DEFINED_FONT
}
