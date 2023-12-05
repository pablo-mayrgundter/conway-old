
import { bounded_curve } from "./index"
import { curve } from "./index"
import { cartesian_point } from "./index"
import { parameter_value } from "./index"
import { trimming_preference, trimming_preferenceDeserializeStep } from "./index"
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
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/trimmed_curve.htm */
export  class trimmed_curve extends bounded_curve {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.TRIMMED_CURVE
  }
  private basis_curve_? : curve
  private trim_1_? : Array<cartesian_point | parameter_value>
  private trim_2_? : Array<cartesian_point | parameter_value>
  private sense_agreement_? : boolean
  private master_representation_? : trimming_preference

  public get basis_curve() : curve {
    if ( this.basis_curve_ === void 0 ) {
      this.basis_curve_ = this.extractElement( 1, false, curve )
    }

    return this.basis_curve_ as curve
  }

  public get trim_1() : Array<cartesian_point | parameter_value> {
    if ( this.trim_1_ === void 0 ) {
      
      let   cursor    = this.getOffsetCursor( 2 )
      const buffer    = this.buffer
      const endCursor = buffer.length

      if ( stepExtractOptional( buffer, cursor, endCursor ) === null ) {
        return []
      }

      const value : Array<cartesian_point | parameter_value> = []

      let signedCursor0 = stepExtractArrayBegin( buffer, cursor, endCursor )
      cursor = Math.abs( signedCursor0 )

      while ( signedCursor0 >= 0 ) {
        const value1Untyped : StepEntityBase< EntityTypesIfc > | undefined =
          this.extractBufferReference( buffer, cursor, endCursor )

        if ( !( value1Untyped instanceof cartesian_point ) && !( value1Untyped instanceof parameter_value ) ) {
          throw new Error( 'Value in select must be populated' )
        }

        const value1 = value1Untyped as (cartesian_point | parameter_value)
        if ( value1 === void 0 ) {
          throw new Error( 'Value in STEP was incorrectly typed' )
        }
        cursor = skipValue( buffer, cursor, endCursor )
        value.push( value1 )
        signedCursor0 = stepExtractArrayToken( buffer, cursor, endCursor )
        cursor = Math.abs( signedCursor0 )
      }

      this.trim_1_ = value
    }

    return this.trim_1_ as Array<cartesian_point | parameter_value>
  }

  public get trim_2() : Array<cartesian_point | parameter_value> {
    if ( this.trim_2_ === void 0 ) {
      
      let   cursor    = this.getOffsetCursor( 3 )
      const buffer    = this.buffer
      const endCursor = buffer.length

      if ( stepExtractOptional( buffer, cursor, endCursor ) === null ) {
        return []
      }

      const value : Array<cartesian_point | parameter_value> = []

      let signedCursor0 = stepExtractArrayBegin( buffer, cursor, endCursor )
      cursor = Math.abs( signedCursor0 )

      while ( signedCursor0 >= 0 ) {
        const value1Untyped : StepEntityBase< EntityTypesIfc > | undefined =
          this.extractBufferReference( buffer, cursor, endCursor )

        if ( !( value1Untyped instanceof cartesian_point ) && !( value1Untyped instanceof parameter_value ) ) {
          throw new Error( 'Value in select must be populated' )
        }

        const value1 = value1Untyped as (cartesian_point | parameter_value)
        if ( value1 === void 0 ) {
          throw new Error( 'Value in STEP was incorrectly typed' )
        }
        cursor = skipValue( buffer, cursor, endCursor )
        value.push( value1 )
        signedCursor0 = stepExtractArrayToken( buffer, cursor, endCursor )
        cursor = Math.abs( signedCursor0 )
      }

      this.trim_2_ = value
    }

    return this.trim_2_ as Array<cartesian_point | parameter_value>
  }

  public get sense_agreement() : boolean {
    if ( this.sense_agreement_ === void 0 ) {
      this.sense_agreement_ = this.extractBoolean( 4, false )
    }

    return this.sense_agreement_ as boolean
  }

  public get master_representation() : trimming_preference {
    if ( this.master_representation_ === void 0 ) {
      this.master_representation_ = this.extractLambda( 5, trimming_preferenceDeserializeStep, false )
    }

    return this.master_representation_ as trimming_preference
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.TRIMMED_CURVE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.TRIMMED_CURVE
}
