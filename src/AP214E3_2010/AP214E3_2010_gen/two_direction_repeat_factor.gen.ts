
import { one_direction_repeat_factor } from "./index"
import { vector } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class two_direction_repeat_factor extends one_direction_repeat_factor {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.TWO_DIRECTION_REPEAT_FACTOR
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
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.TWO_DIRECTION_REPEAT_FACTOR ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.TWO_DIRECTION_REPEAT_FACTOR
}
