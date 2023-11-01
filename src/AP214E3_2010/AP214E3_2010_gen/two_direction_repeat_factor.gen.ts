
import { one_direction_repeat_factor } from "./index"
import { vector } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/two_direction_repeat_factor.htm */
export  class two_direction_repeat_factor extends one_direction_repeat_factor {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.TWO_DIRECTION_REPEAT_FACTOR
  }
  private second_repeat_factor_? : vector

  public get second_repeat_factor() : vector {
    if ( this.second_repeat_factor_ === void 0 ) {
      this.second_repeat_factor_ = this.extractElement( 2, false, vector )
    }

    return this.second_repeat_factor_ as vector
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.TWO_DIRECTION_REPEAT_FACTOR ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.TWO_DIRECTION_REPEAT_FACTOR
}
