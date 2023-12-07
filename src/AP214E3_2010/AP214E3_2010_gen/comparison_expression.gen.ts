
import { boolean_expression } from "./index"
import { expression } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/comparison_expression.htm */
export abstract class comparison_expression extends boolean_expression {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.COMPARISON_EXPRESSION
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.COMPARISON_EQUAL, EntityTypesIfc.COMPARISON_GREATER, EntityTypesIfc.COMPARISON_GREATER_EQUAL, EntityTypesIfc.COMPARISON_LESS, EntityTypesIfc.COMPARISON_LESS_EQUAL, EntityTypesIfc.COMPARISON_NOT_EQUAL, EntityTypesIfc.LIKE_EXPRESSION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.COMPARISON_EXPRESSION
}
