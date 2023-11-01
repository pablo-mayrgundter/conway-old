
import { conic } from "./index"
import { length_measure } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/parabola.htm */
export  class parabola extends conic {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.PARABOLA
  }
  private focal_dist_? : number

  public get focal_dist() : number {
    if ( this.focal_dist_ === void 0 ) {
      this.focal_dist_ = this.extractNumber( 2, false )
    }

    return this.focal_dist_ as number
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.PARABOLA ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.PARABOLA
}
