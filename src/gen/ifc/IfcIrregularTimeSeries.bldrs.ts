import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcIrregularTimeSeriesValue from "./IfcIrregularTimeSeriesValue.bldrs"
import IfcTimeSeries from "./IfcTimeSeries.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcirregulartimeseries.htm */
export default  class IfcIrregularTimeSeries extends IfcTimeSeries 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCIRREGULARTIMESERIES;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private Values_? : Array<IfcIrregularTimeSeriesValue>;


    public get Values() : Array<IfcIrregularTimeSeriesValue>
    {
        if ( this.Values_ === void 0 )
        {
            
        }

        return this.Values_ as Array<IfcIrregularTimeSeriesValue>;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
