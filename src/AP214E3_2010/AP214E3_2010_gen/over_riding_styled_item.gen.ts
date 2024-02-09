
import { styled_item } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class over_riding_styled_item extends styled_item {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.OVER_RIDING_STYLED_ITEM
  }
  private over_ridden_style_? : styled_item

  public get over_ridden_style() : styled_item {
    if ( this.over_ridden_style_ === void 0 ) {
      this.over_ridden_style_ = this.extractElement( 3, false, styled_item )
    }

    return this.over_ridden_style_ as styled_item
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.OVER_RIDING_STYLED_ITEM ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.OVER_RIDING_STYLED_ITEM
}
