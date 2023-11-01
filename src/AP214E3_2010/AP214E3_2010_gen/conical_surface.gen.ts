
import { elementary_surface } from "./index"
import { length_measure } from "./index"
import { plane_angle_measure } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/conical_surface.htm */
export  class conical_surface extends elementary_surface {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.CONICAL_SURFACE
  }
  private radius_? : number
  private semi_angle_? : number

  public get radius() : number {
    if ( this.radius_ === void 0 ) {
      this.radius_ = this.extractNumber( 2, false )
    }

    return this.radius_ as number
  }

  public get semi_angle() : number {
    if ( this.semi_angle_ === void 0 ) {
      this.semi_angle_ = this.extractNumber( 3, false )
    }

    return this.semi_angle_ as number
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.CONICAL_SURFACE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.CONICAL_SURFACE
}
