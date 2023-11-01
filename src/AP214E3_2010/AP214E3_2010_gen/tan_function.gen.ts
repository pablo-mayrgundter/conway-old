
import { unary_function_call } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/tan_function.htm */
export  class tan_function extends unary_function_call {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.TAN_FUNCTION
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.TAN_FUNCTION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.TAN_FUNCTION
}
