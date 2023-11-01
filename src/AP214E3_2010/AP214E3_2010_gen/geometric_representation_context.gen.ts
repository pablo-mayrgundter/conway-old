
import { representation_context } from "./index"
import { dimension_count } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/geometric_representation_context.htm */
export  class geometric_representation_context extends representation_context {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.GEOMETRIC_REPRESENTATION_CONTEXT
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
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.GEOMETRIC_REPRESENTATION_CONTEXT ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.GEOMETRIC_REPRESENTATION_CONTEXT
}
