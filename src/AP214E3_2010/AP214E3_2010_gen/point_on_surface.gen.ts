
import { point } from "./index"
import { surface } from "./index"
import { parameter_value } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/point_on_surface.htm */
export  class point_on_surface extends point {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.POINT_ON_SURFACE
  }
  private basis_surface_? : surface
  private point_parameter_u_? : number
  private point_parameter_v_? : number

  public get basis_surface() : surface {
    if ( this.basis_surface_ === void 0 ) {
      this.basis_surface_ = this.extractElement( 1, false, surface )
    }

    return this.basis_surface_ as surface
  }

  public get point_parameter_u() : number {
    if ( this.point_parameter_u_ === void 0 ) {
      this.point_parameter_u_ = this.extractNumber( 2, false )
    }

    return this.point_parameter_u_ as number
  }

  public get point_parameter_v() : number {
    if ( this.point_parameter_v_ === void 0 ) {
      this.point_parameter_v_ = this.extractNumber( 3, false )
    }

    return this.point_parameter_v_ as number
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.POINT_ON_SURFACE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.POINT_ON_SURFACE
}
