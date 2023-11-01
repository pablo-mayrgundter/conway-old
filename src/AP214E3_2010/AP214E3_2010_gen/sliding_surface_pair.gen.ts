
import { surface_pair } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/sliding_surface_pair.htm */
export  class sliding_surface_pair extends surface_pair {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.SLIDING_SURFACE_PAIR
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.SLIDING_SURFACE_PAIR ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.SLIDING_SURFACE_PAIR
}
