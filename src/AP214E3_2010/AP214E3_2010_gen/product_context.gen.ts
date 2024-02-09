
import { application_context_element } from "./index"
import { label } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class product_context extends application_context_element {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.PRODUCT_CONTEXT
  }
  private discipline_type_? : string

  public get discipline_type() : string {
    if ( this.discipline_type_ === void 0 ) {
      this.discipline_type_ = this.extractString( 2, false )
    }

    return this.discipline_type_ as string
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.PRODUCT_CONTEXT ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.PRODUCT_CONTEXT
}
