
import { swept_surface } from "./index"
import { vector } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/surface_of_linear_extrusion.htm */
export  class surface_of_linear_extrusion extends swept_surface {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.SURFACE_OF_LINEAR_EXTRUSION
  }
  private extrusion_axis_? : vector

  public get extrusion_axis() : vector {
    if ( this.extrusion_axis_ === void 0 ) {
      this.extrusion_axis_ = this.extractElement( 2, false, vector )
    }

    return this.extrusion_axis_ as vector
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.SURFACE_OF_LINEAR_EXTRUSION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.SURFACE_OF_LINEAR_EXTRUSION
}
