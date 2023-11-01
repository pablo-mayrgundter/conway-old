
import { label } from "./index"
import { text } from "./index"
import { action_method } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/action_method_relationship.htm */
export  class action_method_relationship extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.ACTION_METHOD_RELATIONSHIP
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
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.ACTION_METHOD_RELATIONSHIP ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.ACTION_METHOD_RELATIONSHIP
}
