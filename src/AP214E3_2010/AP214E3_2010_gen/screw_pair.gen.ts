
import { kinematic_pair } from "./index"
import { length_measure } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class screw_pair extends kinematic_pair {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.SCREW_PAIR
  }
  private pitch_? : number

  public get pitch() : number {
    if ( this.pitch_ === void 0 ) {
      this.pitch_ = this.extractNumber( 5, false )
    }

    return this.pitch_ as number
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.SCREW_PAIR ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.SCREW_PAIR
}
