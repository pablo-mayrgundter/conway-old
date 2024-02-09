
import { label } from "./index"
import { text } from "./index"
import { product_concept } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class product_concept_relationship extends StepEntityBase< EntityTypesAP214 > {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.PRODUCT_CONCEPT_RELATIONSHIP
  }
  private name_? : string
  private description_? : string | null
  private relating_product_concept_? : product_concept
  private related_product_concept_? : product_concept

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

  public get relating_product_concept() : product_concept {
    if ( this.relating_product_concept_ === void 0 ) {
      this.relating_product_concept_ = this.extractElement( 2, false, product_concept )
    }

    return this.relating_product_concept_ as product_concept
  }

  public get related_product_concept() : product_concept {
    if ( this.related_product_concept_ === void 0 ) {
      this.related_product_concept_ = this.extractElement( 3, false, product_concept )
    }

    return this.related_product_concept_ as product_concept
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.PRODUCT_CONCEPT_RELATIONSHIP ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.PRODUCT_CONCEPT_RELATIONSHIP
}
