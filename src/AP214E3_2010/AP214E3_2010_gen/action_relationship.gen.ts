
import { label } from "./index"
import { text } from "./index"
import { action } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class action_relationship extends StepEntityBase< EntityTypesAP214 > {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.ACTION_RELATIONSHIP
  }
  private name_? : string
  private description_? : string | null
  private relating_action_? : action
  private related_action_? : action

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

  public get relating_action() : action {
    if ( this.relating_action_ === void 0 ) {
      this.relating_action_ = this.extractElement( 2, false, action )
    }

    return this.relating_action_ as action
  }

  public get related_action() : action {
    if ( this.related_action_ === void 0 ) {
      this.related_action_ = this.extractElement( 3, false, action )
    }

    return this.related_action_ as action
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.ACTION_RELATIONSHIP ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.ACTION_RELATIONSHIP
}
