
import { shading_surface_method, shading_surface_methodDeserializeStep } from "./index"
import { colour } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/surface_style_rendering.htm */
export  class surface_style_rendering extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.SURFACE_STYLE_RENDERING
  }
  private rendering_method_? : shading_surface_method
  private surface_colour_? : colour

  public get rendering_method() : shading_surface_method {
    if ( this.rendering_method_ === void 0 ) {
      this.rendering_method_ = this.extractLambda( 0, shading_surface_methodDeserializeStep, false )
    }

    return this.rendering_method_ as shading_surface_method
  }

  public get surface_colour() : colour {
    if ( this.surface_colour_ === void 0 ) {
      this.surface_colour_ = this.extractElement( 1, false, colour )
    }

    return this.surface_colour_ as colour
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.SURFACE_STYLE_RENDERING ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.SURFACE_STYLE_RENDERING
}
