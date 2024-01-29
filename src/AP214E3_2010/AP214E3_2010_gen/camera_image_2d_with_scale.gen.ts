
import { camera_image } from "./index"
import { positive_ratio_measure } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class camera_image_2d_with_scale extends camera_image {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.CAMERA_IMAGE_2D_WITH_SCALE
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.CAMERA_IMAGE_2D_WITH_SCALE ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.CAMERA_IMAGE_2D_WITH_SCALE
}
