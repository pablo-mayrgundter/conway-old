
import { geometric_representation_item } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class point extends geometric_representation_item {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.POINT
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.POINT, EntityTypesAP214.CARTESIAN_POINT, EntityTypesAP214.POINT_ON_CURVE, EntityTypesAP214.POINT_ON_SURFACE, EntityTypesAP214.POINT_REPLICA, EntityTypesAP214.DEGENERATE_PCURVE ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.POINT
}
