
import { colour_specification } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/colour_rgb.htm */
export  class colour_rgb extends colour_specification {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.COLOUR_RGB
  }
  private red_? : number
  private green_? : number
  private blue_? : number

  public get red() : number {
    if ( this.red_ === void 0 ) {
      this.red_ = this.extractNumber( 1, false )
    }

    return this.red_ as number
  }

  public get green() : number {
    if ( this.green_ === void 0 ) {
      this.green_ = this.extractNumber( 2, false )
    }

    return this.green_ as number
  }

  public get blue() : number {
    if ( this.blue_ === void 0 ) {
      this.blue_ = this.extractNumber( 3, false )
    }

    return this.blue_ as number
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.COLOUR_RGB ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.COLOUR_RGB
}
