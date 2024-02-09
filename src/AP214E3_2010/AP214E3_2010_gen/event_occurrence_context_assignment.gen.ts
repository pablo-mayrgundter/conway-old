
import { event_occurrence_assignment } from "./index"
import { event_occurrence_context_role } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export abstract class event_occurrence_context_assignment extends StepEntityBase< EntityTypesAP214 > {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.EVENT_OCCURRENCE_CONTEXT_ASSIGNMENT
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
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query: EntityTypesAP214[] = 
    [  ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.EVENT_OCCURRENCE_CONTEXT_ASSIGNMENT
}
