
import { point } from "./index"
import { curve } from "./index"
import { parameter_value } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class point_on_curve extends point {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.POINT_ON_CURVE
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
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.POINT_ON_CURVE ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.POINT_ON_CURVE
}
