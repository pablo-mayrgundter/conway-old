
import { surface } from "./index"
import { curve } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/swept_surface.htm */
export  class swept_surface extends surface {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.SWEPT_SURFACE
  }
  private swept_curve_? : curve

  public get swept_curve() : curve {
    if ( this.swept_curve_ === void 0 ) {
      this.swept_curve_ = this.extractElement( 1, false, curve )
    }

    return this.swept_curve_ as curve
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.SWEPT_SURFACE, EntityTypesIfc.SURFACE_OF_LINEAR_EXTRUSION, EntityTypesIfc.SURFACE_OF_REVOLUTION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.SWEPT_SURFACE
}
