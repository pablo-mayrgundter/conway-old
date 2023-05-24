
import { IfcAddress } from "./index"
import { IfcLabel } from "./index"
import {
  stepExtractString,
  stepExtractOptional,
  stepExtractArray,
} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcpostaladdress.htm */
export  class IfcPostalAddress extends IfcAddress {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCPOSTALADDRESS
  }
  private InternalLocation_? : string | null
  private AddressLines_? : Array< string > | null
  private PostalBox_? : string | null
  private Town_? : string | null
  private Region_? : string | null
  private PostalCode_? : string | null
  private Country_? : string | null

  public get InternalLocation() : string | null {
    if ( this.InternalLocation_ === void 0 ) {
      this.InternalLocation_ = this.extractString( 3, true )
    }

    return this.InternalLocation_ as string | null
  }

  public get AddressLines() : Array< string > | null {
    if ( this.AddressLines_ === void 0 ) {
      this.AddressLines_ = this.extractLambda( 4, (buffer, cursor, endCursor) => {

      if ( stepExtractOptional( buffer, cursor, endCursor ) === null ) {
        return null
      }

      let value : Array<string> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
          const value = stepExtractString( buffer, cursor, endCursor )
    
          if ( value === void 0 ) {
            throw new Error( 'Value needs to be defined in encapsulating context' )
          }
    
          return value 
        })() )
      }
      return value }, true )
    }

    return this.AddressLines_ as Array< string > | null
  }

  public get PostalBox() : string | null {
    if ( this.PostalBox_ === void 0 ) {
      this.PostalBox_ = this.extractString( 5, true )
    }

    return this.PostalBox_ as string | null
  }

  public get Town() : string | null {
    if ( this.Town_ === void 0 ) {
      this.Town_ = this.extractString( 6, true )
    }

    return this.Town_ as string | null
  }

  public get Region() : string | null {
    if ( this.Region_ === void 0 ) {
      this.Region_ = this.extractString( 7, true )
    }

    return this.Region_ as string | null
  }

  public get PostalCode() : string | null {
    if ( this.PostalCode_ === void 0 ) {
      this.PostalCode_ = this.extractString( 8, true )
    }

    return this.PostalCode_ as string | null
  }

  public get Country() : string | null {
    if ( this.Country_ === void 0 ) {
      this.Country_ = this.extractString( 9, true )
    }

    return this.Country_ as string | null
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCPOSTALADDRESS ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCPOSTALADDRESS
}
