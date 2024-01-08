
import { document_usage_constraint } from "./index"
import { document_usage_role } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/document_usage_constraint_assignment.htm */
export abstract class document_usage_constraint_assignment extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.DOCUMENT_USAGE_CONSTRAINT_ASSIGNMENT
  }
  private assigned_document_usage_? : document_usage_constraint
  private role_? : document_usage_role

  public get assigned_document_usage() : document_usage_constraint {
    if ( this.assigned_document_usage_ === void 0 ) {
      this.assigned_document_usage_ = this.extractElement( 0, false, document_usage_constraint )
    }

    return this.assigned_document_usage_ as document_usage_constraint
  }

  public get role() : document_usage_role {
    if ( this.role_ === void 0 ) {
      this.role_ = this.extractElement( 1, false, document_usage_role )
    }

    return this.role_ as document_usage_role
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
    EntityTypesIfc.DOCUMENT_USAGE_CONSTRAINT_ASSIGNMENT
}
