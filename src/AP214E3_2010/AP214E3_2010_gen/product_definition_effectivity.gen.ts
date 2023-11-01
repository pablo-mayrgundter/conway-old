
import { effectivity } from "./index"
import { product_definition_relationship } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/product_definition_effectivity.htm */
export  class product_definition_effectivity extends effectivity {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.PRODUCT_DEFINITION_EFFECTIVITY
  }
  private usage_? : product_definition_relationship

  public get usage() : product_definition_relationship {
    if ( this.usage_ === void 0 ) {
      this.usage_ = this.extractElement( 1, false, product_definition_relationship )
    }

    return this.usage_ as product_definition_relationship
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.PRODUCT_DEFINITION_EFFECTIVITY ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.PRODUCT_DEFINITION_EFFECTIVITY
}
