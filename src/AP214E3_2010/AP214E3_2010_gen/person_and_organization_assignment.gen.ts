
import { person_and_organization } from "./index"
import { person_and_organization_role } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/person_and_organization_assignment.htm */
export abstract class person_and_organization_assignment extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.PERSON_AND_ORGANIZATION_ASSIGNMENT
  }
  private assigned_person_and_organization_? : person_and_organization
  private role_? : person_and_organization_role

  public get assigned_person_and_organization() : person_and_organization {
    if ( this.assigned_person_and_organization_ === void 0 ) {
      this.assigned_person_and_organization_ = this.extractElement( 0, false, person_and_organization )
    }

    return this.assigned_person_and_organization_ as person_and_organization
  }

  public get role() : person_and_organization_role {
    if ( this.role_ === void 0 ) {
      this.role_ = this.extractElement( 1, false, person_and_organization_role )
    }

    return this.role_ as person_and_organization_role
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
    EntityTypesIfc.PERSON_AND_ORGANIZATION_ASSIGNMENT
}
