
import { representation_map } from "./index"
import { symbol_representation } from "./index"
import { axis2_placement_2d } from "./index"
import { axis2_placement_3d } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/symbol_representation_map.htm */
export  class symbol_representation_map extends representation_map {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.SYMBOL_REPRESENTATION_MAP
  }



  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.SYMBOL_REPRESENTATION_MAP ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.SYMBOL_REPRESENTATION_MAP
}
