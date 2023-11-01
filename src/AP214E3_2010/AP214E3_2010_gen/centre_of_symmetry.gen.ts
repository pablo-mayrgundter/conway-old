
import { derived_shape_aspect } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/centre_of_symmetry.htm */
export  class centre_of_symmetry extends derived_shape_aspect {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.CENTRE_OF_SYMMETRY
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.CENTRE_OF_SYMMETRY ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.CENTRE_OF_SYMMETRY
}
