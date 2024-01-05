
import { geometric_representation_item } from "./index"
import { two_direction_repeat_factor } from "./index"
import { fill_area_style_tile_symbol_with_style } from "./index"
import { positive_ratio_measure } from "./index"
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
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/fill_area_style_tiles.htm */
export  class fill_area_style_tiles extends geometric_representation_item {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.FILL_AREA_STYLE_TILES
  }
  private tiling_pattern_? : two_direction_repeat_factor
  private tiles_? : Array<fill_area_style_tile_symbol_with_style>
  private tiling_scale_? : number

  public get tiling_pattern() : two_direction_repeat_factor {
    if ( this.tiling_pattern_ === void 0 ) {
      this.tiling_pattern_ = this.extractElement( 1, false, two_direction_repeat_factor )
    }

    return this.tiling_pattern_ as two_direction_repeat_factor
  }

  public get tiles() : Array<fill_area_style_tile_symbol_with_style> {
    if ( this.tiles_ === void 0 ) {
      
      let   cursor    = this.getOffsetCursor( 2 )
      const buffer    = this.buffer
      const endCursor = buffer.length

      if ( stepExtractOptional( buffer, cursor, endCursor ) === null ) {
        return []
      }

      const value : Array<fill_area_style_tile_symbol_with_style> = []

      let signedCursor0 = stepExtractArrayBegin( buffer, cursor, endCursor )
      cursor = Math.abs( signedCursor0 )

      while ( signedCursor0 >= 0 ) {
        const value1Untyped : StepEntityBase< EntityTypesIfc > | undefined = 
          this.extractBufferReference( buffer, cursor, endCursor )

        if ( !( value1Untyped instanceof fill_area_style_tile_symbol_with_style ) ) {
          throw new Error( 'Value in select must be populated' )
        }

        const value1 = value1Untyped as (fill_area_style_tile_symbol_with_style)
        if ( value1 === void 0 ) {
          throw new Error( 'Value in STEP was incorrectly typed' )
        }
        cursor = skipValue( buffer, cursor, endCursor )
        value.push( value1 )
        signedCursor0 = stepExtractArrayToken( buffer, cursor, endCursor )
        cursor = Math.abs( signedCursor0 )
      }

      this.tiles_ = value
    }

    return this.tiles_ as Array<fill_area_style_tile_symbol_with_style>
  }

  public get tiling_scale() : number {
    if ( this.tiling_scale_ === void 0 ) {
      this.tiling_scale_ = this.extractNumber( 3, false )
    }

    return this.tiling_scale_ as number
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.FILL_AREA_STYLE_TILES ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.FILL_AREA_STYLE_TILES
}
