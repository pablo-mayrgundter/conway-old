
import { swept_area_solid } from "./index"
import { direction } from "./index"
import { positive_length_measure } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/extruded_area_solid.htm */
export  class extruded_area_solid extends swept_area_solid {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.EXTRUDED_AREA_SOLID
  }
  private extruded_direction_? : direction
  private depth_? : number

  public get extruded_direction() : direction {
    if ( this.extruded_direction_ === void 0 ) {
      this.extruded_direction_ = this.extractElement( 2, false, direction )
    }

    return this.extruded_direction_ as direction
  }

  public get depth() : number {
    if ( this.depth_ === void 0 ) {
      this.depth_ = this.extractNumber( 3, false )
    }

    return this.depth_ as number
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.EXTRUDED_AREA_SOLID ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.EXTRUDED_AREA_SOLID
}
