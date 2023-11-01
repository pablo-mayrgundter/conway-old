
import { date } from "./index"
import { local_time } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/date_and_time.htm */
export  class date_and_time extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.DATE_AND_TIME
  }
  private date_component_? : date
  private time_component_? : local_time

  public get date_component() : date {
    if ( this.date_component_ === void 0 ) {
      this.date_component_ = this.extractElement( 0, false, date )
    }

    return this.date_component_ as date
  }

  public get time_component() : local_time {
    if ( this.time_component_ === void 0 ) {
      this.time_component_ = this.extractElement( 1, false, local_time )
    }

    return this.time_component_ as local_time
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.DATE_AND_TIME ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.DATE_AND_TIME
}
