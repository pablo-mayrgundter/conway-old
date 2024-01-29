
import { label } from "./index"
import { text } from "./index"
import { action_property } from "./index"
import { representation } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class action_property_representation extends StepEntityBase< EntityTypesAP214 > {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.ACTION_PROPERTY_REPRESENTATION
  }
  private name_? : string
  private description_? : string
  private property_? : action_property
  private representation_? : representation

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

  public get property() : action_property {
    if ( this.property_ === void 0 ) {
      this.property_ = this.extractElement( 2, false, action_property )
    }

    return this.property_ as action_property
  }

  public get representation() : representation {
    if ( this.representation_ === void 0 ) {
      this.representation_ = this.extractElement( 3, false, representation )
    }

    return this.representation_ as representation
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.ACTION_PROPERTY_REPRESENTATION ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.ACTION_PROPERTY_REPRESENTATION
}
