
import { label } from "./index"
import { text } from "./index"
import { product } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/alternate_product_relationship.htm */
export  class alternate_product_relationship extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.ALTERNATE_PRODUCT_RELATIONSHIP
  }
  private name_? : string
  private definition_? : string | null
  private alternate_? : product
  private base_? : product
  private basis_? : string

  public get name() : string {
    if ( this.name_ === void 0 ) {
      this.name_ = this.extractString( 0, false )
    }

    return this.name_ as string
  }

  public get definition() : string | null {
    if ( this.definition_ === void 0 ) {
      this.definition_ = this.extractString( 1, true )
    }

    return this.definition_ as string | null
  }

  public get alternate() : product {
    if ( this.alternate_ === void 0 ) {
      this.alternate_ = this.extractElement( 2, false, product )
    }

    return this.alternate_ as product
  }

  public get base() : product {
    if ( this.base_ === void 0 ) {
      this.base_ = this.extractElement( 3, false, product )
    }

    return this.base_ as product
  }

  public get basis() : string {
    if ( this.basis_ === void 0 ) {
      this.basis_ = this.extractString( 4, false )
    }

    return this.basis_ as string
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.ALTERNATE_PRODUCT_RELATIONSHIP ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.ALTERNATE_PRODUCT_RELATIONSHIP
}
