
import { label } from "./index"
import { text } from "./index"
import { action } from "./index"
import { action_method } from "./index"
import { action_method_relationship } from "./index"
import { action_relationship } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/action_property.htm */
export  class action_property extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.ACTION_PROPERTY
  }
  private name_? : string
  private description_? : string
  private definition_? : action | action_method | action_method_relationship | action_relationship

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

  public get definition() : action | action_method | action_method_relationship | action_relationship {
    if ( this.definition_ === void 0 ) {
      
      const value : StepEntityBase< EntityTypesIfc > =
        this.extractReference( 2, false )

      if ( !( value instanceof action ) && !( value instanceof action_method ) && !( value instanceof action_method_relationship ) && !( value instanceof action_relationship ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      this.definition_ = value as (action | action_method | action_method_relationship | action_relationship)

    }

    return this.definition_ as action | action_method | action_method_relationship | action_relationship
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.ACTION_PROPERTY ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.ACTION_PROPERTY
}
