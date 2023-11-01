
import { kinematic_pair } from "./index"
import { plane_angle_measure } from "./index"
import {
  NVL,
} from '../../step/parsing/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/universal_pair.htm */
export  class universal_pair extends kinematic_pair {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.UNIVERSAL_PAIR
  }
  private input_skew_angle_? : number | null

  public get input_skew_angle() : number | null {
    if ( this.input_skew_angle_ === void 0 ) {
      this.input_skew_angle_ = this.extractNumber( 5, true )
    }

    return this.input_skew_angle_ as number | null
  }

  public get skew_angle() : number {
    return NVL(this?.input_skew_angle,0.0);
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.UNIVERSAL_PAIR ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.UNIVERSAL_PAIR
}
