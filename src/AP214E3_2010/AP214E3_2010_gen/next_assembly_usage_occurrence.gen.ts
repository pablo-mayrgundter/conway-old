
import { assembly_component_usage } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/next_assembly_usage_occurrence.htm */
export  class next_assembly_usage_occurrence extends assembly_component_usage {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.NEXT_ASSEMBLY_USAGE_OCCURRENCE
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.NEXT_ASSEMBLY_USAGE_OCCURRENCE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.NEXT_ASSEMBLY_USAGE_OCCURRENCE
}
