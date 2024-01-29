
import { datum_reference } from "./index"
import { limit_condition, limit_conditionDeserializeStep } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class referenced_modified_datum extends datum_reference {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.REFERENCED_MODIFIED_DATUM
  }
  private modifier_? : limit_condition

  public get modifier() : limit_condition {
    if ( this.modifier_ === void 0 ) {
      this.modifier_ = this.extractLambda( 2, limit_conditionDeserializeStep, false )
    }

    return this.modifier_ as limit_condition
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.REFERENCED_MODIFIED_DATUM ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.REFERENCED_MODIFIED_DATUM
}
