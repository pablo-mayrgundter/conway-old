
import { styled_item } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/annotation_occurrence.htm */
export  class annotation_occurrence extends styled_item {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.ANNOTATION_OCCURRENCE
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.ANNOTATION_OCCURRENCE, EntityTypesIfc.ANNOTATION_CURVE_OCCURRENCE, EntityTypesIfc.ANNOTATION_FILL_AREA_OCCURRENCE, EntityTypesIfc.ANNOTATION_TEXT_OCCURRENCE, EntityTypesIfc.ANNOTATION_SYMBOL_OCCURRENCE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.ANNOTATION_OCCURRENCE
}
