
import { geometric_tolerance } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/cylindricity_tolerance.htm */
export  class cylindricity_tolerance extends geometric_tolerance {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.CYLINDRICITY_TOLERANCE
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.CYLINDRICITY_TOLERANCE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.CYLINDRICITY_TOLERANCE
}
