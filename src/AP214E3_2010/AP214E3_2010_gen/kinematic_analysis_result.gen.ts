
import { mechanism } from "./index"
import { interpolated_configuration_sequence } from "./index"
import { resulting_path } from "./index"
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
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/kinematic_analysis_result.htm */
export  class kinematic_analysis_result extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.KINEMATIC_ANALYSIS_RESULT
  }
  private analysed_mechanism_? : mechanism
  private contained_kinematic_results_? : Array<interpolated_configuration_sequence | resulting_path>

  public get analysed_mechanism() : mechanism {
    if ( this.analysed_mechanism_ === void 0 ) {
      this.analysed_mechanism_ = this.extractElement( 0, false, mechanism )
    }

    return this.analysed_mechanism_ as mechanism
  }

  public get contained_kinematic_results() : Array<interpolated_configuration_sequence | resulting_path> {
    if ( this.contained_kinematic_results_ === void 0 ) {
      
      let   cursor    = this.getOffsetCursor( 1 )
      const buffer    = this.buffer
      const endCursor = buffer.length

      const value : Array<interpolated_configuration_sequence | resulting_path> = []

      let signedCursor0 = stepExtractArrayBegin( buffer, cursor, endCursor )
      cursor = Math.abs( signedCursor0 )

      while ( signedCursor0 >= 0 ) {
        const value1Untyped : StepEntityBase< EntityTypesIfc > | undefined =
          this.extractBufferReference( buffer, cursor, endCursor )

        if ( !( value1Untyped instanceof interpolated_configuration_sequence ) && !( value1Untyped instanceof resulting_path ) ) {
          throw new Error( 'Value in select must be populated' )
        }

        const value1 = value1Untyped as (interpolated_configuration_sequence | resulting_path)
        if ( value1 === void 0 ) {
          throw new Error( 'Value in STEP was incorrectly typed' )
        }
        cursor = skipValue( buffer, cursor, endCursor )
        value.push( value1 )
        signedCursor0 = stepExtractArrayToken( buffer, cursor, endCursor )
        cursor = Math.abs( signedCursor0 )
      }

      this.contained_kinematic_results_ = value
    }

    return this.contained_kinematic_results_ as Array<interpolated_configuration_sequence | resulting_path>
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.KINEMATIC_ANALYSIS_RESULT ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.KINEMATIC_ANALYSIS_RESULT
}
