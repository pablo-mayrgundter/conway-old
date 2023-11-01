
import { product_concept_feature_category } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/exclusive_product_concept_feature_category.htm */
export  class exclusive_product_concept_feature_category extends product_concept_feature_category {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.EXCLUSIVE_PRODUCT_CONCEPT_FEATURE_CATEGORY
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.EXCLUSIVE_PRODUCT_CONCEPT_FEATURE_CATEGORY ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.EXCLUSIVE_PRODUCT_CONCEPT_FEATURE_CATEGORY
}
