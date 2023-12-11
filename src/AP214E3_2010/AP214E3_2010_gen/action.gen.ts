
import { label } from "./index"
import { text } from "./index"
import { action_method } from "./index"
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
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/action.htm */
export  class action extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.ACTION
  }
  private name_? : string
  private description_? : string | null
  private chosen_method_? : action_method

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

  public get chosen_method() : action_method {
    if ( this.chosen_method_ === void 0 ) {
      this.chosen_method_ = this.extractElement( 2, false, action_method )
    }

    return this.chosen_method_ as action_method
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
    [ EntityTypesIfc.ACTION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.ACTION
}
