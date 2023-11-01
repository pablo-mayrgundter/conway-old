
import { label } from "./index"
import { text } from "./index"
import { product_concept } from "./index"
import { product_concept_feature } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/product_concept_feature_association.htm */
export  class product_concept_feature_association extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.PRODUCT_CONCEPT_FEATURE_ASSOCIATION
  }
  private name_? : string
  private description_? : string | null
  private concept_? : product_concept
  private feature_? : product_concept_feature

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

  public get concept() : product_concept {
    if ( this.concept_ === void 0 ) {
      this.concept_ = this.extractElement( 2, false, product_concept )
    }

    return this.concept_ as product_concept
  }

  public get feature() : product_concept_feature {
    if ( this.feature_ === void 0 ) {
      this.feature_ = this.extractElement( 3, false, product_concept_feature )
    }

    return this.feature_ as product_concept_feature
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.PRODUCT_CONCEPT_FEATURE_ASSOCIATION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.PRODUCT_CONCEPT_FEATURE_ASSOCIATION
}
