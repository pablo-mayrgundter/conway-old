
import { time_interval } from "./index"
import { time_interval_role } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/time_interval_assignment.htm */
export abstract class time_interval_assignment extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.TIME_INTERVAL_ASSIGNMENT
  }
  private assigned_time_interval_? : time_interval
  private role_? : time_interval_role

  public get assigned_time_interval() : time_interval {
    if ( this.assigned_time_interval_ === void 0 ) {
      this.assigned_time_interval_ = this.extractElement( 0, false, time_interval )
    }

    return this.assigned_time_interval_ as time_interval
  }

  public get role() : time_interval_role {
    if ( this.role_ === void 0 ) {
      this.role_ = this.extractElement( 1, false, time_interval_role )
    }

    return this.role_ as time_interval_role
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
    EntityTypesIfc.TIME_INTERVAL_ASSIGNMENT
}
