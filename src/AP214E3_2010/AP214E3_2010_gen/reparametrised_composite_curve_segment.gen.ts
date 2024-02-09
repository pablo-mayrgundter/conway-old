
import { composite_curve_segment } from "./index"
import { parameter_value } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class reparametrised_composite_curve_segment extends composite_curve_segment {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.REPARAMETRISED_COMPOSITE_CURVE_SEGMENT
  }
  private param_length_? : number

  public get param_length() : number {
    if ( this.param_length_ === void 0 ) {
      this.param_length_ = this.extractNumber( 3, false )
    }

    return this.param_length_ as number
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.REPARAMETRISED_COMPOSITE_CURVE_SEGMENT ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.REPARAMETRISED_COMPOSITE_CURVE_SEGMENT
}
