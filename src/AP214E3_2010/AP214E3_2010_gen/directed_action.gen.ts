
import { executed_action } from "./index"
import { action_directive } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/directed_action.htm */
export  class directed_action extends executed_action {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.DIRECTED_ACTION
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
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.DIRECTED_ACTION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.DIRECTED_ACTION
}
