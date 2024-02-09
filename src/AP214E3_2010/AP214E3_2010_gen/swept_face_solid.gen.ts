
import { solid_model } from "./index"
import { face_surface } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class swept_face_solid extends solid_model {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.SWEPT_FACE_SOLID
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
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.SWEPT_FACE_SOLID, EntityTypesAP214.EXTRUDED_FACE_SOLID, EntityTypesAP214.REVOLVED_FACE_SOLID ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.SWEPT_FACE_SOLID
}
