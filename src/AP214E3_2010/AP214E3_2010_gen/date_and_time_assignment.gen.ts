
import { date_and_time } from "./index"
import { date_time_role } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/date_and_time_assignment.htm */
export abstract class date_and_time_assignment extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.DATE_AND_TIME_ASSIGNMENT
  }
  private assigned_date_and_time_? : date_and_time
  private role_? : date_time_role

  public get assigned_date_and_time() : date_and_time {
    if ( this.assigned_date_and_time_ === void 0 ) {
      this.assigned_date_and_time_ = this.extractElement( 0, false, date_and_time )
    }

    return this.assigned_date_and_time_ as date_and_time
  }

  public get role() : date_time_role {
    if ( this.role_ === void 0 ) {
      this.role_ = this.extractElement( 1, false, date_time_role )
    }

    return this.role_ as date_time_role
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
    EntityTypesIfc.DATE_AND_TIME_ASSIGNMENT
}
