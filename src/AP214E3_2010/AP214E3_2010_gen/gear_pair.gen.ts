
import { kinematic_pair } from "./index"
import { length_measure } from "./index"
import { plane_angle_measure } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/gear_pair.htm */
export  class gear_pair extends kinematic_pair {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.GEAR_PAIR
  }
  private radius_first_link_? : number
  private radius_second_link_? : number
  private bevel_? : number
  private helical_angle_? : number
  private gear_ratio_? : number

  public get radius_first_link() : number {
    if ( this.radius_first_link_ === void 0 ) {
      this.radius_first_link_ = this.extractNumber( 5, false )
    }

    return this.radius_first_link_ as number
  }

  public get radius_second_link() : number {
    if ( this.radius_second_link_ === void 0 ) {
      this.radius_second_link_ = this.extractNumber( 6, false )
    }

    return this.radius_second_link_ as number
  }

  public get bevel() : number {
    if ( this.bevel_ === void 0 ) {
      this.bevel_ = this.extractNumber( 7, false )
    }

    return this.bevel_ as number
  }

  public get helical_angle() : number {
    if ( this.helical_angle_ === void 0 ) {
      this.helical_angle_ = this.extractNumber( 8, false )
    }

    return this.helical_angle_ as number
  }

  public get gear_ratio() : number {
    if ( this.gear_ratio_ === void 0 ) {
      this.gear_ratio_ = this.extractNumber( 9, false )
    }

    return this.gear_ratio_ as number
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.GEAR_PAIR ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.GEAR_PAIR
}
