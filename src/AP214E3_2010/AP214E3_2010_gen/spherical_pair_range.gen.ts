
import { simple_pair_range } from "./index"
import { spherical_pair } from "./index"
import { plane_angle_measure } from "./index"
import { unlimited_range, unlimited_rangeDeserializeStep } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/spherical_pair_range.htm */
export  class spherical_pair_range extends simple_pair_range {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.SPHERICAL_PAIR_RANGE
  }
  private applies_to_pair_? : spherical_pair
  private lower_limit_yaw_? : plane_angle_measure | unlimited_range
  private upper_limit_yaw_? : plane_angle_measure | unlimited_range
  private lower_limit_pitch_? : plane_angle_measure | unlimited_range
  private upper_limit_pitch_? : plane_angle_measure | unlimited_range
  private lower_limit_roll_? : plane_angle_measure | unlimited_range
  private upper_limit_roll_? : plane_angle_measure | unlimited_range

  public get applies_to_pair() : spherical_pair {
    if ( this.applies_to_pair_ === void 0 ) {
      this.applies_to_pair_ = this.extractElement( 1, false, spherical_pair )
    }

    return this.applies_to_pair_ as spherical_pair
  }

  public get lower_limit_yaw() : plane_angle_measure | unlimited_range {
    if ( this.lower_limit_yaw_ === void 0 ) {
      
      const value : StepEntityBase< EntityTypesIfc > =
        this.extractReference( 2, false )

      if ( !( value instanceof plane_angle_measure ) && !( value instanceof unlimited_range ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      this.lower_limit_yaw_ = value as (plane_angle_measure | unlimited_range)

    }

    return this.lower_limit_yaw_ as plane_angle_measure | unlimited_range
  }

  public get upper_limit_yaw() : plane_angle_measure | unlimited_range {
    if ( this.upper_limit_yaw_ === void 0 ) {
      
      const value : StepEntityBase< EntityTypesIfc > =
        this.extractReference( 3, false )

      if ( !( value instanceof plane_angle_measure ) && !( value instanceof unlimited_range ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      this.upper_limit_yaw_ = value as (plane_angle_measure | unlimited_range)

    }

    return this.upper_limit_yaw_ as plane_angle_measure | unlimited_range
  }

  public get lower_limit_pitch() : plane_angle_measure | unlimited_range {
    if ( this.lower_limit_pitch_ === void 0 ) {
      
      const value : StepEntityBase< EntityTypesIfc > =
        this.extractReference( 4, false )

      if ( !( value instanceof plane_angle_measure ) && !( value instanceof unlimited_range ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      this.lower_limit_pitch_ = value as (plane_angle_measure | unlimited_range)

    }

    return this.lower_limit_pitch_ as plane_angle_measure | unlimited_range
  }

  public get upper_limit_pitch() : plane_angle_measure | unlimited_range {
    if ( this.upper_limit_pitch_ === void 0 ) {
      
      const value : StepEntityBase< EntityTypesIfc > =
        this.extractReference( 5, false )

      if ( !( value instanceof plane_angle_measure ) && !( value instanceof unlimited_range ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      this.upper_limit_pitch_ = value as (plane_angle_measure | unlimited_range)

    }

    return this.upper_limit_pitch_ as plane_angle_measure | unlimited_range
  }

  public get lower_limit_roll() : plane_angle_measure | unlimited_range {
    if ( this.lower_limit_roll_ === void 0 ) {
      
      const value : StepEntityBase< EntityTypesIfc > =
        this.extractReference( 6, false )

      if ( !( value instanceof plane_angle_measure ) && !( value instanceof unlimited_range ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      this.lower_limit_roll_ = value as (plane_angle_measure | unlimited_range)

    }

    return this.lower_limit_roll_ as plane_angle_measure | unlimited_range
  }

  public get upper_limit_roll() : plane_angle_measure | unlimited_range {
    if ( this.upper_limit_roll_ === void 0 ) {
      
      const value : StepEntityBase< EntityTypesIfc > =
        this.extractReference( 7, false )

      if ( !( value instanceof plane_angle_measure ) && !( value instanceof unlimited_range ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      this.upper_limit_roll_ = value as (plane_angle_measure | unlimited_range)

    }

    return this.upper_limit_roll_ as plane_angle_measure | unlimited_range
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.SPHERICAL_PAIR_RANGE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.SPHERICAL_PAIR_RANGE
}
