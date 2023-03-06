import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcBenchmarkEnum, { IfcBenchmarkEnumDeserializeStep } from "./IfcBenchmarkEnum.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcCalendarDate from "./IfcCalendarDate.bldrs"
import IfcLocalTime from "./IfcLocalTime.bldrs"
import IfcDateAndTime from "./IfcDateAndTime.bldrs"
import IfcMeasureWithUnit from "./IfcMeasureWithUnit.bldrs"
import IfcTable from "./IfcTable.bldrs"
import IfcText from "./IfcText.bldrs"
import IfcTimeSeries from "./IfcTimeSeries.bldrs"
import IfcCostValue from "./IfcCostValue.bldrs"
import IfcConstraint from "./IfcConstraint.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcmetric.htm */
export default  class IfcMetric extends IfcConstraint 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCMETRIC;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private Benchmark_? : IfcBenchmarkEnum;
    private ValueSource_? : IfcLabel | null;
    private DataValue_? : IfcCalendarDate|IfcLocalTime|IfcDateAndTime|IfcMeasureWithUnit|IfcTable|IfcText|IfcTimeSeries|IfcCostValue;


    public get Benchmark() : IfcBenchmarkEnum
    {
        if ( this.Benchmark_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 7 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field Benchmark due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 7;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = IfcBenchmarkEnumDeserializeStep( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field Benchmark' );
            };

            this.Benchmark_ = value;
        }

        return this.Benchmark_ as IfcBenchmarkEnum;
    }


    public get ValueSource() : IfcLabel | null
    {
        if ( this.ValueSource_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 8 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field ValueSource due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 8;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractString( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field ValueSource' );
                }

                this.ValueSource_ = null;                
            }
            else
            {
                this.ValueSource_ = value;
            }
        }

        return this.ValueSource_ as IfcLabel | null;
    }


    public get DataValue() : IfcCalendarDate|IfcLocalTime|IfcDateAndTime|IfcMeasureWithUnit|IfcTable|IfcText|IfcTimeSeries|IfcCostValue
    {
        if ( this.DataValue_ === void 0 )
        {
            
        }

        return this.DataValue_ as IfcCalendarDate|IfcLocalTime|IfcDateAndTime|IfcMeasureWithUnit|IfcTable|IfcText|IfcTimeSeries|IfcCostValue;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
