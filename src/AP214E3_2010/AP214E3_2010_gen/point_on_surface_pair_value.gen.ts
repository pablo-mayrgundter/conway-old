
import { pair_value } from "./index"
import { point_on_surface_pair } from "./index"
import { point_on_surface } from "./index"
import { ypr_rotation } from "./index"
import { rotation_about_direction } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/point_on_surface_pair_value.htm */
export  class point_on_surface_pair_value extends pair_value {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.POINT_ON_SURFACE_PAIR_VALUE
  }
  private actual_point_on_surface_? : point_on_surface
  private input_orientation_? : ypr_rotation | rotation_about_direction


  public get actual_point_on_surface() : point_on_surface {
    if ( this.actual_point_on_surface_ === void 0 ) {
      this.actual_point_on_surface_ = this.extractElement( 2, false, point_on_surface )
    }

    return this.actual_point_on_surface_ as point_on_surface
  }

  public get input_orientation() : ypr_rotation | rotation_about_direction {
    if ( this.input_orientation_ === void 0 ) {
      
      const value : StepEntityBase< EntityTypesIfc > =
        this.extractReference( 3, false )

      if ( !( value instanceof ypr_rotation ) && !( value instanceof rotation_about_direction ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      this.input_orientation_ = value as (ypr_rotation | rotation_about_direction)

    }

    return this.input_orientation_ as ypr_rotation | rotation_about_direction
  }

  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.POINT_ON_SURFACE_PAIR_VALUE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.POINT_ON_SURFACE_PAIR_VALUE
}
