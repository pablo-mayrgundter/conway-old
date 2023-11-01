
import { b_spline_curve } from "./index"
import {
  stepExtractNumber,
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
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/rational_b_spline_curve.htm */
export  class rational_b_spline_curve extends b_spline_curve {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.RATIONAL_B_SPLINE_CURVE
  }
  private weights_data_? : Array<number>

  public get weights_data() : Array<number> {
    if ( this.weights_data_ === void 0 ) {
      
      let   cursor    = this.getOffsetCursor( 6 )
      const buffer    = this.buffer
      const endCursor = buffer.length

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
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.RATIONAL_B_SPLINE_CURVE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.RATIONAL_B_SPLINE_CURVE
}
