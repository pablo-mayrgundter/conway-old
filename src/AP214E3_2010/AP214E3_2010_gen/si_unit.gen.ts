
import { named_unit } from "./index"
import { si_prefix, si_prefixDeserializeStep } from "./index"
import { si_unit_name, si_unit_nameDeserializeStep } from "./index"
import { dimensional_exponents } from "./index"
import {
  dimensions_for_si_unit,
} from '../ap214_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/si_unit.htm */
export  class si_unit extends named_unit {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.SI_UNIT
  }
  private prefix_? : si_prefix | null
  private name_? : si_unit_name

  public get prefix() : si_prefix | null {
    if ( this.prefix_ === void 0 ) {
      this.prefix_ = this.extractLambda( 1, si_prefixDeserializeStep, true )
    }

    return this.prefix_ as si_prefix | null
  }

  public get name() : si_unit_name {
    if ( this.name_ === void 0 ) {
      this.name_ = this.extractLambda( 2, si_unit_nameDeserializeStep, false )
    }

    return this.name_ as si_unit_name
  }

  public get dimensions() : dimensional_exponents {
    return dimensions_for_si_unit(this?.name);
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.SI_UNIT ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.SI_UNIT
}
