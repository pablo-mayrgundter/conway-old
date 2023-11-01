
import { application_context_element } from "./index"
import { label } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/product_concept_context.htm */
export  class product_concept_context extends application_context_element {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.PRODUCT_CONCEPT_CONTEXT
  }
  private market_segment_type_? : string

  public get market_segment_type() : string {
    if ( this.market_segment_type_ === void 0 ) {
      this.market_segment_type_ = this.extractString( 2, false )
    }

    return this.market_segment_type_ as string
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.PRODUCT_CONCEPT_CONTEXT ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.PRODUCT_CONCEPT_CONTEXT
}
