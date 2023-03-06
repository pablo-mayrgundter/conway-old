import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcCountMeasure from "./IfcCountMeasure.bldrs"
import IfcNormalisedRatioMeasure from "./IfcNormalisedRatioMeasure.bldrs"
import IfcSpatialStructureElement from "./IfcSpatialStructureElement.bldrs"
import IfcSpaceProgram from "./IfcSpaceProgram.bldrs"
import IfcRelConnects from "./IfcRelConnects.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcrelinteractionrequirements.htm */
export default  class IfcRelInteractionRequirements extends IfcRelConnects 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCRELINTERACTIONREQUIREMENTS;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private DailyInteraction_? : IfcCountMeasure | null;
    private ImportanceRating_? : IfcNormalisedRatioMeasure | null;
    private LocationOfInteraction_? : IfcSpatialStructureElement | null;
    private RelatedSpaceProgram_? : IfcSpaceProgram;
    private RelatingSpaceProgram_? : IfcSpaceProgram;


    public get DailyInteraction() : IfcCountMeasure | null
    {
        if ( this.DailyInteraction_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 4 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field DailyInteraction due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 4;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field DailyInteraction' );
                }

                this.DailyInteraction_ = null;                
            }
            else
            {
                this.DailyInteraction_ = value;
            }
        }

        return this.DailyInteraction_ as IfcCountMeasure | null;
    }


    public get ImportanceRating() : IfcNormalisedRatioMeasure | null
    {
        if ( this.ImportanceRating_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 5 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field ImportanceRating due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 5;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field ImportanceRating' );
                }

                this.ImportanceRating_ = null;                
            }
            else
            {
                this.ImportanceRating_ = value;
            }
        }

        return this.ImportanceRating_ as IfcNormalisedRatioMeasure | null;
    }


    public get LocationOfInteraction() : IfcSpatialStructureElement | null
    {
        if ( this.LocationOfInteraction_ === void 0 )
        {
            
        }

        return this.LocationOfInteraction_ as IfcSpatialStructureElement | null;
    }


    public get RelatedSpaceProgram() : IfcSpaceProgram
    {
        if ( this.RelatedSpaceProgram_ === void 0 )
        {
            
        }

        return this.RelatedSpaceProgram_ as IfcSpaceProgram;
    }


    public get RelatingSpaceProgram() : IfcSpaceProgram
    {
        if ( this.RelatingSpaceProgram_ === void 0 )
        {
            
        }

        return this.RelatingSpaceProgram_ as IfcSpaceProgram;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
