import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcVertex from "./IfcVertex.bldrs"
import IfcLoop from "./IfcLoop.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcvertexloop.htm */
export default  class IfcVertexLoop extends IfcLoop 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCVERTEXLOOP;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private LoopVertex_? : IfcVertex;


    public get LoopVertex() : IfcVertex
    {
        if ( this.LoopVertex_ === void 0 )
        {
            
        }

        return this.LoopVertex_ as IfcVertex;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
