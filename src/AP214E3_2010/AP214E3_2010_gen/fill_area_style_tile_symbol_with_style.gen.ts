
import { geometric_representation_item } from "./index"
import { annotation_symbol_occurrence } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/fill_area_style_tile_symbol_with_style.htm */
export  class fill_area_style_tile_symbol_with_style extends geometric_representation_item {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.FILL_AREA_STYLE_TILE_SYMBOL_WITH_STYLE
  }
  private symbol_? : annotation_symbol_occurrence

  public get symbol() : annotation_symbol_occurrence {
    if ( this.symbol_ === void 0 ) {
      this.symbol_ = this.extractElement( 1, false, annotation_symbol_occurrence )
    }

    return this.symbol_ as annotation_symbol_occurrence
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.FILL_AREA_STYLE_TILE_SYMBOL_WITH_STYLE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.FILL_AREA_STYLE_TILE_SYMBOL_WITH_STYLE
}
