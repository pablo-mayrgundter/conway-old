
import { founded_item } from "./index"
import { curve_style } from "./index"
import { curve_style_rendering } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class surface_style_control_grid extends founded_item {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.SURFACE_STYLE_CONTROL_GRID
  }
  private style_of_control_grid_? : curve_style | curve_style_rendering

  public get style_of_control_grid() : curve_style | curve_style_rendering {
    if ( this.style_of_control_grid_ === void 0 ) {
      
      const value : StepEntityBase< EntityTypesAP214 > = 
        this.extractReference( 0, false )

      if ( !( value instanceof curve_style ) && !( value instanceof curve_style_rendering ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      this.style_of_control_grid_ = value as (curve_style | curve_style_rendering)

    }

    return this.style_of_control_grid_ as curve_style | curve_style_rendering
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.SURFACE_STYLE_CONTROL_GRID ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.SURFACE_STYLE_CONTROL_GRID
}
