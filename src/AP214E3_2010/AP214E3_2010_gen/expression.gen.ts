
import { generic_expression } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/expression.htm */
export abstract class expression extends generic_expression {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.EXPRESSION
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.LENGTH_FUNCTION, EntityTypesIfc.VALUE_FUNCTION, EntityTypesIfc.NUMERIC_VARIABLE, EntityTypesIfc.INT_LITERAL, EntityTypesIfc.REAL_LITERAL, EntityTypesIfc.INT_NUMERIC_VARIABLE, EntityTypesIfc.REAL_NUMERIC_VARIABLE, EntityTypesIfc.ABS_FUNCTION, EntityTypesIfc.MINUS_FUNCTION, EntityTypesIfc.SIN_FUNCTION, EntityTypesIfc.COS_FUNCTION, EntityTypesIfc.TAN_FUNCTION, EntityTypesIfc.ASIN_FUNCTION, EntityTypesIfc.ACOS_FUNCTION, EntityTypesIfc.EXP_FUNCTION, EntityTypesIfc.LOG_FUNCTION, EntityTypesIfc.LOG2_FUNCTION, EntityTypesIfc.LOG10_FUNCTION, EntityTypesIfc.SQUARE_ROOT_FUNCTION, EntityTypesIfc.MINUS_EXPRESSION, EntityTypesIfc.DIV_EXPRESSION, EntityTypesIfc.MOD_EXPRESSION, EntityTypesIfc.SLASH_EXPRESSION, EntityTypesIfc.POWER_EXPRESSION, EntityTypesIfc.ATAN_FUNCTION, EntityTypesIfc.PLUS_EXPRESSION, EntityTypesIfc.MULT_EXPRESSION, EntityTypesIfc.MAXIMUM_FUNCTION, EntityTypesIfc.MINIMUM_FUNCTION, EntityTypesIfc.INTERVAL_EXPRESSION, EntityTypesIfc.BOOLEAN_LITERAL, EntityTypesIfc.BOOLEAN_VARIABLE, EntityTypesIfc.NOT_EXPRESSION, EntityTypesIfc.ODD_FUNCTION, EntityTypesIfc.XOR_EXPRESSION, EntityTypesIfc.EQUALS_EXPRESSION, EntityTypesIfc.AND_EXPRESSION, EntityTypesIfc.OR_EXPRESSION, EntityTypesIfc.COMPARISON_EQUAL, EntityTypesIfc.COMPARISON_GREATER, EntityTypesIfc.COMPARISON_GREATER_EQUAL, EntityTypesIfc.COMPARISON_LESS, EntityTypesIfc.COMPARISON_LESS_EQUAL, EntityTypesIfc.COMPARISON_NOT_EQUAL, EntityTypesIfc.LIKE_EXPRESSION, EntityTypesIfc.INDEX_EXPRESSION, EntityTypesIfc.SUBSTRING_EXPRESSION, EntityTypesIfc.CONCAT_EXPRESSION, EntityTypesIfc.FORMAT_FUNCTION, EntityTypesIfc.STRING_LITERAL, EntityTypesIfc.STRING_VARIABLE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.EXPRESSION
}
