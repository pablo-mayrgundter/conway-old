
import { effectivity } from "./index"
import { identifier } from "./index"
import { measure_with_unit } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/lot_effectivity.htm */
export  class lot_effectivity extends effectivity {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.LOT_EFFECTIVITY
  }
  private effectivity_lot_id_? : string
  private effectivity_lot_size_? : measure_with_unit

  public get effectivity_lot_id() : string {
    if ( this.effectivity_lot_id_ === void 0 ) {
      this.effectivity_lot_id_ = this.extractString( 1, false )
    }

    return this.effectivity_lot_id_ as string
  }

  public get effectivity_lot_size() : measure_with_unit {
    if ( this.effectivity_lot_size_ === void 0 ) {
      this.effectivity_lot_size_ = this.extractElement( 2, false, measure_with_unit )
    }

    return this.effectivity_lot_size_ as measure_with_unit
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.LOT_EFFECTIVITY ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.LOT_EFFECTIVITY
}
