
import { action_method } from "./index"
import { versioned_action_request } from "./index"
import { text } from "./index"
import { label } from "./index"
import {
  get_name_value,
  get_description_value,
} from '../ap214_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/action_request_solution.htm */
export  class action_request_solution extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.ACTION_REQUEST_SOLUTION
  }
  private method_? : action_method
  private request_? : versioned_action_request

  public get method() : action_method {
    if ( this.method_ === void 0 ) {
      this.method_ = this.extractElement( 0, false, action_method )
    }

    return this.method_ as action_method
  }

  public get request() : versioned_action_request {
    if ( this.request_ === void 0 ) {
      this.request_ = this.extractElement( 1, false, versioned_action_request )
    }

    return this.request_ as versioned_action_request
  }

  public get description() : string {
    return get_description_value(this);
  }

  public get name() : string {
    return get_name_value(this);
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.ACTION_REQUEST_SOLUTION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.ACTION_REQUEST_SOLUTION
}
