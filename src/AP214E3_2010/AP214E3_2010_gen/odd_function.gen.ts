
import { unary_boolean_expression } from "./index"
import { numeric_expression } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/odd_function.htm */
export  class odd_function extends unary_boolean_expression {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.ODD_FUNCTION
  }
  private SELF\unary_generic_expression.operand_? : numeric_expression

  public get SELF\unary_generic_expression.operand() : numeric_expression {
    if ( this.SELF\unary_generic_expression.operand_ === void 0 ) {
      this.SELF\unary_generic_expression.operand_ = this.extractElement( 0, false, numeric_expression )
    }

    return this.SELF\unary_generic_expression.operand_ as numeric_expression
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.ODD_FUNCTION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.ODD_FUNCTION
}
