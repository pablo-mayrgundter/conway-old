
import { versioned_action_request } from "./index"
import { object_role } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/action_request_assignment.htm */
export abstract class action_request_assignment extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.ACTION_REQUEST_ASSIGNMENT
  }
  private assigned_action_request_? : versioned_action_request

  public get assigned_action_request() : versioned_action_request {
    if ( this.assigned_action_request_ === void 0 ) {
      this.assigned_action_request_ = this.extractElement( 0, false, versioned_action_request )
    }

    return this.assigned_action_request_ as versioned_action_request
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

  public static readonly query = 
    [  ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.ACTION_REQUEST_ASSIGNMENT
}
