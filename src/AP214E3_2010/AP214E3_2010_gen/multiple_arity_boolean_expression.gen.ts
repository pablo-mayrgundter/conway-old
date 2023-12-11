
import { boolean_expression } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/multiple_arity_boolean_expression.htm */
export abstract class multiple_arity_boolean_expression extends boolean_expression {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.MULTIPLE_ARITY_BOOLEAN_EXPRESSION
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.AND_EXPRESSION, EntityTypesIfc.OR_EXPRESSION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.MULTIPLE_ARITY_BOOLEAN_EXPRESSION
}