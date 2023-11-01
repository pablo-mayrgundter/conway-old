
import { representation } from "./index"
import { point } from "./index"
import { curve } from "./index"
import { surface } from "./index"
import { geometric_representation_context } from "./index"
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
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/kinematic_frame_background_representation.htm */
export  class kinematic_frame_background_representation extends representation {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.KINEMATIC_FRAME_BACKGROUND_REPRESENTATION
  }
  private SELF\representation.items_? : Array<point | curve | surface>
  private SELF\representation.context_of_items_? : geometric_representation_context

  public get SELF\representation.items() : Array<point | curve | surface> {
    if ( this.SELF\representation.items_ === void 0 ) {
      
      let   cursor    = this.getOffsetCursor( 3 )
      const buffer    = this.buffer
      const endCursor = buffer.length

      const value : Array<point | curve | surface> = []

      let signedCursor0 = stepExtractArrayBegin( buffer, cursor, endCursor )
      cursor = Math.abs( signedCursor0 )

      while ( signedCursor0 >= 0 ) {
        const value1Untyped : StepEntityBase< EntityTypesIfc > | undefined =
          this.extractBufferReference( buffer, cursor, endCursor )

        if ( !( value1Untyped instanceof point ) && !( value1Untyped instanceof curve ) && !( value1Untyped instanceof surface ) ) {
          throw new Error( 'Value in select must be populated' )
        }

        const value1 = value1Untyped as (point | curve | surface)
        if ( value1 === void 0 ) {
          throw new Error( 'Value in STEP was incorrectly typed' )
        }
        cursor = skipValue( buffer, cursor, endCursor )
        value.push( value1 )
        signedCursor0 = stepExtractArrayToken( buffer, cursor, endCursor )
        cursor = Math.abs( signedCursor0 )
      }

      this.SELF\representation.items_ = value
    }

    return this.SELF\representation.items_ as Array<point | curve | surface>
  }

  public get SELF\representation.context_of_items() : geometric_representation_context {
    if ( this.SELF\representation.context_of_items_ === void 0 ) {
      this.SELF\representation.context_of_items_ = this.extractElement( 4, false, geometric_representation_context )
    }

    return this.SELF\representation.context_of_items_ as geometric_representation_context
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.KINEMATIC_FRAME_BACKGROUND_REPRESENTATION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.KINEMATIC_FRAME_BACKGROUND_REPRESENTATION
}
