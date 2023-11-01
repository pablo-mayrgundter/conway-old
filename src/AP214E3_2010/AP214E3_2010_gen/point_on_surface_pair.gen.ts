
import { kinematic_pair } from "./index"
import { surface } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/point_on_surface_pair.htm */
export  class point_on_surface_pair extends kinematic_pair {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.POINT_ON_SURFACE_PAIR
  }
  private pair_surface_? : surface

  public get pair_surface() : surface {
    if ( this.pair_surface_ === void 0 ) {
      this.pair_surface_ = this.extractElement( 5, false, surface )
    }

    return this.pair_surface_ as surface
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.POINT_ON_SURFACE_PAIR ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.POINT_ON_SURFACE_PAIR
}
