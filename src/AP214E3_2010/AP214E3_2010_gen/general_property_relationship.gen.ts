
import { label } from "./index"
import { text } from "./index"
import { general_property } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class general_property_relationship extends StepEntityBase< EntityTypesAP214 > {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.GENERAL_PROPERTY_RELATIONSHIP
  }
  private name_? : string
  private description_? : string | null
  private relating_property_? : general_property
  private related_property_? : general_property

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

  public get relating_property() : general_property {
    if ( this.relating_property_ === void 0 ) {
      this.relating_property_ = this.extractElement( 2, false, general_property )
    }

    return this.relating_property_ as general_property
  }

  public get related_property() : general_property {
    if ( this.related_property_ === void 0 ) {
      this.related_property_ = this.extractElement( 3, false, general_property )
    }

    return this.related_property_ as general_property
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.GENERAL_PROPERTY_RELATIONSHIP ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.GENERAL_PROPERTY_RELATIONSHIP
}
