
import { b_spline_curve } from "./index"
import {
  stepExtractOptional,
  stepExtractNumber,
  stepExtractArrayToken,
  stepExtractArrayBegin,
  skipValue,
} from '../../step/parsing/step_deserialization_functions'
import {
  list_to_array,
} from '../ap214_functions'

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class rational_b_spline_curve extends b_spline_curve {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.RATIONAL_B_SPLINE_CURVE
  }
  private weights_data_? : Array<number>

  public get weights_data() : Array<number> {
    if ( this.weights_data_ === void 0 ) {
      
      let   cursor    = this.getOffsetCursor( 6 )
      const buffer    = this.buffer
      const endCursor = buffer.length

      if ( stepExtractOptional( buffer, cursor, endCursor ) === null ) {
        return []
      }

      const value : Array<number> = []

      let signedCursor0 = stepExtractArrayBegin( buffer, cursor, endCursor )
      cursor = Math.abs( signedCursor0 )

      while ( signedCursor0 >= 0 ) {
        const value1 = stepExtractNumber( buffer, cursor, endCursor )

        if ( value1 === void 0 ) {
          throw new Error( 'Value in STEP was incorrectly typed' )
        }
        cursor = skipValue( buffer, cursor, endCursor )
        value.push( value1 )
        signedCursor0 = stepExtractArrayToken( buffer, cursor, endCursor )
        cursor = Math.abs( signedCursor0 )
      }

      this.weights_data_ = value
    }

    return this.weights_data_ as Array<number>
  }

  public get weights() : Array<number> {
    return list_to_array(this?.weights_data,0,this?.upper_index_on_control_points);
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.RATIONAL_B_SPLINE_CURVE ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.RATIONAL_B_SPLINE_CURVE
}
