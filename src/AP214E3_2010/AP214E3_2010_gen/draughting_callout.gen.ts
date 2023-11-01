
import { geometric_representation_item } from "./index"
import { annotation_text_occurrence } from "./index"
import { annotation_symbol_occurrence } from "./index"
import { annotation_curve_occurrence } from "./index"
import {
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
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/draughting_callout.htm */
export  class draughting_callout extends geometric_representation_item {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.DRAUGHTING_CALLOUT
  }
  private contents_? : Array<annotation_text_occurrence | annotation_symbol_occurrence | annotation_curve_occurrence>

  public get contents() : Array<annotation_text_occurrence | annotation_symbol_occurrence | annotation_curve_occurrence> {
    if ( this.contents_ === void 0 ) {
      
      let   cursor    = this.getOffsetCursor( 1 )
      const buffer    = this.buffer
      const endCursor = buffer.length

      const value : Array<annotation_text_occurrence | annotation_symbol_occurrence | annotation_curve_occurrence> = []

      let signedCursor0 = stepExtractArrayBegin( buffer, cursor, endCursor )
      cursor = Math.abs( signedCursor0 )

      while ( signedCursor0 >= 0 ) {
        const value1Untyped : StepEntityBase< EntityTypesIfc > | undefined =
          this.extractBufferReference( buffer, cursor, endCursor )

        if ( !( value1Untyped instanceof annotation_text_occurrence ) && !( value1Untyped instanceof annotation_symbol_occurrence ) && !( value1Untyped instanceof annotation_curve_occurrence ) ) {
          throw new Error( 'Value in select must be populated' )
        }

        const value1 = value1Untyped as (annotation_text_occurrence | annotation_symbol_occurrence | annotation_curve_occurrence)
        if ( value1 === void 0 ) {
          throw new Error( 'Value in STEP was incorrectly typed' )
        }
        cursor = skipValue( buffer, cursor, endCursor )
        value.push( value1 )
        signedCursor0 = stepExtractArrayToken( buffer, cursor, endCursor )
        cursor = Math.abs( signedCursor0 )
      }

      this.contents_ = value
    }

    return this.contents_ as Array<annotation_text_occurrence | annotation_symbol_occurrence | annotation_curve_occurrence>
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.DRAUGHTING_CALLOUT ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.DRAUGHTING_CALLOUT
}
