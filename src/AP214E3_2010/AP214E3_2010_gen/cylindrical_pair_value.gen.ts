
import { pair_value } from "./index"
import { cylindrical_pair } from "./index"
import { length_measure } from "./index"
import { plane_angle_measure } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/cylindrical_pair_value.htm */
export  class cylindrical_pair_value extends pair_value {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.CYLINDRICAL_PAIR_VALUE
  }
  private actual_translation_? : number
  private actual_rotation_? : number


  public get actual_translation() : number {
    if ( this.actual_translation_ === void 0 ) {
      this.actual_translation_ = this.extractNumber( 2, false )
    }

    return this.actual_translation_ as number
  }

  public get actual_rotation() : number {
    if ( this.actual_rotation_ === void 0 ) {
      this.actual_rotation_ = this.extractNumber( 3, false )
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
    [ EntityTypesIfc.CYLINDRICAL_PAIR_VALUE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.CYLINDRICAL_PAIR_VALUE
}
