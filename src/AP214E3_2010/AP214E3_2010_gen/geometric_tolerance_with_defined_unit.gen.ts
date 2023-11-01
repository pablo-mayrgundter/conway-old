
import { geometric_tolerance } from "./index"
import { measure_with_unit } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/geometric_tolerance_with_defined_unit.htm */
export  class geometric_tolerance_with_defined_unit extends geometric_tolerance {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.GEOMETRIC_TOLERANCE_WITH_DEFINED_UNIT
  }
  private unit_size_? : measure_with_unit

  public get unit_size() : measure_with_unit {
    if ( this.unit_size_ === void 0 ) {
      this.unit_size_ = this.extractElement( 4, false, measure_with_unit )
    }

    return this.unit_size_ as measure_with_unit
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.GEOMETRIC_TOLERANCE_WITH_DEFINED_UNIT ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.GEOMETRIC_TOLERANCE_WITH_DEFINED_UNIT
}
