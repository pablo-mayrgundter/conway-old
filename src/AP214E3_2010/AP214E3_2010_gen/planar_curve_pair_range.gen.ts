
import { simple_pair_range } from "./index"
import { planar_curve_pair } from "./index"
import { trimmed_curve } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/planar_curve_pair_range.htm */
export  class planar_curve_pair_range extends simple_pair_range {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.PLANAR_CURVE_PAIR_RANGE
  }
  private SELF\simple_pair_range.applies_to_pair_? : planar_curve_pair
  private range_on_curve_1_? : trimmed_curve
  private range_on_curve_2_? : trimmed_curve

  public get SELF\simple_pair_range.applies_to_pair() : planar_curve_pair {
    if ( this.SELF\simple_pair_range.applies_to_pair_ === void 0 ) {
      this.SELF\simple_pair_range.applies_to_pair_ = this.extractElement( 1, false, planar_curve_pair )
    }

    return this.SELF\simple_pair_range.applies_to_pair_ as planar_curve_pair
  }

  public get range_on_curve_1() : trimmed_curve {
    if ( this.range_on_curve_1_ === void 0 ) {
      this.range_on_curve_1_ = this.extractElement( 2, false, trimmed_curve )
    }

    return this.range_on_curve_1_ as trimmed_curve
  }

  public get range_on_curve_2() : trimmed_curve {
    if ( this.range_on_curve_2_ === void 0 ) {
      this.range_on_curve_2_ = this.extractElement( 3, false, trimmed_curve )
    }

    return this.range_on_curve_2_ as trimmed_curve
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.PLANAR_CURVE_PAIR_RANGE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.PLANAR_CURVE_PAIR_RANGE
}
