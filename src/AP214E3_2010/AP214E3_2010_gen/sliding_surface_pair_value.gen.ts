
import { pair_value } from "./index"
import { sliding_surface_pair } from "./index"
import { point_on_surface } from "./index"
import { plane_angle_measure } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/sliding_surface_pair_value.htm */
export  class sliding_surface_pair_value extends pair_value {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.SLIDING_SURFACE_PAIR_VALUE
  }
  private SELF\pair_value.applies_to_pair_? : sliding_surface_pair
  private actual_point_on_surface_1_? : point_on_surface
  private actual_point_on_surface_2_? : point_on_surface
  private actual_rotation_? : number

  public get SELF\pair_value.applies_to_pair() : sliding_surface_pair {
    if ( this.SELF\pair_value.applies_to_pair_ === void 0 ) {
      this.SELF\pair_value.applies_to_pair_ = this.extractElement( 1, false, sliding_surface_pair )
    }

    return this.SELF\pair_value.applies_to_pair_ as sliding_surface_pair
  }

  public get actual_point_on_surface_1() : point_on_surface {
    if ( this.actual_point_on_surface_1_ === void 0 ) {
      this.actual_point_on_surface_1_ = this.extractElement( 2, false, point_on_surface )
    }

    return this.actual_point_on_surface_1_ as point_on_surface
  }

  public get actual_point_on_surface_2() : point_on_surface {
    if ( this.actual_point_on_surface_2_ === void 0 ) {
      this.actual_point_on_surface_2_ = this.extractElement( 3, false, point_on_surface )
    }

    return this.actual_point_on_surface_2_ as point_on_surface
  }

  public get actual_rotation() : number {
    if ( this.actual_rotation_ === void 0 ) {
      this.actual_rotation_ = this.extractNumber( 4, false )
    }

    return this.actual_rotation_ as number
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.SLIDING_SURFACE_PAIR_VALUE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.SLIDING_SURFACE_PAIR_VALUE
}
