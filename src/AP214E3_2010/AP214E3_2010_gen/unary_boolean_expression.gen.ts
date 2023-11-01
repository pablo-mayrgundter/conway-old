
import { boolean_expression } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/unary_boolean_expression.htm */
export abstract class unary_boolean_expression extends boolean_expression {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.UNARY_BOOLEAN_EXPRESSION
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.NOT_EXPRESSION, EntityTypesIfc.ODD_FUNCTION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.UNARY_BOOLEAN_EXPRESSION
}
