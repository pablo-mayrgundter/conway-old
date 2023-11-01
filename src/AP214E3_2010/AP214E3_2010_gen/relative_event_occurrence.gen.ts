
import { event_occurrence } from "./index"
import { time_measure_with_unit } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/relative_event_occurrence.htm */
export  class relative_event_occurrence extends event_occurrence {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.RELATIVE_EVENT_OCCURRENCE
  }
  private base_event_? : event_occurrence
  private offset_? : time_measure_with_unit

  public get base_event() : event_occurrence {
    if ( this.base_event_ === void 0 ) {
      this.base_event_ = this.extractElement( 3, false, event_occurrence )
    }

    return this.base_event_ as event_occurrence
  }

  public get offset() : time_measure_with_unit {
    if ( this.offset_ === void 0 ) {
      this.offset_ = this.extractElement( 4, false, time_measure_with_unit )
    }

    return this.offset_ as time_measure_with_unit
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.RELATIVE_EVENT_OCCURRENCE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.RELATIVE_EVENT_OCCURRENCE
}
