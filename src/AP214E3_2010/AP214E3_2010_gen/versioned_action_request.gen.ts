
import { identifier } from "./index"
import { label } from "./index"
import { text } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class versioned_action_request extends StepEntityBase< EntityTypesAP214 > {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.VERSIONED_ACTION_REQUEST
  }
  private id_? : string
  private version_? : string
  private purpose_? : string
  private description_? : string | null

  public get id() : string {
    if ( this.id_ === void 0 ) {
      this.id_ = this.extractString( 0, false )
    }

    return this.id_ as string
  }

  public get version() : string {
    if ( this.version_ === void 0 ) {
      this.version_ = this.extractString( 1, false )
    }

    return this.version_ as string
  }

  public get purpose() : string {
    if ( this.purpose_ === void 0 ) {
      this.purpose_ = this.extractString( 2, false )
    }

    return this.purpose_ as string
  }

  public get description() : string | null {
    if ( this.description_ === void 0 ) {
      this.description_ = this.extractString( 3, true )
    }

    return this.description_ as string | null
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.VERSIONED_ACTION_REQUEST ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.VERSIONED_ACTION_REQUEST
}
