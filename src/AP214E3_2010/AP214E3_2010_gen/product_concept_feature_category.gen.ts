
import { group } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/product_concept_feature_category.htm */
export  class product_concept_feature_category extends group {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.PRODUCT_CONCEPT_FEATURE_CATEGORY
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.PRODUCT_CONCEPT_FEATURE_CATEGORY ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.PRODUCT_CONCEPT_FEATURE_CATEGORY
}
