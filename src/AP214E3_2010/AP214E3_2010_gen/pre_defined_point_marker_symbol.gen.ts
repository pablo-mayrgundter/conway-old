
import { pre_defined_marker } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/pre_defined_point_marker_symbol.htm */
export  class pre_defined_point_marker_symbol extends pre_defined_marker {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.PRE_DEFINED_POINT_MARKER_SYMBOL
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.PRE_DEFINED_POINT_MARKER_SYMBOL ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.PRE_DEFINED_POINT_MARKER_SYMBOL
}
