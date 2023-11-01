
import { colour } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/symbol_colour.htm */
export  class symbol_colour extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.SYMBOL_COLOUR
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
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.SYMBOL_COLOUR ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.SYMBOL_COLOUR
}
