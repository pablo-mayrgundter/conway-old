
import { product_concept_feature } from "./index"
import { concept_feature_relationship_with_condition } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class conditional_concept_feature extends product_concept_feature {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.CONDITIONAL_CONCEPT_FEATURE
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
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.CONDITIONAL_CONCEPT_FEATURE ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.CONDITIONAL_CONCEPT_FEATURE
}
