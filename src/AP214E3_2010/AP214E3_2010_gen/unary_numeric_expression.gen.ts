
import { numeric_expression } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/unary_numeric_expression.htm */
export abstract class unary_numeric_expression extends numeric_expression {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.UNARY_NUMERIC_EXPRESSION
  }
  private operand_? : numeric_expression

  public get operand() : numeric_expression {
    if ( this.operand_ === void 0 ) {
      this.operand_ = this.extractElement( 0, false, numeric_expression )
    }

    return this.operand_ as numeric_expression
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.ABS_FUNCTION, EntityTypesIfc.MINUS_FUNCTION, EntityTypesIfc.SIN_FUNCTION, EntityTypesIfc.COS_FUNCTION, EntityTypesIfc.TAN_FUNCTION, EntityTypesIfc.ASIN_FUNCTION, EntityTypesIfc.ACOS_FUNCTION, EntityTypesIfc.EXP_FUNCTION, EntityTypesIfc.LOG_FUNCTION, EntityTypesIfc.LOG2_FUNCTION, EntityTypesIfc.LOG10_FUNCTION, EntityTypesIfc.SQUARE_ROOT_FUNCTION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.UNARY_NUMERIC_EXPRESSION
}
