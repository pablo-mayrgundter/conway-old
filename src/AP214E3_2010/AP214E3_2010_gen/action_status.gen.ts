
import { label } from "./index"
import { executed_action } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class action_status extends StepEntityBase< EntityTypesAP214 > {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.ACTION_STATUS
  }
  private status_? : string
  private assigned_action_? : executed_action

  public get status() : string {
    if ( this.status_ === void 0 ) {
      this.status_ = this.extractString( 0, false )
    }

    return this.status_ as string
  }

  public get assigned_action() : executed_action {
    if ( this.assigned_action_ === void 0 ) {
      this.assigned_action_ = this.extractElement( 1, false, executed_action )
    }

    return this.assigned_action_ as executed_action
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.ACTION_STATUS ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.ACTION_STATUS
}
