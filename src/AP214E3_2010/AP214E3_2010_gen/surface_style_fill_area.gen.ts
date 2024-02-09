
import { founded_item } from "./index"
import { fill_area_style } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class surface_style_fill_area extends founded_item {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.SURFACE_STYLE_FILL_AREA
  }
  private fill_area_? : fill_area_style

  public get fill_area() : fill_area_style {
    if ( this.fill_area_ === void 0 ) {
      this.fill_area_ = this.extractElement( 0, false, fill_area_style )
    }

    return this.fill_area_ as fill_area_style
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.SURFACE_STYLE_FILL_AREA ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.SURFACE_STYLE_FILL_AREA
}
