
import { uncertainty_qualifier } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class standard_uncertainty extends uncertainty_qualifier {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.STANDARD_UNCERTAINTY
  }
  private uncertainty_value_? : number

  public get uncertainty_value() : number {
    if ( this.uncertainty_value_ === void 0 ) {
      this.uncertainty_value_ = this.extractNumber( 2, false )
    }

    return this.uncertainty_value_ as number
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.STANDARD_UNCERTAINTY ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.STANDARD_UNCERTAINTY
}
