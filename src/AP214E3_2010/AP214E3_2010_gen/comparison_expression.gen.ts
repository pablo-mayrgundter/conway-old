
import { boolean_expression } from "./index"
import { expression } from "./index"
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
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/comparison_expression.htm */
export abstract class comparison_expression extends boolean_expression {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.COMPARISON_EXPRESSION
  }
  private SELF\binary_generic_expression.operands_? : Array<expression>

  public get SELF\binary_generic_expression.operands() : Array<expression> {
    if ( this.SELF\binary_generic_expression.operands_ === void 0 ) {
      
      let   cursor    = this.getOffsetCursor( 0 )
      const buffer    = this.buffer
      const endCursor = buffer.length

      const value : Array<expression> = []

      let signedCursor0 = stepExtractArrayBegin( buffer, cursor, endCursor )
      cursor = Math.abs( signedCursor0 )

      while ( signedCursor0 >= 0 ) {
        const value1 = this.extractBufferElement( buffer, cursor, endCursor, expression )
        if ( value1 === void 0 ) {
          throw new Error( 'Value in STEP was incorrectly typed' )
        }
        cursor = skipValue( buffer, cursor, endCursor )
        value.push( value1 )
        signedCursor0 = stepExtractArrayToken( buffer, cursor, endCursor )
        cursor = Math.abs( signedCursor0 )
      }

      this.SELF\binary_generic_expression.operands_ = value
    }

    return this.SELF\binary_generic_expression.operands_ as Array<expression>
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.COMPARISON_EQUAL, EntityTypesIfc.COMPARISON_GREATER, EntityTypesIfc.COMPARISON_GREATER_EQUAL, EntityTypesIfc.COMPARISON_LESS, EntityTypesIfc.COMPARISON_LESS_EQUAL, EntityTypesIfc.COMPARISON_NOT_EQUAL, EntityTypesIfc.LIKE_EXPRESSION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.COMPARISON_EXPRESSION
}
