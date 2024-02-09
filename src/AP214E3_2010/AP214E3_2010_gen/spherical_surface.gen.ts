
import { elementary_surface } from "./index"
import { positive_length_measure } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class spherical_surface extends elementary_surface {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.SPHERICAL_SURFACE
  }
  private radius_? : number

  public get radius() : number {
    if ( this.radius_ === void 0 ) {
      this.radius_ = this.extractNumber( 2, false )
    }

    return this.radius_ as number
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.SPHERICAL_SURFACE ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.SPHERICAL_SURFACE
}
