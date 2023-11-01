
import { representation_item } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/topological_representation_item.htm */
export  class topological_representation_item extends representation_item {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.TOPOLOGICAL_REPRESENTATION_ITEM
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.TOPOLOGICAL_REPRESENTATION_ITEM, EntityTypesIfc.VERTEX, EntityTypesIfc.EDGE, EntityTypesIfc.FACE_BOUND, EntityTypesIfc.FACE, EntityTypesIfc.CONNECTED_EDGE_SET, EntityTypesIfc.CONNECTED_FACE_SET, EntityTypesIfc.LOOP, EntityTypesIfc.EDGE_CURVE, EntityTypesIfc.ORIENTED_EDGE, EntityTypesIfc.SUBEDGE, EntityTypesIfc.FACE_SURFACE, EntityTypesIfc.SUBFACE, EntityTypesIfc.ORIENTED_FACE, EntityTypesIfc.CLOSED_SHELL, EntityTypesIfc.OPEN_SHELL, EntityTypesIfc.VERTEX_LOOP, EntityTypesIfc.EDGE_LOOP, EntityTypesIfc.POLY_LOOP ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.TOPOLOGICAL_REPRESENTATION_ITEM
}
