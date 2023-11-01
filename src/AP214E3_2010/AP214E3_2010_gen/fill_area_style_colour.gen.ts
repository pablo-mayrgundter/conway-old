
import { label } from "./index"
import { colour } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/fill_area_style_colour.htm */
export  class fill_area_style_colour extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.FILL_AREA_STYLE_COLOUR
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
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.FILL_AREA_STYLE_COLOUR ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.FILL_AREA_STYLE_COLOUR
}
