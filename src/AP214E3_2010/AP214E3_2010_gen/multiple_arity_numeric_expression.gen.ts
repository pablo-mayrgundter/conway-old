
import { numeric_expression } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/multiple_arity_numeric_expression.htm */
export abstract class multiple_arity_numeric_expression extends numeric_expression {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.MULTIPLE_ARITY_NUMERIC_EXPRESSION
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.PLUS_EXPRESSION, EntityTypesIfc.MULT_EXPRESSION, EntityTypesIfc.MAXIMUM_FUNCTION, EntityTypesIfc.MINIMUM_FUNCTION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.MULTIPLE_ARITY_NUMERIC_EXPRESSION
}
