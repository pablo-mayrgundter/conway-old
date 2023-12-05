
import { text_style } from "./index"
import { box_height } from "./index"
import { box_width } from "./index"
import { box_slant_angle } from "./index"
import { box_rotate_angle } from "./index"
import {
  stepExtractOptional,
  stepExtractArrayToken,
  stepExtractArrayBegin,
  skipValue,
} from '../../step/parsing/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/text_style_with_box_characteristics.htm */
export  class text_style_with_box_characteristics extends text_style {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.TEXT_STYLE_WITH_BOX_CHARACTERISTICS
  }
  private characteristics_? : Array<box_height | box_width | box_slant_angle | box_rotate_angle>

  public get characteristics() : Array<box_height | box_width | box_slant_angle | box_rotate_angle> {
    if ( this.characteristics_ === void 0 ) {
      
      let   cursor    = this.getOffsetCursor( 2 )
      const buffer    = this.buffer
      const endCursor = buffer.length

      if ( stepExtractOptional( buffer, cursor, endCursor ) === null ) {
        return []
      }

      const value : Array<box_height | box_width | box_slant_angle | box_rotate_angle> = []

      let signedCursor0 = stepExtractArrayBegin( buffer, cursor, endCursor )
      cursor = Math.abs( signedCursor0 )

      while ( signedCursor0 >= 0 ) {
        const value1Untyped : StepEntityBase< EntityTypesIfc > | undefined =
          this.extractBufferReference( buffer, cursor, endCursor )

        if ( !( value1Untyped instanceof box_height ) && !( value1Untyped instanceof box_width ) && !( value1Untyped instanceof box_slant_angle ) && !( value1Untyped instanceof box_rotate_angle ) ) {
          throw new Error( 'Value in select must be populated' )
        }

        const value1 = value1Untyped as (box_height | box_width | box_slant_angle | box_rotate_angle)
        if ( value1 === void 0 ) {
          throw new Error( 'Value in STEP was incorrectly typed' )
        }
        cursor = skipValue( buffer, cursor, endCursor )
        value.push( value1 )
        signedCursor0 = stepExtractArrayToken( buffer, cursor, endCursor )
        cursor = Math.abs( signedCursor0 )
      }

      this.characteristics_ = value
    }

    return this.characteristics_ as Array<box_height | box_width | box_slant_angle | box_rotate_angle>
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.TEXT_STYLE_WITH_BOX_CHARACTERISTICS ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.TEXT_STYLE_WITH_BOX_CHARACTERISTICS
}
