
import { representation_item } from "./index"
import { list_representation_item } from "./index"
import { set_representation_item } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class compound_representation_item extends representation_item {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.COMPOUND_REPRESENTATION_ITEM
  }
  private item_element_? : list_representation_item | set_representation_item

  public get item_element() : list_representation_item | set_representation_item {
    if ( this.item_element_ === void 0 ) {
      
      const value : StepEntityBase< EntityTypesAP214 > = 
        this.extractReference( 1, false )

      if ( !( value instanceof list_representation_item ) && !( value instanceof set_representation_item ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      this.item_element_ = value as (list_representation_item | set_representation_item)

    }

    return this.item_element_ as list_representation_item | set_representation_item
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.COMPOUND_REPRESENTATION_ITEM ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.COMPOUND_REPRESENTATION_ITEM
}
