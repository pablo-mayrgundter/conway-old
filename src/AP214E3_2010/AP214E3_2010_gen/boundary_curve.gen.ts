
import { composite_curve_on_surface } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class boundary_curve extends composite_curve_on_surface {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.BOUNDARY_CURVE
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.BOUNDARY_CURVE ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.BOUNDARY_CURVE
}
