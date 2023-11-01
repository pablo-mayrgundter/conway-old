
import { label } from "./index"
import { text } from "./index"
import { application_context } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/application_context_relationship.htm */
export  class application_context_relationship extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.APPLICATION_CONTEXT_RELATIONSHIP
  }
  private name_? : string
  private description_? : string | null
  private relating_context_? : application_context
  private related_context_? : application_context

  public get name() : string {
    if ( this.name_ === void 0 ) {
      this.name_ = this.extractString( 0, false )
    }

    return this.name_ as string
  }

  public get description() : string | null {
    if ( this.description_ === void 0 ) {
      this.description_ = this.extractString( 1, true )
    }

    return this.description_ as string | null
  }

  public get relating_context() : application_context {
    if ( this.relating_context_ === void 0 ) {
      this.relating_context_ = this.extractElement( 2, false, application_context )
    }

    return this.relating_context_ as application_context
  }

  public get related_context() : application_context {
    if ( this.related_context_ === void 0 ) {
      this.related_context_ = this.extractElement( 3, false, application_context )
    }

    return this.related_context_ as application_context
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.APPLICATION_CONTEXT_RELATIONSHIP ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.APPLICATION_CONTEXT_RELATIONSHIP
}
