import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcDocumentInformation from "./IfcDocumentInformation.bldrs"
import IfcLabel from "./IfcLabel.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcdocumentinformationrelationship.htm */
export default  class IfcDocumentInformationRelationship extends StepEntityBase< EntityTypesIfc > 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCDOCUMENTINFORMATIONRELATIONSHIP;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private RelatingDocument_? : IfcDocumentInformation;
    private RelatedDocuments_? : Array<IfcDocumentInformation>;
    private RelationshipType_? : IfcLabel | null;


    public get RelatingDocument() : IfcDocumentInformation
    {
        if ( this.RelatingDocument_ === void 0 )
        {
            
        }

        return this.RelatingDocument_ as IfcDocumentInformation;
    }


    public get RelatedDocuments() : Array<IfcDocumentInformation>
    {
        if ( this.RelatedDocuments_ === void 0 )
        {
            
        }

        return this.RelatedDocuments_ as Array<IfcDocumentInformation>;
    }


    public get RelationshipType() : IfcLabel | null
    {
        if ( this.RelationshipType_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 2 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field RelationshipType due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 2;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractString( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field RelationshipType' );
                }

                this.RelationshipType_ = null;                
            }
            else
            {
                this.RelationshipType_ = value;
            }
        }

        return this.RelationshipType_ as IfcLabel | null;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
