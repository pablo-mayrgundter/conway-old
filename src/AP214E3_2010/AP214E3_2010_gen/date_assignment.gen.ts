
import { date } from "./index"
import { date_role } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/date_assignment.htm */
export abstract class date_assignment extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.DATE_ASSIGNMENT
  }
  private assigned_date_? : date
  private role_? : date_role

  public get assigned_date() : date {
    if ( this.assigned_date_ === void 0 ) {
      this.assigned_date_ = this.extractElement( 0, false, date )
    }

    return this.assigned_date_ as date
  }

  public get role() : date_role {
    if ( this.role_ === void 0 ) {
      this.role_ = this.extractElement( 1, false, date_role )
    }

    return this.role_ as date_role
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
    EntityTypesIfc.DATE_ASSIGNMENT
}
