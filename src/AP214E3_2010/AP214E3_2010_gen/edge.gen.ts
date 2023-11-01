
import { topological_representation_item } from "./index"
import { vertex } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/edge.htm */
export  class edge extends topological_representation_item {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.EDGE
  }
  private edge_start_? : vertex
  private edge_end_? : vertex

  public get edge_start() : vertex {
    if ( this.edge_start_ === void 0 ) {
      this.edge_start_ = this.extractElement( 1, false, vertex )
    }

    return this.edge_start_ as vertex
  }

  public get edge_end() : vertex {
    if ( this.edge_end_ === void 0 ) {
      this.edge_end_ = this.extractElement( 2, false, vertex )
    }

    return this.edge_end_ as vertex
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.EDGE, EntityTypesIfc.EDGE_CURVE, EntityTypesIfc.ORIENTED_EDGE, EntityTypesIfc.SUBEDGE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.EDGE
}
