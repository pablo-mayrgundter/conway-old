
import { pair_value } from "./index"
import { revolute_pair } from "./index"
import { plane_angle_measure } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/revolute_pair_value.htm */
export  class revolute_pair_value extends pair_value {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.REVOLUTE_PAIR_VALUE
  }
  private SELF\pair_value.applies_to_pair_? : revolute_pair
  private actual_rotation_? : number

  public get SELF\pair_value.applies_to_pair() : revolute_pair {
    if ( this.SELF\pair_value.applies_to_pair_ === void 0 ) {
      this.SELF\pair_value.applies_to_pair_ = this.extractElement( 1, false, revolute_pair )
    }

    return this.SELF\pair_value.applies_to_pair_ as revolute_pair
  }

  public get actual_rotation() : number {
    if ( this.actual_rotation_ === void 0 ) {
      this.actual_rotation_ = this.extractNumber( 2, false )
    }

    return this.actual_rotation_ as number
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.REVOLUTE_PAIR_VALUE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.REVOLUTE_PAIR_VALUE
}
