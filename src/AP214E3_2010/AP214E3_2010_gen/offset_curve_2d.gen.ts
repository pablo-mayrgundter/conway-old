
import { curve } from "./index"
import { length_measure } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class offset_curve_2d extends curve {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.OFFSET_CURVE_2D
  }
  private basis_curve_? : curve
  private distance_? : number
  private self_intersect_? : boolean

  public get basis_curve() : curve {
    if ( this.basis_curve_ === void 0 ) {
      this.basis_curve_ = this.extractElement( 1, false, curve )
    }

    return this.basis_curve_ as curve
  }

  public get distance() : number {
    if ( this.distance_ === void 0 ) {
      this.distance_ = this.extractNumber( 2, false )
    }

    return this.distance_ as number
  }

  public get self_intersect() : boolean {
    if ( this.self_intersect_ === void 0 ) {
      this.self_intersect_ = this.extractBoolean( 3, false )
    }

    return this.self_intersect_ as boolean
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.OFFSET_CURVE_2D ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.OFFSET_CURVE_2D
}
