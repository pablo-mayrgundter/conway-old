
import { expression } from "./index"
import {
  is_sql_mappable,
  is_int_expr,
} from '../ap214_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/numeric_expression.htm */
export abstract class numeric_expression extends expression {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.NUMERIC_EXPRESSION
  }


  public get is_int() : boolean {
    return is_int_expr(this);
  }

  public get sql_mappable() : boolean {
    return is_sql_mappable(this);
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.LENGTH_FUNCTION, EntityTypesIfc.VALUE_FUNCTION, EntityTypesIfc.NUMERIC_VARIABLE, EntityTypesIfc.INT_LITERAL, EntityTypesIfc.REAL_LITERAL, EntityTypesIfc.INT_NUMERIC_VARIABLE, EntityTypesIfc.REAL_NUMERIC_VARIABLE, EntityTypesIfc.ABS_FUNCTION, EntityTypesIfc.MINUS_FUNCTION, EntityTypesIfc.SIN_FUNCTION, EntityTypesIfc.COS_FUNCTION, EntityTypesIfc.TAN_FUNCTION, EntityTypesIfc.ASIN_FUNCTION, EntityTypesIfc.ACOS_FUNCTION, EntityTypesIfc.EXP_FUNCTION, EntityTypesIfc.LOG_FUNCTION, EntityTypesIfc.LOG2_FUNCTION, EntityTypesIfc.LOG10_FUNCTION, EntityTypesIfc.SQUARE_ROOT_FUNCTION, EntityTypesIfc.MINUS_EXPRESSION, EntityTypesIfc.DIV_EXPRESSION, EntityTypesIfc.MOD_EXPRESSION, EntityTypesIfc.SLASH_EXPRESSION, EntityTypesIfc.POWER_EXPRESSION, EntityTypesIfc.ATAN_FUNCTION, EntityTypesIfc.PLUS_EXPRESSION, EntityTypesIfc.MULT_EXPRESSION, EntityTypesIfc.MAXIMUM_FUNCTION, EntityTypesIfc.MINIMUM_FUNCTION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.NUMERIC_EXPRESSION
}
