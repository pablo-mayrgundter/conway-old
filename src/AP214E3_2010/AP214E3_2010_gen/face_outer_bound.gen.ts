
import { face_bound } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/face_outer_bound.htm */
export  class face_outer_bound extends face_bound {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.FACE_OUTER_BOUND
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.FACE_OUTER_BOUND ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.FACE_OUTER_BOUND
}
