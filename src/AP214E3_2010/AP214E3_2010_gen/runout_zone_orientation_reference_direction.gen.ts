
import { runout_zone_orientation } from "./index"
import { shape_aspect_relationship } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/runout_zone_orientation_reference_direction.htm */
export  class runout_zone_orientation_reference_direction extends runout_zone_orientation {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.RUNOUT_ZONE_ORIENTATION_REFERENCE_DIRECTION
  }
  private orientation_defining_relationship_? : shape_aspect_relationship

  public get orientation_defining_relationship() : shape_aspect_relationship {
    if ( this.orientation_defining_relationship_ === void 0 ) {
      this.orientation_defining_relationship_ = this.extractElement( 1, false, shape_aspect_relationship )
    }

    return this.orientation_defining_relationship_ as shape_aspect_relationship
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.RUNOUT_ZONE_ORIENTATION_REFERENCE_DIRECTION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.RUNOUT_ZONE_ORIENTATION_REFERENCE_DIRECTION
}
