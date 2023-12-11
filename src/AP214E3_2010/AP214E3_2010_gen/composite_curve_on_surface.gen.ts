
import { composite_curve } from "./index"
import { surface } from "./index"
import {
  get_basis_surface,
} from '../ap214_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/composite_curve_on_surface.htm */
export  class composite_curve_on_surface extends composite_curve {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.COMPOSITE_CURVE_ON_SURFACE
  }


  public get basis_surface() : Array<surface> {
    return get_basis_surface(this);
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.COMPOSITE_CURVE_ON_SURFACE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.COMPOSITE_CURVE_ON_SURFACE
}
