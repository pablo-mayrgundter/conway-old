
import { colour } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class symbol_colour extends StepEntityBase< EntityTypesAP214 > {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.SYMBOL_COLOUR
  }
  private colour_of_symbol_? : colour

  public get colour_of_symbol() : colour {
    if ( this.colour_of_symbol_ === void 0 ) {
      this.colour_of_symbol_ = this.extractElement( 0, false, colour )
    }

    return this.colour_of_symbol_ as colour
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.SYMBOL_COLOUR ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.SYMBOL_COLOUR
}
