
import { label } from "./index"
import { text } from "./index"
import { general_property } from "./index"
import { property_definition } from "./index"
import { action_property } from "./index"
import { resource_property } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/general_property_association.htm */
export  class general_property_association extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.GENERAL_PROPERTY_ASSOCIATION
  }
  private name_? : string
  private description_? : string | null
  private base_definition_? : general_property
  private derived_definition_? : property_definition | action_property | resource_property

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

  public get base_definition() : general_property {
    if ( this.base_definition_ === void 0 ) {
      this.base_definition_ = this.extractElement( 2, false, general_property )
    }

    return this.base_definition_ as general_property
  }

  public get derived_definition() : property_definition | action_property | resource_property {
    if ( this.derived_definition_ === void 0 ) {
      
      const value : StepEntityBase< EntityTypesIfc > =
        this.extractReference( 3, false )

      if ( !( value instanceof property_definition ) && !( value instanceof action_property ) && !( value instanceof resource_property ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      this.derived_definition_ = value as (property_definition | action_property | resource_property)

    }

    return this.derived_definition_ as property_definition | action_property | resource_property
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.GENERAL_PROPERTY_ASSOCIATION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.GENERAL_PROPERTY_ASSOCIATION
}
