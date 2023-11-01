
import { curve } from "./index"
import { length_measure } from "./index"
import { direction } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/offset_curve_3d.htm */
export  class offset_curve_3d extends curve {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.OFFSET_CURVE_3D
  }
  private basis_curve_? : curve
  private distance_? : number
  private self_intersect_? : boolean
  private ref_direction_? : direction

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

  public get ref_direction() : direction {
    if ( this.ref_direction_ === void 0 ) {
      this.ref_direction_ = this.extractElement( 4, false, direction )
    }

    return this.ref_direction_ as direction
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.OFFSET_CURVE_3D ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.OFFSET_CURVE_3D
}
