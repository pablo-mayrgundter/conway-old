
import { composite_curve } from "./index"
import { surface } from "./index"
import {
  get_basis_surface,
} from '../ap214_functions'

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class composite_curve_on_surface extends composite_curve {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.COMPOSITE_CURVE_ON_SURFACE
  }


  public get basis_surface() : Array<surface> {
    return get_basis_surface(this);
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.COMPOSITE_CURVE_ON_SURFACE ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.COMPOSITE_CURVE_ON_SURFACE
}
