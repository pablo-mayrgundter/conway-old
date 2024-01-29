
import { numeric_expression } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export abstract class unary_numeric_expression extends numeric_expression {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.UNARY_NUMERIC_EXPRESSION
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.ABS_FUNCTION, EntityTypesAP214.MINUS_FUNCTION, EntityTypesAP214.SIN_FUNCTION, EntityTypesAP214.COS_FUNCTION, EntityTypesAP214.TAN_FUNCTION, EntityTypesAP214.ASIN_FUNCTION, EntityTypesAP214.ACOS_FUNCTION, EntityTypesAP214.EXP_FUNCTION, EntityTypesAP214.LOG_FUNCTION, EntityTypesAP214.LOG2_FUNCTION, EntityTypesAP214.LOG10_FUNCTION, EntityTypesAP214.SQUARE_ROOT_FUNCTION ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.UNARY_NUMERIC_EXPRESSION
}
