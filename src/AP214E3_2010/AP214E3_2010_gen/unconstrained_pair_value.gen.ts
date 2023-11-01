
import { pair_value } from "./index"
import { unconstrained_pair } from "./index"
import { axis2_placement_3d } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/unconstrained_pair_value.htm */
export  class unconstrained_pair_value extends pair_value {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.UNCONSTRAINED_PAIR_VALUE
  }
  private SELF\pair_value.applies_to_pair_? : unconstrained_pair
  private actual_placement_? : axis2_placement_3d

  public get SELF\pair_value.applies_to_pair() : unconstrained_pair {
    if ( this.SELF\pair_value.applies_to_pair_ === void 0 ) {
      this.SELF\pair_value.applies_to_pair_ = this.extractElement( 1, false, unconstrained_pair )
    }

    return this.SELF\pair_value.applies_to_pair_ as unconstrained_pair
  }

  public get actual_placement() : axis2_placement_3d {
    if ( this.actual_placement_ === void 0 ) {
      this.actual_placement_ = this.extractElement( 2, false, axis2_placement_3d )
    }

    return this.actual_placement_ as axis2_placement_3d
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.UNCONSTRAINED_PAIR_VALUE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.UNCONSTRAINED_PAIR_VALUE
}
