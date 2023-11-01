
import { identifier } from "./index"
import { label } from "./index"
import { text } from "./index"
import { product_concept_context } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/product_concept.htm */
export  class product_concept extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.PRODUCT_CONCEPT
  }
  private id_? : string
  private name_? : string
  private description_? : string | null
  private market_context_? : product_concept_context

  public get id() : string {
    if ( this.id_ === void 0 ) {
      this.id_ = this.extractString( 0, false )
    }

    return this.id_ as string
  }

  public get name() : string {
    if ( this.name_ === void 0 ) {
      this.name_ = this.extractString( 1, false )
    }

    return this.name_ as string
  }

  public get description() : string | null {
    if ( this.description_ === void 0 ) {
      this.description_ = this.extractString( 2, true )
    }

    return this.description_ as string | null
  }

  public get market_context() : product_concept_context {
    if ( this.market_context_ === void 0 ) {
      this.market_context_ = this.extractElement( 3, false, product_concept_context )
    }

    return this.market_context_ as product_concept_context
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.PRODUCT_CONCEPT ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.PRODUCT_CONCEPT
}
