
import { topological_representation_item } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/loop.htm */
export  class loop extends topological_representation_item {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.LOOP
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.LOOP, EntityTypesIfc.VERTEX_LOOP, EntityTypesIfc.EDGE_LOOP, EntityTypesIfc.POLY_LOOP ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.LOOP
}
