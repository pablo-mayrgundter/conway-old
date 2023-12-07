
import { binary_boolean_expression } from "./index"
import { boolean_expression } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/xor_expression.htm */
export  class xor_expression extends binary_boolean_expression {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.XOR_EXPRESSION
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.XOR_EXPRESSION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.XOR_EXPRESSION
}
