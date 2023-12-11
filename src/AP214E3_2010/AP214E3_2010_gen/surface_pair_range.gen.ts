
import { simple_pair_range } from "./index"
import { surface_pair } from "./index"
import { rectangular_trimmed_surface } from "./index"
import { plane_angle_measure } from "./index"
import { unlimited_range, unlimited_rangeDeserializeStep } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/surface_pair_range.htm */
export  class surface_pair_range extends simple_pair_range {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.SURFACE_PAIR_RANGE
  }
  private range_on_surface_1_? : rectangular_trimmed_surface
  private range_on_surface_2_? : rectangular_trimmed_surface
  private lower_limit_actual_rotation_? : plane_angle_measure | unlimited_range
  private upper_limit_actual_rotation_? : plane_angle_measure | unlimited_range


  public get range_on_surface_1() : rectangular_trimmed_surface {
    if ( this.range_on_surface_1_ === void 0 ) {
      this.range_on_surface_1_ = this.extractElement( 2, false, rectangular_trimmed_surface )
    }

    return this.range_on_surface_1_ as rectangular_trimmed_surface
  }

  public get range_on_surface_2() : rectangular_trimmed_surface {
    if ( this.range_on_surface_2_ === void 0 ) {
      this.range_on_surface_2_ = this.extractElement( 3, false, rectangular_trimmed_surface )
    }

    return this.range_on_surface_2_ as rectangular_trimmed_surface
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
    [ EntityTypesIfc.SURFACE_PAIR_RANGE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.SURFACE_PAIR_RANGE
}
