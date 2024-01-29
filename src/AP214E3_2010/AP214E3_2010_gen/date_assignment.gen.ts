
import { date } from "./index"
import { date_role } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export abstract class date_assignment extends StepEntityBase< EntityTypesAP214 > {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.DATE_ASSIGNMENT
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
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query: EntityTypesAP214[] = 
    [  ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.DATE_ASSIGNMENT
}
