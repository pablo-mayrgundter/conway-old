
import { representation_context } from "./index"
import { uncertainty_measure_with_unit } from "./index"
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
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/global_uncertainty_assigned_context.htm */
export  class global_uncertainty_assigned_context extends representation_context {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.GLOBAL_UNCERTAINTY_ASSIGNED_CONTEXT
  }
  private uncertainty_? : Array<uncertainty_measure_with_unit>

  public get uncertainty() : Array<uncertainty_measure_with_unit> {
    if ( this.uncertainty_ === void 0 ) {
      
      let   cursor    = this.getOffsetCursor( 2 )
      const buffer    = this.buffer
      const endCursor = buffer.length

      const value : Array<uncertainty_measure_with_unit> = []

      let signedCursor0 = stepExtractArrayBegin( buffer, cursor, endCursor )
      cursor = Math.abs( signedCursor0 )

      while ( signedCursor0 >= 0 ) {
        const value1 = this.extractBufferElement( buffer, cursor, endCursor, uncertainty_measure_with_unit )
        if ( value1 === void 0 ) {
          throw new Error( 'Value in STEP was incorrectly typed' )
        }
        cursor = skipValue( buffer, cursor, endCursor )
        value.push( value1 )
        signedCursor0 = stepExtractArrayToken( buffer, cursor, endCursor )
        cursor = Math.abs( signedCursor0 )
      }

      this.uncertainty_ = value
    }

    return this.uncertainty_ as Array<uncertainty_measure_with_unit>
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.GLOBAL_UNCERTAINTY_ASSIGNED_CONTEXT ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.GLOBAL_UNCERTAINTY_ASSIGNED_CONTEXT
}
