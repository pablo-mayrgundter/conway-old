
import { person } from "./index"
import { organization } from "./index"
import { person_and_organization } from "./index"
import { approval } from "./index"
import { approval_role } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/approval_person_organization.htm */
export  class approval_person_organization extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.APPROVAL_PERSON_ORGANIZATION
  }
  private person_organization_? : person | organization | person_and_organization
  private authorized_approval_? : approval
  private role_? : approval_role

  public get person_organization() : person | organization | person_and_organization {
    if ( this.person_organization_ === void 0 ) {
      
      const value : StepEntityBase< EntityTypesIfc > =
        this.extractReference( 0, false )

      if ( !( value instanceof person ) && !( value instanceof organization ) && !( value instanceof person_and_organization ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      this.person_organization_ = value as (person | organization | person_and_organization)

    }

    return this.person_organization_ as person | organization | person_and_organization
  }

  public get authorized_approval() : approval {
    if ( this.authorized_approval_ === void 0 ) {
      this.authorized_approval_ = this.extractElement( 1, false, approval )
    }

    return this.authorized_approval_ as approval
  }

  public get role() : approval_role {
    if ( this.role_ === void 0 ) {
      this.role_ = this.extractElement( 2, false, approval_role )
    }

    return this.role_ as approval_role
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.APPROVAL_PERSON_ORGANIZATION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.APPROVAL_PERSON_ORGANIZATION
}
