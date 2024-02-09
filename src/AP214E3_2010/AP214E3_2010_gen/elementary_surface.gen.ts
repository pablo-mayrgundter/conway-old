
import { surface } from "./index"
import { axis2_placement_3d } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class elementary_surface extends surface {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.ELEMENTARY_SURFACE
  }
  private position_? : axis2_placement_3d

  public get position() : axis2_placement_3d {
    if ( this.position_ === void 0 ) {
      this.position_ = this.extractElement( 1, false, axis2_placement_3d )
    }

    return this.position_ as axis2_placement_3d
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.ELEMENTARY_SURFACE, EntityTypesAP214.PLANE, EntityTypesAP214.CYLINDRICAL_SURFACE, EntityTypesAP214.CONICAL_SURFACE, EntityTypesAP214.SPHERICAL_SURFACE, EntityTypesAP214.TOROIDAL_SURFACE ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.ELEMENTARY_SURFACE
}
