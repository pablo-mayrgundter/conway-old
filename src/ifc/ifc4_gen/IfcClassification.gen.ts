
import { IfcExternalInformation } from "./index"
import { IfcLabel } from "./index"
import { IfcDate } from "./index"
import { IfcText } from "./index"
import { IfcURIReference } from "./index"
import { IfcIdentifier } from "./index"
import {
  stepExtractString,
  stepExtractOptional,
  stepExtractArray,
} from '../../step/parsing/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcclassification.htm */
export  class IfcClassification extends IfcExternalInformation {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCCLASSIFICATION
  }
  private Source_? : string | null
  private Edition_? : string | null
  private EditionDate_? : string | null
  private Name_? : string
  private Description_? : string | null
  private Location_? : string | null
  private ReferenceTokens_? : Array< string > | null

  public get Source() : string | null {
    if ( this.Source_ === void 0 ) {
      this.Source_ = this.extractString( 0, true )
    }

    return this.Source_ as string | null
  }

  public get Edition() : string | null {
    if ( this.Edition_ === void 0 ) {
      this.Edition_ = this.extractString( 1, true )
    }

    return this.Edition_ as string | null
  }

  public get EditionDate() : string | null {
    if ( this.EditionDate_ === void 0 ) {
      this.EditionDate_ = this.extractString( 2, true )
    }

    return this.EditionDate_ as string | null
  }

  public get Name() : string {
    if ( this.Name_ === void 0 ) {
      this.Name_ = this.extractString( 3, false )
    }

    return this.Name_ as string
  }

  public get Description() : string | null {
    if ( this.Description_ === void 0 ) {
      this.Description_ = this.extractString( 4, true )
    }

    return this.Description_ as string | null
  }

  public get Location() : string | null {
    if ( this.Location_ === void 0 ) {
      this.Location_ = this.extractString( 5, true )
    }

    return this.Location_ as string | null
  }

  public get ReferenceTokens() : Array< string > | null {
    if ( this.ReferenceTokens_ === void 0 ) {
      this.ReferenceTokens_ = this.extractLambda( 6, (buffer, cursor, endCursor) => {

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

    return this.ReferenceTokens_ as Array< string > | null
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCCLASSIFICATION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCCLASSIFICATION
}
