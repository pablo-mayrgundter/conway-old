
import { simple_pair_range } from "./index"
import { planar_pair } from "./index"
import { plane_angle_measure } from "./index"
import { unlimited_range, unlimited_rangeDeserializeStep } from "./index"
import { length_measure } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/planar_pair_range.htm */
export  class planar_pair_range extends simple_pair_range {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.PLANAR_PAIR_RANGE
  }
  private lower_limit_actual_rotation_? : plane_angle_measure | unlimited_range
  private upper_limit_actual_rotation_? : plane_angle_measure | unlimited_range
  private lower_limit_actual_translation_x_? : length_measure | unlimited_range
  private upper_limit_actual_translation_x_? : length_measure | unlimited_range
  private lower_limit_actual_translation_y_? : length_measure | unlimited_range
  private upper_limit_actual_translation_y_? : length_measure | unlimited_range


  public get lower_limit_actual_rotation() : plane_angle_measure | unlimited_range {
    if ( this.lower_limit_actual_rotation_ === void 0 ) {
      
      const enumValue : unlimited_range | null =
        this.extractLambda( 2, unlimited_rangeDeserializeStep, true )
      const value : StepEntityBase< EntityTypesIfc > | unlimited_range = enumValue ?? 
        this.extractReference( 2, false )

      if ( enumValue === null && !( value instanceof plane_angle_measure ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      this.lower_limit_actual_rotation_ = value as (plane_angle_measure | unlimited_range)

    }

    return this.lower_limit_actual_rotation_ as plane_angle_measure | unlimited_range
  }

  public get upper_limit_actual_rotation() : plane_angle_measure | unlimited_range {
    if ( this.upper_limit_actual_rotation_ === void 0 ) {
      
      const enumValue : unlimited_range | null =
        this.extractLambda( 3, unlimited_rangeDeserializeStep, true )
      const value : StepEntityBase< EntityTypesIfc > | unlimited_range = enumValue ?? 
        this.extractReference( 3, false )

      if ( enumValue === null && !( value instanceof plane_angle_measure ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      this.upper_limit_actual_rotation_ = value as (plane_angle_measure | unlimited_range)

    }

    return this.upper_limit_actual_rotation_ as plane_angle_measure | unlimited_range
  }

  public get lower_limit_actual_translation_x() : length_measure | unlimited_range {
    if ( this.lower_limit_actual_translation_x_ === void 0 ) {
      
      const enumValue : unlimited_range | null =
        this.extractLambda( 4, unlimited_rangeDeserializeStep, true )
      const value : StepEntityBase< EntityTypesIfc > | unlimited_range = enumValue ?? 
        this.extractReference( 4, false )

      if ( enumValue === null && !( value instanceof length_measure ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      this.lower_limit_actual_translation_x_ = value as (length_measure | unlimited_range)

    }

    return this.lower_limit_actual_translation_x_ as length_measure | unlimited_range
  }

  public get upper_limit_actual_translation_x() : length_measure | unlimited_range {
    if ( this.upper_limit_actual_translation_x_ === void 0 ) {
      
      const enumValue : unlimited_range | null =
        this.extractLambda( 5, unlimited_rangeDeserializeStep, true )
      const value : StepEntityBase< EntityTypesIfc > | unlimited_range = enumValue ?? 
        this.extractReference( 5, false )

      if ( enumValue === null && !( value instanceof length_measure ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      this.upper_limit_actual_translation_x_ = value as (length_measure | unlimited_range)

    }

    return this.upper_limit_actual_translation_x_ as length_measure | unlimited_range
  }

  public get lower_limit_actual_translation_y() : length_measure | unlimited_range {
    if ( this.lower_limit_actual_translation_y_ === void 0 ) {
      
      const enumValue : unlimited_range | null =
        this.extractLambda( 6, unlimited_rangeDeserializeStep, true )
      const value : StepEntityBase< EntityTypesIfc > | unlimited_range = enumValue ?? 
        this.extractReference( 6, false )

      if ( enumValue === null && !( value instanceof length_measure ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      this.lower_limit_actual_translation_y_ = value as (length_measure | unlimited_range)

    }

    return this.lower_limit_actual_translation_y_ as length_measure | unlimited_range
  }

  public get upper_limit_actual_translation_y() : length_measure | unlimited_range {
    if ( this.upper_limit_actual_translation_y_ === void 0 ) {
      
      const enumValue : unlimited_range | null =
        this.extractLambda( 7, unlimited_rangeDeserializeStep, true )
      const value : StepEntityBase< EntityTypesIfc > | unlimited_range = enumValue ?? 
        this.extractReference( 7, false )

      if ( enumValue === null && !( value instanceof length_measure ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      this.upper_limit_actual_translation_y_ = value as (length_measure | unlimited_range)

    }

    return this.upper_limit_actual_translation_y_ as length_measure | unlimited_range
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.PLANAR_PAIR_RANGE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.PLANAR_PAIR_RANGE
}
