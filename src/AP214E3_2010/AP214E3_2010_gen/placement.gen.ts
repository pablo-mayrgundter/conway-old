
import { geometric_representation_item } from "./index"
import { cartesian_point } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/placement.htm */
export  class placement extends geometric_representation_item {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.PLACEMENT
  }
  private location_? : cartesian_point

  public get location() : cartesian_point {
    if ( this.location_ === void 0 ) {
      this.location_ = this.extractElement( 1, false, cartesian_point )
    }

    return this.location_ as cartesian_point
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.PLACEMENT, EntityTypesIfc.AXIS1_PLACEMENT, EntityTypesIfc.AXIS2_PLACEMENT_2D, EntityTypesIfc.AXIS2_PLACEMENT_3D ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.PLACEMENT
}
