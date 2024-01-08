
import { identifier } from "./index"
import { text } from "./index"
import { product_definition_formation } from "./index"
import { product_definition_context } from "./index"
import { label } from "./index"
import {
  get_name_value,
} from '../ap214_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/product_definition.htm */
export  class product_definition extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.PRODUCT_DEFINITION
  }
  private id_? : string
  private description_? : string | null
  private formation_? : product_definition_formation
  private frame_of_reference_? : product_definition_context

  public get id() : string {
    if ( this.id_ === void 0 ) {
      this.id_ = this.extractString( 0, false )
    }

    return this.id_ as string
  }

  public get description() : string | null {
    if ( this.description_ === void 0 ) {
      this.description_ = this.extractString( 1, true )
    }

    return this.description_ as string | null
  }

  public get formation() : product_definition_formation {
    if ( this.formation_ === void 0 ) {
      this.formation_ = this.extractElement( 2, false, product_definition_formation )
    }

    return this.formation_ as product_definition_formation
  }

  public get frame_of_reference() : product_definition_context {
    if ( this.frame_of_reference_ === void 0 ) {
      this.frame_of_reference_ = this.extractElement( 3, false, product_definition_context )
    }

    return this.frame_of_reference_ as product_definition_context
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
    [ EntityTypesIfc.PRODUCT_DEFINITION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.PRODUCT_DEFINITION
}
