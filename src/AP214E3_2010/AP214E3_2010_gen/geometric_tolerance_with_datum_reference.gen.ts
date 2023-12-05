
import { geometric_tolerance } from "./index"
import { datum_reference } from "./index"
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
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/geometric_tolerance_with_datum_reference.htm */
export  class geometric_tolerance_with_datum_reference extends geometric_tolerance {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.GEOMETRIC_TOLERANCE_WITH_DATUM_REFERENCE
  }
  private datum_system_? : Array<datum_reference>

  public get datum_system() : Array<datum_reference> {
    if ( this.datum_system_ === void 0 ) {
      
      let   cursor    = this.getOffsetCursor( 4 )
      const buffer    = this.buffer
      const endCursor = buffer.length

      if ( stepExtractOptional( buffer, cursor, endCursor ) === null ) {
        return []
      }

      const value : Array<datum_reference> = []

      let signedCursor0 = stepExtractArrayBegin( buffer, cursor, endCursor )
      cursor = Math.abs( signedCursor0 )

      while ( signedCursor0 >= 0 ) {
        const value1 = this.extractBufferElement( buffer, cursor, endCursor, datum_reference )
        if ( value1 === void 0 ) {
          throw new Error( 'Value in STEP was incorrectly typed' )
        }
        cursor = skipValue( buffer, cursor, endCursor )
        value.push( value1 )
        signedCursor0 = stepExtractArrayToken( buffer, cursor, endCursor )
        cursor = Math.abs( signedCursor0 )
      }

      this.datum_system_ = value
    }

    return this.datum_system_ as Array<datum_reference>
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.GEOMETRIC_TOLERANCE_WITH_DATUM_REFERENCE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.GEOMETRIC_TOLERANCE_WITH_DATUM_REFERENCE
}
