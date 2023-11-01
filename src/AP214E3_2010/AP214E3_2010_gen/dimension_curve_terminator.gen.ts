
import { terminator_symbol } from "./index"
import { dimension_extent_usage, dimension_extent_usageDeserializeStep } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/dimension_curve_terminator.htm */
export  class dimension_curve_terminator extends terminator_symbol {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.DIMENSION_CURVE_TERMINATOR
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
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.DIMENSION_CURVE_TERMINATOR ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.DIMENSION_CURVE_TERMINATOR
}
