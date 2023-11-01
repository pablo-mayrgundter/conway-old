
import { ahead_or_behind, ahead_or_behindDeserializeStep } from "./index"
import {
  NVL,
} from '../../step/parsing/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/coordinated_universal_time_offset.htm */
export  class coordinated_universal_time_offset extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.COORDINATED_UNIVERSAL_TIME_OFFSET
  }
  private hour_offset_? : number
  private minute_offset_? : number | null
  private sense_? : ahead_or_behind

  public get hour_offset() : number {
    if ( this.hour_offset_ === void 0 ) {
      this.hour_offset_ = this.extractNumber( 0, false )
    }

    return this.hour_offset_ as number
  }

  public get minute_offset() : number | null {
    if ( this.minute_offset_ === void 0 ) {
      this.minute_offset_ = this.extractNumber( 1, true )
    }

    return this.minute_offset_ as number | null
  }

  public get sense() : ahead_or_behind {
    if ( this.sense_ === void 0 ) {
      this.sense_ = this.extractLambda( 2, ahead_or_behindDeserializeStep, false )
    }

    return this.sense_ as ahead_or_behind
  }

  public get actual_minute_offset() : number {
    return NVL(this?.minute_offset,0);
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.COORDINATED_UNIVERSAL_TIME_OFFSET ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.COORDINATED_UNIVERSAL_TIME_OFFSET
}
