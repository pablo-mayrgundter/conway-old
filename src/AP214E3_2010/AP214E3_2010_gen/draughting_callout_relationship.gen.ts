
import { label } from "./index"
import { text } from "./index"
import { draughting_callout } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class draughting_callout_relationship extends StepEntityBase< EntityTypesAP214 > {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.DRAUGHTING_CALLOUT_RELATIONSHIP
  }
  private name_? : string
  private description_? : string
  private relating_draughting_callout_? : draughting_callout
  private related_draughting_callout_? : draughting_callout

  public get name() : string {
    if ( this.name_ === void 0 ) {
      this.name_ = this.extractString( 0, false )
    }

    return this.name_ as string
  }

  public get description() : string {
    if ( this.description_ === void 0 ) {
      this.description_ = this.extractString( 1, false )
    }

    return this.description_ as string
  }

  public get relating_draughting_callout() : draughting_callout {
    if ( this.relating_draughting_callout_ === void 0 ) {
      this.relating_draughting_callout_ = this.extractElement( 2, false, draughting_callout )
    }

    return this.relating_draughting_callout_ as draughting_callout
  }

  public get related_draughting_callout() : draughting_callout {
    if ( this.related_draughting_callout_ === void 0 ) {
      this.related_draughting_callout_ = this.extractElement( 3, false, draughting_callout )
    }

    return this.related_draughting_callout_ as draughting_callout
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.DRAUGHTING_CALLOUT_RELATIONSHIP ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.DRAUGHTING_CALLOUT_RELATIONSHIP
}
