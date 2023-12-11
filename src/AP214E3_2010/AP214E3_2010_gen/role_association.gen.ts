
import { object_role } from "./index"
import { action_assignment } from "./index"
import { action_request_assignment } from "./index"
import { approval_assignment } from "./index"
import { approval_date_time } from "./index"
import { certification_assignment } from "./index"
import { contract_assignment } from "./index"
import { document_reference } from "./index"
import { effectivity_assignment } from "./index"
import { group_assignment } from "./index"
import { name_assignment } from "./index"
import { security_classification_assignment } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/role_association.htm */
export  class role_association extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.ROLE_ASSOCIATION
  }
  private role_? : object_role
  private item_with_role_? : action_assignment | action_request_assignment | approval_assignment | approval_date_time | certification_assignment | contract_assignment | document_reference | effectivity_assignment | group_assignment | name_assignment | security_classification_assignment

  public get role() : object_role {
    if ( this.role_ === void 0 ) {
      this.role_ = this.extractElement( 0, false, object_role )
    }

    return this.role_ as object_role
  }

  public get item_with_role() : action_assignment | action_request_assignment | approval_assignment | approval_date_time | certification_assignment | contract_assignment | document_reference | effectivity_assignment | group_assignment | name_assignment | security_classification_assignment {
    if ( this.item_with_role_ === void 0 ) {
      
      const value : StepEntityBase< EntityTypesIfc > =
        this.extractReference( 1, false )

      if ( !( value instanceof action_assignment ) && !( value instanceof action_request_assignment ) && !( value instanceof approval_assignment ) && !( value instanceof approval_date_time ) && !( value instanceof certification_assignment ) && !( value instanceof contract_assignment ) && !( value instanceof document_reference ) && !( value instanceof effectivity_assignment ) && !( value instanceof group_assignment ) && !( value instanceof name_assignment ) && !( value instanceof security_classification_assignment ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      this.item_with_role_ = value as (action_assignment | action_request_assignment | approval_assignment | approval_date_time | certification_assignment | contract_assignment | document_reference | effectivity_assignment | group_assignment | name_assignment | security_classification_assignment)

    }

    return this.item_with_role_ as action_assignment | action_request_assignment | approval_assignment | approval_date_time | certification_assignment | contract_assignment | document_reference | effectivity_assignment | group_assignment | name_assignment | security_classification_assignment
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.ROLE_ASSOCIATION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.ROLE_ASSOCIATION
}