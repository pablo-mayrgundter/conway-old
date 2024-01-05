
import { label } from "./index"
import { text } from "./index"
import { characterized_object } from "./index"
import { product_definition } from "./index"
import { product_definition_relationship } from "./index"
import { product_definition_shape } from "./index"
import { shape_aspect } from "./index"
import { shape_aspect_relationship } from "./index"
import { identifier } from "./index"
import {
  get_id_value,
} from '../ap214_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/property_definition.htm */
export  class property_definition extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.PROPERTY_DEFINITION
  }
  private name_? : string
  private description_? : string | null
  private definition_? : characterized_object | product_definition | product_definition_relationship | product_definition_shape | shape_aspect | shape_aspect_relationship

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

  public get definition() : characterized_object | product_definition | product_definition_relationship | product_definition_shape | shape_aspect | shape_aspect_relationship {
    if ( this.definition_ === void 0 ) {
      
      const value : StepEntityBase< EntityTypesIfc > = 
        this.extractReference( 2, false )

      if ( !( value instanceof characterized_object ) && !( value instanceof product_definition ) && !( value instanceof product_definition_relationship ) && !( value instanceof product_definition_shape ) && !( value instanceof shape_aspect ) && !( value instanceof shape_aspect_relationship ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      this.definition_ = value as (characterized_object | product_definition | product_definition_relationship | product_definition_shape | shape_aspect | shape_aspect_relationship)

    }

    return this.definition_ as characterized_object | product_definition | product_definition_relationship | product_definition_shape | shape_aspect | shape_aspect_relationship
  }

  public get id() : string {
    return get_id_value(this);
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.PROPERTY_DEFINITION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.PROPERTY_DEFINITION
}
