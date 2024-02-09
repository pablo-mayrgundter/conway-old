
import { identifier } from "./index"
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
export  class configuration_item extends StepEntityBase< EntityTypesAP214 > {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.CONFIGURATION_ITEM
  }
  private id_? : string
  private name_? : string
  private description_? : string | null
  private item_concept_? : product_concept
  private purpose_? : string | null

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

  public get item_concept() : product_concept {
    if ( this.item_concept_ === void 0 ) {
      this.item_concept_ = this.extractElement( 3, false, product_concept )
    }

    return this.item_concept_ as product_concept
  }

  public get purpose() : string | null {
    if ( this.purpose_ === void 0 ) {
      this.purpose_ = this.extractString( 4, true )
    }

    return this.purpose_ as string | null
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.CONFIGURATION_ITEM ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.CONFIGURATION_ITEM
}
