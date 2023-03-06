import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcSpecificHeatCapacityMeasure from "./IfcSpecificHeatCapacityMeasure.bldrs"
import IfcPositiveRatioMeasure from "./IfcPositiveRatioMeasure.bldrs"
import IfcMaterialProperties from "./IfcMaterialProperties.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcproductsofcombustionproperties.htm */
export default  class IfcProductsOfCombustionProperties extends IfcMaterialProperties 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCPRODUCTSOFCOMBUSTIONPROPERTIES;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private SpecificHeatCapacity_? : IfcSpecificHeatCapacityMeasure | null;
    private N20Content_? : IfcPositiveRatioMeasure | null;
    private COContent_? : IfcPositiveRatioMeasure | null;
    private CO2Content_? : IfcPositiveRatioMeasure | null;


    public get SpecificHeatCapacity() : IfcSpecificHeatCapacityMeasure | null
    {
        if ( this.SpecificHeatCapacity_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 1 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field SpecificHeatCapacity due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 1;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field SpecificHeatCapacity' );
                }

                this.SpecificHeatCapacity_ = null;                
            }
            else
            {
                this.SpecificHeatCapacity_ = value;
            }
        }

        return this.SpecificHeatCapacity_ as IfcSpecificHeatCapacityMeasure | null;
    }


    public get N20Content() : IfcPositiveRatioMeasure | null
    {
        if ( this.N20Content_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 2 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field N20Content due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 2;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field N20Content' );
                }

                this.N20Content_ = null;                
            }
            else
            {
                this.N20Content_ = value;
            }
        }

        return this.N20Content_ as IfcPositiveRatioMeasure | null;
    }


    public get COContent() : IfcPositiveRatioMeasure | null
    {
        if ( this.COContent_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 3 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field COContent due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 3;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field COContent' );
                }

                this.COContent_ = null;                
            }
            else
            {
                this.COContent_ = value;
            }
        }

        return this.COContent_ as IfcPositiveRatioMeasure | null;
    }


    public get CO2Content() : IfcPositiveRatioMeasure | null
    {
        if ( this.CO2Content_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 4 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field CO2Content due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field CO2Content' );
                }

                this.CO2Content_ = null;                
            }
            else
            {
                this.CO2Content_ = value;
            }
        }

        return this.CO2Content_ as IfcPositiveRatioMeasure | null;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
