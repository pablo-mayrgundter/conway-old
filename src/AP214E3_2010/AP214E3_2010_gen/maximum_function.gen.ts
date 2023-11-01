
import { multiple_arity_function_call } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/maximum_function.htm */
export  class maximum_function extends multiple_arity_function_call {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.MAXIMUM_FUNCTION
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.MAXIMUM_FUNCTION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.MAXIMUM_FUNCTION
}
