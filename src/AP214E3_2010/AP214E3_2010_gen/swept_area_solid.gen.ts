
import { solid_model } from "./index"
import { curve_bounded_surface } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/swept_area_solid.htm */
export  class swept_area_solid extends solid_model {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.SWEPT_AREA_SOLID
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
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.SWEPT_AREA_SOLID, EntityTypesIfc.REVOLVED_AREA_SOLID, EntityTypesIfc.EXTRUDED_AREA_SOLID, EntityTypesIfc.SURFACE_CURVE_SWEPT_AREA_SOLID ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.SWEPT_AREA_SOLID
}
