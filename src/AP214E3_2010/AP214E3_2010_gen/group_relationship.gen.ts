
import { label } from "./index"
import { text } from "./index"
import { group } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/group_relationship.htm */
export  class group_relationship extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.GROUP_RELATIONSHIP
  }
  private name_? : string
  private description_? : string | null
  private relating_group_? : group
  private related_group_? : group

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

  public get relating_group() : group {
    if ( this.relating_group_ === void 0 ) {
      this.relating_group_ = this.extractElement( 2, false, group )
    }

    return this.relating_group_ as group
  }

  public get related_group() : group {
    if ( this.related_group_ === void 0 ) {
      this.related_group_ = this.extractElement( 3, false, group )
    }

    return this.related_group_ as group
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.GROUP_RELATIONSHIP ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.GROUP_RELATIONSHIP
}
