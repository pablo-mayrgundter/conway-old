
import { security_classification } from "./index"
import { object_role } from "./index"
import {
  get_role,
} from '../ap214_functions'

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export abstract class security_classification_assignment extends StepEntityBase< EntityTypesAP214 > {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.SECURITY_CLASSIFICATION_ASSIGNMENT
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
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query: EntityTypesAP214[] = 
    [  ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.SECURITY_CLASSIFICATION_ASSIGNMENT
}
