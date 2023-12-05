
import { pair_value } from "./index"
import { rolling_surface_pair } from "./index"
import { point_on_surface } from "./index"
import { plane_angle_measure } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/rolling_surface_pair_value.htm */
export  class rolling_surface_pair_value extends pair_value {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.ROLLING_SURFACE_PAIR_VALUE
  }
  private applies_to_pair_? : rolling_surface_pair
  private actual_point_on_surface_? : point_on_surface
  private actual_rotation_? : number

  public get applies_to_pair() : rolling_surface_pair {
    if ( this.applies_to_pair_ === void 0 ) {
      this.applies_to_pair_ = this.extractElement( 1, false, rolling_surface_pair )
    }

    return this.applies_to_pair_ as rolling_surface_pair
  }

  public get actual_point_on_surface() : point_on_surface {
    if ( this.actual_point_on_surface_ === void 0 ) {
      this.actual_point_on_surface_ = this.extractElement( 2, false, point_on_surface )
    }

    return this.actual_point_on_surface_ as point_on_surface
  }

  public get actual_rotation() : number {
    if ( this.actual_rotation_ === void 0 ) {
      this.actual_rotation_ = this.extractNumber( 3, false )
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
    [ EntityTypesIfc.ROLLING_SURFACE_PAIR_VALUE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.ROLLING_SURFACE_PAIR_VALUE
}
