import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcTextureVertex from "./IfcTextureVertex.bldrs"
import IfcCartesianPoint from "./IfcCartesianPoint.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcvertexbasedtexturemap.htm */
export default  class IfcVertexBasedTextureMap extends StepEntityBase< EntityTypesIfc > 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCVERTEXBASEDTEXTUREMAP;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private TextureVertices_? : Array<IfcTextureVertex>;
    private TexturePoints_? : Array<IfcCartesianPoint>;


    public get TextureVertices() : Array<IfcTextureVertex>
    {
        if ( this.TextureVertices_ === void 0 )
        {
            
        }

        return this.TextureVertices_ as Array<IfcTextureVertex>;
    }


    public get TexturePoints() : Array<IfcCartesianPoint>
    {
        if ( this.TexturePoints_ === void 0 )
        {
            
        }

        return this.TexturePoints_ as Array<IfcCartesianPoint>;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
