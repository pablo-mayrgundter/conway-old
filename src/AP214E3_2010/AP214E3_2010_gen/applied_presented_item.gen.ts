
import { presented_item } from "./index"
import { action } from "./index"
import { action_method } from "./index"
import { action_relationship } from "./index"
import { product_concept } from "./index"
import { product_concept_feature } from "./index"
import { product_concept_feature_category } from "./index"
import { product_definition } from "./index"
import { product_definition_formation } from "./index"
import { product_definition_relationship } from "./index"
import {
  stepExtractOptional,
  stepExtractArrayToken,
  stepExtractArrayBegin,
  skipValue,
} from '../../step/parsing/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/applied_presented_item.htm */
export  class applied_presented_item extends presented_item {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.APPLIED_PRESENTED_ITEM
  }
  private items_? : Array<action | action_method | action_relationship | product_concept | product_concept_feature | product_concept_feature_category | product_definition | product_definition_formation | product_definition_relationship>

  public get items() : Array<action | action_method | action_relationship | product_concept | product_concept_feature | product_concept_feature_category | product_definition | product_definition_formation | product_definition_relationship> {
    if ( this.items_ === void 0 ) {
      
      let   cursor    = this.getOffsetCursor( 0 )
      const buffer    = this.buffer
      const endCursor = buffer.length

      if ( stepExtractOptional( buffer, cursor, endCursor ) === null ) {
        return []
      }

      const value : Array<action | action_method | action_relationship | product_concept | product_concept_feature | product_concept_feature_category | product_definition | product_definition_formation | product_definition_relationship> = []

      let signedCursor0 = stepExtractArrayBegin( buffer, cursor, endCursor )
      cursor = Math.abs( signedCursor0 )

      while ( signedCursor0 >= 0 ) {
        const value1Untyped : StepEntityBase< EntityTypesIfc > | undefined =
          this.extractBufferReference( buffer, cursor, endCursor )

        if ( !( value1Untyped instanceof action ) && !( value1Untyped instanceof action_method ) && !( value1Untyped instanceof action_relationship ) && !( value1Untyped instanceof product_concept ) && !( value1Untyped instanceof product_concept_feature ) && !( value1Untyped instanceof product_concept_feature_category ) && !( value1Untyped instanceof product_definition ) && !( value1Untyped instanceof product_definition_formation ) && !( value1Untyped instanceof product_definition_relationship ) ) {
          throw new Error( 'Value in select must be populated' )
        }

        const value1 = value1Untyped as (action | action_method | action_relationship | product_concept | product_concept_feature | product_concept_feature_category | product_definition | product_definition_formation | product_definition_relationship)
        if ( value1 === void 0 ) {
          throw new Error( 'Value in STEP was incorrectly typed' )
        }
        cursor = skipValue( buffer, cursor, endCursor )
        value.push( value1 )
        signedCursor0 = stepExtractArrayToken( buffer, cursor, endCursor )
        cursor = Math.abs( signedCursor0 )
      }

      this.items_ = value
    }

    return this.items_ as Array<action | action_method | action_relationship | product_concept | product_concept_feature | product_concept_feature_category | product_definition | product_definition_formation | product_definition_relationship>
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.APPLIED_PRESENTED_ITEM ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.APPLIED_PRESENTED_ITEM
}
