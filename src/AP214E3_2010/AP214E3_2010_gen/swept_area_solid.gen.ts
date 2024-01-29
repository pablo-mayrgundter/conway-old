
import { solid_model } from "./index"
import { curve_bounded_surface } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class swept_area_solid extends solid_model {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.SWEPT_AREA_SOLID
  }
  private swept_area_? : curve_bounded_surface

  public get swept_area() : curve_bounded_surface {
    if ( this.swept_area_ === void 0 ) {
      this.swept_area_ = this.extractElement( 1, false, curve_bounded_surface )
    }

    return this.swept_area_ as curve_bounded_surface
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.SWEPT_AREA_SOLID, EntityTypesAP214.REVOLVED_AREA_SOLID, EntityTypesAP214.EXTRUDED_AREA_SOLID, EntityTypesAP214.SURFACE_CURVE_SWEPT_AREA_SOLID ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.SWEPT_AREA_SOLID
}
