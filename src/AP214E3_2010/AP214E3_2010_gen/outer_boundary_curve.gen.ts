
import { boundary_curve } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/outer_boundary_curve.htm */
export  class outer_boundary_curve extends boundary_curve {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.OUTER_BOUNDARY_CURVE
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.OUTER_BOUNDARY_CURVE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.OUTER_BOUNDARY_CURVE
}
