
import { curve } from "./index"
import { cartesian_point } from "./index"
import { vector } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/line.htm */
export  class line extends curve {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.LINE
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
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.LINE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.LINE
}
