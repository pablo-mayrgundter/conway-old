
import { surface } from "./index"
import { axis2_placement_3d } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/elementary_surface.htm */
export  class elementary_surface extends surface {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.ELEMENTARY_SURFACE
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
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.ELEMENTARY_SURFACE, EntityTypesIfc.PLANE, EntityTypesIfc.CYLINDRICAL_SURFACE, EntityTypesIfc.CONICAL_SURFACE, EntityTypesIfc.SPHERICAL_SURFACE, EntityTypesIfc.TOROIDAL_SURFACE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.ELEMENTARY_SURFACE
}
