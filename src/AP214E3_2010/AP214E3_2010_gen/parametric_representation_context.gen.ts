
import { representation_context } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/parametric_representation_context.htm */
export  class parametric_representation_context extends representation_context {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.PARAMETRIC_REPRESENTATION_CONTEXT
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.PARAMETRIC_REPRESENTATION_CONTEXT ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.PARAMETRIC_REPRESENTATION_CONTEXT
}
