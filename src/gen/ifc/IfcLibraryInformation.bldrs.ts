import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcLabel from "./IfcLabel.bldrs"
import IfcOrganization from "./IfcOrganization.bldrs"
import IfcCalendarDate from "./IfcCalendarDate.bldrs"
import IfcLibraryReference from "./IfcLibraryReference.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifclibraryinformation.htm */
export default  class IfcLibraryInformation extends StepEntityBase< EntityTypesIfc > 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCLIBRARYINFORMATION;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private Name_? : IfcLabel;
    private Version_? : IfcLabel | null;
    private Publisher_? : IfcOrganization | null;
    private VersionDate_? : IfcCalendarDate | null;
    private LibraryReference_? : Array<IfcLibraryReference> | null;


    public get Name() : IfcLabel
    {
        if ( this.Name_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 0 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field Name due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 0;

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


    public get Version() : IfcLabel | null
    {
        if ( this.Version_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 1 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field Version due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 1;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractString( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field Version' );
                }

                this.Version_ = null;                
            }
            else
            {
                this.Version_ = value;
            }
        }

        return this.Version_ as IfcLabel | null;
    }


    public get Publisher() : IfcOrganization | null
    {
        if ( this.Publisher_ === void 0 )
        {
            
        }

        return this.Publisher_ as IfcOrganization | null;
    }


    public get VersionDate() : IfcCalendarDate | null
    {
        if ( this.VersionDate_ === void 0 )
        {
            
        }

        return this.VersionDate_ as IfcCalendarDate | null;
    }


    public get LibraryReference() : Array<IfcLibraryReference> | null
    {
        if ( this.LibraryReference_ === void 0 )
        {
            
        }

        return this.LibraryReference_ as Array<IfcLibraryReference> | null;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
