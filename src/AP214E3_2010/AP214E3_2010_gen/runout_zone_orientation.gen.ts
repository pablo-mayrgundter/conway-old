
import { measure_with_unit } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class runout_zone_orientation extends StepEntityBase< EntityTypesAP214 > {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.RUNOUT_ZONE_ORIENTATION
  }
  private angle_? : measure_with_unit

  public get angle() : measure_with_unit {
    if ( this.angle_ === void 0 ) {
      this.angle_ = this.extractElement( 0, false, measure_with_unit )
    }

    return this.angle_ as measure_with_unit
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.RUNOUT_ZONE_ORIENTATION ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.RUNOUT_ZONE_ORIENTATION
}
