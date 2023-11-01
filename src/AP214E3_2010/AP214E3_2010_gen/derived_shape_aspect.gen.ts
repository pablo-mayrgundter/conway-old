
import { shape_aspect } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/derived_shape_aspect.htm */
export  class derived_shape_aspect extends shape_aspect {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.DERIVED_SHAPE_ASPECT
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.DERIVED_SHAPE_ASPECT, EntityTypesIfc.APEX, EntityTypesIfc.CENTRE_OF_SYMMETRY, EntityTypesIfc.GEOMETRIC_ALIGNMENT, EntityTypesIfc.GEOMETRIC_INTERSECTION, EntityTypesIfc.PARALLEL_OFFSET, EntityTypesIfc.PERPENDICULAR_TO, EntityTypesIfc.EXTENSION, EntityTypesIfc.TANGENT ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.DERIVED_SHAPE_ASPECT
}
