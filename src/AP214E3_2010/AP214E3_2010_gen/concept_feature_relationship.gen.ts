
import { label } from "./index"
import { text } from "./index"
import { product_concept_feature } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class concept_feature_relationship extends StepEntityBase< EntityTypesAP214 > {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.CONCEPT_FEATURE_RELATIONSHIP
  }
  private name_? : string
  private description_? : string | null
  private relating_product_concept_feature_? : product_concept_feature
  private related_product_concept_feature_? : product_concept_feature

  public get name() : string {
    if ( this.name_ === void 0 ) {
      this.name_ = this.extractString( 0, false )
    }

    return this.name_ as string
  }

  public get description() : string | null {
    if ( this.description_ === void 0 ) {
      this.description_ = this.extractString( 1, true )
    }

    return this.description_ as string | null
  }

  public get relating_product_concept_feature() : product_concept_feature {
    if ( this.relating_product_concept_feature_ === void 0 ) {
      this.relating_product_concept_feature_ = this.extractElement( 2, false, product_concept_feature )
    }

    return this.relating_product_concept_feature_ as product_concept_feature
  }

  public get related_product_concept_feature() : product_concept_feature {
    if ( this.related_product_concept_feature_ === void 0 ) {
      this.related_product_concept_feature_ = this.extractElement( 3, false, product_concept_feature )
    }

    return this.related_product_concept_feature_ as product_concept_feature
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.CONCEPT_FEATURE_RELATIONSHIP ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.CONCEPT_FEATURE_RELATIONSHIP
}
