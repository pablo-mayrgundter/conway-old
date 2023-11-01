
import { label } from "./index"
import { action_request_solution } from "./index"
import { address } from "./index"
import { configuration_design } from "./index"
import { context_dependent_shape_representation } from "./index"
import { derived_unit } from "./index"
import { effectivity } from "./index"
import { person_and_organization } from "./index"
import { product_definition } from "./index"
import { product_definition_substitute } from "./index"
import { property_definition_representation } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/name_attribute.htm */
export  class name_attribute extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.NAME_ATTRIBUTE
  }
  private attribute_value_? : string
  private named_item_? : action_request_solution | address | configuration_design | context_dependent_shape_representation | derived_unit | effectivity | person_and_organization | product_definition | product_definition_substitute | property_definition_representation

  public get attribute_value() : string {
    if ( this.attribute_value_ === void 0 ) {
      this.attribute_value_ = this.extractString( 0, false )
    }

    return this.attribute_value_ as string
  }

  public get named_item() : action_request_solution | address | configuration_design | context_dependent_shape_representation | derived_unit | effectivity | person_and_organization | product_definition | product_definition_substitute | property_definition_representation {
    if ( this.named_item_ === void 0 ) {
      
      const value : StepEntityBase< EntityTypesIfc > =
        this.extractReference( 1, false )

      if ( !( value instanceof action_request_solution ) && !( value instanceof address ) && !( value instanceof configuration_design ) && !( value instanceof context_dependent_shape_representation ) && !( value instanceof derived_unit ) && !( value instanceof effectivity ) && !( value instanceof person_and_organization ) && !( value instanceof product_definition ) && !( value instanceof product_definition_substitute ) && !( value instanceof property_definition_representation ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      this.named_item_ = value as (action_request_solution | address | configuration_design | context_dependent_shape_representation | derived_unit | effectivity | person_and_organization | product_definition | product_definition_substitute | property_definition_representation)

    }

    return this.named_item_ as action_request_solution | address | configuration_design | context_dependent_shape_representation | derived_unit | effectivity | person_and_organization | product_definition | product_definition_substitute | property_definition_representation
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.NAME_ATTRIBUTE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.NAME_ATTRIBUTE
}
