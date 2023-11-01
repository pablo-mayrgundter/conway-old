
import { camera_model_d3 } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/camera_model_d3_with_hlhsr.htm */
export  class camera_model_d3_with_hlhsr extends camera_model_d3 {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.CAMERA_MODEL_D3_WITH_HLHSR
  }
  private hidden_line_surface_removal_? : boolean

  public get hidden_line_surface_removal() : boolean {
    if ( this.hidden_line_surface_removal_ === void 0 ) {
      this.hidden_line_surface_removal_ = this.extractBoolean( 3, false )
    }

    return this.hidden_line_surface_removal_ as boolean
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.CAMERA_MODEL_D3_WITH_HLHSR ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.CAMERA_MODEL_D3_WITH_HLHSR
}
