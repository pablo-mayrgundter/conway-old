
import { swept_area_solid } from "./index"
import { axis1_placement } from "./index"
import { plane_angle_measure } from "./index"
import { line } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class revolved_area_solid extends swept_area_solid {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.REVOLVED_AREA_SOLID
  }
  private axis_? : axis1_placement
  private angle_? : number

  public get axis() : axis1_placement {
    if ( this.axis_ === void 0 ) {
      this.axis_ = this.extractElement( 2, false, axis1_placement )
    }

    return this.axis_ as axis1_placement
  }

  public get angle() : number {
    if ( this.angle_ === void 0 ) {
      this.angle_ = this.extractNumber( 3, false )
    }

    return this.angle_ as number
  }

  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.REVOLVED_AREA_SOLID ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.REVOLVED_AREA_SOLID
}
