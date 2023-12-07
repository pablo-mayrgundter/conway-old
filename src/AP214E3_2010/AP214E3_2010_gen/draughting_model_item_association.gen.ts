
import { item_identified_representation_usage } from "./index"
import { shape_aspect } from "./index"
import { draughting_model } from "./index"
import { annotation_occurrence } from "./index"
import { draughting_callout } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/draughting_model_item_association.htm */
export  class draughting_model_item_association extends item_identified_representation_usage {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.DRAUGHTING_MODEL_ITEM_ASSOCIATION
  }




  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.DRAUGHTING_MODEL_ITEM_ASSOCIATION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.DRAUGHTING_MODEL_ITEM_ASSOCIATION
}
