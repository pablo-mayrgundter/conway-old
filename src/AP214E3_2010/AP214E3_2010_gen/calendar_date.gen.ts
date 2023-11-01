
import { date } from "./index"
import { day_in_month_number } from "./index"
import { month_in_year_number } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/calendar_date.htm */
export  class calendar_date extends date {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.CALENDAR_DATE
  }
  private day_component_? : number
  private month_component_? : number

  public get day_component() : number {
    if ( this.day_component_ === void 0 ) {
      this.day_component_ = this.extractNumber( 1, false )
    }

    return this.day_component_ as number
  }

  public get month_component() : number {
    if ( this.month_component_ === void 0 ) {
      this.month_component_ = this.extractNumber( 2, false )
    }

    return this.month_component_ as number
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.CALENDAR_DATE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.CALENDAR_DATE
}
