
import { label } from "./index"
import { text } from "./index"
import { approval } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/approval_relationship.htm */
export  class approval_relationship extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.APPROVAL_RELATIONSHIP
  }
  private name_? : string
  private description_? : string | null
  private relating_approval_? : approval
  private related_approval_? : approval

  public get name() : string {
    if ( this.name_ === void 0 ) {
      this.name_ = this.extractString( 0, false )
    }

    return this.name_ as string
  }

  public get description() : string | null {
    if ( this.description_ === void 0 ) {
      this.description_ = this.extractString( 1, true )
    }

    return this.description_ as string | null
  }

  public get relating_approval() : approval {
    if ( this.relating_approval_ === void 0 ) {
      this.relating_approval_ = this.extractElement( 2, false, approval )
    }

    return this.relating_approval_ as approval
  }

  public get related_approval() : approval {
    if ( this.related_approval_ === void 0 ) {
      this.related_approval_ = this.extractElement( 3, false, approval )
    }

    return this.related_approval_ as approval
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.APPROVAL_RELATIONSHIP ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.APPROVAL_RELATIONSHIP
}
