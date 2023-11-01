
import { founded_item } from "./index"
import { label } from "./index"
import { curve_style_font } from "./index"
import { pre_defined_curve_font } from "./index"
import { externally_defined_curve_font } from "./index"
import { positive_length_measure } from "./index"
import { measure_with_unit } from "./index"
import { descriptive_measure } from "./index"
import { colour } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/curve_style.htm */
export  class curve_style extends founded_item {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.CURVE_STYLE
  }
  private name_? : string
  private curve_font_? : curve_style_font | pre_defined_curve_font | externally_defined_curve_font
  private curve_width_? : positive_length_measure | measure_with_unit | descriptive_measure
  private curve_colour_? : colour

  public get name() : string {
    if ( this.name_ === void 0 ) {
      this.name_ = this.extractString( 0, false )
    }

    return this.name_ as string
  }

  public get curve_font() : curve_style_font | pre_defined_curve_font | externally_defined_curve_font {
    if ( this.curve_font_ === void 0 ) {
      
      const value : StepEntityBase< EntityTypesIfc > =
        this.extractReference( 1, false )

      if ( !( value instanceof curve_style_font ) && !( value instanceof pre_defined_curve_font ) && !( value instanceof externally_defined_curve_font ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      this.curve_font_ = value as (curve_style_font | pre_defined_curve_font | externally_defined_curve_font)

    }

    return this.curve_font_ as curve_style_font | pre_defined_curve_font | externally_defined_curve_font
  }

  public get curve_width() : positive_length_measure | measure_with_unit | descriptive_measure {
    if ( this.curve_width_ === void 0 ) {
      
      const value : StepEntityBase< EntityTypesIfc > =
        this.extractReference( 2, false )

      if ( !( value instanceof positive_length_measure ) && !( value instanceof measure_with_unit ) && !( value instanceof descriptive_measure ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      this.curve_width_ = value as (positive_length_measure | measure_with_unit | descriptive_measure)

    }

    return this.curve_width_ as positive_length_measure | measure_with_unit | descriptive_measure
  }

  public get curve_colour() : colour {
    if ( this.curve_colour_ === void 0 ) {
      this.curve_colour_ = this.extractElement( 3, false, colour )
    }

    return this.curve_colour_ as colour
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.CURVE_STYLE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.CURVE_STYLE
}
