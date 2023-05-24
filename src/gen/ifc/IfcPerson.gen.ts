
import { IfcIdentifier } from "./index"
import { IfcLabel } from "./index"
import { IfcActorRole } from "./index"
import { IfcAddress } from "./index"
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
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcperson.htm */
export  class IfcPerson extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCPERSON
  }
  private Identification_? : string | null
  private FamilyName_? : string | null
  private GivenName_? : string | null
  private MiddleNames_? : Array< string > | null
  private PrefixTitles_? : Array< string > | null
  private SuffixTitles_? : Array< string > | null
  private Roles_? : Array<IfcActorRole> | null
  private Addresses_? : Array<IfcAddress> | null

  public get Identification() : string | null {
    if ( this.Identification_ === void 0 ) {
      this.Identification_ = this.extractString( 0, true )
    }

    return this.Identification_ as string | null
  }

  public get FamilyName() : string | null {
    if ( this.FamilyName_ === void 0 ) {
      this.FamilyName_ = this.extractString( 1, true )
    }

    return this.FamilyName_ as string | null
  }

  public get GivenName() : string | null {
    if ( this.GivenName_ === void 0 ) {
      this.GivenName_ = this.extractString( 2, true )
    }

    return this.GivenName_ as string | null
  }

  public get MiddleNames() : Array< string > | null {
    if ( this.MiddleNames_ === void 0 ) {
      this.MiddleNames_ = this.extractLambda( 3, (buffer, cursor, endCursor) => {

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

    return this.MiddleNames_ as Array< string > | null
  }

  public get PrefixTitles() : Array< string > | null {
    if ( this.PrefixTitles_ === void 0 ) {
      this.PrefixTitles_ = this.extractLambda( 4, (buffer, cursor, endCursor) => {

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

    return this.PrefixTitles_ as Array< string > | null
  }

  public get SuffixTitles() : Array< string > | null {
    if ( this.SuffixTitles_ === void 0 ) {
      this.SuffixTitles_ = this.extractLambda( 5, (buffer, cursor, endCursor) => {

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

    return this.SuffixTitles_ as Array< string > | null
  }

  public get Roles() : Array<IfcActorRole> | null {
    if ( this.Roles_ === void 0 ) {
      this.Roles_ = this.extractLambda( 6, (buffer, cursor, endCursor) => {

      if ( stepExtractOptional( buffer, cursor, endCursor ) === null ) {
        return null
      }

      let value : Array<IfcActorRole> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
           let value = this.extractBufferReference( buffer, cursor, endCursor )
    
          if ( !( value instanceof IfcActorRole ) )  {
            throw new Error( 'Value in STEP was incorrectly typed for field' )
          }
    
          return value
        })() )
      }
      return value }, true )
    }

    return this.Roles_ as Array<IfcActorRole> | null
  }

  public get Addresses() : Array<IfcAddress> | null {
    if ( this.Addresses_ === void 0 ) {
      this.Addresses_ = this.extractLambda( 7, (buffer, cursor, endCursor) => {

      if ( stepExtractOptional( buffer, cursor, endCursor ) === null ) {
        return null
      }

      let value : Array<IfcAddress> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
           let value = this.extractBufferReference( buffer, cursor, endCursor )
    
          if ( !( value instanceof IfcAddress ) )  {
            throw new Error( 'Value in STEP was incorrectly typed for field' )
          }
    
          return value
        })() )
      }
      return value }, true )
    }

    return this.Addresses_ as Array<IfcAddress> | null
  }

  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCPERSON ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCPERSON
}
