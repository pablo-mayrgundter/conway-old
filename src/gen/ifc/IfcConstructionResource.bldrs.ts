import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcIdentifier from "./IfcIdentifier.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcResourceConsumptionEnum, { IfcResourceConsumptionEnumDeserializeStep } from "./IfcResourceConsumptionEnum.bldrs"
import IfcMeasureWithUnit from "./IfcMeasureWithUnit.bldrs"
import IfcResource from "./IfcResource.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcconstructionresource.htm */
export default abstract class IfcConstructionResource extends IfcResource 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCCONSTRUCTIONRESOURCE;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private ResourceIdentifier_? : IfcIdentifier | null;
    private ResourceGroup_? : IfcLabel | null;
    private ResourceConsumption_? : IfcResourceConsumptionEnum | null;
    private BaseQuantity_? : IfcMeasureWithUnit | null;


    public get ResourceIdentifier() : IfcIdentifier | null
    {
        if ( this.ResourceIdentifier_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 5 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field ResourceIdentifier due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field ResourceIdentifier' );
                }

                this.ResourceIdentifier_ = null;                
            }
            else
            {
                this.ResourceIdentifier_ = value;
            }
        }

        return this.ResourceIdentifier_ as IfcIdentifier | null;
    }


    public get ResourceGroup() : IfcLabel | null
    {
        if ( this.ResourceGroup_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 6 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field ResourceGroup due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field ResourceGroup' );
                }

                this.ResourceGroup_ = null;                
            }
            else
            {
                this.ResourceGroup_ = value;
            }
        }

        return this.ResourceGroup_ as IfcLabel | null;
    }


    public get ResourceConsumption() : IfcResourceConsumptionEnum | null
    {
        if ( this.ResourceConsumption_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 7 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field ResourceConsumption due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 7;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = IfcResourceConsumptionEnumDeserializeStep( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field ResourceConsumption' );
                }

                this.ResourceConsumption_ = null;                
            }
            else
            {
                this.ResourceConsumption_ = value;
            }
        }

        return this.ResourceConsumption_ as IfcResourceConsumptionEnum | null;
    }


    public get BaseQuantity() : IfcMeasureWithUnit | null
    {
        if ( this.BaseQuantity_ === void 0 )
        {
            
        }

        return this.BaseQuantity_ as IfcMeasureWithUnit | null;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
