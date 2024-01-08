
import { label } from "./index"
import { text } from "./index"
import { identifier } from "./index"
import {
  get_id_value,
  get_description_value,
} from '../ap214_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/application_context.htm */
export  class application_context extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.APPLICATION_CONTEXT
  }
  private application_? : string

  public get application() : string {
    if ( this.application_ === void 0 ) {
      this.application_ = this.extractString( 0, false )
    }

    return this.application_ as string
  }

  public get description() : string {
    return get_description_value(this);
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
    [ EntityTypesIfc.APPLICATION_CONTEXT ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.APPLICATION_CONTEXT
}
