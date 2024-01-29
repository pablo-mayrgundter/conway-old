
import { terminator_symbol } from "./index"
import { dimension_extent_usage, dimension_extent_usageDeserializeStep } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class dimension_curve_terminator extends terminator_symbol {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.DIMENSION_CURVE_TERMINATOR
  }
  private role_? : dimension_extent_usage

  public get role() : dimension_extent_usage {
    if ( this.role_ === void 0 ) {
      this.role_ = this.extractLambda( 5, dimension_extent_usageDeserializeStep, false )
    }

    return this.role_ as dimension_extent_usage
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.DIMENSION_CURVE_TERMINATOR ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.DIMENSION_CURVE_TERMINATOR
}
