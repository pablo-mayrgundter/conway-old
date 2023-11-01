
import { effectivity } from "./index"
import { time_interval } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/time_interval_based_effectivity.htm */
export  class time_interval_based_effectivity extends effectivity {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.TIME_INTERVAL_BASED_EFFECTIVITY
  }
  private effectivity_period_? : time_interval

  public get effectivity_period() : time_interval {
    if ( this.effectivity_period_ === void 0 ) {
      this.effectivity_period_ = this.extractElement( 1, false, time_interval )
    }

    return this.effectivity_period_ as time_interval
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.TIME_INTERVAL_BASED_EFFECTIVITY ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.TIME_INTERVAL_BASED_EFFECTIVITY
}
