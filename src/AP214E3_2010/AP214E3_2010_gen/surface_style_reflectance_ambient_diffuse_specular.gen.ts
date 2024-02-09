
import { surface_style_reflectance_ambient_diffuse } from "./index"
import { colour } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class surface_style_reflectance_ambient_diffuse_specular extends surface_style_reflectance_ambient_diffuse {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.SURFACE_STYLE_REFLECTANCE_AMBIENT_DIFFUSE_SPECULAR
  }
  private specular_reflectance_? : number
  private specular_exponent_? : number
  private specular_colour_? : colour

  public get specular_reflectance() : number {
    if ( this.specular_reflectance_ === void 0 ) {
      this.specular_reflectance_ = this.extractNumber( 2, false )
    }

    return this.specular_reflectance_ as number
  }

  public get specular_exponent() : number {
    if ( this.specular_exponent_ === void 0 ) {
      this.specular_exponent_ = this.extractNumber( 3, false )
    }

    return this.specular_exponent_ as number
  }

  public get specular_colour() : colour {
    if ( this.specular_colour_ === void 0 ) {
      this.specular_colour_ = this.extractElement( 4, false, colour )
    }

    return this.specular_colour_ as colour
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.SURFACE_STYLE_REFLECTANCE_AMBIENT_DIFFUSE_SPECULAR ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.SURFACE_STYLE_REFLECTANCE_AMBIENT_DIFFUSE_SPECULAR
}
