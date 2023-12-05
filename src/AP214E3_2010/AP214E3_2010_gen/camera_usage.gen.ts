
import { representation_map } from "./index"
import { camera_model } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/camera_usage.htm */
export  class camera_usage extends representation_map {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.CAMERA_USAGE
  }
  private mapping_origin_? : camera_model

  public get mapping_origin() : camera_model {
    if ( this.mapping_origin_ === void 0 ) {
      this.mapping_origin_ = this.extractElement( 2, false, camera_model )
    }

    return this.mapping_origin_ as camera_model
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.CAMERA_USAGE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.CAMERA_USAGE
}
