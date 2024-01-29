
import { multiple_arity_numeric_expression } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export abstract class multiple_arity_function_call extends multiple_arity_numeric_expression {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.MULTIPLE_ARITY_FUNCTION_CALL
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.MAXIMUM_FUNCTION, EntityTypesAP214.MINIMUM_FUNCTION ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.MULTIPLE_ARITY_FUNCTION_CALL
}
