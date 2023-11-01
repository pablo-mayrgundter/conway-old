
import { approval_status } from "./index"
import { label } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/approval.htm */
export  class approval extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.APPROVAL
  }
  private status_? : approval_status
  private level_? : string

  public get status() : approval_status {
    if ( this.status_ === void 0 ) {
      this.status_ = this.extractElement( 0, false, approval_status )
    }

    return this.status_ as approval_status
  }

  public get level() : string {
    if ( this.level_ === void 0 ) {
      this.level_ = this.extractString( 1, false )
    }

    return this.level_ as string
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.APPROVAL ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.APPROVAL
}
