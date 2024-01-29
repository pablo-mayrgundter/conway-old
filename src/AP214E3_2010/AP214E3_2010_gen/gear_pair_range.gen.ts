
import { simple_pair_range } from "./index"
import { gear_pair } from "./index"
import { plane_angle_measure } from "./index"
import { unlimited_range, unlimited_rangeDeserializeStep } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class gear_pair_range extends simple_pair_range {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.GEAR_PAIR_RANGE
  }
  private lower_limit_actual_rotation_1_? : plane_angle_measure | unlimited_range
  private upper_limit_actual_rotation_1_? : plane_angle_measure | unlimited_range


  public get lower_limit_actual_rotation_1() : plane_angle_measure | unlimited_range {
    if ( this.lower_limit_actual_rotation_1_ === void 0 ) {
      
      const enumValue : unlimited_range | null =
        this.extractLambda( 2, unlimited_rangeDeserializeStep, true )
      const value : StepEntityBase< EntityTypesAP214 > | unlimited_range = enumValue ?? 
        this.extractReference( 2, false )

      if ( enumValue === null && !( value instanceof plane_angle_measure ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      this.lower_limit_actual_rotation_1_ = value as (plane_angle_measure | unlimited_range)

    }

    return this.lower_limit_actual_rotation_1_ as plane_angle_measure | unlimited_range
  }

  public get upper_limit_actual_rotation_1() : plane_angle_measure | unlimited_range {
    if ( this.upper_limit_actual_rotation_1_ === void 0 ) {
      
      const enumValue : unlimited_range | null =
        this.extractLambda( 3, unlimited_rangeDeserializeStep, true )
      const value : StepEntityBase< EntityTypesAP214 > | unlimited_range = enumValue ?? 
        this.extractReference( 3, false )

      if ( enumValue === null && !( value instanceof plane_angle_measure ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      this.upper_limit_actual_rotation_1_ = value as (plane_angle_measure | unlimited_range)

    }

    return this.upper_limit_actual_rotation_1_ as plane_angle_measure | unlimited_range
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.GEAR_PAIR_RANGE ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.GEAR_PAIR_RANGE
}
