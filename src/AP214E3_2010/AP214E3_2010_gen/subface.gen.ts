
import { face } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/subface.htm */
export  class subface extends face {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.SUBFACE
  }
  private parent_face_? : face

  public get parent_face() : face {
    if ( this.parent_face_ === void 0 ) {
      this.parent_face_ = this.extractElement( 2, false, face )
    }

    return this.parent_face_ as face
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.SUBFACE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.SUBFACE
}
