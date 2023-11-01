
import { surface_curve_swept_area_solid } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ruled_surface_swept_area_solid.htm */
export  class ruled_surface_swept_area_solid extends surface_curve_swept_area_solid {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.RULED_SURFACE_SWEPT_AREA_SOLID
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.RULED_SURFACE_SWEPT_AREA_SOLID ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.RULED_SURFACE_SWEPT_AREA_SOLID
}
