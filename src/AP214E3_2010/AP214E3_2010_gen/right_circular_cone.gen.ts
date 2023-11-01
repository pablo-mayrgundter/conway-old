
import { geometric_representation_item } from "./index"
import { axis1_placement } from "./index"
import { positive_length_measure } from "./index"
import { length_measure } from "./index"
import { plane_angle_measure } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/right_circular_cone.htm */
export  class right_circular_cone extends geometric_representation_item {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.RIGHT_CIRCULAR_CONE
  }
  private position_? : axis1_placement
  private height_? : number
  private radius_? : number
  private semi_angle_? : number

  public get position() : axis1_placement {
    if ( this.position_ === void 0 ) {
      this.position_ = this.extractElement( 1, false, axis1_placement )
    }

    return this.position_ as axis1_placement
  }

  public get height() : number {
    if ( this.height_ === void 0 ) {
      this.height_ = this.extractNumber( 2, false )
    }

    return this.height_ as number
  }

  public get radius() : number {
    if ( this.radius_ === void 0 ) {
      this.radius_ = this.extractNumber( 3, false )
    }

    return this.radius_ as number
  }

  public get semi_angle() : number {
    if ( this.semi_angle_ === void 0 ) {
      this.semi_angle_ = this.extractNumber( 4, false )
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
    [ EntityTypesIfc.RIGHT_CIRCULAR_CONE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.RIGHT_CIRCULAR_CONE
}
