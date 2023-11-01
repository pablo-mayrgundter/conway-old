
import { pair_value } from "./index"
import { rolling_curve_pair } from "./index"
import { point_on_curve } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/rolling_curve_pair_value.htm */
export  class rolling_curve_pair_value extends pair_value {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.ROLLING_CURVE_PAIR_VALUE
  }
  private SELF\pair_value.applies_to_pair_? : rolling_curve_pair
  private actual_point_on_curve_1_? : point_on_curve

  public get SELF\pair_value.applies_to_pair() : rolling_curve_pair {
    if ( this.SELF\pair_value.applies_to_pair_ === void 0 ) {
      this.SELF\pair_value.applies_to_pair_ = this.extractElement( 1, false, rolling_curve_pair )
    }

    return this.SELF\pair_value.applies_to_pair_ as rolling_curve_pair
  }

  public get actual_point_on_curve_1() : point_on_curve {
    if ( this.actual_point_on_curve_1_ === void 0 ) {
      this.actual_point_on_curve_1_ = this.extractElement( 2, false, point_on_curve )
    }

    return this.actual_point_on_curve_1_ as point_on_curve
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.ROLLING_CURVE_PAIR_VALUE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.ROLLING_CURVE_PAIR_VALUE
}
