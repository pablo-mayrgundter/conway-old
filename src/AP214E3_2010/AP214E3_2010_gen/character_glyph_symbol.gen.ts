
import { generic_character_glyph_symbol } from "./index"
import { planar_extent } from "./index"
import { ratio_measure } from "./index"
import { length_measure } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/character_glyph_symbol.htm */
export  class character_glyph_symbol extends generic_character_glyph_symbol {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.CHARACTER_GLYPH_SYMBOL
  }
  private character_box_? : planar_extent
  private baseline_ratio_? : number

  public get character_box() : planar_extent {
    if ( this.character_box_ === void 0 ) {
      this.character_box_ = this.extractElement( 3, false, planar_extent )
    }

    return this.character_box_ as planar_extent
  }

  public get baseline_ratio() : number {
    if ( this.baseline_ratio_ === void 0 ) {
      this.baseline_ratio_ = this.extractNumber( 4, false )
    }

    return this.baseline_ratio_ as number
  }

  public get box_height() : number {
    return this?.character_box?.size_in_y;
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.CHARACTER_GLYPH_SYMBOL ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.CHARACTER_GLYPH_SYMBOL
}
