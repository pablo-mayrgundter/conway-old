
import { named_unit } from "./index"
import { label } from "./index"
import { measure_with_unit } from "./index"
import { dimensional_exponents } from "./index"
import {
  derive_dimensional_exponents,
} from '../ap214_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/conversion_based_unit.htm */
export  class conversion_based_unit extends named_unit {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.CONVERSION_BASED_UNIT
  }
  private name_? : string
  private conversion_factor_? : measure_with_unit

  public get name() : string {
    if ( this.name_ === void 0 ) {
      this.name_ = this.extractString( 1, false )
    }

    return this.name_ as string
  }

  public get conversion_factor() : measure_with_unit {
    if ( this.conversion_factor_ === void 0 ) {
      this.conversion_factor_ = this.extractElement( 2, false, measure_with_unit )
    }

    return this.conversion_factor_ as measure_with_unit
  }

  public get dimensions() : dimensional_exponents {
    return derive_dimensional_exponents(this?.conversion_factor?.unit_component);
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.CONVERSION_BASED_UNIT ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.CONVERSION_BASED_UNIT
}
