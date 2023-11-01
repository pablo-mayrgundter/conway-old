
import { draughting_callout } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/geometrical_tolerance_callout.htm */
export  class geometrical_tolerance_callout extends draughting_callout {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.GEOMETRICAL_TOLERANCE_CALLOUT
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.GEOMETRICAL_TOLERANCE_CALLOUT ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.GEOMETRICAL_TOLERANCE_CALLOUT
}
