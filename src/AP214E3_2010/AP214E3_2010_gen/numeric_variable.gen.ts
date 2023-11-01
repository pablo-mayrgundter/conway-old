
import { simple_numeric_expression } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/numeric_variable.htm */
export  class numeric_variable extends simple_numeric_expression {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.NUMERIC_VARIABLE
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.NUMERIC_VARIABLE, EntityTypesIfc.INT_NUMERIC_VARIABLE, EntityTypesIfc.REAL_NUMERIC_VARIABLE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.NUMERIC_VARIABLE
}
