
import { geometric_representation_item } from "./index"
import { direction } from "./index"
import { length_measure } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class vector extends geometric_representation_item {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.VECTOR
  }
  private orientation_? : direction
  private magnitude_? : number

  public get orientation() : direction {
    if ( this.orientation_ === void 0 ) {
      this.orientation_ = this.extractElement( 1, false, direction )
    }

    return this.orientation_ as direction
  }

  public get magnitude() : number {
    if ( this.magnitude_ === void 0 ) {
      this.magnitude_ = this.extractNumber( 2, false )
    }

    return this.magnitude_ as number
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.VECTOR ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.VECTOR
}
