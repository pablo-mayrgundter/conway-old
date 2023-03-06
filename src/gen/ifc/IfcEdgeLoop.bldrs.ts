import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcOrientedEdge from "./IfcOrientedEdge.bldrs"
import IfcLoop from "./IfcLoop.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcedgeloop.htm */
export default  class IfcEdgeLoop extends IfcLoop 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCEDGELOOP;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private EdgeList_? : Array<IfcOrientedEdge>;


    public get EdgeList() : Array<IfcOrientedEdge>
    {
        if ( this.EdgeList_ === void 0 )
        {
            
        }

        return this.EdgeList_ as Array<IfcOrientedEdge>;
    }




    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
