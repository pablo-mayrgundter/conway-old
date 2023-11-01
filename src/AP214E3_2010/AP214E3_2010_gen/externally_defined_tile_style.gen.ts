
import { externally_defined_item } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/externally_defined_tile_style.htm */
export  class externally_defined_tile_style extends externally_defined_item {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.EXTERNALLY_DEFINED_TILE_STYLE
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.EXTERNALLY_DEFINED_TILE_STYLE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.EXTERNALLY_DEFINED_TILE_STYLE
}
