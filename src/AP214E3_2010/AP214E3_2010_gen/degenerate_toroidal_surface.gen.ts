
import { toroidal_surface } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/degenerate_toroidal_surface.htm */
export  class degenerate_toroidal_surface extends toroidal_surface {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.DEGENERATE_TOROIDAL_SURFACE
  }
  private select_outer_? : boolean

  public get select_outer() : boolean {
    if ( this.select_outer_ === void 0 ) {
      this.select_outer_ = this.extractBoolean( 4, false )
    }

    return this.select_outer_ as boolean
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.DEGENERATE_TOROIDAL_SURFACE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.DEGENERATE_TOROIDAL_SURFACE
}
