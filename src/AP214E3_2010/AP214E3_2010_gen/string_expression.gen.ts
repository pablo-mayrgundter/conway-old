
import { expression } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export abstract class string_expression extends expression {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.STRING_EXPRESSION
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.INDEX_EXPRESSION, EntityTypesAP214.SUBSTRING_EXPRESSION, EntityTypesAP214.CONCAT_EXPRESSION, EntityTypesAP214.FORMAT_FUNCTION, EntityTypesAP214.STRING_LITERAL, EntityTypesAP214.STRING_VARIABLE ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.STRING_EXPRESSION
}
