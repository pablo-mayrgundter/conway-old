
import { numeric_expression } from "./index"
import { string_expression } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/value_function.htm */
export  class value_function extends numeric_expression {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.VALUE_FUNCTION
  }
  private SELF\unary_generic_expression.operand_? : string_expression

  public get SELF\unary_generic_expression.operand() : string_expression {
    if ( this.SELF\unary_generic_expression.operand_ === void 0 ) {
      this.SELF\unary_generic_expression.operand_ = this.extractElement( 0, false, string_expression )
    }

    return this.SELF\unary_generic_expression.operand_ as string_expression
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.VALUE_FUNCTION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.VALUE_FUNCTION
}
