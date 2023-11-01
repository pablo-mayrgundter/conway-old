
import { product_concept_feature } from "./index"
import { concept_feature_relationship_with_condition } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/conditional_concept_feature.htm */
export  class conditional_concept_feature extends product_concept_feature {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.CONDITIONAL_CONCEPT_FEATURE
  }
  private condition_? : concept_feature_relationship_with_condition

  public get condition() : concept_feature_relationship_with_condition {
    if ( this.condition_ === void 0 ) {
      this.condition_ = this.extractElement( 3, false, concept_feature_relationship_with_condition )
    }

    return this.condition_ as concept_feature_relationship_with_condition
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.CONDITIONAL_CONCEPT_FEATURE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.CONDITIONAL_CONCEPT_FEATURE
}
