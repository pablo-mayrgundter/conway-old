import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcIdentifier from "./IfcIdentifier.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcActorRole from "./IfcActorRole.bldrs"
import IfcAddress from "./IfcAddress.bldrs"
import IfcPersonAndOrganization from "./IfcPersonAndOrganization.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcperson.htm */
export default  class IfcPerson extends StepEntityBase< EntityTypesIfc > 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCPERSON;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private Id_? : IfcIdentifier | null;
    private FamilyName_? : IfcLabel | null;
    private GivenName_? : IfcLabel | null;
    private MiddleNames_? : Array<IfcLabel> | null;
    private PrefixTitles_? : Array<IfcLabel> | null;
    private SuffixTitles_? : Array<IfcLabel> | null;
    private Roles_? : Array<IfcActorRole> | null;
    private Addresses_? : Array<IfcAddress> | null;


    public get Id() : IfcIdentifier | null
    {
        if ( this.Id_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 0 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field Id due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 0;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractString( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field Id' );
                }

                this.Id_ = null;                
            }
            else
            {
                this.Id_ = value;
            }
        }

        return this.Id_ as IfcIdentifier | null;
    }


    public get FamilyName() : IfcLabel | null
    {
        if ( this.FamilyName_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 1 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field FamilyName due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field FamilyName' );
                }

                this.FamilyName_ = null;                
            }
            else
            {
                this.FamilyName_ = value;
            }
        }

        return this.FamilyName_ as IfcLabel | null;
    }


    public get GivenName() : IfcLabel | null
    {
        if ( this.GivenName_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 2 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field GivenName due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field GivenName' );
                }

                this.GivenName_ = null;                
            }
            else
            {
                this.GivenName_ = value;
            }
        }

        return this.GivenName_ as IfcLabel | null;
    }


    public get MiddleNames() : Array<IfcLabel> | null
    {
        if ( this.MiddleNames_ === void 0 )
        {
            
        }

        return this.MiddleNames_ as Array<IfcLabel> | null;
    }


    public get PrefixTitles() : Array<IfcLabel> | null
    {
        if ( this.PrefixTitles_ === void 0 )
        {
            
        }

        return this.PrefixTitles_ as Array<IfcLabel> | null;
    }


    public get SuffixTitles() : Array<IfcLabel> | null
    {
        if ( this.SuffixTitles_ === void 0 )
        {
            
        }

        return this.SuffixTitles_ as Array<IfcLabel> | null;
    }


    public get Roles() : Array<IfcActorRole> | null
    {
        if ( this.Roles_ === void 0 )
        {
            
        }

        return this.Roles_ as Array<IfcActorRole> | null;
    }


    public get Addresses() : Array<IfcAddress> | null
    {
        if ( this.Addresses_ === void 0 )
        {
            
        }

        return this.Addresses_ as Array<IfcAddress> | null;
    }




    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
