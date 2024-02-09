
import { curve } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class bounded_curve extends curve {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.BOUNDED_CURVE
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.BOUNDED_CURVE, EntityTypesAP214.POLYLINE, EntityTypesAP214.B_SPLINE_CURVE, EntityTypesAP214.TRIMMED_CURVE, EntityTypesAP214.BOUNDED_PCURVE, EntityTypesAP214.BOUNDED_SURFACE_CURVE, EntityTypesAP214.COMPOSITE_CURVE, EntityTypesAP214.UNIFORM_CURVE, EntityTypesAP214.B_SPLINE_CURVE_WITH_KNOTS, EntityTypesAP214.QUASI_UNIFORM_CURVE, EntityTypesAP214.BEZIER_CURVE ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.BOUNDED_CURVE
}
