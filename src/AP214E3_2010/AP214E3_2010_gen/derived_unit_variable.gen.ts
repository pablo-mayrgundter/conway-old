
import { derived_unit } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/derived_unit_variable.htm */
export  class derived_unit_variable extends derived_unit {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.DERIVED_UNIT_VARIABLE
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.DERIVED_UNIT_VARIABLE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.DERIVED_UNIT_VARIABLE
}
