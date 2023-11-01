
import { draughting_callout } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/dimension_curve_directed_callout.htm */
export  class dimension_curve_directed_callout extends draughting_callout {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.DIMENSION_CURVE_DIRECTED_CALLOUT
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.DIMENSION_CURVE_DIRECTED_CALLOUT ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.DIMENSION_CURVE_DIRECTED_CALLOUT
}
