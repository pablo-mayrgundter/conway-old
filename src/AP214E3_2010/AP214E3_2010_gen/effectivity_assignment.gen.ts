
import { effectivity } from "./index"
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
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/effectivity_assignment.htm */
export abstract class effectivity_assignment extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.EFFECTIVITY_ASSIGNMENT
  }
  private assigned_effectivity_? : effectivity

  public get assigned_effectivity() : effectivity {
    if ( this.assigned_effectivity_ === void 0 ) {
      this.assigned_effectivity_ = this.extractElement( 0, false, effectivity )
    }

    return this.assigned_effectivity_ as effectivity
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
    EntityTypesIfc.EFFECTIVITY_ASSIGNMENT
}
