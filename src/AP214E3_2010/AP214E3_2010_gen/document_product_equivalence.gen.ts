
import { document_product_association } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/document_product_equivalence.htm */
export  class document_product_equivalence extends document_product_association {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.DOCUMENT_PRODUCT_EQUIVALENCE
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.DOCUMENT_PRODUCT_EQUIVALENCE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.DOCUMENT_PRODUCT_EQUIVALENCE
}
