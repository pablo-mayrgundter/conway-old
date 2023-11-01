
import { text_literal } from "./index"
import { curve } from "./index"
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
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/text_literal_with_associated_curves.htm */
export  class text_literal_with_associated_curves extends text_literal {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.TEXT_LITERAL_WITH_ASSOCIATED_CURVES
  }
  private associated_curves_? : Array<curve>

  public get associated_curves() : Array<curve> {
    if ( this.associated_curves_ === void 0 ) {
      
      let   cursor    = this.getOffsetCursor( 6 )
      const buffer    = this.buffer
      const endCursor = buffer.length

      const value : Array<curve> = []

      let signedCursor0 = stepExtractArrayBegin( buffer, cursor, endCursor )
      cursor = Math.abs( signedCursor0 )

      while ( signedCursor0 >= 0 ) {
        const value1 = this.extractBufferElement( buffer, cursor, endCursor, curve )
        if ( value1 === void 0 ) {
          throw new Error( 'Value in STEP was incorrectly typed' )
        }
        cursor = skipValue( buffer, cursor, endCursor )
        value.push( value1 )
        signedCursor0 = stepExtractArrayToken( buffer, cursor, endCursor )
        cursor = Math.abs( signedCursor0 )
      }

      this.associated_curves_ = value
    }

    return this.associated_curves_ as Array<curve>
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.TEXT_LITERAL_WITH_ASSOCIATED_CURVES ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.TEXT_LITERAL_WITH_ASSOCIATED_CURVES
}
