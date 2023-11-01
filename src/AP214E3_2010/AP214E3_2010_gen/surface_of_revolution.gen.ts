
import { swept_surface } from "./index"
import { axis1_placement } from "./index"
import { line } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/surface_of_revolution.htm */
export  class surface_of_revolution extends swept_surface {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.SURFACE_OF_REVOLUTION
  }
  private axis_position_? : axis1_placement

  public get axis_position() : axis1_placement {
    if ( this.axis_position_ === void 0 ) {
      this.axis_position_ = this.extractElement( 2, false, axis1_placement )
    }

    return this.axis_position_ as axis1_placement
  }

  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.SURFACE_OF_REVOLUTION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.SURFACE_OF_REVOLUTION
}
