
import { composite_curve_segment } from "./index"
import { parameter_value } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/reparametrised_composite_curve_segment.htm */
export  class reparametrised_composite_curve_segment extends composite_curve_segment {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.REPARAMETRISED_COMPOSITE_CURVE_SEGMENT
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
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.REPARAMETRISED_COMPOSITE_CURVE_SEGMENT ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.REPARAMETRISED_COMPOSITE_CURVE_SEGMENT
}
