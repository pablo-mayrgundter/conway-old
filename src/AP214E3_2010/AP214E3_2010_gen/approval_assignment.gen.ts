
import { approval } from "./index"
import { object_role } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/approval_assignment.htm */
export abstract class approval_assignment extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.APPROVAL_ASSIGNMENT
  }
  private assigned_approval_? : approval

  public get assigned_approval() : approval {
    if ( this.assigned_approval_ === void 0 ) {
      this.assigned_approval_ = this.extractElement( 0, false, approval )
    }

    return this.assigned_approval_ as approval
  }

  public get role() : object_role {
    return get_role(this);
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
    EntityTypesIfc.APPROVAL_ASSIGNMENT
}
