
import { connected_face_set } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/connected_face_sub_set.htm */
export  class connected_face_sub_set extends connected_face_set {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.CONNECTED_FACE_SUB_SET
  }
  private parent_face_set_? : connected_face_set

  public get parent_face_set() : connected_face_set {
    if ( this.parent_face_set_ === void 0 ) {
      this.parent_face_set_ = this.extractElement( 2, false, connected_face_set )
    }

    return this.parent_face_set_ as connected_face_set
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.CONNECTED_FACE_SUB_SET ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.CONNECTED_FACE_SUB_SET
}
