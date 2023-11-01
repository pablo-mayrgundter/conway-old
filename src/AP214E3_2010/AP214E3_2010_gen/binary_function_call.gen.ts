
import { binary_numeric_expression } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/binary_function_call.htm */
export abstract class binary_function_call extends binary_numeric_expression {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.BINARY_FUNCTION_CALL
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.ATAN_FUNCTION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.BINARY_FUNCTION_CALL
}
