
import { item_identified_representation_usage } from "./index"
import { shape_aspect } from "./index"
import { shape_representation } from "./index"
import { geometric_representation_item } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/geometric_item_specific_usage.htm */
export  class geometric_item_specific_usage extends item_identified_representation_usage {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.GEOMETRIC_ITEM_SPECIFIC_USAGE
  }




  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.GEOMETRIC_ITEM_SPECIFIC_USAGE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.GEOMETRIC_ITEM_SPECIFIC_USAGE
}
