
import { identifier } from "./index"
import { action } from "./index"
import { address } from "./index"
import { product_category } from "./index"
import { property_definition } from "./index"
import { shape_aspect } from "./index"
import { shape_aspect_relationship } from "./index"
import { application_context } from "./index"
import { group } from "./index"
import { organizational_project } from "./index"
import { representation } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/id_attribute.htm */
export  class id_attribute extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.ID_ATTRIBUTE
  }
  private attribute_value_? : string
  private identified_item_? : action | address | product_category | property_definition | shape_aspect | shape_aspect_relationship | application_context | group | organizational_project | representation

  public get attribute_value() : string {
    if ( this.attribute_value_ === void 0 ) {
      this.attribute_value_ = this.extractString( 0, false )
    }

    return this.attribute_value_ as string
  }

  public get identified_item() : action | address | product_category | property_definition | shape_aspect | shape_aspect_relationship | application_context | group | organizational_project | representation {
    if ( this.identified_item_ === void 0 ) {
      
      const value : StepEntityBase< EntityTypesIfc > = 
        this.extractReference( 1, false )

      if ( !( value instanceof action ) && !( value instanceof address ) && !( value instanceof product_category ) && !( value instanceof property_definition ) && !( value instanceof shape_aspect ) && !( value instanceof shape_aspect_relationship ) && !( value instanceof application_context ) && !( value instanceof group ) && !( value instanceof organizational_project ) && !( value instanceof representation ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      this.identified_item_ = value as (action | address | product_category | property_definition | shape_aspect | shape_aspect_relationship | application_context | group | organizational_project | representation)

    }

    return this.identified_item_ as action | address | product_category | property_definition | shape_aspect | shape_aspect_relationship | application_context | group | organizational_project | representation
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.ID_ATTRIBUTE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.ID_ATTRIBUTE
}
