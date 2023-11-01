
import { colour } from "./index"
import { presentation_area } from "./index"
import { presentation_view } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/background_colour.htm */
export  class background_colour extends colour {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.BACKGROUND_COLOUR
  }
  private presentation_? : presentation_area | presentation_view

  public get presentation() : presentation_area | presentation_view {
    if ( this.presentation_ === void 0 ) {
      
      const value : StepEntityBase< EntityTypesIfc > =
        this.extractReference( 0, false )

      if ( !( value instanceof presentation_area ) && !( value instanceof presentation_view ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      this.presentation_ = value as (presentation_area | presentation_view)

    }

    return this.presentation_ as presentation_area | presentation_view
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.BACKGROUND_COLOUR ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.BACKGROUND_COLOUR
}
