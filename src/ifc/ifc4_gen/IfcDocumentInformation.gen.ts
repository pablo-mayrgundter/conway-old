
import { IfcExternalInformation } from "./index"
import { IfcIdentifier } from "./index"
import { IfcLabel } from "./index"
import { IfcText } from "./index"
import { IfcURIReference } from "./index"
import { IfcOrganization } from "./index"
import { IfcPerson } from "./index"
import { IfcPersonAndOrganization } from "./index"
import { IfcDateTime } from "./index"
import { IfcDate } from "./index"
import { IfcDocumentConfidentialityEnum, IfcDocumentConfidentialityEnumDeserializeStep } from "./index"
import { IfcDocumentStatusEnum, IfcDocumentStatusEnumDeserializeStep } from "./index"
import {
  stepExtractOptional,
  stepExtractArray,
} from '../../step/parsing/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcdocumentinformation.htm */
export  class IfcDocumentInformation extends IfcExternalInformation {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCDOCUMENTINFORMATION
  }
  private Identification_? : string
  private Name_? : string
  private Description_? : string | null
  private Location_? : string | null
  private Purpose_? : string | null
  private IntendedUse_? : string | null
  private Scope_? : string | null
  private Revision_? : string | null
  private DocumentOwner_? : IfcOrganization | IfcPerson | IfcPersonAndOrganization | null
  private Editors_? : Array<IfcOrganization | IfcPerson | IfcPersonAndOrganization> | null
  private CreationTime_? : string | null
  private LastRevisionTime_? : string | null
  private ElectronicFormat_? : string | null
  private ValidFrom_? : string | null
  private ValidUntil_? : string | null
  private Confidentiality_? : IfcDocumentConfidentialityEnum | null
  private Status_? : IfcDocumentStatusEnum | null

  public get Identification() : string {
    if ( this.Identification_ === void 0 ) {
      this.Identification_ = this.extractString( 0, false )
    }

    return this.Identification_ as string
  }

  public get Name() : string {
    if ( this.Name_ === void 0 ) {
      this.Name_ = this.extractString( 1, false )
    }

    return this.Name_ as string
  }

  public get Description() : string | null {
    if ( this.Description_ === void 0 ) {
      this.Description_ = this.extractString( 2, true )
    }

    return this.Description_ as string | null
  }

  public get Location() : string | null {
    if ( this.Location_ === void 0 ) {
      this.Location_ = this.extractString( 3, true )
    }

    return this.Location_ as string | null
  }

  public get Purpose() : string | null {
    if ( this.Purpose_ === void 0 ) {
      this.Purpose_ = this.extractString( 4, true )
    }

    return this.Purpose_ as string | null
  }

  public get IntendedUse() : string | null {
    if ( this.IntendedUse_ === void 0 ) {
      this.IntendedUse_ = this.extractString( 5, true )
    }

    return this.IntendedUse_ as string | null
  }

  public get Scope() : string | null {
    if ( this.Scope_ === void 0 ) {
      this.Scope_ = this.extractString( 6, true )
    }

    return this.Scope_ as string | null
  }

  public get Revision() : string | null {
    if ( this.Revision_ === void 0 ) {
      this.Revision_ = this.extractString( 7, true )
    }

    return this.Revision_ as string | null
  }

  public get DocumentOwner() : IfcOrganization | IfcPerson | IfcPersonAndOrganization | null {
    if ( this.DocumentOwner_ === void 0 ) {
      this.DocumentOwner_ = this.extractLambda( 8, (buffer, cursor, endCursor) => {

      const value : StepEntityBase< EntityTypesIfc > | undefined =
        this.extractBufferReference( buffer, cursor, endCursor )

      if ( !( value instanceof IfcOrganization ) && !( value instanceof IfcPerson ) && !( value instanceof IfcPersonAndOrganization ) ) {
        return ( void 0 )
      }
      return value as (IfcOrganization | IfcPerson | IfcPersonAndOrganization)
}, true )
    }

    return this.DocumentOwner_ as IfcOrganization | IfcPerson | IfcPersonAndOrganization | null
  }

  public get Editors() : Array<IfcOrganization | IfcPerson | IfcPersonAndOrganization> | null {
    if ( this.Editors_ === void 0 ) {
      this.Editors_ = this.extractLambda( 9, (buffer, cursor, endCursor) => {

      if ( stepExtractOptional( buffer, cursor, endCursor ) === null ) {
        return null
      }

      let value : Array<IfcOrganization | IfcPerson | IfcPersonAndOrganization> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
          const value : StepEntityBase< EntityTypesIfc > | undefined =
            this.extractBufferReference( buffer, cursor, endCursor )
    
          if ( !( value instanceof IfcOrganization ) && !( value instanceof IfcPerson ) && !( value instanceof IfcPersonAndOrganization ) ) {
            throw new Error( 'Value in select must be populated' )
          }
          return value as (IfcOrganization | IfcPerson | IfcPersonAndOrganization)})() )
      }
      return value }, true )
    }

    return this.Editors_ as Array<IfcOrganization | IfcPerson | IfcPersonAndOrganization> | null
  }

  public get CreationTime() : string | null {
    if ( this.CreationTime_ === void 0 ) {
      this.CreationTime_ = this.extractString( 10, true )
    }

    return this.CreationTime_ as string | null
  }

  public get LastRevisionTime() : string | null {
    if ( this.LastRevisionTime_ === void 0 ) {
      this.LastRevisionTime_ = this.extractString( 11, true )
    }

    return this.LastRevisionTime_ as string | null
  }

  public get ElectronicFormat() : string | null {
    if ( this.ElectronicFormat_ === void 0 ) {
      this.ElectronicFormat_ = this.extractString( 12, true )
    }

    return this.ElectronicFormat_ as string | null
  }

  public get ValidFrom() : string | null {
    if ( this.ValidFrom_ === void 0 ) {
      this.ValidFrom_ = this.extractString( 13, true )
    }

    return this.ValidFrom_ as string | null
  }

  public get ValidUntil() : string | null {
    if ( this.ValidUntil_ === void 0 ) {
      this.ValidUntil_ = this.extractString( 14, true )
    }

    return this.ValidUntil_ as string | null
  }

  public get Confidentiality() : IfcDocumentConfidentialityEnum | null {
    if ( this.Confidentiality_ === void 0 ) {
      this.Confidentiality_ = this.extractLambda( 15, IfcDocumentConfidentialityEnumDeserializeStep, true )
    }

    return this.Confidentiality_ as IfcDocumentConfidentialityEnum | null
  }

  public get Status() : IfcDocumentStatusEnum | null {
    if ( this.Status_ === void 0 ) {
      this.Status_ = this.extractLambda( 16, IfcDocumentStatusEnumDeserializeStep, true )
    }

    return this.Status_ as IfcDocumentStatusEnum | null
  }




  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCDOCUMENTINFORMATION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCDOCUMENTINFORMATION
}
