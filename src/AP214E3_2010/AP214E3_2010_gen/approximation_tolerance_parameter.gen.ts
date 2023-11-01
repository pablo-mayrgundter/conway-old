
import { founded_item } from "./index"
import { curve_tolerance_parameter } from "./index"
import { surface_tolerance_parameter } from "./index"
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
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/approximation_tolerance_parameter.htm */
export  class approximation_tolerance_parameter extends founded_item {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.APPROXIMATION_TOLERANCE_PARAMETER
  }
  private tolerances_? : Array<curve_tolerance_parameter | surface_tolerance_parameter>

  public get tolerances() : Array<curve_tolerance_parameter | surface_tolerance_parameter> {
    if ( this.tolerances_ === void 0 ) {
      
      let   cursor    = this.getOffsetCursor( 0 )
      const buffer    = this.buffer
      const endCursor = buffer.length

      const value : Array<curve_tolerance_parameter | surface_tolerance_parameter> = []

      let signedCursor0 = stepExtractArrayBegin( buffer, cursor, endCursor )
      cursor = Math.abs( signedCursor0 )

      while ( signedCursor0 >= 0 ) {
        const value1Untyped : StepEntityBase< EntityTypesIfc > | undefined =
          this.extractBufferReference( buffer, cursor, endCursor )

        if ( !( value1Untyped instanceof curve_tolerance_parameter ) && !( value1Untyped instanceof surface_tolerance_parameter ) ) {
          throw new Error( 'Value in select must be populated' )
        }

        const value1 = value1Untyped as (curve_tolerance_parameter | surface_tolerance_parameter)
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

    return this.tolerances_ as Array<curve_tolerance_parameter | surface_tolerance_parameter>
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.APPROXIMATION_TOLERANCE_PARAMETER ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.APPROXIMATION_TOLERANCE_PARAMETER
}
