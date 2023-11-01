
import { founded_item } from "./index"
import { positive_length_measure } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/curve_style_font_pattern.htm */
export  class curve_style_font_pattern extends founded_item {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.CURVE_STYLE_FONT_PATTERN
  }
  private visible_segment_length_? : number
  private invisible_segment_length_? : number

  public get visible_segment_length() : number {
    if ( this.visible_segment_length_ === void 0 ) {
      this.visible_segment_length_ = this.extractNumber( 0, false )
    }

    return this.visible_segment_length_ as number
  }

  public get invisible_segment_length() : number {
    if ( this.invisible_segment_length_ === void 0 ) {
      this.invisible_segment_length_ = this.extractNumber( 1, false )
    }

    return this.invisible_segment_length_ as number
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.CURVE_STYLE_FONT_PATTERN ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.CURVE_STYLE_FONT_PATTERN
}
