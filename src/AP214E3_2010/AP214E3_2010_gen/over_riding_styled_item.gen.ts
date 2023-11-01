
import { styled_item } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/over_riding_styled_item.htm */
export  class over_riding_styled_item extends styled_item {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.OVER_RIDING_STYLED_ITEM
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
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.OVER_RIDING_STYLED_ITEM ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.OVER_RIDING_STYLED_ITEM
}
