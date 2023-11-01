
import { direction } from "./index"
import { plane_angle_measure } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/rotation_about_direction.htm */
export  class rotation_about_direction extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.ROTATION_ABOUT_DIRECTION
  }
  private direction_of_axis_? : direction
  private rotation_angle_? : number

  public get direction_of_axis() : direction {
    if ( this.direction_of_axis_ === void 0 ) {
      this.direction_of_axis_ = this.extractElement( 0, false, direction )
    }

    return this.direction_of_axis_ as direction
  }

  public get rotation_angle() : number {
    if ( this.rotation_angle_ === void 0 ) {
      this.rotation_angle_ = this.extractNumber( 1, false )
    }

    return this.rotation_angle_ as number
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.ROTATION_ABOUT_DIRECTION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.ROTATION_ABOUT_DIRECTION
}
