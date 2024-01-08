
import { representation_item } from "./index"
import { list_representation_item } from "./index"
import { set_representation_item } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/compound_representation_item.htm */
export  class compound_representation_item extends representation_item {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.COMPOUND_REPRESENTATION_ITEM
  }
  private item_element_? : list_representation_item | set_representation_item

  public get item_element() : list_representation_item | set_representation_item {
    if ( this.item_element_ === void 0 ) {
      
      const value : StepEntityBase< EntityTypesIfc > = 
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
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.COMPOUND_REPRESENTATION_ITEM ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.COMPOUND_REPRESENTATION_ITEM
}
