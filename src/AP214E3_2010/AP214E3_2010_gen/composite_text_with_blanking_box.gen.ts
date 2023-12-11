
import { composite_text } from "./index"
import { planar_box } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/composite_text_with_blanking_box.htm */
export  class composite_text_with_blanking_box extends composite_text {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.COMPOSITE_TEXT_WITH_BLANKING_BOX
  }
  private blanking_? : planar_box

  public get blanking() : planar_box {
    if ( this.blanking_ === void 0 ) {
      this.blanking_ = this.extractElement( 2, false, planar_box )
    }

    return this.blanking_ as planar_box
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.COMPOSITE_TEXT_WITH_BLANKING_BOX ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.COMPOSITE_TEXT_WITH_BLANKING_BOX
}