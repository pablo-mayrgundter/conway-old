
import { camera_model } from "./index"
import { planar_box } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/camera_model_d2.htm */
export  class camera_model_d2 extends camera_model {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.CAMERA_MODEL_D2
  }
  private view_window_? : planar_box
  private view_window_clipping_? : boolean

  public get view_window() : planar_box {
    if ( this.view_window_ === void 0 ) {
      this.view_window_ = this.extractElement( 1, false, planar_box )
    }

    return this.view_window_ as planar_box
  }

  public get view_window_clipping() : boolean {
    if ( this.view_window_clipping_ === void 0 ) {
      this.view_window_clipping_ = this.extractBoolean( 2, false )
    }

    return this.view_window_clipping_ as boolean
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.CAMERA_MODEL_D2 ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.CAMERA_MODEL_D2
}
