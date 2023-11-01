
import { dimensional_size } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/externally_defined_dimension_definition.htm */
export  class externally_defined_dimension_definition extends dimensional_size {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.EXTERNALLY_DEFINED_DIMENSION_DEFINITION
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.EXTERNALLY_DEFINED_DIMENSION_DEFINITION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.EXTERNALLY_DEFINED_DIMENSION_DEFINITION
}
