
import { identifier } from "./index"
import { identification_role } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/identification_assignment.htm */
export abstract class identification_assignment extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IDENTIFICATION_ASSIGNMENT
  }
  private assigned_id_? : string
  private role_? : identification_role

  public get assigned_id() : string {
    if ( this.assigned_id_ === void 0 ) {
      this.assigned_id_ = this.extractString( 0, false )
    }

    return this.assigned_id_ as string
  }

  public get role() : identification_role {
    if ( this.role_ === void 0 ) {
      this.role_ = this.extractElement( 1, false, identification_role )
    }

    return this.role_ as identification_role
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
    EntityTypesIfc.IDENTIFICATION_ASSIGNMENT
}
