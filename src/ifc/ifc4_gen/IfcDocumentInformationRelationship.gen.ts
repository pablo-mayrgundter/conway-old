
import { IfcResourceLevelRelationship } from "./index"
import { IfcDocumentInformation } from "./index"
import { IfcLabel } from "./index"
import {
  stepExtractArray,
} from '../../step/parsing/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcdocumentinformationrelationship.htm */
export  class IfcDocumentInformationRelationship extends IfcResourceLevelRelationship {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCDOCUMENTINFORMATIONRELATIONSHIP
  }
  private RelatingDocument_? : IfcDocumentInformation
  private RelatedDocuments_? : Array<IfcDocumentInformation>
  private RelationshipType_? : string | null

  public get RelatingDocument() : IfcDocumentInformation {
    if ( this.RelatingDocument_ === void 0 ) {
      this.RelatingDocument_ = this.extractElement( 2, false, IfcDocumentInformation )
    }

    return this.RelatingDocument_ as IfcDocumentInformation
  }

  public get RelatedDocuments() : Array<IfcDocumentInformation> {
    if ( this.RelatedDocuments_ === void 0 ) {
      this.RelatedDocuments_ = this.extractLambda( 3, (buffer, cursor, endCursor) => {

      let value : Array<IfcDocumentInformation> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
           let value = this.extractBufferReference( buffer, cursor, endCursor )
    
          if ( !( value instanceof IfcDocumentInformation ) )  {
            throw new Error( 'Value in STEP was incorrectly typed for field' )
          }
    
          return value
        })() )
      }
      return value }, false )
    }

    return this.RelatedDocuments_ as Array<IfcDocumentInformation>
  }

  public get RelationshipType() : string | null {
    if ( this.RelationshipType_ === void 0 ) {
      this.RelationshipType_ = this.extractString( 4, true )
    }

    return this.RelationshipType_ as string | null
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCDOCUMENTINFORMATIONRELATIONSHIP ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCDOCUMENTINFORMATIONRELATIONSHIP
}
