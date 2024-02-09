
import { degenerate_pcurve } from "./index"
import { cartesian_point } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class evaluated_degenerate_pcurve extends degenerate_pcurve {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.EVALUATED_DEGENERATE_PCURVE
  }
  private equivalent_point_? : cartesian_point

  public get equivalent_point() : cartesian_point {
    if ( this.equivalent_point_ === void 0 ) {
      this.equivalent_point_ = this.extractElement( 3, false, cartesian_point )
    }

    return this.equivalent_point_ as cartesian_point
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.EVALUATED_DEGENERATE_PCURVE ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.EVALUATED_DEGENERATE_PCURVE
}
