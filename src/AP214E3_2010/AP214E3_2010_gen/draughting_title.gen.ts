
import { drawing_revision } from "./index"
import { drawing_sheet_revision } from "./index"
import { label } from "./index"
import { text } from "./index"
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
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/draughting_title.htm */
export  class draughting_title extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.DRAUGHTING_TITLE
  }
  private items_? : Array<drawing_revision | drawing_sheet_revision>
  private language_? : string
  private contents_? : string

  public get items() : Array<drawing_revision | drawing_sheet_revision> {
    if ( this.items_ === void 0 ) {
      
      let   cursor    = this.getOffsetCursor( 0 )
      const buffer    = this.buffer
      const endCursor = buffer.length

      if ( stepExtractOptional( buffer, cursor, endCursor ) === null ) {
        return []
      }

      const value : Array<drawing_revision | drawing_sheet_revision> = []

      let signedCursor0 = stepExtractArrayBegin( buffer, cursor, endCursor )
      cursor = Math.abs( signedCursor0 )

      while ( signedCursor0 >= 0 ) {
        const value1Untyped : StepEntityBase< EntityTypesIfc > | undefined = 
          this.extractBufferReference( buffer, cursor, endCursor )

        if ( !( value1Untyped instanceof drawing_revision ) && !( value1Untyped instanceof drawing_sheet_revision ) ) {
          throw new Error( 'Value in select must be populated' )
        }

        const value1 = value1Untyped as (drawing_revision | drawing_sheet_revision)
        if ( value1 === void 0 ) {
          throw new Error( 'Value in STEP was incorrectly typed' )
        }
        cursor = skipValue( buffer, cursor, endCursor )
        value.push( value1 )
        signedCursor0 = stepExtractArrayToken( buffer, cursor, endCursor )
        cursor = Math.abs( signedCursor0 )
      }

      this.items_ = value
    }

    return this.items_ as Array<drawing_revision | drawing_sheet_revision>
  }

  public get language() : string {
    if ( this.language_ === void 0 ) {
      this.language_ = this.extractString( 1, false )
    }

    return this.language_ as string
  }

  public get contents() : string {
    if ( this.contents_ === void 0 ) {
      this.contents_ = this.extractString( 2, false )
    }

    return this.contents_ as string
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.DRAUGHTING_TITLE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.DRAUGHTING_TITLE
}
