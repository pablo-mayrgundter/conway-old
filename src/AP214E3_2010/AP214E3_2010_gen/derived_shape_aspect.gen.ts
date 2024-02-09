
import { shape_aspect } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class derived_shape_aspect extends shape_aspect {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.DERIVED_SHAPE_ASPECT
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.DERIVED_SHAPE_ASPECT, EntityTypesAP214.APEX, EntityTypesAP214.CENTRE_OF_SYMMETRY, EntityTypesAP214.GEOMETRIC_ALIGNMENT, EntityTypesAP214.GEOMETRIC_INTERSECTION, EntityTypesAP214.PARALLEL_OFFSET, EntityTypesAP214.PERPENDICULAR_TO, EntityTypesAP214.EXTENSION, EntityTypesAP214.TANGENT ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.DERIVED_SHAPE_ASPECT
}
