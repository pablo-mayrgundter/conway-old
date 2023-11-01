
import { measure_with_unit } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/tolerance_value.htm */
export  class tolerance_value extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.TOLERANCE_VALUE
  }
  private lower_bound_? : measure_with_unit
  private upper_bound_? : measure_with_unit

  public get lower_bound() : measure_with_unit {
    if ( this.lower_bound_ === void 0 ) {
      this.lower_bound_ = this.extractElement( 0, false, measure_with_unit )
    }

    return this.lower_bound_ as measure_with_unit
  }

  public get upper_bound() : measure_with_unit {
    if ( this.upper_bound_ === void 0 ) {
      this.upper_bound_ = this.extractElement( 1, false, measure_with_unit )
    }

    return this.upper_bound_ as measure_with_unit
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.TOLERANCE_VALUE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.TOLERANCE_VALUE
}
