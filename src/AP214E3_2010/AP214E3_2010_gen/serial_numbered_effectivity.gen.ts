
import { effectivity } from "./index"
import { identifier } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/serial_numbered_effectivity.htm */
export  class serial_numbered_effectivity extends effectivity {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.SERIAL_NUMBERED_EFFECTIVITY
  }
  private effectivity_start_id_? : string
  private effectivity_end_id_? : string | null

  public get effectivity_start_id() : string {
    if ( this.effectivity_start_id_ === void 0 ) {
      this.effectivity_start_id_ = this.extractString( 1, false )
    }

    return this.effectivity_start_id_ as string
  }

  public get effectivity_end_id() : string | null {
    if ( this.effectivity_end_id_ === void 0 ) {
      this.effectivity_end_id_ = this.extractString( 2, true )
    }

    return this.effectivity_end_id_ as string | null
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.SERIAL_NUMBERED_EFFECTIVITY ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.SERIAL_NUMBERED_EFFECTIVITY
}
