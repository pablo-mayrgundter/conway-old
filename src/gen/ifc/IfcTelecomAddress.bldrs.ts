import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcLabel from "./IfcLabel.bldrs"
import IfcAddress from "./IfcAddress.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifctelecomaddress.htm */
export default  class IfcTelecomAddress extends IfcAddress 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCTELECOMADDRESS;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private TelephoneNumbers_? : Array<IfcLabel> | null;
    private FacsimileNumbers_? : Array<IfcLabel> | null;
    private PagerNumber_? : IfcLabel | null;
    private ElectronicMailAddresses_? : Array<IfcLabel> | null;
    private WWWHomePageURL_? : IfcLabel | null;


    public get TelephoneNumbers() : Array<IfcLabel> | null
    {
        if ( this.TelephoneNumbers_ === void 0 )
        {
            
        }

        return this.TelephoneNumbers_ as Array<IfcLabel> | null;
    }


    public get FacsimileNumbers() : Array<IfcLabel> | null
    {
        if ( this.FacsimileNumbers_ === void 0 )
        {
            
        }

        return this.FacsimileNumbers_ as Array<IfcLabel> | null;
    }


    public get PagerNumber() : IfcLabel | null
    {
        if ( this.PagerNumber_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 5 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field PagerNumber due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field PagerNumber' );
                }

                this.PagerNumber_ = null;                
            }
            else
            {
                this.PagerNumber_ = value;
            }
        }

        return this.PagerNumber_ as IfcLabel | null;
    }


    public get ElectronicMailAddresses() : Array<IfcLabel> | null
    {
        if ( this.ElectronicMailAddresses_ === void 0 )
        {
            
        }

        return this.ElectronicMailAddresses_ as Array<IfcLabel> | null;
    }


    public get WWWHomePageURL() : IfcLabel | null
    {
        if ( this.WWWHomePageURL_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 7 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field WWWHomePageURL due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field WWWHomePageURL' );
                }

                this.WWWHomePageURL_ = null;                
            }
            else
            {
                this.WWWHomePageURL_ = value;
            }
        }

        return this.WWWHomePageURL_ as IfcLabel | null;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
