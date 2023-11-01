
import { general_property } from "./index"
import { property_definition } from "./index"
import { property_definition_relationship } from "./index"
import { shape_aspect } from "./index"
import { shape_aspect_relationship } from "./index"
import { representation } from "./index"
import { text } from "./index"
import { label } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/property_definition_representation.htm */
export  class property_definition_representation extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.PROPERTY_DEFINITION_REPRESENTATION
  }
  private definition_? : general_property | property_definition | property_definition_relationship | shape_aspect | shape_aspect_relationship
  private used_representation_? : representation

  public get definition() : general_property | property_definition | property_definition_relationship | shape_aspect | shape_aspect_relationship {
    if ( this.definition_ === void 0 ) {
      
      const value : StepEntityBase< EntityTypesIfc > =
        this.extractReference( 0, false )

      if ( !( value instanceof general_property ) && !( value instanceof property_definition ) && !( value instanceof property_definition_relationship ) && !( value instanceof shape_aspect ) && !( value instanceof shape_aspect_relationship ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      this.definition_ = value as (general_property | property_definition | property_definition_relationship | shape_aspect | shape_aspect_relationship)

    }

    return this.definition_ as general_property | property_definition | property_definition_relationship | shape_aspect | shape_aspect_relationship
  }

  public get used_representation() : representation {
    if ( this.used_representation_ === void 0 ) {
      this.used_representation_ = this.extractElement( 1, false, representation )
    }

    return this.used_representation_ as representation
  }

  public get description() : string {
    return get_description_value(this);
  }

  public get name() : string {
    return get_name_value(this);
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.PROPERTY_DEFINITION_REPRESENTATION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.PROPERTY_DEFINITION_REPRESENTATION
}
