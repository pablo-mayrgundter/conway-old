
import { organization } from "./index"
import { organization_role } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/organization_assignment.htm */
export abstract class organization_assignment extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.ORGANIZATION_ASSIGNMENT
  }
  private assigned_organization_? : organization
  private role_? : organization_role

  public get assigned_organization() : organization {
    if ( this.assigned_organization_ === void 0 ) {
      this.assigned_organization_ = this.extractElement( 0, false, organization )
    }

    return this.assigned_organization_ as organization
  }

  public get role() : organization_role {
    if ( this.role_ === void 0 ) {
      this.role_ = this.extractElement( 1, false, organization_role )
    }

    return this.role_ as organization_role
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
    EntityTypesIfc.ORGANIZATION_ASSIGNMENT
}
