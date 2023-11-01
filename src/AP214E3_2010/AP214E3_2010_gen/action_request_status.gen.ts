
import { label } from "./index"
import { versioned_action_request } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/action_request_status.htm */
export  class action_request_status extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.ACTION_REQUEST_STATUS
  }
  private status_? : string
  private assigned_request_? : versioned_action_request

  public get status() : string {
    if ( this.status_ === void 0 ) {
      this.status_ = this.extractString( 0, false )
    }

    return this.status_ as string
  }

  public get assigned_request() : versioned_action_request {
    if ( this.assigned_request_ === void 0 ) {
      this.assigned_request_ = this.extractElement( 1, false, versioned_action_request )
    }

    return this.assigned_request_ as versioned_action_request
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.ACTION_REQUEST_STATUS ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.ACTION_REQUEST_STATUS
}
