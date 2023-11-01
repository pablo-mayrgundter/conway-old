
import { solid_model } from "./index"
import { face_surface } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/swept_face_solid.htm */
export  class swept_face_solid extends solid_model {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.SWEPT_FACE_SOLID
  }
  private swept_face_? : face_surface

  public get swept_face() : face_surface {
    if ( this.swept_face_ === void 0 ) {
      this.swept_face_ = this.extractElement( 1, false, face_surface )
    }

    return this.swept_face_ as face_surface
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.SWEPT_FACE_SOLID, EntityTypesIfc.EXTRUDED_FACE_SOLID, EntityTypesIfc.REVOLVED_FACE_SOLID ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.SWEPT_FACE_SOLID
}
