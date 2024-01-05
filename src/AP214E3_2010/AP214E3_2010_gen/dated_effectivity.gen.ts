
import { effectivity } from "./index"
import { date } from "./index"
import { date_and_time } from "./index"
import { local_time } from "./index"
import { event_occurrence } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/dated_effectivity.htm */
export  class dated_effectivity extends effectivity {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.DATED_EFFECTIVITY
  }
  private effectivity_end_date_? : date | date_and_time | local_time | event_occurrence | null
  private effectivity_start_date_? : date | date_and_time | local_time | event_occurrence

  public get effectivity_end_date() : date | date_and_time | local_time | event_occurrence | null {
    if ( this.effectivity_end_date_ === void 0 ) {
      
      const value : StepEntityBase< EntityTypesIfc >| null = 
        this.extractReference( 1, true )

      if ( !( value instanceof date ) && !( value instanceof date_and_time ) && !( value instanceof local_time ) && !( value instanceof event_occurrence ) && value !== null ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      this.effectivity_end_date_ = value as (date | date_and_time | local_time | event_occurrence)

    }

    return this.effectivity_end_date_ as date | date_and_time | local_time | event_occurrence | null
  }

  public get effectivity_start_date() : date | date_and_time | local_time | event_occurrence {
    if ( this.effectivity_start_date_ === void 0 ) {
      
      const value : StepEntityBase< EntityTypesIfc > = 
        this.extractReference( 2, false )

      if ( !( value instanceof date ) && !( value instanceof date_and_time ) && !( value instanceof local_time ) && !( value instanceof event_occurrence ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      this.effectivity_start_date_ = value as (date | date_and_time | local_time | event_occurrence)

    }

    return this.effectivity_start_date_ as date | date_and_time | local_time | event_occurrence
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.DATED_EFFECTIVITY ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.DATED_EFFECTIVITY
}
