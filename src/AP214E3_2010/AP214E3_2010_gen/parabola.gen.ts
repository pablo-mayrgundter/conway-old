
import { conic } from "./index"
import { length_measure } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class parabola extends conic {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.PARABOLA
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
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.PARABOLA ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.PARABOLA
}
