
import { founded_item } from "./index"
import { curve_style } from "./index"
import { curve_style_rendering } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/surface_style_control_grid.htm */
export  class surface_style_control_grid extends founded_item {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.SURFACE_STYLE_CONTROL_GRID
  }
  private style_of_control_grid_? : curve_style | curve_style_rendering

  public get style_of_control_grid() : curve_style | curve_style_rendering {
    if ( this.style_of_control_grid_ === void 0 ) {
      
      const value : StepEntityBase< EntityTypesIfc > = 
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
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.SURFACE_STYLE_CONTROL_GRID ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.SURFACE_STYLE_CONTROL_GRID
}
