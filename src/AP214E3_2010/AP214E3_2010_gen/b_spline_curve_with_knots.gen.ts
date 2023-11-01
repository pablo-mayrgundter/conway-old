
import { b_spline_curve } from "./index"
import { parameter_value } from "./index"
import { knot_type, knot_typeDeserializeStep } from "./index"
import {
  stepExtractNumber,
  stepExtractArrayToken,
  stepExtractArrayBegin,
  skipValue,
  SIZEOF,
} from '../../step/parsing/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/b_spline_curve_with_knots.htm */
export  class b_spline_curve_with_knots extends b_spline_curve {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.B_SPLINE_CURVE_WITH_KNOTS
  }
  private knot_multiplicities_? : Array<number>
  private knots_? : Array< number >
  private knot_spec_? : knot_type

  public get knot_multiplicities() : Array<number> {
    if ( this.knot_multiplicities_ === void 0 ) {
      
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

      this.knot_multiplicities_ = value
    }

    return this.knot_multiplicities_ as Array<number>
  }

  public get knots() : Array< number > {
    if ( this.knots_ === void 0 ) {
      
      let   cursor    = this.getOffsetCursor( 7 )
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

      this.knots_ = value
    }

    return this.knots_ as Array< number >
  }

  public get knot_spec() : knot_type {
    if ( this.knot_spec_ === void 0 ) {
      this.knot_spec_ = this.extractLambda( 8, knot_typeDeserializeStep, false )
    }

    return this.knot_spec_ as knot_type
  }

  public get upper_index_on_knots() : number {
    return SIZEOF(this?.knots);
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.B_SPLINE_CURVE_WITH_KNOTS ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.B_SPLINE_CURVE_WITH_KNOTS
}
