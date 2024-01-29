
import { topological_representation_item } from "./index"
import { vertex } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class edge extends topological_representation_item {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.EDGE
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
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.EDGE, EntityTypesAP214.EDGE_CURVE, EntityTypesAP214.ORIENTED_EDGE, EntityTypesAP214.SUBEDGE ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.EDGE
}
