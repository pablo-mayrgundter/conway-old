
import { light_source } from "./index"
import { cartesian_point } from "./index"
import { direction } from "./index"
import { positive_plane_angle_measure } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/light_source_spot.htm */
export  class light_source_spot extends light_source {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.LIGHT_SOURCE_SPOT
  }
  private position_? : cartesian_point
  private orientation_? : direction
  private concentration_exponent_? : number
  private constant_attenuation_? : number
  private distance_attenuation_? : number
  private spread_angle_? : number

  public get position() : cartesian_point {
    if ( this.position_ === void 0 ) {
      this.position_ = this.extractElement( 2, false, cartesian_point )
    }

    return this.position_ as cartesian_point
  }

  public get orientation() : direction {
    if ( this.orientation_ === void 0 ) {
      this.orientation_ = this.extractElement( 3, false, direction )
    }

    return this.orientation_ as direction
  }

  public get concentration_exponent() : number {
    if ( this.concentration_exponent_ === void 0 ) {
      this.concentration_exponent_ = this.extractNumber( 4, false )
    }

    return this.concentration_exponent_ as number
  }

  public get constant_attenuation() : number {
    if ( this.constant_attenuation_ === void 0 ) {
      this.constant_attenuation_ = this.extractNumber( 5, false )
    }

    return this.constant_attenuation_ as number
  }

  public get distance_attenuation() : number {
    if ( this.distance_attenuation_ === void 0 ) {
      this.distance_attenuation_ = this.extractNumber( 6, false )
    }

    return this.distance_attenuation_ as number
  }

  public get spread_angle() : number {
    if ( this.spread_angle_ === void 0 ) {
      this.spread_angle_ = this.extractNumber( 7, false )
    }

    return this.spread_angle_ as number
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.LIGHT_SOURCE_SPOT ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.LIGHT_SOURCE_SPOT
}
