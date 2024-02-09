
import { item_identified_representation_usage } from "./index"
import { shape_aspect } from "./index"
import { shape_representation } from "./index"
import { geometric_representation_item } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class geometric_item_specific_usage extends item_identified_representation_usage {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.GEOMETRIC_ITEM_SPECIFIC_USAGE
  }




  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.GEOMETRIC_ITEM_SPECIFIC_USAGE ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.GEOMETRIC_ITEM_SPECIFIC_USAGE
}
