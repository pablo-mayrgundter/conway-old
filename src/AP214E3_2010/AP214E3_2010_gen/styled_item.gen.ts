
import { representation_item } from "./index"
import { presentation_style_assignment } from "./index"
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
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/styled_item.htm */
export  class styled_item extends representation_item {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.STYLED_ITEM
  }
  private styles_? : Array<presentation_style_assignment>
  private item_? : representation_item

  public get styles() : Array<presentation_style_assignment> {
    if ( this.styles_ === void 0 ) {
      
      let   cursor    = this.getOffsetCursor( 1 )
      const buffer    = this.buffer
      const endCursor = buffer.length

      const value : Array<presentation_style_assignment> = []

      let signedCursor0 = stepExtractArrayBegin( buffer, cursor, endCursor )
      cursor = Math.abs( signedCursor0 )

      while ( signedCursor0 >= 0 ) {
        const value1 = this.extractBufferElement( buffer, cursor, endCursor, presentation_style_assignment )
        if ( value1 === void 0 ) {
          throw new Error( 'Value in STEP was incorrectly typed' )
        }
        cursor = skipValue( buffer, cursor, endCursor )
        value.push( value1 )
        signedCursor0 = stepExtractArrayToken( buffer, cursor, endCursor )
        cursor = Math.abs( signedCursor0 )
      }

      this.styles_ = value
    }

    return this.styles_ as Array<presentation_style_assignment>
  }

  public get item() : representation_item {
    if ( this.item_ === void 0 ) {
      this.item_ = this.extractElement( 2, false, representation_item )
    }

    return this.item_ as representation_item
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.STYLED_ITEM ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.STYLED_ITEM
}
