
import { founded_item } from "./index"
import { label } from "./index"
import { text_style_for_defined_font } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/text_style.htm */
export  class text_style extends founded_item {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.TEXT_STYLE
  }
  private name_? : string
  private character_appearance_? : text_style_for_defined_font

  public get name() : string {
    if ( this.name_ === void 0 ) {
      this.name_ = this.extractString( 0, false )
    }

    return this.name_ as string
  }

  public get character_appearance() : text_style_for_defined_font {
    if ( this.character_appearance_ === void 0 ) {
      
      const value : StepEntityBase< EntityTypesIfc > =
        this.extractReference( 1, false )

      if ( !( value instanceof text_style_for_defined_font ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      this.character_appearance_ = value as (text_style_for_defined_font)

    }

    return this.character_appearance_ as text_style_for_defined_font
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.TEXT_STYLE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.TEXT_STYLE
}
