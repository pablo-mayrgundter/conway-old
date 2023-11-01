
import { curve } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/bounded_curve.htm */
export  class bounded_curve extends curve {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.BOUNDED_CURVE
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.BOUNDED_CURVE, EntityTypesIfc.POLYLINE, EntityTypesIfc.B_SPLINE_CURVE, EntityTypesIfc.TRIMMED_CURVE, EntityTypesIfc.BOUNDED_PCURVE, EntityTypesIfc.BOUNDED_SURFACE_CURVE, EntityTypesIfc.COMPOSITE_CURVE, EntityTypesIfc.UNIFORM_CURVE, EntityTypesIfc.B_SPLINE_CURVE_WITH_KNOTS, EntityTypesIfc.QUASI_UNIFORM_CURVE, EntityTypesIfc.BEZIER_CURVE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.BOUNDED_CURVE
}
