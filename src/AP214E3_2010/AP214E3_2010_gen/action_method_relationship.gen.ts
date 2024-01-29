
import { label } from "./index"
import { text } from "./index"
import { action_method } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class action_method_relationship extends StepEntityBase< EntityTypesAP214 > {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.ACTION_METHOD_RELATIONSHIP
  }
  private name_? : string
  private description_? : string | null
  private relating_method_? : action_method
  private related_method_? : action_method

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

  public get relating_method() : action_method {
    if ( this.relating_method_ === void 0 ) {
      this.relating_method_ = this.extractElement( 2, false, action_method )
    }

    return this.relating_method_ as action_method
  }

  public get related_method() : action_method {
    if ( this.related_method_ === void 0 ) {
      this.related_method_ = this.extractElement( 3, false, action_method )
    }

    return this.related_method_ as action_method
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.ACTION_METHOD_RELATIONSHIP ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.ACTION_METHOD_RELATIONSHIP
}
