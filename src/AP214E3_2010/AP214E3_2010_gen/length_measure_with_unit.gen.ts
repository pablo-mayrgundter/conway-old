
import { measure_with_unit } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/length_measure_with_unit.htm */
export  class length_measure_with_unit extends measure_with_unit {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.LENGTH_MEASURE_WITH_UNIT
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.LENGTH_MEASURE_WITH_UNIT ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.LENGTH_MEASURE_WITH_UNIT
}
