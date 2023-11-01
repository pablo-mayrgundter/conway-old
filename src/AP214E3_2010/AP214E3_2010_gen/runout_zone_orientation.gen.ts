
import { measure_with_unit } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/runout_zone_orientation.htm */
export  class runout_zone_orientation extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.RUNOUT_ZONE_ORIENTATION
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
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.RUNOUT_ZONE_ORIENTATION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.RUNOUT_ZONE_ORIENTATION
}
