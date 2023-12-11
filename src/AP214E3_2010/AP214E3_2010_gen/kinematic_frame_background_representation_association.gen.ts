
import { representation_relationship_with_transformation } from "./index"
import { kinematic_frame_based_transformation } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/kinematic_frame_background_representation_association.htm */
export  class kinematic_frame_background_representation_association extends representation_relationship_with_transformation {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.KINEMATIC_FRAME_BACKGROUND_REPRESENTATION_ASSOCIATION
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.KINEMATIC_FRAME_BACKGROUND_REPRESENTATION_ASSOCIATION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.KINEMATIC_FRAME_BACKGROUND_REPRESENTATION_ASSOCIATION
}
