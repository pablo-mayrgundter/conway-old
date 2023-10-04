
import { IfcSpatialStructureElement } from "./index"
import { IfcCompoundPlaneAngleMeasure } from "./index"
import { IfcLengthMeasure } from "./index"
import { IfcLabel } from "./index"
import { IfcPostalAddress } from "./index"
import {
  stepExtractOptional,
  stepExtractNumber,
  stepExtractArray,
} from '../../step/parsing/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcsite.htm */
export  class IfcSite extends IfcSpatialStructureElement {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCSITE
  }
  private RefLatitude_? : Array< number > | null
  private RefLongitude_? : Array< number > | null
  private RefElevation_? : number | null
  private LandTitleNumber_? : string | null
  private SiteAddress_? : IfcPostalAddress | null

  public get RefLatitude() : Array< number > | null {
    if ( this.RefLatitude_ === void 0 ) {
      this.RefLatitude_ = this.extractLambda( 9, (buffer, cursor, endCursor) => {

      if ( stepExtractOptional( buffer, cursor, endCursor ) === null ) {
        return null
      }

      let value : Array<number> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
          const value = stepExtractNumber( buffer, cursor, endCursor )
    
          if ( value === void 0 ) {
            throw new Error( 'Value needs to be defined in encapsulating context' )
          }
    
          return value 
        })() )
      }
      return value }, true )
    }

    return this.RefLatitude_ as Array< number > | null
  }

  public get RefLongitude() : Array< number > | null {
    if ( this.RefLongitude_ === void 0 ) {
      this.RefLongitude_ = this.extractLambda( 10, (buffer, cursor, endCursor) => {

      if ( stepExtractOptional( buffer, cursor, endCursor ) === null ) {
        return null
      }

      let value : Array<number> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
          const value = stepExtractNumber( buffer, cursor, endCursor )
    
          if ( value === void 0 ) {
            throw new Error( 'Value needs to be defined in encapsulating context' )
          }
    
          return value 
        })() )
      }
      return value }, true )
    }

    return this.RefLongitude_ as Array< number > | null
  }

  public get RefElevation() : number | null {
    if ( this.RefElevation_ === void 0 ) {
      this.RefElevation_ = this.extractNumber( 11, true )
    }

    return this.RefElevation_ as number | null
  }

  public get LandTitleNumber() : string | null {
    if ( this.LandTitleNumber_ === void 0 ) {
      this.LandTitleNumber_ = this.extractString( 12, true )
    }

    return this.LandTitleNumber_ as string | null
  }

  public get SiteAddress() : IfcPostalAddress | null {
    if ( this.SiteAddress_ === void 0 ) {
      this.SiteAddress_ = this.extractElement( 13, true, IfcPostalAddress )
    }

    return this.SiteAddress_ as IfcPostalAddress | null
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCSITE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCSITE
}
