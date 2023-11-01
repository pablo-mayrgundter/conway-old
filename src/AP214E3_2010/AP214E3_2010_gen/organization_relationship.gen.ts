
import { label } from "./index"
import { text } from "./index"
import { organization } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/organization_relationship.htm */
export  class organization_relationship extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.ORGANIZATION_RELATIONSHIP
  }
  private name_? : string
  private description_? : string | null
  private relating_organization_? : organization
  private related_organization_? : organization

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

  public get relating_organization() : organization {
    if ( this.relating_organization_ === void 0 ) {
      this.relating_organization_ = this.extractElement( 2, false, organization )
    }

    return this.relating_organization_ as organization
  }

  public get related_organization() : organization {
    if ( this.related_organization_ === void 0 ) {
      this.related_organization_ = this.extractElement( 3, false, organization )
    }

    return this.related_organization_ as organization
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.ORGANIZATION_RELATIONSHIP ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.ORGANIZATION_RELATIONSHIP
}
