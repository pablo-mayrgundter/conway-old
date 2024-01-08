
import { face } from "./index"
import { face_bound } from "./index"
import {
  conditional_reverse,
} from '../ap214_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/oriented_face.htm */
export  class oriented_face extends face {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.ORIENTED_FACE
  }
  private face_element_? : face
  private orientation_? : boolean

  public get face_element() : face {
    if ( this.face_element_ === void 0 ) {
      this.face_element_ = this.extractElement( 2, false, face )
    }

    return this.face_element_ as face
  }

  public get orientation() : boolean {
    if ( this.orientation_ === void 0 ) {
      this.orientation_ = this.extractBoolean( 3, false )
    }

    return this.orientation_ as boolean
  }

  public get bounds() : Array<face_bound> {
    return conditional_reverse(this?.orientation,this?.face_element.bounds);
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.ORIENTED_FACE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.ORIENTED_FACE
}
