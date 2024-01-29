
import { label } from "./index"
import { text } from "./index"
import { organizational_project } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class organizational_project_relationship extends StepEntityBase< EntityTypesAP214 > {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.ORGANIZATIONAL_PROJECT_RELATIONSHIP
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
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.ORGANIZATIONAL_PROJECT_RELATIONSHIP ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.ORGANIZATIONAL_PROJECT_RELATIONSHIP
}
