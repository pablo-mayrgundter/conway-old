
import { identifier } from "./index"
import { label } from "./index"
import { text } from "./index"
import { versioned_action_request } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/versioned_action_request_relationship.htm */
export  class versioned_action_request_relationship extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.VERSIONED_ACTION_REQUEST_RELATIONSHIP
  }
  private id_? : string
  private name_? : string
  private description_? : string | null
  private relating_versioned_action_request_? : versioned_action_request
  private related_versioned_action_request_? : versioned_action_request

  public get id() : string {
    if ( this.id_ === void 0 ) {
      this.id_ = this.extractString( 0, false )
    }

    return this.id_ as string
  }

  public get name() : string {
    if ( this.name_ === void 0 ) {
      this.name_ = this.extractString( 1, false )
    }

    return this.name_ as string
  }

  public get description() : string | null {
    if ( this.description_ === void 0 ) {
      this.description_ = this.extractString( 2, true )
    }

    return this.description_ as string | null
  }

  public get relating_versioned_action_request() : versioned_action_request {
    if ( this.relating_versioned_action_request_ === void 0 ) {
      this.relating_versioned_action_request_ = this.extractElement( 3, false, versioned_action_request )
    }

    return this.relating_versioned_action_request_ as versioned_action_request
  }

  public get related_versioned_action_request() : versioned_action_request {
    if ( this.related_versioned_action_request_ === void 0 ) {
      this.related_versioned_action_request_ = this.extractElement( 4, false, versioned_action_request )
    }

    return this.related_versioned_action_request_ as versioned_action_request
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.VERSIONED_ACTION_REQUEST_RELATIONSHIP ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.VERSIONED_ACTION_REQUEST_RELATIONSHIP
}
