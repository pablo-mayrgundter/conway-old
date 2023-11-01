
import { geometric_representation_item } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/point.htm */
export  class point extends geometric_representation_item {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.POINT
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.POINT, EntityTypesIfc.CARTESIAN_POINT, EntityTypesIfc.POINT_ON_CURVE, EntityTypesIfc.POINT_ON_SURFACE, EntityTypesIfc.POINT_REPLICA, EntityTypesIfc.DEGENERATE_PCURVE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.POINT
}
