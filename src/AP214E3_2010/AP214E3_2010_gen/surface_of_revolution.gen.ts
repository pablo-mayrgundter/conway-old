
import { swept_surface } from "./index"
import { axis1_placement } from "./index"
import { line } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class surface_of_revolution extends swept_surface {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.SURFACE_OF_REVOLUTION
  }
  private axis_position_? : axis1_placement

  public get axis_position() : axis1_placement {
    if ( this.axis_position_ === void 0 ) {
      this.axis_position_ = this.extractElement( 2, false, axis1_placement )
    }

    return this.axis_position_ as axis1_placement
  }

  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.SURFACE_OF_REVOLUTION ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.SURFACE_OF_REVOLUTION
}
