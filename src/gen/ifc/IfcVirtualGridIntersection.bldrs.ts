import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcGridAxis from "./IfcGridAxis.bldrs"
import IfcLengthMeasure from "./IfcLengthMeasure.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcvirtualgridintersection.htm */
export default  class IfcVirtualGridIntersection extends StepEntityBase< EntityTypesIfc > 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCVIRTUALGRIDINTERSECTION;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private IntersectingAxes_? : Array<IfcGridAxis>;
    private OffsetDistances_? : Array<IfcLengthMeasure>;


    public get IntersectingAxes() : Array<IfcGridAxis>
    {
        if ( this.IntersectingAxes_ === void 0 )
        {
            
        }

        return this.IntersectingAxes_ as Array<IfcGridAxis>;
    }


    public get OffsetDistances() : Array<IfcLengthMeasure>
    {
        if ( this.OffsetDistances_ === void 0 )
        {
            
        }

        return this.OffsetDistances_ as Array<IfcLengthMeasure>;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
