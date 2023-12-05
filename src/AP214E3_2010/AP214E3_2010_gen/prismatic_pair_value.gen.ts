
import { pair_value } from "./index"
import { prismatic_pair } from "./index"
import { length_measure } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/prismatic_pair_value.htm */
export  class prismatic_pair_value extends pair_value {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.PRISMATIC_PAIR_VALUE
  }
  private applies_to_pair_? : prismatic_pair
  private actual_translation_? : number

  public get applies_to_pair() : prismatic_pair {
    if ( this.applies_to_pair_ === void 0 ) {
      this.applies_to_pair_ = this.extractElement( 1, false, prismatic_pair )
    }

    return this.applies_to_pair_ as prismatic_pair
  }

  public get actual_translation() : number {
    if ( this.actual_translation_ === void 0 ) {
      this.actual_translation_ = this.extractNumber( 2, false )
    }

    return this.actual_translation_ as number
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.PRISMATIC_PAIR_VALUE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.PRISMATIC_PAIR_VALUE
}
