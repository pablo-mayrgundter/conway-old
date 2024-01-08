
import { presentation_representation } from "./index"
import { presentation_set } from "./index"
import { presented_item } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/presented_item_representation.htm */
export  class presented_item_representation extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.PRESENTED_ITEM_REPRESENTATION
  }
  private presentation_? : presentation_representation | presentation_set
  private item_? : presented_item

  public get presentation() : presentation_representation | presentation_set {
    if ( this.presentation_ === void 0 ) {
      
      const value : StepEntityBase< EntityTypesIfc > = 
        this.extractReference( 0, false )

      if ( !( value instanceof presentation_representation ) && !( value instanceof presentation_set ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      this.presentation_ = value as (presentation_representation | presentation_set)

    }

    return this.presentation_ as presentation_representation | presentation_set
  }

  public get item() : presented_item {
    if ( this.item_ === void 0 ) {
      this.item_ = this.extractElement( 1, false, presented_item )
    }

    return this.item_ as presented_item
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.PRESENTED_ITEM_REPRESENTATION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.PRESENTED_ITEM_REPRESENTATION
}
