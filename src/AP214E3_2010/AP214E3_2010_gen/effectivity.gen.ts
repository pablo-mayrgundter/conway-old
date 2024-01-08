
import { identifier } from "./index"
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
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/effectivity.htm */
export  class effectivity extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.EFFECTIVITY
  }
  private id_? : string

  public get id() : string {
    if ( this.id_ === void 0 ) {
      this.id_ = this.extractString( 0, false )
    }

    return this.id_ as string
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
    [ EntityTypesIfc.EFFECTIVITY, EntityTypesIfc.SERIAL_NUMBERED_EFFECTIVITY, EntityTypesIfc.DATED_EFFECTIVITY, EntityTypesIfc.LOT_EFFECTIVITY, EntityTypesIfc.TIME_INTERVAL_BASED_EFFECTIVITY ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.EFFECTIVITY
}
