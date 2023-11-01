
import { comparison_expression } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/comparison_not_equal.htm */
export  class comparison_not_equal extends comparison_expression {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.COMPARISON_NOT_EQUAL
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.COMPARISON_NOT_EQUAL ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.COMPARISON_NOT_EQUAL
}
