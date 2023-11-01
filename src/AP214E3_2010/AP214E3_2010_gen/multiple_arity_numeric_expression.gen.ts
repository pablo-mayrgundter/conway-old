
import { numeric_expression } from "./index"
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
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/multiple_arity_numeric_expression.htm */
export abstract class multiple_arity_numeric_expression extends numeric_expression {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.MULTIPLE_ARITY_NUMERIC_EXPRESSION
  }
  private SELF\multiple_arity_generic_expression.operands_? : Array<numeric_expression>

  public get SELF\multiple_arity_generic_expression.operands() : Array<numeric_expression> {
    if ( this.SELF\multiple_arity_generic_expression.operands_ === void 0 ) {
      
      let   cursor    = this.getOffsetCursor( 0 )
      const buffer    = this.buffer
      const endCursor = buffer.length

      const value : Array<numeric_expression> = []

      let signedCursor0 = stepExtractArrayBegin( buffer, cursor, endCursor )
      cursor = Math.abs( signedCursor0 )

      while ( signedCursor0 >= 0 ) {
        const value1 = this.extractBufferElement( buffer, cursor, endCursor, numeric_expression )
        if ( value1 === void 0 ) {
          throw new Error( 'Value in STEP was incorrectly typed' )
        }
        cursor = skipValue( buffer, cursor, endCursor )
        value.push( value1 )
        signedCursor0 = stepExtractArrayToken( buffer, cursor, endCursor )
        cursor = Math.abs( signedCursor0 )
      }

      this.SELF\multiple_arity_generic_expression.operands_ = value
    }

    return this.SELF\multiple_arity_generic_expression.operands_ as Array<numeric_expression>
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.PLUS_EXPRESSION, EntityTypesIfc.MULT_EXPRESSION, EntityTypesIfc.MAXIMUM_FUNCTION, EntityTypesIfc.MINIMUM_FUNCTION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.MULTIPLE_ARITY_NUMERIC_EXPRESSION
}
