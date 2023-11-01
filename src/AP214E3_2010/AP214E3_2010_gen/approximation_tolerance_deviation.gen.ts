
import { founded_item } from "./index"
import { approximation_method, approximation_methodDeserializeStep } from "./index"
import { curve_tolerance_deviation } from "./index"
import { surface_tolerance_deviation } from "./index"
import { product_or_presentation_space, product_or_presentation_spaceDeserializeStep } from "./index"
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
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/approximation_tolerance_deviation.htm */
export  class approximation_tolerance_deviation extends founded_item {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.APPROXIMATION_TOLERANCE_DEVIATION
  }
  private tessellation_type_? : approximation_method
  private tolerances_? : Array<curve_tolerance_deviation | surface_tolerance_deviation>
  private definition_space_? : product_or_presentation_space

  public get tessellation_type() : approximation_method {
    if ( this.tessellation_type_ === void 0 ) {
      this.tessellation_type_ = this.extractLambda( 0, approximation_methodDeserializeStep, false )
    }

    return this.tessellation_type_ as approximation_method
  }

  public get tolerances() : Array<curve_tolerance_deviation | surface_tolerance_deviation> {
    if ( this.tolerances_ === void 0 ) {
      
      let   cursor    = this.getOffsetCursor( 1 )
      const buffer    = this.buffer
      const endCursor = buffer.length

      const value : Array<curve_tolerance_deviation | surface_tolerance_deviation> = []

      let signedCursor0 = stepExtractArrayBegin( buffer, cursor, endCursor )
      cursor = Math.abs( signedCursor0 )

      while ( signedCursor0 >= 0 ) {
        const value1Untyped : StepEntityBase< EntityTypesIfc > | undefined =
          this.extractBufferReference( buffer, cursor, endCursor )

        if ( !( value1Untyped instanceof curve_tolerance_deviation ) && !( value1Untyped instanceof surface_tolerance_deviation ) ) {
          throw new Error( 'Value in select must be populated' )
        }

        const value1 = value1Untyped as (curve_tolerance_deviation | surface_tolerance_deviation)
        if ( value1 === void 0 ) {
          throw new Error( 'Value in STEP was incorrectly typed' )
        }
        cursor = skipValue( buffer, cursor, endCursor )
        value.push( value1 )
        signedCursor0 = stepExtractArrayToken( buffer, cursor, endCursor )
        cursor = Math.abs( signedCursor0 )
      }

      this.tolerances_ = value
    }

    return this.tolerances_ as Array<curve_tolerance_deviation | surface_tolerance_deviation>
  }

  public get definition_space() : product_or_presentation_space {
    if ( this.definition_space_ === void 0 ) {
      this.definition_space_ = this.extractLambda( 2, product_or_presentation_spaceDeserializeStep, false )
    }

    return this.definition_space_ as product_or_presentation_space
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.APPROXIMATION_TOLERANCE_DEVIATION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.APPROXIMATION_TOLERANCE_DEVIATION
}
