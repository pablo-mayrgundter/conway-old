
import { pair_value } from "./index"
import { planar_pair } from "./index"
import { plane_angle_measure } from "./index"
import { length_measure } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/planar_pair_value.htm */
export  class planar_pair_value extends pair_value {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.PLANAR_PAIR_VALUE
  }
  private applies_to_pair_? : planar_pair
  private actual_rotation_? : number
  private actual_translation_x_? : number
  private actual_translation_y_? : number

  public get applies_to_pair() : planar_pair {
    if ( this.applies_to_pair_ === void 0 ) {
      this.applies_to_pair_ = this.extractElement( 1, false, planar_pair )
    }

    return this.applies_to_pair_ as planar_pair
  }

  public get actual_rotation() : number {
    if ( this.actual_rotation_ === void 0 ) {
      this.actual_rotation_ = this.extractNumber( 2, false )
    }

    return this.actual_rotation_ as number
  }

  public get actual_translation_x() : number {
    if ( this.actual_translation_x_ === void 0 ) {
      this.actual_translation_x_ = this.extractNumber( 3, false )
    }

    return this.actual_translation_x_ as number
  }

  public get actual_translation_y() : number {
    if ( this.actual_translation_y_ === void 0 ) {
      this.actual_translation_y_ = this.extractNumber( 4, false )
    }

    return this.actual_translation_y_ as number
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.PLANAR_PAIR_VALUE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.PLANAR_PAIR_VALUE
}
