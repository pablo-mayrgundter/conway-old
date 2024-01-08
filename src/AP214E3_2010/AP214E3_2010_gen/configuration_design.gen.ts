
import { configuration_item } from "./index"
import { product_definition } from "./index"
import { product_definition_formation } from "./index"
import { label } from "./index"
import { text } from "./index"
import {
  get_name_value,
  get_description_value,
} from '../ap214_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/configuration_design.htm */
export  class configuration_design extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.CONFIGURATION_DESIGN
  }
  private configuration_? : configuration_item
  private design_? : product_definition | product_definition_formation

  public get configuration() : configuration_item {
    if ( this.configuration_ === void 0 ) {
      this.configuration_ = this.extractElement( 0, false, configuration_item )
    }

    return this.configuration_ as configuration_item
  }

  public get design() : product_definition | product_definition_formation {
    if ( this.design_ === void 0 ) {
      
      const value : StepEntityBase< EntityTypesIfc > = 
        this.extractReference( 1, false )

      if ( !( value instanceof product_definition ) && !( value instanceof product_definition_formation ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      this.design_ = value as (product_definition | product_definition_formation)

    }

    return this.design_ as product_definition | product_definition_formation
  }

  public get name() : string {
    return get_name_value(this);
  }

  public get description() : string {
    return get_description_value(this);
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.CONFIGURATION_DESIGN ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.CONFIGURATION_DESIGN
}
