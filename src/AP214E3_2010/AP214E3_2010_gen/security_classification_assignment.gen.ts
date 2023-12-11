
import { security_classification } from "./index"
import { object_role } from "./index"
import {
  get_role,
} from '../ap214_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/security_classification_assignment.htm */
export abstract class security_classification_assignment extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.SECURITY_CLASSIFICATION_ASSIGNMENT
  }
  private assigned_security_classification_? : security_classification

  public get assigned_security_classification() : security_classification {
    if ( this.assigned_security_classification_ === void 0 ) {
      this.assigned_security_classification_ = this.extractElement( 0, false, security_classification )
    }

    return this.assigned_security_classification_ as security_classification
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

  public static readonly query: EntityTypesIfc[] = 
    [  ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.SECURITY_CLASSIFICATION_ASSIGNMENT
}
