
import { simple_pair_range } from "./index"
import { cylindrical_pair } from "./index"
import { length_measure } from "./index"
import { unlimited_range, unlimited_rangeDeserializeStep } from "./index"
import { plane_angle_measure } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/cylindrical_pair_range.htm */
export  class cylindrical_pair_range extends simple_pair_range {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.CYLINDRICAL_PAIR_RANGE
  }
  private applies_to_pair_? : cylindrical_pair
  private lower_limit_actual_translation_? : length_measure | unlimited_range
  private upper_limit_actual_translation_? : length_measure | unlimited_range
  private lower_limit_actual_rotation_? : plane_angle_measure | unlimited_range
  private upper_limit_actual_rotation_? : plane_angle_measure | unlimited_range

  public get applies_to_pair() : cylindrical_pair {
    if ( this.applies_to_pair_ === void 0 ) {
      this.applies_to_pair_ = this.extractElement( 1, false, cylindrical_pair )
    }

    return this.applies_to_pair_ as cylindrical_pair
  }

  public get lower_limit_actual_translation() : length_measure | unlimited_range {
    if ( this.lower_limit_actual_translation_ === void 0 ) {
      
      const value : StepEntityBase< EntityTypesIfc > =
        this.extractReference( 2, false )

      if ( !( value instanceof length_measure ) && !( value instanceof unlimited_range ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      this.lower_limit_actual_translation_ = value as (length_measure | unlimited_range)

    }

    return this.lower_limit_actual_translation_ as length_measure | unlimited_range
  }

  public get upper_limit_actual_translation() : length_measure | unlimited_range {
    if ( this.upper_limit_actual_translation_ === void 0 ) {
      
      const value : StepEntityBase< EntityTypesIfc > =
        this.extractReference( 3, false )

      if ( !( value instanceof length_measure ) && !( value instanceof unlimited_range ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      this.upper_limit_actual_translation_ = value as (length_measure | unlimited_range)

    }

    return this.upper_limit_actual_translation_ as length_measure | unlimited_range
  }

  public get lower_limit_actual_rotation() : plane_angle_measure | unlimited_range {
    if ( this.lower_limit_actual_rotation_ === void 0 ) {
      
      const value : StepEntityBase< EntityTypesIfc > =
        this.extractReference( 4, false )

      if ( !( value instanceof plane_angle_measure ) && !( value instanceof unlimited_range ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      this.lower_limit_actual_rotation_ = value as (plane_angle_measure | unlimited_range)

    }

    return this.lower_limit_actual_rotation_ as plane_angle_measure | unlimited_range
  }

  public get upper_limit_actual_rotation() : plane_angle_measure | unlimited_range {
    if ( this.upper_limit_actual_rotation_ === void 0 ) {
      
      const value : StepEntityBase< EntityTypesIfc > =
        this.extractReference( 5, false )

      if ( !( value instanceof plane_angle_measure ) && !( value instanceof unlimited_range ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      this.upper_limit_actual_rotation_ = value as (plane_angle_measure | unlimited_range)

    }

    return this.upper_limit_actual_rotation_ as plane_angle_measure | unlimited_range
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.CYLINDRICAL_PAIR_RANGE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.CYLINDRICAL_PAIR_RANGE
}
