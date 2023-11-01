
import { bounded_surface } from "./index"
import { surface_patch } from "./index"
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
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/rectangular_composite_surface.htm */
export  class rectangular_composite_surface extends bounded_surface {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.RECTANGULAR_COMPOSITE_SURFACE
  }
  private segments_? : Array<Array<surface_patch>>

  public get segments() : Array<Array<surface_patch>> {
    if ( this.segments_ === void 0 ) {
      
      let   cursor    = this.getOffsetCursor( 1 )
      const buffer    = this.buffer
      const endCursor = buffer.length

      const value : Array<Array<surface_patch>> = []

      let signedCursor0 = stepExtractArrayBegin( buffer, cursor, endCursor )
      cursor = Math.abs( signedCursor0 )

      while ( signedCursor0 >= 0 ) {
        const value1 : Array<surface_patch> = []

        let signedCursor1 = stepExtractArrayBegin( buffer, cursor, endCursor )
        cursor = Math.abs( signedCursor1 )

        while ( signedCursor1 >= 0 ) {
          const value2 = this.extractBufferElement( buffer, cursor, endCursor, surface_patch )
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

      this.segments_ = value
    }

    return this.segments_ as Array<Array<surface_patch>>
  }

  public get n_u() : number {
    return SIZEOF(this?.segments);
  }

  public get n_v() : number {
    return SIZEOF(this?.segments?.[1 - 1]);
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.RECTANGULAR_COMPOSITE_SURFACE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.RECTANGULAR_COMPOSITE_SURFACE
}
