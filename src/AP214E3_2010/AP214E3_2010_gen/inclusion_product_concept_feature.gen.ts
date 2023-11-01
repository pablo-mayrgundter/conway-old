
import { conditional_concept_feature } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/inclusion_product_concept_feature.htm */
export  class inclusion_product_concept_feature extends conditional_concept_feature {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.INCLUSION_PRODUCT_CONCEPT_FEATURE
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.INCLUSION_PRODUCT_CONCEPT_FEATURE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.INCLUSION_PRODUCT_CONCEPT_FEATURE
}
