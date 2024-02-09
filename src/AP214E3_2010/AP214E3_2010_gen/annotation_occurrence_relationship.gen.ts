
import { label } from "./index"
import { text } from "./index"
import { annotation_occurrence } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class annotation_occurrence_relationship extends StepEntityBase< EntityTypesAP214 > {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.ANNOTATION_OCCURRENCE_RELATIONSHIP
  }
  private name_? : string
  private description_? : string
  private relating_annotation_occurrence_? : annotation_occurrence
  private related_annotation_occurrence_? : annotation_occurrence

  public get name() : string {
    if ( this.name_ === void 0 ) {
      this.name_ = this.extractString( 0, false )
    }

    return this.name_ as string
  }

  public get description() : string {
    if ( this.description_ === void 0 ) {
      this.description_ = this.extractString( 1, false )
    }

    return this.description_ as string
  }

  public get relating_annotation_occurrence() : annotation_occurrence {
    if ( this.relating_annotation_occurrence_ === void 0 ) {
      this.relating_annotation_occurrence_ = this.extractElement( 2, false, annotation_occurrence )
    }

    return this.relating_annotation_occurrence_ as annotation_occurrence
  }

  public get related_annotation_occurrence() : annotation_occurrence {
    if ( this.related_annotation_occurrence_ === void 0 ) {
      this.related_annotation_occurrence_ = this.extractElement( 3, false, annotation_occurrence )
    }

    return this.related_annotation_occurrence_ as annotation_occurrence
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.ANNOTATION_OCCURRENCE_RELATIONSHIP ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.ANNOTATION_OCCURRENCE_RELATIONSHIP
}
