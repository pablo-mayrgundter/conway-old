
import { kinematic_pair } from "./index"
import { plane_angle_measure } from "./index"
import {
  NVL,
} from '../../step/parsing/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class universal_pair extends kinematic_pair {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.UNIVERSAL_PAIR
  }
  private input_skew_angle_? : number | null

  public get input_skew_angle() : number | null {
    if ( this.input_skew_angle_ === void 0 ) {
      this.input_skew_angle_ = this.extractNumber( 5, true )
    }

    return this.input_skew_angle_ as number | null
  }

  public get skew_angle() : number {
    return NVL(this?.input_skew_angle,0.0);
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.UNIVERSAL_PAIR ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.UNIVERSAL_PAIR
}
