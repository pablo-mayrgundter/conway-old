import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcTimeSeries from "./IfcTimeSeries.bldrs"
import IfcDocumentReference from "./IfcDocumentReference.bldrs"
import IfcDocumentInformation from "./IfcDocumentInformation.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifctimeseriesreferencerelationship.htm */
export default  class IfcTimeSeriesReferenceRelationship extends StepEntityBase< EntityTypesIfc > 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCTIMESERIESREFERENCERELATIONSHIP;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private ReferencedTimeSeries_? : IfcTimeSeries;
    private TimeSeriesReferences_? : Array<IfcDocumentReference|IfcDocumentInformation>;


    public get ReferencedTimeSeries() : IfcTimeSeries
    {
        if ( this.ReferencedTimeSeries_ === void 0 )
        {
            
        }

        return this.ReferencedTimeSeries_ as IfcTimeSeries;
    }


    public get TimeSeriesReferences() : Array<IfcDocumentReference|IfcDocumentInformation>
    {
        if ( this.TimeSeriesReferences_ === void 0 )
        {
            
        }

        return this.TimeSeriesReferences_ as Array<IfcDocumentReference|IfcDocumentInformation>;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
