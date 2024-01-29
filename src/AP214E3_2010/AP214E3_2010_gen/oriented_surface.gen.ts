
import { surface } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class oriented_surface extends surface {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.ORIENTED_SURFACE
  }
  private orientation_? : boolean

  public get orientation() : boolean {
    if ( this.orientation_ === void 0 ) {
      this.orientation_ = this.extractBoolean( 1, false )
    }

    return this.orientation_ as boolean
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.ORIENTED_SURFACE ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.ORIENTED_SURFACE
}
