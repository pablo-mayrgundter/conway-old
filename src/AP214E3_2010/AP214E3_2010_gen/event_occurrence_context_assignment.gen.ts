
import { event_occurrence_assignment } from "./index"
import { event_occurrence_context_role } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/event_occurrence_context_assignment.htm */
export abstract class event_occurrence_context_assignment extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.EVENT_OCCURRENCE_CONTEXT_ASSIGNMENT
  }
  private assigned_event_occurrence_assignment_? : event_occurrence_assignment
  private role_? : event_occurrence_context_role

  public get assigned_event_occurrence_assignment() : event_occurrence_assignment {
    if ( this.assigned_event_occurrence_assignment_ === void 0 ) {
      this.assigned_event_occurrence_assignment_ = this.extractElement( 0, false, event_occurrence_assignment )
    }

    return this.assigned_event_occurrence_assignment_ as event_occurrence_assignment
  }

  public get role() : event_occurrence_context_role {
    if ( this.role_ === void 0 ) {
      this.role_ = this.extractElement( 1, false, event_occurrence_context_role )
    }

    return this.role_ as event_occurrence_context_role
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [  ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.EVENT_OCCURRENCE_CONTEXT_ASSIGNMENT
}
