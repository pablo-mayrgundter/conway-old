
import { mapped_item } from "./index"
import { camera_usage } from "./index"
import { planar_box } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/camera_image.htm */
export  class camera_image extends mapped_item {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.CAMERA_IMAGE
  }



  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.CAMERA_IMAGE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.CAMERA_IMAGE
}
