
import { feature_component_relationship } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/pattern_offset_membership.htm */
export  class pattern_offset_membership extends feature_component_relationship {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.PATTERN_OFFSET_MEMBERSHIP
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.PATTERN_OFFSET_MEMBERSHIP ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.PATTERN_OFFSET_MEMBERSHIP
}
