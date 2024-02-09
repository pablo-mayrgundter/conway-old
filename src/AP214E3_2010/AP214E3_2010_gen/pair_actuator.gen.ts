
import { kinematic_pair } from "./index"
import { label } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class pair_actuator extends StepEntityBase< EntityTypesAP214 > {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.PAIR_ACTUATOR
  }
  private actuated_pair_? : kinematic_pair
  private name_? : string

  public get actuated_pair() : kinematic_pair {
    if ( this.actuated_pair_ === void 0 ) {
      this.actuated_pair_ = this.extractElement( 0, false, kinematic_pair )
    }

    return this.actuated_pair_ as kinematic_pair
  }

  public get name() : string {
    if ( this.name_ === void 0 ) {
      this.name_ = this.extractString( 1, false )
    }

    return this.name_ as string
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.PAIR_ACTUATOR ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.PAIR_ACTUATOR
}
