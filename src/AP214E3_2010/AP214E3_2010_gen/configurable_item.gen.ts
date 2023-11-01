
import { configuration_item } from "./index"
import { product_concept_feature_association } from "./index"
import {
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
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/configurable_item.htm */
export  class configurable_item extends configuration_item {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.CONFIGURABLE_ITEM
  }
  private item_concept_feature_? : Array<product_concept_feature_association>

  public get item_concept_feature() : Array<product_concept_feature_association> {
    if ( this.item_concept_feature_ === void 0 ) {
      
      let   cursor    = this.getOffsetCursor( 5 )
      const buffer    = this.buffer
      const endCursor = buffer.length

      const value : Array<product_concept_feature_association> = []

      let signedCursor0 = stepExtractArrayBegin( buffer, cursor, endCursor )
      cursor = Math.abs( signedCursor0 )

      while ( signedCursor0 >= 0 ) {
        const value1 = this.extractBufferElement( buffer, cursor, endCursor, product_concept_feature_association )
        if ( value1 === void 0 ) {
          throw new Error( 'Value in STEP was incorrectly typed' )
        }
        cursor = skipValue( buffer, cursor, endCursor )
        value.push( value1 )
        signedCursor0 = stepExtractArrayToken( buffer, cursor, endCursor )
        cursor = Math.abs( signedCursor0 )
      }

      this.item_concept_feature_ = value
    }

    return this.item_concept_feature_ as Array<product_concept_feature_association>
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.CONFIGURABLE_ITEM ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.CONFIGURABLE_ITEM
}
