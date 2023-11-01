
import { founded_item } from "./index"
import { fill_area_style } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/surface_style_fill_area.htm */
export  class surface_style_fill_area extends founded_item {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.SURFACE_STYLE_FILL_AREA
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
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.SURFACE_STYLE_FILL_AREA ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.SURFACE_STYLE_FILL_AREA
}
