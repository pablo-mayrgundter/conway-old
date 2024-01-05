
import { simple_pair_range } from "./index"
import { gear_pair } from "./index"
import { plane_angle_measure } from "./index"
import { unlimited_range, unlimited_rangeDeserializeStep } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/gear_pair_range.htm */
export  class gear_pair_range extends simple_pair_range {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.GEAR_PAIR_RANGE
  }
  private lower_limit_actual_rotation_1_? : plane_angle_measure | unlimited_range
  private upper_limit_actual_rotation_1_? : plane_angle_measure | unlimited_range


  public get lower_limit_actual_rotation_1() : plane_angle_measure | unlimited_range {
    if ( this.lower_limit_actual_rotation_1_ === void 0 ) {
      
      const enumValue : unlimited_range | null =
        this.extractLambda( 2, unlimited_rangeDeserializeStep, true )
      const value : StepEntityBase< EntityTypesIfc > | unlimited_range = enumValue ?? 
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
      const value : StepEntityBase< EntityTypesIfc > | unlimited_range = enumValue ?? 
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
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.GEAR_PAIR_RANGE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.GEAR_PAIR_RANGE
}
