
import { label } from "./index"
import { text } from "./index"
import { product_category } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/product_category_relationship.htm */
export  class product_category_relationship extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.PRODUCT_CATEGORY_RELATIONSHIP
  }
  private name_? : string
  private description_? : string | null
  private category_? : product_category
  private sub_category_? : product_category

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

  public get category() : product_category {
    if ( this.category_ === void 0 ) {
      this.category_ = this.extractElement( 2, false, product_category )
    }

    return this.category_ as product_category
  }

  public get sub_category() : product_category {
    if ( this.sub_category_ === void 0 ) {
      this.sub_category_ = this.extractElement( 3, false, product_category )
    }

    return this.sub_category_ as product_category
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.PRODUCT_CATEGORY_RELATIONSHIP ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.PRODUCT_CATEGORY_RELATIONSHIP
}
