
import { named_unit } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/electric_current_unit.htm */
export  class electric_current_unit extends named_unit {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.ELECTRIC_CURRENT_UNIT
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.ELECTRIC_CURRENT_UNIT ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.ELECTRIC_CURRENT_UNIT
}
