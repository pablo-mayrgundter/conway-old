
import { loop } from "./index"
import { vertex } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class vertex_loop extends loop {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.VERTEX_LOOP
  }
  private loop_vertex_? : vertex

  public get loop_vertex() : vertex {
    if ( this.loop_vertex_ === void 0 ) {
      this.loop_vertex_ = this.extractElement( 1, false, vertex )
    }

    return this.loop_vertex_ as vertex
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.VERTEX_LOOP ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.VERTEX_LOOP
}
