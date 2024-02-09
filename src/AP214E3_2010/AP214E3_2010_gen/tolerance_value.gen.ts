
import { measure_with_unit } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class tolerance_value extends StepEntityBase< EntityTypesAP214 > {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.TOLERANCE_VALUE
  }
  private lower_bound_? : measure_with_unit
  private upper_bound_? : measure_with_unit

  public get lower_bound() : measure_with_unit {
    if ( this.lower_bound_ === void 0 ) {
      this.lower_bound_ = this.extractElement( 0, false, measure_with_unit )
    }

    return this.lower_bound_ as measure_with_unit
  }

  public get upper_bound() : measure_with_unit {
    if ( this.upper_bound_ === void 0 ) {
      this.upper_bound_ = this.extractElement( 1, false, measure_with_unit )
    }

    return this.upper_bound_ as measure_with_unit
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.TOLERANCE_VALUE ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.TOLERANCE_VALUE
}
