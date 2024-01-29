
import { annotation_occurrence } from "./index"
import { point } from "./index"
import { annotation_fill_area } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class annotation_fill_area_occurrence extends annotation_occurrence {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.ANNOTATION_FILL_AREA_OCCURRENCE
  }
  private fill_style_target_? : point

  public get fill_style_target() : point {
    if ( this.fill_style_target_ === void 0 ) {
      this.fill_style_target_ = this.extractElement( 3, false, point )
    }

    return this.fill_style_target_ as point
  }

  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.ANNOTATION_FILL_AREA_OCCURRENCE ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.ANNOTATION_FILL_AREA_OCCURRENCE
}
