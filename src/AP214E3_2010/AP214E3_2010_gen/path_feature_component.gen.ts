
import { shape_aspect } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/path_feature_component.htm */
export  class path_feature_component extends shape_aspect {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.PATH_FEATURE_COMPONENT
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.PATH_FEATURE_COMPONENT ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.PATH_FEATURE_COMPONENT
}
