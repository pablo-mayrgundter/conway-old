
import { action } from "./index"
import { object_role } from "./index"
import {
  get_role,
} from '../ap214_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/action_assignment.htm */
export abstract class action_assignment extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.ACTION_ASSIGNMENT
  }
  private assigned_action_? : action

  public get assigned_action() : action {
    if ( this.assigned_action_ === void 0 ) {
      this.assigned_action_ = this.extractElement( 0, false, action )
    }

    return this.assigned_action_ as action
  }

  public get role() : object_role {
    return get_role(this);
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query: EntityTypesIfc[] = 
    [  ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.ACTION_ASSIGNMENT
}
