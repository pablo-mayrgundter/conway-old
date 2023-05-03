
import { IfcAddress } from "./index"
import { IfcLabel } from "./index"
import { IfcURIReference } from "./index"
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
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifctelecomaddress.htm */
export  class IfcTelecomAddress extends IfcAddress {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCTELECOMADDRESS
  }
  private TelephoneNumbers_? : Array< string > | null
  private FacsimileNumbers_? : Array< string > | null
  private PagerNumber_? : string | null
  private ElectronicMailAddresses_? : Array< string > | null
  private WWWHomePageURL_? : string | null
  private MessagingIDs_? : Array< string > | null

  public get TelephoneNumbers() : Array< string > | null {
    if ( this.TelephoneNumbers_ === void 0 ) {
      this.TelephoneNumbers_ = this.extractLambda( 3, (buffer, cursor, endCursor) => {

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

    return this.TelephoneNumbers_ as Array< string > | null
  }

  public get FacsimileNumbers() : Array< string > | null {
    if ( this.FacsimileNumbers_ === void 0 ) {
      this.FacsimileNumbers_ = this.extractLambda( 4, (buffer, cursor, endCursor) => {

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

    return this.FacsimileNumbers_ as Array< string > | null
  }

  public get PagerNumber() : string | null {
    if ( this.PagerNumber_ === void 0 ) {
      this.PagerNumber_ = this.extractString( 5, true )
    }

    return this.PagerNumber_ as string | null
  }

  public get ElectronicMailAddresses() : Array< string > | null {
    if ( this.ElectronicMailAddresses_ === void 0 ) {
      this.ElectronicMailAddresses_ = this.extractLambda( 6, (buffer, cursor, endCursor) => {

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

    return this.ElectronicMailAddresses_ as Array< string > | null
  }

  public get WWWHomePageURL() : string | null {
    if ( this.WWWHomePageURL_ === void 0 ) {
      this.WWWHomePageURL_ = this.extractString( 7, true )
    }

    return this.WWWHomePageURL_ as string | null
  }

  public get MessagingIDs() : Array< string > | null {
    if ( this.MessagingIDs_ === void 0 ) {
      this.MessagingIDs_ = this.extractLambda( 8, (buffer, cursor, endCursor) => {

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

    return this.MessagingIDs_ as Array< string > | null
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCTELECOMADDRESS ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCTELECOMADDRESS
}
