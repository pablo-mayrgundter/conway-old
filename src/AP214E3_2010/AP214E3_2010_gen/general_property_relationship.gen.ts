
import { label } from "./index"
import { text } from "./index"
import { general_property } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/general_property_relationship.htm */
export  class general_property_relationship extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.GENERAL_PROPERTY_RELATIONSHIP
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
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.GENERAL_PROPERTY_RELATIONSHIP ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.GENERAL_PROPERTY_RELATIONSHIP
}
