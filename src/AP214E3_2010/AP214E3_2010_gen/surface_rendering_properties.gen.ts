
import { colour } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class surface_rendering_properties extends StepEntityBase< EntityTypesAP214 > {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.SURFACE_RENDERING_PROPERTIES
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
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.SURFACE_RENDERING_PROPERTIES ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.SURFACE_RENDERING_PROPERTIES
}
