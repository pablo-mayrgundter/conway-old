
import { representation_relationship } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/constructive_geometry_representation_relationship.htm */
export  class constructive_geometry_representation_relationship extends representation_relationship {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.CONSTRUCTIVE_GEOMETRY_REPRESENTATION_RELATIONSHIP
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.CONSTRUCTIVE_GEOMETRY_REPRESENTATION_RELATIONSHIP ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.CONSTRUCTIVE_GEOMETRY_REPRESENTATION_RELATIONSHIP
}
