
import { representation } from "./index"
import { point } from "./index"
import { curve } from "./index"
import { surface } from "./index"
import { geometric_representation_context } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class kinematic_frame_background_representation extends representation {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.KINEMATIC_FRAME_BACKGROUND_REPRESENTATION
  }



  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.KINEMATIC_FRAME_BACKGROUND_REPRESENTATION ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.KINEMATIC_FRAME_BACKGROUND_REPRESENTATION
}
