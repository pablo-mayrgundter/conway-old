
import { label } from "./index"
import { application_context } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class application_context_element extends StepEntityBase< EntityTypesAP214 > {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.APPLICATION_CONTEXT_ELEMENT
  }
  private name_? : string
  private frame_of_reference_? : application_context

  public get name() : string {
    if ( this.name_ === void 0 ) {
      this.name_ = this.extractString( 0, false )
    }

    return this.name_ as string
  }

  public get frame_of_reference() : application_context {
    if ( this.frame_of_reference_ === void 0 ) {
      this.frame_of_reference_ = this.extractElement( 1, false, application_context )
    }

    return this.frame_of_reference_ as application_context
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.APPLICATION_CONTEXT_ELEMENT, EntityTypesAP214.PRODUCT_CONCEPT_CONTEXT, EntityTypesAP214.PRODUCT_CONTEXT, EntityTypesAP214.PRODUCT_DEFINITION_CONTEXT ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.APPLICATION_CONTEXT_ELEMENT
}
