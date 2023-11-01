
import { shape_aspect } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/symmetric_shape_aspect.htm */
export  class symmetric_shape_aspect extends shape_aspect {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.SYMMETRIC_SHAPE_ASPECT
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.SYMMETRIC_SHAPE_ASPECT ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.SYMMETRIC_SHAPE_ASPECT
}
