
import { context_dependent_unit } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/expression_conversion_based_unit.htm */
export  class expression_conversion_based_unit extends context_dependent_unit {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.EXPRESSION_CONVERSION_BASED_UNIT
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.EXPRESSION_CONVERSION_BASED_UNIT ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.EXPRESSION_CONVERSION_BASED_UNIT
}