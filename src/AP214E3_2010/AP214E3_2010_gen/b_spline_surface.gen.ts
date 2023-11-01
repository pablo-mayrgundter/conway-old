
import { bounded_surface } from "./index"
import { cartesian_point } from "./index"
import { b_spline_surface_form, b_spline_surface_formDeserializeStep } from "./index"
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
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/b_spline_surface.htm */
export  class b_spline_surface extends bounded_surface {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.B_SPLINE_SURFACE
  }
  private u_degree_? : number
  private v_degree_? : number
  private control_points_list_? : Array<Array<cartesian_point>>
  private surface_form_? : b_spline_surface_form
  private u_closed_? : boolean
  private v_closed_? : boolean
  private self_intersect_? : boolean

  public get u_degree() : number {
    if ( this.u_degree_ === void 0 ) {
      this.u_degree_ = this.extractNumber( 1, false )
    }

    return this.u_degree_ as number
  }

  public get v_degree() : number {
    if ( this.v_degree_ === void 0 ) {
      this.v_degree_ = this.extractNumber( 2, false )
    }

    return this.v_degree_ as number
  }

  public get control_points_list() : Array<Array<cartesian_point>> {
    if ( this.control_points_list_ === void 0 ) {
      
      let   cursor    = this.getOffsetCursor( 3 )
      const buffer    = this.buffer
      const endCursor = buffer.length

      const value : Array<Array<cartesian_point>> = []

      let signedCursor0 = stepExtractArrayBegin( buffer, cursor, endCursor )
      cursor = Math.abs( signedCursor0 )

      while ( signedCursor0 >= 0 ) {
        const value1 : Array<cartesian_point> = []

        let signedCursor1 = stepExtractArrayBegin( buffer, cursor, endCursor )
        cursor = Math.abs( signedCursor1 )

        while ( signedCursor1 >= 0 ) {
          const value2 = this.extractBufferElement( buffer, cursor, endCursor, cartesian_point )
          if ( value2 === void 0 ) {
            throw new Error( 'Value in STEP was incorrectly typed' )
          }
          cursor = skipValue( buffer, cursor, endCursor )
          value1.push( value2 )
          signedCursor1 = stepExtractArrayToken( buffer, cursor, endCursor )
          cursor = Math.abs( signedCursor1 )
        }
        value.push( value1 )
        signedCursor0 = stepExtractArrayToken( buffer, cursor, endCursor )
        cursor = Math.abs( signedCursor0 )
      }

      this.control_points_list_ = value
    }

    return this.control_points_list_ as Array<Array<cartesian_point>>
  }

  public get surface_form() : b_spline_surface_form {
    if ( this.surface_form_ === void 0 ) {
      this.surface_form_ = this.extractLambda( 4, b_spline_surface_formDeserializeStep, false )
    }

    return this.surface_form_ as b_spline_surface_form
  }

  public get u_closed() : boolean {
    if ( this.u_closed_ === void 0 ) {
      this.u_closed_ = this.extractBoolean( 5, false )
    }

    return this.u_closed_ as boolean
  }

  public get v_closed() : boolean {
    if ( this.v_closed_ === void 0 ) {
      this.v_closed_ = this.extractBoolean( 6, false )
    }

    return this.v_closed_ as boolean
  }

  public get self_intersect() : boolean {
    if ( this.self_intersect_ === void 0 ) {
      this.self_intersect_ = this.extractBoolean( 7, false )
    }

    return this.self_intersect_ as boolean
  }

  public get u_upper() : number {
    return SIZEOF(this?.control_points_list)-1;
  }

  public get v_upper() : number {
    return SIZEOF(this?.control_points_list?.[1 - 1])-1;
  }

  public get control_points() : Array<Array<cartesian_point>> {
    return make_array_of_array(this?.control_points_list,0,this?.u_upper,0,this?.v_upper);
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.B_SPLINE_SURFACE, EntityTypesIfc.B_SPLINE_SURFACE_WITH_KNOTS, EntityTypesIfc.UNIFORM_SURFACE, EntityTypesIfc.QUASI_UNIFORM_SURFACE, EntityTypesIfc.BEZIER_SURFACE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.B_SPLINE_SURFACE
}
