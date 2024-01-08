
import { pair_value } from "./index"
import { parameter_value } from "./index"
import { measure_with_unit } from "./index"
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
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/configuration_definition.htm */
export  class configuration_definition extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.CONFIGURATION_DEFINITION
  }
  private pair_values_? : Array<pair_value>
  private t_parameter_? : parameter_value | measure_with_unit

  public get pair_values() : Array<pair_value> {
    if ( this.pair_values_ === void 0 ) {
      
      let   cursor    = this.getOffsetCursor( 0 )
      const buffer    = this.buffer
      const endCursor = buffer.length

      if ( stepExtractOptional( buffer, cursor, endCursor ) === null ) {
        return []
      }

      const value : Array<pair_value> = []

      let signedCursor0 = stepExtractArrayBegin( buffer, cursor, endCursor )
      cursor = Math.abs( signedCursor0 )

      while ( signedCursor0 >= 0 ) {
        const value1 = this.extractBufferElement( buffer, cursor, endCursor, pair_value )
        if ( value1 === void 0 ) {
          throw new Error( 'Value in STEP was incorrectly typed' )
        }
        cursor = skipValue( buffer, cursor, endCursor )
        value.push( value1 )
        signedCursor0 = stepExtractArrayToken( buffer, cursor, endCursor )
        cursor = Math.abs( signedCursor0 )
      }

      this.pair_values_ = value
    }

    return this.pair_values_ as Array<pair_value>
  }

  public get t_parameter() : parameter_value | measure_with_unit {
    if ( this.t_parameter_ === void 0 ) {
      
      const value : StepEntityBase< EntityTypesIfc > = 
        this.extractReference( 1, false )

      if ( !( value instanceof parameter_value ) && !( value instanceof measure_with_unit ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      this.t_parameter_ = value as (parameter_value | measure_with_unit)

    }

    return this.t_parameter_ as parameter_value | measure_with_unit
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.CONFIGURATION_DEFINITION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.CONFIGURATION_DEFINITION
}
