import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcLengthMeasure from "./IfcLengthMeasure.bldrs"
import IfcDimensionCount from "./IfcDimensionCount.bldrs"
import IfcPoint from "./IfcPoint.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifccartesianpoint.htm */
export default  class IfcCartesianPoint extends IfcPoint 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCCARTESIANPOINT;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private Coordinates_? : Array<IfcLengthMeasure>;


    public get Coordinates() : Array<IfcLengthMeasure>
    {
        if ( this.Coordinates_ === void 0 )
        {
            
        }

        return this.Coordinates_ as Array<IfcLengthMeasure>;
    }




    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
