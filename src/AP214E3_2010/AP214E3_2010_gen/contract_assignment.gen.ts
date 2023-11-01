
import { contract } from "./index"
import { object_role } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/contract_assignment.htm */
export abstract class contract_assignment extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.CONTRACT_ASSIGNMENT
  }
  private assigned_contract_? : contract

  public get assigned_contract() : contract {
    if ( this.assigned_contract_ === void 0 ) {
      this.assigned_contract_ = this.extractElement( 0, false, contract )
    }

    return this.assigned_contract_ as contract
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
    EntityTypesIfc.CONTRACT_ASSIGNMENT
}
