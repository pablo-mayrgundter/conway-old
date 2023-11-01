
import { hour_in_day } from "./index"
import { minute_in_hour } from "./index"
import { second_in_minute } from "./index"
import { coordinated_universal_time_offset } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/local_time.htm */
export  class local_time extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.LOCAL_TIME
  }
  private hour_component_? : number
  private minute_component_? : number | null
  private second_component_? : number | null
  private zone_? : coordinated_universal_time_offset

  public get hour_component() : number {
    if ( this.hour_component_ === void 0 ) {
      this.hour_component_ = this.extractNumber( 0, false )
    }

    return this.hour_component_ as number
  }

  public get minute_component() : number | null {
    if ( this.minute_component_ === void 0 ) {
      this.minute_component_ = this.extractNumber( 1, true )
    }

    return this.minute_component_ as number | null
  }

  public get second_component() : number | null {
    if ( this.second_component_ === void 0 ) {
      this.second_component_ = this.extractNumber( 2, true )
    }

    return this.second_component_ as number | null
  }

  public get zone() : coordinated_universal_time_offset {
    if ( this.zone_ === void 0 ) {
      this.zone_ = this.extractElement( 3, false, coordinated_universal_time_offset )
    }

    return this.zone_ as coordinated_universal_time_offset
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.LOCAL_TIME ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.LOCAL_TIME
}
