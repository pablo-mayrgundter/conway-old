
import { geometric_representation_item } from "./index"
import { vector } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/one_direction_repeat_factor.htm */
export  class one_direction_repeat_factor extends geometric_representation_item {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.ONE_DIRECTION_REPEAT_FACTOR
  }
  private repeat_factor_? : vector

  public get repeat_factor() : vector {
    if ( this.repeat_factor_ === void 0 ) {
      this.repeat_factor_ = this.extractElement( 1, false, vector )
    }

    return this.repeat_factor_ as vector
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.ONE_DIRECTION_REPEAT_FACTOR ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.ONE_DIRECTION_REPEAT_FACTOR
}
