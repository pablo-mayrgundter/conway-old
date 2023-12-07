
import { representation_relationship } from "./index"
import { kinematic_link_representation } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/kinematic_link_representation_association.htm */
export  class kinematic_link_representation_association extends representation_relationship {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.KINEMATIC_LINK_REPRESENTATION_ASSOCIATION
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.KINEMATIC_LINK_REPRESENTATION_ASSOCIATION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.KINEMATIC_LINK_REPRESENTATION_ASSOCIATION
}
