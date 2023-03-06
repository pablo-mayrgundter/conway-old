import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcPositiveRatioMeasure from "./IfcPositiveRatioMeasure.bldrs"
import IfcMaterialProperties from "./IfcMaterialProperties.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcopticalmaterialproperties.htm */
export default  class IfcOpticalMaterialProperties extends IfcMaterialProperties 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCOPTICALMATERIALPROPERTIES;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private VisibleTransmittance_? : IfcPositiveRatioMeasure | null;
    private SolarTransmittance_? : IfcPositiveRatioMeasure | null;
    private ThermalIrTransmittance_? : IfcPositiveRatioMeasure | null;
    private ThermalIrEmissivityBack_? : IfcPositiveRatioMeasure | null;
    private ThermalIrEmissivityFront_? : IfcPositiveRatioMeasure | null;
    private VisibleReflectanceBack_? : IfcPositiveRatioMeasure | null;
    private VisibleReflectanceFront_? : IfcPositiveRatioMeasure | null;
    private SolarReflectanceFront_? : IfcPositiveRatioMeasure | null;
    private SolarReflectanceBack_? : IfcPositiveRatioMeasure | null;


    public get VisibleTransmittance() : IfcPositiveRatioMeasure | null
    {
        if ( this.VisibleTransmittance_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 1 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field VisibleTransmittance due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field VisibleTransmittance' );
                }

                this.VisibleTransmittance_ = null;                
            }
            else
            {
                this.VisibleTransmittance_ = value;
            }
        }

        return this.VisibleTransmittance_ as IfcPositiveRatioMeasure | null;
    }


    public get SolarTransmittance() : IfcPositiveRatioMeasure | null
    {
        if ( this.SolarTransmittance_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 2 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field SolarTransmittance due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field SolarTransmittance' );
                }

                this.SolarTransmittance_ = null;                
            }
            else
            {
                this.SolarTransmittance_ = value;
            }
        }

        return this.SolarTransmittance_ as IfcPositiveRatioMeasure | null;
    }


    public get ThermalIrTransmittance() : IfcPositiveRatioMeasure | null
    {
        if ( this.ThermalIrTransmittance_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 3 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field ThermalIrTransmittance due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field ThermalIrTransmittance' );
                }

                this.ThermalIrTransmittance_ = null;                
            }
            else
            {
                this.ThermalIrTransmittance_ = value;
            }
        }

        return this.ThermalIrTransmittance_ as IfcPositiveRatioMeasure | null;
    }


    public get ThermalIrEmissivityBack() : IfcPositiveRatioMeasure | null
    {
        if ( this.ThermalIrEmissivityBack_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 4 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field ThermalIrEmissivityBack due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field ThermalIrEmissivityBack' );
                }

                this.ThermalIrEmissivityBack_ = null;                
            }
            else
            {
                this.ThermalIrEmissivityBack_ = value;
            }
        }

        return this.ThermalIrEmissivityBack_ as IfcPositiveRatioMeasure | null;
    }


    public get ThermalIrEmissivityFront() : IfcPositiveRatioMeasure | null
    {
        if ( this.ThermalIrEmissivityFront_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 5 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field ThermalIrEmissivityFront due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field ThermalIrEmissivityFront' );
                }

                this.ThermalIrEmissivityFront_ = null;                
            }
            else
            {
                this.ThermalIrEmissivityFront_ = value;
            }
        }

        return this.ThermalIrEmissivityFront_ as IfcPositiveRatioMeasure | null;
    }


    public get VisibleReflectanceBack() : IfcPositiveRatioMeasure | null
    {
        if ( this.VisibleReflectanceBack_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 6 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field VisibleReflectanceBack due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field VisibleReflectanceBack' );
                }

                this.VisibleReflectanceBack_ = null;                
            }
            else
            {
                this.VisibleReflectanceBack_ = value;
            }
        }

        return this.VisibleReflectanceBack_ as IfcPositiveRatioMeasure | null;
    }


    public get VisibleReflectanceFront() : IfcPositiveRatioMeasure | null
    {
        if ( this.VisibleReflectanceFront_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 7 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field VisibleReflectanceFront due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field VisibleReflectanceFront' );
                }

                this.VisibleReflectanceFront_ = null;                
            }
            else
            {
                this.VisibleReflectanceFront_ = value;
            }
        }

        return this.VisibleReflectanceFront_ as IfcPositiveRatioMeasure | null;
    }


    public get SolarReflectanceFront() : IfcPositiveRatioMeasure | null
    {
        if ( this.SolarReflectanceFront_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 8 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field SolarReflectanceFront due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 8;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field SolarReflectanceFront' );
                }

                this.SolarReflectanceFront_ = null;                
            }
            else
            {
                this.SolarReflectanceFront_ = value;
            }
        }

        return this.SolarReflectanceFront_ as IfcPositiveRatioMeasure | null;
    }


    public get SolarReflectanceBack() : IfcPositiveRatioMeasure | null
    {
        if ( this.SolarReflectanceBack_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 9 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field SolarReflectanceBack due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field SolarReflectanceBack' );
                }

                this.SolarReflectanceBack_ = null;                
            }
            else
            {
                this.SolarReflectanceBack_ = value;
            }
        }

        return this.SolarReflectanceBack_ as IfcPositiveRatioMeasure | null;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
