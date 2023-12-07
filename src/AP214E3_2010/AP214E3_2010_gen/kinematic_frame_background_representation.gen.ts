
import { representation } from "./index"
import { point } from "./index"
import { curve } from "./index"
import { surface } from "./index"
import { geometric_representation_context } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/kinematic_frame_background_representation.htm */
export  class kinematic_frame_background_representation extends representation {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.KINEMATIC_FRAME_BACKGROUND_REPRESENTATION
  }



  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.KINEMATIC_FRAME_BACKGROUND_REPRESENTATION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.KINEMATIC_FRAME_BACKGROUND_REPRESENTATION
}
