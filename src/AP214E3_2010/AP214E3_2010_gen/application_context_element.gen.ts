
import { label } from "./index"
import { application_context } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/application_context_element.htm */
export  class application_context_element extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.APPLICATION_CONTEXT_ELEMENT
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
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.APPLICATION_CONTEXT_ELEMENT, EntityTypesIfc.PRODUCT_CONCEPT_CONTEXT, EntityTypesIfc.PRODUCT_CONTEXT, EntityTypesIfc.PRODUCT_DEFINITION_CONTEXT ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.APPLICATION_CONTEXT_ELEMENT
}
