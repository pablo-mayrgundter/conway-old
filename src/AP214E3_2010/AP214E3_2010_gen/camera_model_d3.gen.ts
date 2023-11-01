
import { camera_model } from "./index"
import { axis2_placement_3d } from "./index"
import { view_volume } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/camera_model_d3.htm */
export  class camera_model_d3 extends camera_model {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.CAMERA_MODEL_D3
  }
  private view_reference_system_? : axis2_placement_3d
  private perspective_of_volume_? : view_volume

  public get view_reference_system() : axis2_placement_3d {
    if ( this.view_reference_system_ === void 0 ) {
      this.view_reference_system_ = this.extractElement( 1, false, axis2_placement_3d )
    }

    return this.view_reference_system_ as axis2_placement_3d
  }

  public get perspective_of_volume() : view_volume {
    if ( this.perspective_of_volume_ === void 0 ) {
      this.perspective_of_volume_ = this.extractElement( 2, false, view_volume )
    }

    return this.perspective_of_volume_ as view_volume
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.CAMERA_MODEL_D3 ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.CAMERA_MODEL_D3
}
