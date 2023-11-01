
import { simple_pair_range } from "./index"
import { rack_and_pinion_pair } from "./index"
import { length_measure } from "./index"
import { unlimited_range, unlimited_rangeDeserializeStep } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/rack_and_pinion_pair_range.htm */
export  class rack_and_pinion_pair_range extends simple_pair_range {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.RACK_AND_PINION_PAIR_RANGE
  }
  private SELF\simple_pair_range.applies_to_pair_? : rack_and_pinion_pair
  private lower_limit_rack_displacement_? : length_measure | unlimited_range
  private upper_limit_rack_displacement_? : length_measure | unlimited_range

  public get SELF\simple_pair_range.applies_to_pair() : rack_and_pinion_pair {
    if ( this.SELF\simple_pair_range.applies_to_pair_ === void 0 ) {
      this.SELF\simple_pair_range.applies_to_pair_ = this.extractElement( 1, false, rack_and_pinion_pair )
    }

    return this.SELF\simple_pair_range.applies_to_pair_ as rack_and_pinion_pair
  }

  public get lower_limit_rack_displacement() : length_measure | unlimited_range {
    if ( this.lower_limit_rack_displacement_ === void 0 ) {
      
      const value : StepEntityBase< EntityTypesIfc > =
        this.extractReference( 2, false )

      if ( !( value instanceof length_measure ) && !( value instanceof unlimited_range ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      this.lower_limit_rack_displacement_ = value as (length_measure | unlimited_range)

    }

    return this.lower_limit_rack_displacement_ as length_measure | unlimited_range
  }

  public get upper_limit_rack_displacement() : length_measure | unlimited_range {
    if ( this.upper_limit_rack_displacement_ === void 0 ) {
      
      const value : StepEntityBase< EntityTypesIfc > =
        this.extractReference( 3, false )

      if ( !( value instanceof length_measure ) && !( value instanceof unlimited_range ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      this.upper_limit_rack_displacement_ = value as (length_measure | unlimited_range)

    }

    return this.upper_limit_rack_displacement_ as length_measure | unlimited_range
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.RACK_AND_PINION_PAIR_RANGE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.RACK_AND_PINION_PAIR_RANGE
}
