
import { kinematic_pair } from "./index"
import { length_measure } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/rack_and_pinion_pair.htm */
export  class rack_and_pinion_pair extends kinematic_pair {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.RACK_AND_PINION_PAIR
  }
  private pinion_radius_? : number

  public get pinion_radius() : number {
    if ( this.pinion_radius_ === void 0 ) {
      this.pinion_radius_ = this.extractNumber( 5, false )
    }

    return this.pinion_radius_ as number
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.RACK_AND_PINION_PAIR ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.RACK_AND_PINION_PAIR
}
