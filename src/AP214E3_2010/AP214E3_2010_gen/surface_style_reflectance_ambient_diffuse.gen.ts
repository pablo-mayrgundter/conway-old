
import { surface_style_reflectance_ambient } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/surface_style_reflectance_ambient_diffuse.htm */
export  class surface_style_reflectance_ambient_diffuse extends surface_style_reflectance_ambient {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.SURFACE_STYLE_REFLECTANCE_AMBIENT_DIFFUSE
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
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.SURFACE_STYLE_REFLECTANCE_AMBIENT_DIFFUSE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.SURFACE_STYLE_REFLECTANCE_AMBIENT_DIFFUSE
}
