
import { label } from "./index"
import { text } from "./index"
import { organizational_project } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/organizational_project_relationship.htm */
export  class organizational_project_relationship extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.ORGANIZATIONAL_PROJECT_RELATIONSHIP
  }
  private name_? : string
  private description_? : string | null
  private relating_organizational_project_? : organizational_project
  private related_organizational_project_? : organizational_project

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

  public get relating_organizational_project() : organizational_project {
    if ( this.relating_organizational_project_ === void 0 ) {
      this.relating_organizational_project_ = this.extractElement( 2, false, organizational_project )
    }

    return this.relating_organizational_project_ as organizational_project
  }

  public get related_organizational_project() : organizational_project {
    if ( this.related_organizational_project_ === void 0 ) {
      this.related_organizational_project_ = this.extractElement( 3, false, organizational_project )
    }

    return this.related_organizational_project_ as organizational_project
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.ORGANIZATIONAL_PROJECT_RELATIONSHIP ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.ORGANIZATIONAL_PROJECT_RELATIONSHIP
}
