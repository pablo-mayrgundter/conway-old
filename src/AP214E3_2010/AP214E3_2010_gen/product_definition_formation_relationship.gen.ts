
import { identifier } from "./index"
import { label } from "./index"
import { text } from "./index"
import { product_definition_formation } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/product_definition_formation_relationship.htm */
export  class product_definition_formation_relationship extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.PRODUCT_DEFINITION_FORMATION_RELATIONSHIP
  }
  private id_? : string
  private name_? : string
  private description_? : string | null
  private relating_product_definition_formation_? : product_definition_formation
  private related_product_definition_formation_? : product_definition_formation

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

  public get relating_product_definition_formation() : product_definition_formation {
    if ( this.relating_product_definition_formation_ === void 0 ) {
      this.relating_product_definition_formation_ = this.extractElement( 3, false, product_definition_formation )
    }

    return this.relating_product_definition_formation_ as product_definition_formation
  }

  public get related_product_definition_formation() : product_definition_formation {
    if ( this.related_product_definition_formation_ === void 0 ) {
      this.related_product_definition_formation_ = this.extractElement( 4, false, product_definition_formation )
    }

    return this.related_product_definition_formation_ as product_definition_formation
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.PRODUCT_DEFINITION_FORMATION_RELATIONSHIP ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.PRODUCT_DEFINITION_FORMATION_RELATIONSHIP
}
