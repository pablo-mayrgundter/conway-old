import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcIdentifier from "./IfcIdentifier.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcText from "./IfcText.bldrs"
import IfcDocumentReference from "./IfcDocumentReference.bldrs"
import IfcOrganization from "./IfcOrganization.bldrs"
import IfcPerson from "./IfcPerson.bldrs"
import IfcPersonAndOrganization from "./IfcPersonAndOrganization.bldrs"
import IfcDateAndTime from "./IfcDateAndTime.bldrs"
import IfcDocumentElectronicFormat from "./IfcDocumentElectronicFormat.bldrs"
import IfcCalendarDate from "./IfcCalendarDate.bldrs"
import IfcDocumentConfidentialityEnum, { IfcDocumentConfidentialityEnumDeserializeStep } from "./IfcDocumentConfidentialityEnum.bldrs"
import IfcDocumentStatusEnum, { IfcDocumentStatusEnumDeserializeStep } from "./IfcDocumentStatusEnum.bldrs"
import IfcDocumentInformationRelationship from "./IfcDocumentInformationRelationship.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcdocumentinformation.htm */
export default  class IfcDocumentInformation extends StepEntityBase< EntityTypesIfc > 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCDOCUMENTINFORMATION;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private DocumentId_? : IfcIdentifier;
    private Name_? : IfcLabel;
    private Description_? : IfcText | null;
    private DocumentReferences_? : Array<IfcDocumentReference> | null;
    private Purpose_? : IfcText | null;
    private IntendedUse_? : IfcText | null;
    private Scope_? : IfcText | null;
    private Revision_? : IfcLabel | null;
    private DocumentOwner_? : IfcOrganization|IfcPerson|IfcPersonAndOrganization | null;
    private Editors_? : Array<IfcOrganization|IfcPerson|IfcPersonAndOrganization> | null;
    private CreationTime_? : IfcDateAndTime | null;
    private LastRevisionTime_? : IfcDateAndTime | null;
    private ElectronicFormat_? : IfcDocumentElectronicFormat | null;
    private ValidFrom_? : IfcCalendarDate | null;
    private ValidUntil_? : IfcCalendarDate | null;
    private Confidentiality_? : IfcDocumentConfidentialityEnum | null;
    private Status_? : IfcDocumentStatusEnum | null;


    public get DocumentId() : IfcIdentifier
    {
        if ( this.DocumentId_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 0 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field DocumentId due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 0;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractString( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field DocumentId' );
            };

            this.DocumentId_ = value;
        }

        return this.DocumentId_ as IfcIdentifier;
    }


    public get Name() : IfcLabel
    {
        if ( this.Name_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 1 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field Name due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 1;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractString( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field Name' );
            };

            this.Name_ = value;
        }

        return this.Name_ as IfcLabel;
    }


    public get Description() : IfcText | null
    {
        if ( this.Description_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 2 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field Description due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field Description' );
                }

                this.Description_ = null;                
            }
            else
            {
                this.Description_ = value;
            }
        }

        return this.Description_ as IfcText | null;
    }


    public get DocumentReferences() : Array<IfcDocumentReference> | null
    {
        if ( this.DocumentReferences_ === void 0 )
        {
            
        }

        return this.DocumentReferences_ as Array<IfcDocumentReference> | null;
    }


    public get Purpose() : IfcText | null
    {
        if ( this.Purpose_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 4 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field Purpose due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 4;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractString( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field Purpose' );
                }

                this.Purpose_ = null;                
            }
            else
            {
                this.Purpose_ = value;
            }
        }

        return this.Purpose_ as IfcText | null;
    }


    public get IntendedUse() : IfcText | null
    {
        if ( this.IntendedUse_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 5 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field IntendedUse due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 5;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractString( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field IntendedUse' );
                }

                this.IntendedUse_ = null;                
            }
            else
            {
                this.IntendedUse_ = value;
            }
        }

        return this.IntendedUse_ as IfcText | null;
    }


    public get Scope() : IfcText | null
    {
        if ( this.Scope_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 6 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field Scope due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 6;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractString( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field Scope' );
                }

                this.Scope_ = null;                
            }
            else
            {
                this.Scope_ = value;
            }
        }

        return this.Scope_ as IfcText | null;
    }


    public get Revision() : IfcLabel | null
    {
        if ( this.Revision_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 7 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field Revision due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 7;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractString( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field Revision' );
                }

                this.Revision_ = null;                
            }
            else
            {
                this.Revision_ = value;
            }
        }

        return this.Revision_ as IfcLabel | null;
    }


    public get DocumentOwner() : IfcOrganization|IfcPerson|IfcPersonAndOrganization | null
    {
        if ( this.DocumentOwner_ === void 0 )
        {
            
        }

        return this.DocumentOwner_ as IfcOrganization|IfcPerson|IfcPersonAndOrganization | null;
    }


    public get Editors() : Array<IfcOrganization|IfcPerson|IfcPersonAndOrganization> | null
    {
        if ( this.Editors_ === void 0 )
        {
            
        }

        return this.Editors_ as Array<IfcOrganization|IfcPerson|IfcPersonAndOrganization> | null;
    }


    public get CreationTime() : IfcDateAndTime | null
    {
        if ( this.CreationTime_ === void 0 )
        {
            
        }

        return this.CreationTime_ as IfcDateAndTime | null;
    }


    public get LastRevisionTime() : IfcDateAndTime | null
    {
        if ( this.LastRevisionTime_ === void 0 )
        {
            
        }

        return this.LastRevisionTime_ as IfcDateAndTime | null;
    }


    public get ElectronicFormat() : IfcDocumentElectronicFormat | null
    {
        if ( this.ElectronicFormat_ === void 0 )
        {
            
        }

        return this.ElectronicFormat_ as IfcDocumentElectronicFormat | null;
    }


    public get ValidFrom() : IfcCalendarDate | null
    {
        if ( this.ValidFrom_ === void 0 )
        {
            
        }

        return this.ValidFrom_ as IfcCalendarDate | null;
    }


    public get ValidUntil() : IfcCalendarDate | null
    {
        if ( this.ValidUntil_ === void 0 )
        {
            
        }

        return this.ValidUntil_ as IfcCalendarDate | null;
    }


    public get Confidentiality() : IfcDocumentConfidentialityEnum | null
    {
        if ( this.Confidentiality_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 15 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field Confidentiality due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 15;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = IfcDocumentConfidentialityEnumDeserializeStep( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field Confidentiality' );
                }

                this.Confidentiality_ = null;                
            }
            else
            {
                this.Confidentiality_ = value;
            }
        }

        return this.Confidentiality_ as IfcDocumentConfidentialityEnum | null;
    }


    public get Status() : IfcDocumentStatusEnum | null
    {
        if ( this.Status_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 16 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field Status due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 16;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = IfcDocumentStatusEnumDeserializeStep( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field Status' );
                }

                this.Status_ = null;                
            }
            else
            {
                this.Status_ = value;
            }
        }

        return this.Status_ as IfcDocumentStatusEnum | null;
    }






    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
