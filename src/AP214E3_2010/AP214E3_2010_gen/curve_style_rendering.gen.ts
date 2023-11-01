
import { shading_curve_method, shading_curve_methodDeserializeStep } from "./index"
import { surface_rendering_properties } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/curve_style_rendering.htm */
export  class curve_style_rendering extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.CURVE_STYLE_RENDERING
  }
  private rendering_method_? : shading_curve_method
  private rendering_properties_? : surface_rendering_properties

  public get rendering_method() : shading_curve_method {
    if ( this.rendering_method_ === void 0 ) {
      this.rendering_method_ = this.extractLambda( 0, shading_curve_methodDeserializeStep, false )
    }

    return this.rendering_method_ as shading_curve_method
  }

  public get rendering_properties() : surface_rendering_properties {
    if ( this.rendering_properties_ === void 0 ) {
      this.rendering_properties_ = this.extractElement( 1, false, surface_rendering_properties )
    }

    return this.rendering_properties_ as surface_rendering_properties
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.CURVE_STYLE_RENDERING ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.CURVE_STYLE_RENDERING
}
