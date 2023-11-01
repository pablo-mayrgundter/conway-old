
import { address } from "./index"
import { organization } from "./index"
import { text } from "./index"
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
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/organizational_address.htm */
export  class organizational_address extends address {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.ORGANIZATIONAL_ADDRESS
  }
  private organizations_? : Array<organization>
  private description_? : string | null

  public get organizations() : Array<organization> {
    if ( this.organizations_ === void 0 ) {
      
      let   cursor    = this.getOffsetCursor( 12 )
      const buffer    = this.buffer
      const endCursor = buffer.length

      const value : Array<organization> = []

      let signedCursor0 = stepExtractArrayBegin( buffer, cursor, endCursor )
      cursor = Math.abs( signedCursor0 )

      while ( signedCursor0 >= 0 ) {
        const value1 = this.extractBufferElement( buffer, cursor, endCursor, organization )
        if ( value1 === void 0 ) {
          throw new Error( 'Value in STEP was incorrectly typed' )
        }
        cursor = skipValue( buffer, cursor, endCursor )
        value.push( value1 )
        signedCursor0 = stepExtractArrayToken( buffer, cursor, endCursor )
        cursor = Math.abs( signedCursor0 )
      }

      this.organizations_ = value
    }

    return this.organizations_ as Array<organization>
  }

  public get description() : string | null {
    if ( this.description_ === void 0 ) {
      this.description_ = this.extractString( 13, true )
    }

    return this.description_ as string | null
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.ORGANIZATIONAL_ADDRESS ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.ORGANIZATIONAL_ADDRESS
}
