
import { colour } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/surface_rendering_properties.htm */
export  class surface_rendering_properties extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.SURFACE_RENDERING_PROPERTIES
  }
  private rendered_colour_? : colour

  public get rendered_colour() : colour {
    if ( this.rendered_colour_ === void 0 ) {
      this.rendered_colour_ = this.extractElement( 0, false, colour )
    }

    return this.rendered_colour_ as colour
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.SURFACE_RENDERING_PROPERTIES ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.SURFACE_RENDERING_PROPERTIES
}
