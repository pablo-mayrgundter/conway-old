
import { unary_numeric_expression } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/unary_function_call.htm */
export abstract class unary_function_call extends unary_numeric_expression {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.UNARY_FUNCTION_CALL
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
    EntityTypesIfc.UNARY_FUNCTION_CALL
}
