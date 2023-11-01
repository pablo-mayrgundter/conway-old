
import { geometric_tolerance_with_datum_reference } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/perpendicularity_tolerance.htm */
export  class perpendicularity_tolerance extends geometric_tolerance_with_datum_reference {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.PERPENDICULARITY_TOLERANCE
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.PERPENDICULARITY_TOLERANCE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.PERPENDICULARITY_TOLERANCE
}
