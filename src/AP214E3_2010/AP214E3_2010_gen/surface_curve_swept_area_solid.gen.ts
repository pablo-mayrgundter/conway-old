
import { swept_area_solid } from "./index"
import { curve } from "./index"
import { surface } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/surface_curve_swept_area_solid.htm */
export  class surface_curve_swept_area_solid extends swept_area_solid {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.SURFACE_CURVE_SWEPT_AREA_SOLID
  }
  private directrix_? : curve
  private start_param_? : number
  private end_param_? : number
  private reference_surface_? : surface

  public get directrix() : curve {
    if ( this.directrix_ === void 0 ) {
      this.directrix_ = this.extractElement( 2, false, curve )
    }

    return this.directrix_ as curve
  }

  public get start_param() : number {
    if ( this.start_param_ === void 0 ) {
      this.start_param_ = this.extractNumber( 3, false )
    }

    return this.start_param_ as number
  }

  public get end_param() : number {
    if ( this.end_param_ === void 0 ) {
      this.end_param_ = this.extractNumber( 4, false )
    }

    return this.end_param_ as number
  }

  public get reference_surface() : surface {
    if ( this.reference_surface_ === void 0 ) {
      this.reference_surface_ = this.extractElement( 5, false, surface )
    }

    return this.reference_surface_ as surface
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.SURFACE_CURVE_SWEPT_AREA_SOLID ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.SURFACE_CURVE_SWEPT_AREA_SOLID
}
