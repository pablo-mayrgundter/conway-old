
import { effectivity_assignment } from "./index"
import { effectivity_context_role } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/effectivity_context_assignment.htm */
export abstract class effectivity_context_assignment extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.EFFECTIVITY_CONTEXT_ASSIGNMENT
  }
  private assigned_effectivity_assignment_? : effectivity_assignment
  private role_? : effectivity_context_role

  public get assigned_effectivity_assignment() : effectivity_assignment {
    if ( this.assigned_effectivity_assignment_ === void 0 ) {
      this.assigned_effectivity_assignment_ = this.extractElement( 0, false, effectivity_assignment )
    }

    return this.assigned_effectivity_assignment_ as effectivity_assignment
  }

  public get role() : effectivity_context_role {
    if ( this.role_ === void 0 ) {
      this.role_ = this.extractElement( 1, false, effectivity_context_role )
    }

    return this.role_ as effectivity_context_role
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query: EntityTypesIfc[] = 
    [  ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.EFFECTIVITY_CONTEXT_ASSIGNMENT
}
