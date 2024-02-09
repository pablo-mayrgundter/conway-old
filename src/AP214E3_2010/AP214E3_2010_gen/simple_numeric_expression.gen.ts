
import { numeric_expression } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export abstract class simple_numeric_expression extends numeric_expression {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.SIMPLE_NUMERIC_EXPRESSION
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.NUMERIC_VARIABLE, EntityTypesAP214.INT_LITERAL, EntityTypesAP214.REAL_LITERAL, EntityTypesAP214.INT_NUMERIC_VARIABLE, EntityTypesAP214.REAL_NUMERIC_VARIABLE ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.SIMPLE_NUMERIC_EXPRESSION
}
