
import { representation_context } from "./index"
import { dimension_count } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class geometric_representation_context extends representation_context {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.GEOMETRIC_REPRESENTATION_CONTEXT
  }
  private coordinate_space_dimension_? : number

  public get coordinate_space_dimension() : number {
    if ( this.coordinate_space_dimension_ === void 0 ) {
      this.coordinate_space_dimension_ = this.extractNumber( 2, false )
    }

    return this.coordinate_space_dimension_ as number
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.GEOMETRIC_REPRESENTATION_CONTEXT ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.GEOMETRIC_REPRESENTATION_CONTEXT
}
