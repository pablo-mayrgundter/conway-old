
import { label } from "./index"
import { text } from "./index"
import { document } from "./index"
import { product } from "./index"
import { product_definition_formation } from "./index"
import { product_definition } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/document_product_association.htm */
export  class document_product_association extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.DOCUMENT_PRODUCT_ASSOCIATION
  }
  private name_? : string
  private description_? : string | null
  private relating_document_? : document
  private related_product_? : product | product_definition_formation | product_definition

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

  public get relating_document() : document {
    if ( this.relating_document_ === void 0 ) {
      this.relating_document_ = this.extractElement( 2, false, document )
    }

    return this.relating_document_ as document
  }

  public get related_product() : product | product_definition_formation | product_definition {
    if ( this.related_product_ === void 0 ) {
      
      const value : StepEntityBase< EntityTypesIfc > =
        this.extractReference( 3, false )

      if ( !( value instanceof product ) && !( value instanceof product_definition_formation ) && !( value instanceof product_definition ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      this.related_product_ = value as (product | product_definition_formation | product_definition)

    }

    return this.related_product_ as product | product_definition_formation | product_definition
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.DOCUMENT_PRODUCT_ASSOCIATION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.DOCUMENT_PRODUCT_ASSOCIATION
}
