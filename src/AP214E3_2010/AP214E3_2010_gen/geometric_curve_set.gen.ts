
import { geometric_set } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/geometric_curve_set.htm */
export  class geometric_curve_set extends geometric_set {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.GEOMETRIC_CURVE_SET
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.GEOMETRIC_CURVE_SET ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.GEOMETRIC_CURVE_SET
}
