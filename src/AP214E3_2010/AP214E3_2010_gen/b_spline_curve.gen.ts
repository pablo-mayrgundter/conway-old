
import { bounded_curve } from "./index"
import { cartesian_point } from "./index"
import { b_spline_curve_form, b_spline_curve_formDeserializeStep } from "./index"
import {
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
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/b_spline_curve.htm */
export  class b_spline_curve extends bounded_curve {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.B_SPLINE_CURVE
  }
  private degree_? : number
  private control_points_list_? : Array<cartesian_point>
  private curve_form_? : b_spline_curve_form
  private closed_curve_? : boolean
  private self_intersect_? : boolean

  public get degree() : number {
    if ( this.degree_ === void 0 ) {
      this.degree_ = this.extractNumber( 1, false )
    }

    return this.degree_ as number
  }

  public get control_points_list() : Array<cartesian_point> {
    if ( this.control_points_list_ === void 0 ) {
      
      let   cursor    = this.getOffsetCursor( 2 )
      const buffer    = this.buffer
      const endCursor = buffer.length

      const value : Array<cartesian_point> = []

      let signedCursor0 = stepExtractArrayBegin( buffer, cursor, endCursor )
      cursor = Math.abs( signedCursor0 )

      while ( signedCursor0 >= 0 ) {
        const value1 = this.extractBufferElement( buffer, cursor, endCursor, cartesian_point )
        if ( value1 === void 0 ) {
          throw new Error( 'Value in STEP was incorrectly typed' )
        }
        cursor = skipValue( buffer, cursor, endCursor )
        value.push( value1 )
        signedCursor0 = stepExtractArrayToken( buffer, cursor, endCursor )
        cursor = Math.abs( signedCursor0 )
      }

      this.control_points_list_ = value
    }

    return this.control_points_list_ as Array<cartesian_point>
  }

  public get curve_form() : b_spline_curve_form {
    if ( this.curve_form_ === void 0 ) {
      this.curve_form_ = this.extractLambda( 3, b_spline_curve_formDeserializeStep, false )
    }

    return this.curve_form_ as b_spline_curve_form
  }

  public get closed_curve() : boolean {
    if ( this.closed_curve_ === void 0 ) {
      this.closed_curve_ = this.extractBoolean( 4, false )
    }

    return this.closed_curve_ as boolean
  }

  public get self_intersect() : boolean {
    if ( this.self_intersect_ === void 0 ) {
      this.self_intersect_ = this.extractBoolean( 5, false )
    }

    return this.self_intersect_ as boolean
  }

  public get upper_index_on_control_points() : number {
    return SIZEOF(this?.control_points_list)-1;
  }

  public get control_points() : Array<cartesian_point> {
    return list_to_array(this?.control_points_list,0,this?.upper_index_on_control_points);
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.B_SPLINE_CURVE, EntityTypesIfc.UNIFORM_CURVE, EntityTypesIfc.B_SPLINE_CURVE_WITH_KNOTS, EntityTypesIfc.QUASI_UNIFORM_CURVE, EntityTypesIfc.BEZIER_CURVE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.B_SPLINE_CURVE
}
