
import { label } from "./index"
import { text } from "./index"
import { action } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/action_relationship.htm */
export  class action_relationship extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.ACTION_RELATIONSHIP
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
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.ACTION_RELATIONSHIP ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.ACTION_RELATIONSHIP
}
