import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcPositiveRatioMeasure from "./IfcPositiveRatioMeasure.bldrs"
import IfcIsothermalMoistureCapacityMeasure from "./IfcIsothermalMoistureCapacityMeasure.bldrs"
import IfcVaporPermeabilityMeasure from "./IfcVaporPermeabilityMeasure.bldrs"
import IfcMoistureDiffusivityMeasure from "./IfcMoistureDiffusivityMeasure.bldrs"
import IfcMaterialProperties from "./IfcMaterialProperties.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifchygroscopicmaterialproperties.htm */
export default  class IfcHygroscopicMaterialProperties extends IfcMaterialProperties 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCHYGROSCOPICMATERIALPROPERTIES;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private UpperVaporResistanceFactor_? : IfcPositiveRatioMeasure | null;
    private LowerVaporResistanceFactor_? : IfcPositiveRatioMeasure | null;
    private IsothermalMoistureCapacity_? : IfcIsothermalMoistureCapacityMeasure | null;
    private VaporPermeability_? : IfcVaporPermeabilityMeasure | null;
    private MoistureDiffusivity_? : IfcMoistureDiffusivityMeasure | null;


    public get UpperVaporResistanceFactor() : IfcPositiveRatioMeasure | null
    {
        if ( this.UpperVaporResistanceFactor_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 1 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field UpperVaporResistanceFactor due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field UpperVaporResistanceFactor' );
                }

                this.UpperVaporResistanceFactor_ = null;                
            }
            else
            {
                this.UpperVaporResistanceFactor_ = value;
            }
        }

        return this.UpperVaporResistanceFactor_ as IfcPositiveRatioMeasure | null;
    }


    public get LowerVaporResistanceFactor() : IfcPositiveRatioMeasure | null
    {
        if ( this.LowerVaporResistanceFactor_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 2 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field LowerVaporResistanceFactor due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field LowerVaporResistanceFactor' );
                }

                this.LowerVaporResistanceFactor_ = null;                
            }
            else
            {
                this.LowerVaporResistanceFactor_ = value;
            }
        }

        return this.LowerVaporResistanceFactor_ as IfcPositiveRatioMeasure | null;
    }


    public get IsothermalMoistureCapacity() : IfcIsothermalMoistureCapacityMeasure | null
    {
        if ( this.IsothermalMoistureCapacity_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 3 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field IsothermalMoistureCapacity due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field IsothermalMoistureCapacity' );
                }

                this.IsothermalMoistureCapacity_ = null;                
            }
            else
            {
                this.IsothermalMoistureCapacity_ = value;
            }
        }

        return this.IsothermalMoistureCapacity_ as IfcIsothermalMoistureCapacityMeasure | null;
    }


    public get VaporPermeability() : IfcVaporPermeabilityMeasure | null
    {
        if ( this.VaporPermeability_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 4 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field VaporPermeability due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field VaporPermeability' );
                }

                this.VaporPermeability_ = null;                
            }
            else
            {
                this.VaporPermeability_ = value;
            }
        }

        return this.VaporPermeability_ as IfcVaporPermeabilityMeasure | null;
    }


    public get MoistureDiffusivity() : IfcMoistureDiffusivityMeasure | null
    {
        if ( this.MoistureDiffusivity_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 5 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field MoistureDiffusivity due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field MoistureDiffusivity' );
                }

                this.MoistureDiffusivity_ = null;                
            }
            else
            {
                this.MoistureDiffusivity_ = value;
            }
        }

        return this.MoistureDiffusivity_ as IfcMoistureDiffusivityMeasure | null;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
