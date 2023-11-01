
import { point } from "./index"
import { curve } from "./index"
import { parameter_value } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/point_on_curve.htm */
export  class point_on_curve extends point {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.POINT_ON_CURVE
  }
  private basis_curve_? : curve
  private point_parameter_? : number

  public get basis_curve() : curve {
    if ( this.basis_curve_ === void 0 ) {
      this.basis_curve_ = this.extractElement( 1, false, curve )
    }

    return this.basis_curve_ as curve
  }

  public get point_parameter() : number {
    if ( this.point_parameter_ === void 0 ) {
      this.point_parameter_ = this.extractNumber( 2, false )
    }

    return this.point_parameter_ as number
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.POINT_ON_CURVE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.POINT_ON_CURVE
}
