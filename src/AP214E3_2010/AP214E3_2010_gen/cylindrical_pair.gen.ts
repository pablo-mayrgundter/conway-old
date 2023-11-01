
import { kinematic_pair } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/cylindrical_pair.htm */
export  class cylindrical_pair extends kinematic_pair {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.CYLINDRICAL_PAIR
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.CYLINDRICAL_PAIR ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.CYLINDRICAL_PAIR
}
