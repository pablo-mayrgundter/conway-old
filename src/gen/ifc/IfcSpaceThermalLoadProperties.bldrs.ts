import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber, stepExtractInlineElemement, stepExtractArray} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcPositiveRatioMeasure from "./IfcPositiveRatioMeasure.bldrs"
import IfcThermalLoadSourceEnum, { IfcThermalLoadSourceEnumDeserializeStep } from "./IfcThermalLoadSourceEnum.bldrs"
import IfcPropertySourceEnum, { IfcPropertySourceEnumDeserializeStep } from "./IfcPropertySourceEnum.bldrs"
import IfcText from "./IfcText.bldrs"
import IfcPowerMeasure from "./IfcPowerMeasure.bldrs"
import IfcTimeSeries from "./IfcTimeSeries.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcThermalLoadTypeEnum, { IfcThermalLoadTypeEnumDeserializeStep } from "./IfcThermalLoadTypeEnum.bldrs"
import IfcPropertySetDefinition from "./IfcPropertySetDefinition.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcspacethermalloadproperties.htm */
export default  class IfcSpaceThermalLoadProperties extends IfcPropertySetDefinition 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCSPACETHERMALLOADPROPERTIES;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private ApplicableValueRatio_? : IfcPositiveRatioMeasure | null;
    private ThermalLoadSource_? : IfcThermalLoadSourceEnum;
    private PropertySource_? : IfcPropertySourceEnum;
    private SourceDescription_? : IfcText | null;
    private MaximumValue_? : IfcPowerMeasure;
    private MinimumValue_? : IfcPowerMeasure | null;
    private ThermalLoadTimeSeriesValues_? : IfcTimeSeries | null;
    private UserDefinedThermalLoadSource_? : IfcLabel | null;
    private UserDefinedPropertySource_? : IfcLabel | null;
    private ThermalLoadType_? : IfcThermalLoadTypeEnum;

    public get ApplicableValueRatio() : IfcPositiveRatioMeasure | null
    {
        if ( this.ApplicableValueRatio_ === void 0 )
        {
            this.ApplicableValueRatio_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 4 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 4;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value === void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed' );
                }

                return null;                
            }
            else
            {
                return value;
            } })();
        }

        return this.ApplicableValueRatio_ as IfcPositiveRatioMeasure | null;
    }

    public get ThermalLoadSource() : IfcThermalLoadSourceEnum
    {
        if ( this.ThermalLoadSource_ === void 0 )
        {
            this.ThermalLoadSource_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 5 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 5;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = IfcThermalLoadSourceEnumDeserializeStep( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed' );
            };

            return value; })();
        }

        return this.ThermalLoadSource_ as IfcThermalLoadSourceEnum;
    }

    public get PropertySource() : IfcPropertySourceEnum
    {
        if ( this.PropertySource_ === void 0 )
        {
            this.PropertySource_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 6 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 6;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = IfcPropertySourceEnumDeserializeStep( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed' );
            };

            return value; })();
        }

        return this.PropertySource_ as IfcPropertySourceEnum;
    }

    public get SourceDescription() : IfcText | null
    {
        if ( this.SourceDescription_ === void 0 )
        {
            this.SourceDescription_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 7 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 7;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractString( buffer, cursor, endCursor );

            if ( value === void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed' );
                }

                return null;                
            }
            else
            {
                return value;
            } })();
        }

        return this.SourceDescription_ as IfcText | null;
    }

    public get MaximumValue() : IfcPowerMeasure
    {
        if ( this.MaximumValue_ === void 0 )
        {
            this.MaximumValue_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 8 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 8;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed' );
            };

            return value; })();
        }

        return this.MaximumValue_ as IfcPowerMeasure;
    }

    public get MinimumValue() : IfcPowerMeasure | null
    {
        if ( this.MinimumValue_ === void 0 )
        {
            this.MinimumValue_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 9 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 9;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value === void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed' );
                }

                return null;                
            }
            else
            {
                return value;
            } })();
        }

        return this.MinimumValue_ as IfcPowerMeasure | null;
    }

    public get ThermalLoadTimeSeriesValues() : IfcTimeSeries | null
    {
        if ( this.ThermalLoadTimeSeriesValues_ === void 0 )
        {
            this.ThermalLoadTimeSeriesValues_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 10 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 10;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let expressID = stepExtractReference( buffer, cursor, endCursor );
            let value     = expressID !== void 0 ? this.model.getElementByExpressID( expressID ) : this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor ) );           

            if ( value === void 0 || !( value instanceof IfcTimeSeries ) )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field' );
                }

                return null;                
            }
            else
            {
                return value;
            } })();
        }

        return this.ThermalLoadTimeSeriesValues_ as IfcTimeSeries | null;
    }

    public get UserDefinedThermalLoadSource() : IfcLabel | null
    {
        if ( this.UserDefinedThermalLoadSource_ === void 0 )
        {
            this.UserDefinedThermalLoadSource_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 11 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 11;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractString( buffer, cursor, endCursor );

            if ( value === void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed' );
                }

                return null;                
            }
            else
            {
                return value;
            } })();
        }

        return this.UserDefinedThermalLoadSource_ as IfcLabel | null;
    }

    public get UserDefinedPropertySource() : IfcLabel | null
    {
        if ( this.UserDefinedPropertySource_ === void 0 )
        {
            this.UserDefinedPropertySource_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 12 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 12;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractString( buffer, cursor, endCursor );

            if ( value === void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed' );
                }

                return null;                
            }
            else
            {
                return value;
            } })();
        }

        return this.UserDefinedPropertySource_ as IfcLabel | null;
    }

    public get ThermalLoadType() : IfcThermalLoadTypeEnum
    {
        if ( this.ThermalLoadType_ === void 0 )
        {
            this.ThermalLoadType_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 13 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 13;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = IfcThermalLoadTypeEnumDeserializeStep( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed' );
            };

            return value; })();
        }

        return this.ThermalLoadType_ as IfcThermalLoadTypeEnum;
    }
    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
