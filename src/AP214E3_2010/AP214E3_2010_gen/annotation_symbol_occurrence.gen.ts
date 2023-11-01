
import { annotation_occurrence } from "./index"
import { annotation_symbol } from "./index"
import { defined_symbol } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/annotation_symbol_occurrence.htm */
export  class annotation_symbol_occurrence extends annotation_occurrence {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.ANNOTATION_SYMBOL_OCCURRENCE
  }
  private SELF\styled_item.item_? : annotation_symbol | defined_symbol

  public get SELF\styled_item.item() : annotation_symbol | defined_symbol {
    if ( this.SELF\styled_item.item_ === void 0 ) {
      
      const value : StepEntityBase< EntityTypesIfc > =
        this.extractReference( 3, false )

      if ( !( value instanceof annotation_symbol ) && !( value instanceof defined_symbol ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      this.SELF\styled_item.item_ = value as (annotation_symbol | defined_symbol)

    }

    return this.SELF\styled_item.item_ as annotation_symbol | defined_symbol
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.ANNOTATION_SYMBOL_OCCURRENCE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.ANNOTATION_SYMBOL_OCCURRENCE
}
