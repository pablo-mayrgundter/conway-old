
import { geometric_representation_item } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/surface.htm */
export  class surface extends geometric_representation_item {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.SURFACE
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.SURFACE, EntityTypesIfc.ELEMENTARY_SURFACE, EntityTypesIfc.SWEPT_SURFACE, EntityTypesIfc.BOUNDED_SURFACE, EntityTypesIfc.OFFSET_SURFACE, EntityTypesIfc.SURFACE_REPLICA, EntityTypesIfc.PLANE, EntityTypesIfc.CYLINDRICAL_SURFACE, EntityTypesIfc.CONICAL_SURFACE, EntityTypesIfc.SPHERICAL_SURFACE, EntityTypesIfc.TOROIDAL_SURFACE, EntityTypesIfc.SURFACE_OF_LINEAR_EXTRUSION, EntityTypesIfc.SURFACE_OF_REVOLUTION, EntityTypesIfc.B_SPLINE_SURFACE, EntityTypesIfc.RECTANGULAR_TRIMMED_SURFACE, EntityTypesIfc.CURVE_BOUNDED_SURFACE, EntityTypesIfc.RECTANGULAR_COMPOSITE_SURFACE, EntityTypesIfc.B_SPLINE_SURFACE_WITH_KNOTS, EntityTypesIfc.UNIFORM_SURFACE, EntityTypesIfc.QUASI_UNIFORM_SURFACE, EntityTypesIfc.BEZIER_SURFACE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.SURFACE
}
