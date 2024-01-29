
import { styled_item } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class annotation_occurrence extends styled_item {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.ANNOTATION_OCCURRENCE
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.ANNOTATION_OCCURRENCE, EntityTypesAP214.ANNOTATION_CURVE_OCCURRENCE, EntityTypesAP214.ANNOTATION_FILL_AREA_OCCURRENCE, EntityTypesAP214.ANNOTATION_TEXT_OCCURRENCE, EntityTypesAP214.ANNOTATION_SYMBOL_OCCURRENCE ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.ANNOTATION_OCCURRENCE
}
