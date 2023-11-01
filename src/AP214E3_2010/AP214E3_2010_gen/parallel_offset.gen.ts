
import { derived_shape_aspect } from "./index"
import { measure_with_unit } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/parallel_offset.htm */
export  class parallel_offset extends derived_shape_aspect {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.PARALLEL_OFFSET
  }
  private offset_? : measure_with_unit

  public get offset() : measure_with_unit {
    if ( this.offset_ === void 0 ) {
      this.offset_ = this.extractElement( 4, false, measure_with_unit )
    }

    return this.offset_ as measure_with_unit
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.PARALLEL_OFFSET ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.PARALLEL_OFFSET
}
