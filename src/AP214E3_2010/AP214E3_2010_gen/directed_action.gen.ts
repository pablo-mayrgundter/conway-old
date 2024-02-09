
import { executed_action } from "./index"
import { action_directive } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class directed_action extends executed_action {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.DIRECTED_ACTION
  }
  private directive_? : action_directive

  public get directive() : action_directive {
    if ( this.directive_ === void 0 ) {
      this.directive_ = this.extractElement( 3, false, action_directive )
    }

    return this.directive_ as action_directive
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.DIRECTED_ACTION ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.DIRECTED_ACTION
}
