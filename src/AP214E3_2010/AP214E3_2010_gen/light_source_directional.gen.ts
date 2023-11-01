
import { light_source } from "./index"
import { direction } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/light_source_directional.htm */
export  class light_source_directional extends light_source {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.LIGHT_SOURCE_DIRECTIONAL
  }
  private orientation_? : direction

  public get orientation() : direction {
    if ( this.orientation_ === void 0 ) {
      this.orientation_ = this.extractElement( 2, false, direction )
    }

    return this.orientation_ as direction
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.LIGHT_SOURCE_DIRECTIONAL ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.LIGHT_SOURCE_DIRECTIONAL
}
