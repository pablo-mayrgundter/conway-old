import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcTimeMeasure from "./IfcTimeMeasure.bldrs"
import IfcTimeSeriesValue from "./IfcTimeSeriesValue.bldrs"
import IfcTimeSeries from "./IfcTimeSeries.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcregulartimeseries.htm */
export default  class IfcRegularTimeSeries extends IfcTimeSeries 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCREGULARTIMESERIES;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private TimeStep_? : IfcTimeMeasure;
    private Values_? : Array<IfcTimeSeriesValue>;


    public get TimeStep() : IfcTimeMeasure
    {
        if ( this.TimeStep_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 8 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field TimeStep due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 8;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field TimeStep' );
            };

            this.TimeStep_ = value;
        }

        return this.TimeStep_ as IfcTimeMeasure;
    }


    public get Values() : Array<IfcTimeSeriesValue>
    {
        if ( this.Values_ === void 0 )
        {
            
        }

        return this.Values_ as Array<IfcTimeSeriesValue>;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
