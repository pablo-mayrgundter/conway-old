
import { founded_item } from "./index"
import { label } from "./index"
import { text_style_for_defined_font } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class text_style extends founded_item {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.TEXT_STYLE
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
      
      const value : StepEntityBase< EntityTypesAP214 > = 
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
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.TEXT_STYLE ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.TEXT_STYLE
}
