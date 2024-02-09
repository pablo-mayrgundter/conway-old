
import { surface_curve_swept_area_solid } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class ruled_surface_swept_area_solid extends surface_curve_swept_area_solid {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.RULED_SURFACE_SWEPT_AREA_SOLID
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.RULED_SURFACE_SWEPT_AREA_SOLID ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.RULED_SURFACE_SWEPT_AREA_SOLID
}
