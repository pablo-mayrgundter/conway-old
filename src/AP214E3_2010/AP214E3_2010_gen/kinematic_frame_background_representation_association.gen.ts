
import { representation_relationship_with_transformation } from "./index"
import { kinematic_frame_based_transformation } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class kinematic_frame_background_representation_association extends representation_relationship_with_transformation {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.KINEMATIC_FRAME_BACKGROUND_REPRESENTATION_ASSOCIATION
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.KINEMATIC_FRAME_BACKGROUND_REPRESENTATION_ASSOCIATION ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.KINEMATIC_FRAME_BACKGROUND_REPRESENTATION_ASSOCIATION
}
