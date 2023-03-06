import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcPoint from "./IfcPoint.bldrs"
import IfcVertex from "./IfcVertex.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcvertexpoint.htm */
export default  class IfcVertexPoint extends IfcVertex 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCVERTEXPOINT;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private VertexGeometry_? : IfcPoint;


    public get VertexGeometry() : IfcPoint
    {
        if ( this.VertexGeometry_ === void 0 )
        {
            
        }

        return this.VertexGeometry_ as IfcPoint;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
