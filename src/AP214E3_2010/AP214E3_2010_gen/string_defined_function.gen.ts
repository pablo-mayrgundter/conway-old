
import { defined_function } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/string_defined_function.htm */
export abstract class string_defined_function extends defined_function {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.STRING_DEFINED_FUNCTION
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [  ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.STRING_DEFINED_FUNCTION
}
