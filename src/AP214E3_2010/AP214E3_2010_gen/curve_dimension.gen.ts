
import { dimension_curve_directed_callout } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/curve_dimension.htm */
export  class curve_dimension extends dimension_curve_directed_callout {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.CURVE_DIMENSION
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.CURVE_DIMENSION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.CURVE_DIMENSION
}