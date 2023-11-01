
import { representation_item } from "./index"
import { dimension_count } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/geometric_representation_item.htm */
export  class geometric_representation_item extends representation_item {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.GEOMETRIC_REPRESENTATION_ITEM
  }


  public get dim() : number {
    return dimension_of(this);
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.GEOMETRIC_REPRESENTATION_ITEM, EntityTypesIfc.POINT, EntityTypesIfc.DIRECTION, EntityTypesIfc.VECTOR, EntityTypesIfc.PLACEMENT, EntityTypesIfc.CARTESIAN_TRANSFORMATION_OPERATOR, EntityTypesIfc.CURVE, EntityTypesIfc.SURFACE, EntityTypesIfc.EDGE_CURVE, EntityTypesIfc.FACE_SURFACE, EntityTypesIfc.POLY_LOOP, EntityTypesIfc.VERTEX_POINT, EntityTypesIfc.SOLID_MODEL, EntityTypesIfc.BOOLEAN_RESULT, EntityTypesIfc.SPHERE, EntityTypesIfc.RIGHT_CIRCULAR_CONE, EntityTypesIfc.RIGHT_CIRCULAR_CYLINDER, EntityTypesIfc.TORUS, EntityTypesIfc.BLOCK, EntityTypesIfc.RIGHT_ANGULAR_WEDGE, EntityTypesIfc.HALF_SPACE_SOLID, EntityTypesIfc.SHELL_BASED_SURFACE_MODEL, EntityTypesIfc.FACE_BASED_SURFACE_MODEL, EntityTypesIfc.EDGE_BASED_WIREFRAME_MODEL, EntityTypesIfc.GEOMETRIC_SET, EntityTypesIfc.CARTESIAN_POINT, EntityTypesIfc.POINT_ON_CURVE, EntityTypesIfc.POINT_ON_SURFACE, EntityTypesIfc.POINT_REPLICA, EntityTypesIfc.DEGENERATE_PCURVE, EntityTypesIfc.AXIS1_PLACEMENT, EntityTypesIfc.AXIS2_PLACEMENT_2D, EntityTypesIfc.AXIS2_PLACEMENT_3D, EntityTypesIfc.CARTESIAN_TRANSFORMATION_OPERATOR_2D, EntityTypesIfc.CARTESIAN_TRANSFORMATION_OPERATOR_3D, EntityTypesIfc.LINE, EntityTypesIfc.CONIC, EntityTypesIfc.PCURVE, EntityTypesIfc.SURFACE_CURVE, EntityTypesIfc.OFFSET_CURVE_2D, EntityTypesIfc.OFFSET_CURVE_3D, EntityTypesIfc.CURVE_REPLICA, EntityTypesIfc.CIRCLE, EntityTypesIfc.ELLIPSE, EntityTypesIfc.HYPERBOLA, EntityTypesIfc.PARABOLA, EntityTypesIfc.INTERSECTION_CURVE, EntityTypesIfc.SEAM_CURVE, EntityTypesIfc.ELEMENTARY_SURFACE, EntityTypesIfc.SWEPT_SURFACE, EntityTypesIfc.BOUNDED_SURFACE, EntityTypesIfc.OFFSET_SURFACE, EntityTypesIfc.SURFACE_REPLICA, EntityTypesIfc.PLANE, EntityTypesIfc.CYLINDRICAL_SURFACE, EntityTypesIfc.CONICAL_SURFACE, EntityTypesIfc.SPHERICAL_SURFACE, EntityTypesIfc.TOROIDAL_SURFACE, EntityTypesIfc.SURFACE_OF_LINEAR_EXTRUSION, EntityTypesIfc.SURFACE_OF_REVOLUTION, EntityTypesIfc.B_SPLINE_SURFACE, EntityTypesIfc.RECTANGULAR_TRIMMED_SURFACE, EntityTypesIfc.CURVE_BOUNDED_SURFACE, EntityTypesIfc.RECTANGULAR_COMPOSITE_SURFACE, EntityTypesIfc.B_SPLINE_SURFACE_WITH_KNOTS, EntityTypesIfc.UNIFORM_SURFACE, EntityTypesIfc.QUASI_UNIFORM_SURFACE, EntityTypesIfc.BEZIER_SURFACE, EntityTypesIfc.CSG_SOLID, EntityTypesIfc.MANIFOLD_SOLID_BREP, EntityTypesIfc.SWEPT_FACE_SOLID, EntityTypesIfc.SWEPT_AREA_SOLID, EntityTypesIfc.SWEPT_DISK_SOLID, EntityTypesIfc.SOLID_REPLICA, EntityTypesIfc.EXTRUDED_FACE_SOLID, EntityTypesIfc.REVOLVED_FACE_SOLID, EntityTypesIfc.REVOLVED_AREA_SOLID, EntityTypesIfc.EXTRUDED_AREA_SOLID, EntityTypesIfc.SURFACE_CURVE_SWEPT_AREA_SOLID ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.GEOMETRIC_REPRESENTATION_ITEM
}
