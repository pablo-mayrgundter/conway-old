
import { label } from "./index"
import { colour } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class fill_area_style_colour extends StepEntityBase< EntityTypesAP214 > {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.FILL_AREA_STYLE_COLOUR
  }
  private name_? : string
  private fill_colour_? : colour

  public get name() : string {
    if ( this.name_ === void 0 ) {
      this.name_ = this.extractString( 0, false )
    }

    return this.name_ as string
  }

  public get fill_colour() : colour {
    if ( this.fill_colour_ === void 0 ) {
      this.fill_colour_ = this.extractElement( 1, false, colour )
    }

    return this.fill_colour_ as colour
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.FILL_AREA_STYLE_COLOUR ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.FILL_AREA_STYLE_COLOUR
}
