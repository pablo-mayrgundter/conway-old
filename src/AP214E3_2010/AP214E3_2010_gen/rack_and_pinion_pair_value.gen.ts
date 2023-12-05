
import { pair_value } from "./index"
import { rack_and_pinion_pair } from "./index"
import { length_measure } from "./index"
import { plane_angle_measure } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/rack_and_pinion_pair_value.htm */
export  class rack_and_pinion_pair_value extends pair_value {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.RACK_AND_PINION_PAIR_VALUE
  }
  private applies_to_pair_? : rack_and_pinion_pair
  private actual_displacement_? : number

  public get applies_to_pair() : rack_and_pinion_pair {
    if ( this.applies_to_pair_ === void 0 ) {
      this.applies_to_pair_ = this.extractElement( 1, false, rack_and_pinion_pair )
    }

    return this.applies_to_pair_ as rack_and_pinion_pair
  }

  public get actual_displacement() : number {
    if ( this.actual_displacement_ === void 0 ) {
      this.actual_displacement_ = this.extractNumber( 2, false )
    }

    return this.actual_displacement_ as number
  }

  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.RACK_AND_PINION_PAIR_VALUE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.RACK_AND_PINION_PAIR_VALUE
}
