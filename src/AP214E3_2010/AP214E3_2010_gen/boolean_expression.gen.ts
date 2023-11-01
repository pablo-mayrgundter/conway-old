
import { expression } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/boolean_expression.htm */
export abstract class boolean_expression extends expression {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.BOOLEAN_EXPRESSION
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.INTERVAL_EXPRESSION, EntityTypesIfc.BOOLEAN_LITERAL, EntityTypesIfc.BOOLEAN_VARIABLE, EntityTypesIfc.NOT_EXPRESSION, EntityTypesIfc.ODD_FUNCTION, EntityTypesIfc.XOR_EXPRESSION, EntityTypesIfc.EQUALS_EXPRESSION, EntityTypesIfc.AND_EXPRESSION, EntityTypesIfc.OR_EXPRESSION, EntityTypesIfc.COMPARISON_EQUAL, EntityTypesIfc.COMPARISON_GREATER, EntityTypesIfc.COMPARISON_GREATER_EQUAL, EntityTypesIfc.COMPARISON_LESS, EntityTypesIfc.COMPARISON_LESS_EQUAL, EntityTypesIfc.COMPARISON_NOT_EQUAL, EntityTypesIfc.LIKE_EXPRESSION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.BOOLEAN_EXPRESSION
}
