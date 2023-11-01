
import { drawing_revision } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/drawing_revision_sequence.htm */
export  class drawing_revision_sequence extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.DRAWING_REVISION_SEQUENCE
  }
  private predecessor_? : drawing_revision
  private successor_? : drawing_revision

  public get predecessor() : drawing_revision {
    if ( this.predecessor_ === void 0 ) {
      this.predecessor_ = this.extractElement( 0, false, drawing_revision )
    }

    return this.predecessor_ as drawing_revision
  }

  public get successor() : drawing_revision {
    if ( this.successor_ === void 0 ) {
      this.successor_ = this.extractElement( 1, false, drawing_revision )
    }

    return this.successor_ as drawing_revision
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.DRAWING_REVISION_SEQUENCE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.DRAWING_REVISION_SEQUENCE
}
