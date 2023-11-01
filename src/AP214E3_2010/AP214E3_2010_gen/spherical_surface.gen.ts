
import { elementary_surface } from "./index"
import { positive_length_measure } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/spherical_surface.htm */
export  class spherical_surface extends elementary_surface {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.SPHERICAL_SURFACE
  }
  private radius_? : number

  public get radius() : number {
    if ( this.radius_ === void 0 ) {
      this.radius_ = this.extractNumber( 2, false )
    }

    return this.radius_ as number
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.SPHERICAL_SURFACE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.SPHERICAL_SURFACE
}
