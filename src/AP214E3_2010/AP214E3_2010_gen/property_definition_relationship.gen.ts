
import { label } from "./index"
import { text } from "./index"
import { property_definition } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/property_definition_relationship.htm */
export  class property_definition_relationship extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.PROPERTY_DEFINITION_RELATIONSHIP
  }
  private name_? : string
  private description_? : string
  private relating_property_definition_? : property_definition
  private related_property_definition_? : property_definition

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

  public get relating_property_definition() : property_definition {
    if ( this.relating_property_definition_ === void 0 ) {
      this.relating_property_definition_ = this.extractElement( 2, false, property_definition )
    }

    return this.relating_property_definition_ as property_definition
  }

  public get related_property_definition() : property_definition {
    if ( this.related_property_definition_ === void 0 ) {
      this.related_property_definition_ = this.extractElement( 3, false, property_definition )
    }

    return this.related_property_definition_ as property_definition
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.PROPERTY_DEFINITION_RELATIONSHIP ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.PROPERTY_DEFINITION_RELATIONSHIP
}
