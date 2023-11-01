
import { light_source } from "./index"
import { cartesian_point } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/light_source_positional.htm */
export  class light_source_positional extends light_source {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.LIGHT_SOURCE_POSITIONAL
  }
  private position_? : cartesian_point
  private constant_attenuation_? : number
  private distance_attenuation_? : number

  public get position() : cartesian_point {
    if ( this.position_ === void 0 ) {
      this.position_ = this.extractElement( 2, false, cartesian_point )
    }

    return this.position_ as cartesian_point
  }

  public get constant_attenuation() : number {
    if ( this.constant_attenuation_ === void 0 ) {
      this.constant_attenuation_ = this.extractNumber( 3, false )
    }

    return this.constant_attenuation_ as number
  }

  public get distance_attenuation() : number {
    if ( this.distance_attenuation_ === void 0 ) {
      this.distance_attenuation_ = this.extractNumber( 4, false )
    }

    return this.distance_attenuation_ as number
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.LIGHT_SOURCE_POSITIONAL ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.LIGHT_SOURCE_POSITIONAL
}
