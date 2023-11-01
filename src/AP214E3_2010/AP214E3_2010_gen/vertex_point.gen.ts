
import { vertex } from "./index"
import { point } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/vertex_point.htm */
export  class vertex_point extends vertex {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.VERTEX_POINT
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
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.VERTEX_POINT ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.VERTEX_POINT
}
