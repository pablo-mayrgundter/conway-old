
import { placement } from "./index"
import { direction } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class axis1_placement extends placement {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.AXIS1_PLACEMENT
  }
  private axis_? : direction | null

  public get axis() : direction | null {
    if ( this.axis_ === void 0 ) {
      this.axis_ = this.extractElement( 2, true, direction )
    }

    return this.axis_ as direction | null
  }

  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.AXIS1_PLACEMENT ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.AXIS1_PLACEMENT
}
