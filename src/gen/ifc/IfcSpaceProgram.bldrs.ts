import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcIdentifier from "./IfcIdentifier.bldrs"
import IfcAreaMeasure from "./IfcAreaMeasure.bldrs"
import IfcSpatialStructureElement from "./IfcSpatialStructureElement.bldrs"
import IfcRelInteractionRequirements from "./IfcRelInteractionRequirements.bldrs"
import IfcControl from "./IfcControl.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcspaceprogram.htm */
export default  class IfcSpaceProgram extends IfcControl 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCSPACEPROGRAM;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private SpaceProgramIdentifier_? : IfcIdentifier;
    private MaxRequiredArea_? : IfcAreaMeasure | null;
    private MinRequiredArea_? : IfcAreaMeasure | null;
    private RequestedLocation_? : IfcSpatialStructureElement | null;
    private StandardRequiredArea_? : IfcAreaMeasure;


    public get SpaceProgramIdentifier() : IfcIdentifier
    {
        if ( this.SpaceProgramIdentifier_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 5 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field SpaceProgramIdentifier due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 5;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractString( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field SpaceProgramIdentifier' );
            };

            this.SpaceProgramIdentifier_ = value;
        }

        return this.SpaceProgramIdentifier_ as IfcIdentifier;
    }


    public get MaxRequiredArea() : IfcAreaMeasure | null
    {
        if ( this.MaxRequiredArea_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 6 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field MaxRequiredArea due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 6;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field MaxRequiredArea' );
                }

                this.MaxRequiredArea_ = null;                
            }
            else
            {
                this.MaxRequiredArea_ = value;
            }
        }

        return this.MaxRequiredArea_ as IfcAreaMeasure | null;
    }


    public get MinRequiredArea() : IfcAreaMeasure | null
    {
        if ( this.MinRequiredArea_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 7 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field MinRequiredArea due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 7;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field MinRequiredArea' );
                }

                this.MinRequiredArea_ = null;                
            }
            else
            {
                this.MinRequiredArea_ = value;
            }
        }

        return this.MinRequiredArea_ as IfcAreaMeasure | null;
    }


    public get RequestedLocation() : IfcSpatialStructureElement | null
    {
        if ( this.RequestedLocation_ === void 0 )
        {
            
        }

        return this.RequestedLocation_ as IfcSpatialStructureElement | null;
    }


    public get StandardRequiredArea() : IfcAreaMeasure
    {
        if ( this.StandardRequiredArea_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 9 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field StandardRequiredArea due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 9;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field StandardRequiredArea' );
            };

            this.StandardRequiredArea_ = value;
        }

        return this.StandardRequiredArea_ as IfcAreaMeasure;
    }






    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
