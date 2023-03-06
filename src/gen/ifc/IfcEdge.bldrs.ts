import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcVertex from "./IfcVertex.bldrs"
import IfcTopologicalRepresentationItem from "./IfcTopologicalRepresentationItem.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcedge.htm */
export default  class IfcEdge extends IfcTopologicalRepresentationItem 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCEDGE;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private EdgeStart_? : IfcVertex;
    private EdgeEnd_? : IfcVertex;


    public get EdgeStart() : IfcVertex
    {
        if ( this.EdgeStart_ === void 0 )
        {
            
        }

        return this.EdgeStart_ as IfcVertex;
    }


    public get EdgeEnd() : IfcVertex
    {
        if ( this.EdgeEnd_ === void 0 )
        {
            
        }

        return this.EdgeEnd_ as IfcVertex;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
