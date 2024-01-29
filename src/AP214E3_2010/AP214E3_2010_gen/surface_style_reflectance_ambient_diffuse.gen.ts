
import { surface_style_reflectance_ambient } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class surface_style_reflectance_ambient_diffuse extends surface_style_reflectance_ambient {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.SURFACE_STYLE_REFLECTANCE_AMBIENT_DIFFUSE
  }
  private diffuse_reflectance_? : number

  public get diffuse_reflectance() : number {
    if ( this.diffuse_reflectance_ === void 0 ) {
      this.diffuse_reflectance_ = this.extractNumber( 1, false )
    }

    return this.diffuse_reflectance_ as number
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.SURFACE_STYLE_REFLECTANCE_AMBIENT_DIFFUSE ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.SURFACE_STYLE_REFLECTANCE_AMBIENT_DIFFUSE
}
