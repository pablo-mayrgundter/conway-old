
import { pair_value } from "./index"
import { universal_pair } from "./index"
import { plane_angle_measure } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/universal_pair_value.htm */
export  class universal_pair_value extends pair_value {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.UNIVERSAL_PAIR_VALUE
  }
  private applies_to_pair_? : universal_pair
  private first_rotation_angle_? : number
  private second_rotation_angle_? : number

  public get applies_to_pair() : universal_pair {
    if ( this.applies_to_pair_ === void 0 ) {
      this.applies_to_pair_ = this.extractElement( 1, false, universal_pair )
    }

    return this.applies_to_pair_ as universal_pair
  }

  public get first_rotation_angle() : number {
    if ( this.first_rotation_angle_ === void 0 ) {
      this.first_rotation_angle_ = this.extractNumber( 2, false )
    }

    return this.first_rotation_angle_ as number
  }

  public get second_rotation_angle() : number {
    if ( this.second_rotation_angle_ === void 0 ) {
      this.second_rotation_angle_ = this.extractNumber( 3, false )
    }

    return this.second_rotation_angle_ as number
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.UNIVERSAL_PAIR_VALUE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.UNIVERSAL_PAIR_VALUE
}
