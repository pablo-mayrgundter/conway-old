
import { dimensional_location } from "./index"
import { angle_relator, angle_relatorDeserializeStep } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class angular_location extends dimensional_location {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.ANGULAR_LOCATION
  }
  private angle_selection_? : angle_relator

  public get angle_selection() : angle_relator {
    if ( this.angle_selection_ === void 0 ) {
      this.angle_selection_ = this.extractLambda( 4, angle_relatorDeserializeStep, false )
    }

    return this.angle_selection_ as angle_relator
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.ANGULAR_LOCATION ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.ANGULAR_LOCATION
}
