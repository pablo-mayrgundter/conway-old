
import { label } from "./index"
import { text } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/approval_role.htm */
export  class approval_role extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.APPROVAL_ROLE
  }
  private role_? : string

  public get role() : string {
    if ( this.role_ === void 0 ) {
      this.role_ = this.extractString( 0, false )
    }

    return this.role_ as string
  }

  public get description() : string {
    return get_description_value(this);
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.APPROVAL_ROLE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.APPROVAL_ROLE
}
