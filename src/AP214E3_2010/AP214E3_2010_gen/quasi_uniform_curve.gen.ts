
import { b_spline_curve } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/quasi_uniform_curve.htm */
export  class quasi_uniform_curve extends b_spline_curve {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.QUASI_UNIFORM_CURVE
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.QUASI_UNIFORM_CURVE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.QUASI_UNIFORM_CURVE
}
