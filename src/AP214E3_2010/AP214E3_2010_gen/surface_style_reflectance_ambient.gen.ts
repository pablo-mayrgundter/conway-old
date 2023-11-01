

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/surface_style_reflectance_ambient.htm */
export  class surface_style_reflectance_ambient extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.SURFACE_STYLE_REFLECTANCE_AMBIENT
  }
  private ambient_reflectance_? : number

  public get ambient_reflectance() : number {
    if ( this.ambient_reflectance_ === void 0 ) {
      this.ambient_reflectance_ = this.extractNumber( 0, false )
    }

    return this.ambient_reflectance_ as number
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.SURFACE_STYLE_REFLECTANCE_AMBIENT ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.SURFACE_STYLE_REFLECTANCE_AMBIENT
}
