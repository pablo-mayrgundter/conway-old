
import { vertex } from "./index"
import { point } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class vertex_point extends vertex {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.VERTEX_POINT
  }
  private vertex_geometry_? : point

  public get vertex_geometry() : point {
    if ( this.vertex_geometry_ === void 0 ) {
      this.vertex_geometry_ = this.extractElement( 1, false, point )
    }

    return this.vertex_geometry_ as point
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.VERTEX_POINT ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.VERTEX_POINT
}
