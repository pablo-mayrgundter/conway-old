
import { group } from "./index"
import { classification_role } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/classification_assignment.htm */
export abstract class classification_assignment extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.CLASSIFICATION_ASSIGNMENT
  }
  private assigned_class_? : group
  private role_? : classification_role

  public get assigned_class() : group {
    if ( this.assigned_class_ === void 0 ) {
      this.assigned_class_ = this.extractElement( 0, false, group )
    }

    return this.assigned_class_ as group
  }

  public get role() : classification_role {
    if ( this.role_ === void 0 ) {
      this.role_ = this.extractElement( 1, false, classification_role )
    }

    return this.role_ as classification_role
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
    EntityTypesIfc.CLASSIFICATION_ASSIGNMENT
}
