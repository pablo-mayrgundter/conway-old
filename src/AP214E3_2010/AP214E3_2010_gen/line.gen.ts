
import { curve } from "./index"
import { cartesian_point } from "./index"
import { vector } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class line extends curve {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.LINE
  }
  private pnt_? : cartesian_point
  private dir_? : vector

  public get pnt() : cartesian_point {
    if ( this.pnt_ === void 0 ) {
      this.pnt_ = this.extractElement( 1, false, cartesian_point )
    }

    return this.pnt_ as cartesian_point
  }

  public get dir() : vector {
    if ( this.dir_ === void 0 ) {
      this.dir_ = this.extractElement( 2, false, vector )
    }

    return this.dir_ as vector
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.LINE ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.LINE
}
