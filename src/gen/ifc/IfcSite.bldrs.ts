import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcCompoundPlaneAngleMeasure from "./IfcCompoundPlaneAngleMeasure.bldrs"
import IfcLengthMeasure from "./IfcLengthMeasure.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcPostalAddress from "./IfcPostalAddress.bldrs"
import IfcSpatialStructureElement from "./IfcSpatialStructureElement.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcsite.htm */
export default  class IfcSite extends IfcSpatialStructureElement 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCSITE;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private RefLatitude_? : IfcCompoundPlaneAngleMeasure | null;
    private RefLongitude_? : IfcCompoundPlaneAngleMeasure | null;
    private RefElevation_? : IfcLengthMeasure | null;
    private LandTitleNumber_? : IfcLabel | null;
    private SiteAddress_? : IfcPostalAddress | null;


    public get RefLatitude() : IfcCompoundPlaneAngleMeasure | null
    {
        if ( this.RefLatitude_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 9 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field RefLatitude due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 9;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field RefLatitude' );
                }

                this.RefLatitude_ = null;                
            }
            else
            {
                this.RefLatitude_ = value;
            }
        }

        return this.RefLatitude_ as IfcCompoundPlaneAngleMeasure | null;
    }


    public get RefLongitude() : IfcCompoundPlaneAngleMeasure | null
    {
        if ( this.RefLongitude_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 10 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field RefLongitude due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 10;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field RefLongitude' );
                }

                this.RefLongitude_ = null;                
            }
            else
            {
                this.RefLongitude_ = value;
            }
        }

        return this.RefLongitude_ as IfcCompoundPlaneAngleMeasure | null;
    }


    public get RefElevation() : IfcLengthMeasure | null
    {
        if ( this.RefElevation_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 11 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field RefElevation due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 11;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field RefElevation' );
                }

                this.RefElevation_ = null;                
            }
            else
            {
                this.RefElevation_ = value;
            }
        }

        return this.RefElevation_ as IfcLengthMeasure | null;
    }


    public get LandTitleNumber() : IfcLabel | null
    {
        if ( this.LandTitleNumber_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 12 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field LandTitleNumber due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 12;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractString( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field LandTitleNumber' );
                }

                this.LandTitleNumber_ = null;                
            }
            else
            {
                this.LandTitleNumber_ = value;
            }
        }

        return this.LandTitleNumber_ as IfcLabel | null;
    }


    public get SiteAddress() : IfcPostalAddress | null
    {
        if ( this.SiteAddress_ === void 0 )
        {
            
        }

        return this.SiteAddress_ as IfcPostalAddress | null;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
