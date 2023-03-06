import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcPoint from "./IfcPoint.bldrs"
import IfcVertexPoint from "./IfcVertexPoint.bldrs"
import IfcConnectionGeometry from "./IfcConnectionGeometry.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcconnectionpointgeometry.htm */
export default  class IfcConnectionPointGeometry extends IfcConnectionGeometry 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCCONNECTIONPOINTGEOMETRY;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private PointOnRelatingElement_? : IfcPoint|IfcVertexPoint;
    private PointOnRelatedElement_? : IfcPoint|IfcVertexPoint | null;


    public get PointOnRelatingElement() : IfcPoint|IfcVertexPoint
    {
        if ( this.PointOnRelatingElement_ === void 0 )
        {
            
        }

        return this.PointOnRelatingElement_ as IfcPoint|IfcVertexPoint;
    }


    public get PointOnRelatedElement() : IfcPoint|IfcVertexPoint | null
    {
        if ( this.PointOnRelatedElement_ === void 0 )
        {
            
        }

        return this.PointOnRelatedElement_ as IfcPoint|IfcVertexPoint | null;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
