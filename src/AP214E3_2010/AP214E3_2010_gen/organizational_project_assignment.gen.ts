
import { organizational_project } from "./index"
import { organizational_project_role } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/organizational_project_assignment.htm */
export abstract class organizational_project_assignment extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.ORGANIZATIONAL_PROJECT_ASSIGNMENT
  }
  private assigned_organizational_project_? : organizational_project
  private role_? : organizational_project_role

  public get assigned_organizational_project() : organizational_project {
    if ( this.assigned_organizational_project_ === void 0 ) {
      this.assigned_organizational_project_ = this.extractElement( 0, false, organizational_project )
    }

    return this.assigned_organizational_project_ as organizational_project
  }

  public get role() : organizational_project_role {
    if ( this.role_ === void 0 ) {
      this.role_ = this.extractElement( 1, false, organizational_project_role )
    }

    return this.role_ as organizational_project_role
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
    EntityTypesIfc.ORGANIZATIONAL_PROJECT_ASSIGNMENT
}
