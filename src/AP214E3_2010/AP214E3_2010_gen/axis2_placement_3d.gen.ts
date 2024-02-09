
import { placement } from "./index"
import { direction } from "./index"
import {
  build_axes,
} from '../ap214_functions'

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class axis2_placement_3d extends placement {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.AXIS2_PLACEMENT_3D
  }
  private axis_? : direction | null
  private ref_direction_? : direction | null

  public get axis() : direction | null {
    if ( this.axis_ === void 0 ) {
      this.axis_ = this.extractElement( 2, true, direction )
    }

    return this.axis_ as direction | null
  }

  public get ref_direction() : direction | null {
    if ( this.ref_direction_ === void 0 ) {
      this.ref_direction_ = this.extractElement( 3, true, direction )
    }

    return this.ref_direction_ as direction | null
  }

  public get p() : Array<direction> {
    return build_axes(this?.axis,this?.ref_direction);
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.AXIS2_PLACEMENT_3D ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.AXIS2_PLACEMENT_3D
}
