import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcVertexBasedTextureMap from "./IfcVertexBasedTextureMap.bldrs"
import IfcTextureCoordinate from "./IfcTextureCoordinate.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifctexturemap.htm */
export default  class IfcTextureMap extends IfcTextureCoordinate 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCTEXTUREMAP;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private TextureMaps_? : Array<IfcVertexBasedTextureMap>;


    public get TextureMaps() : Array<IfcVertexBasedTextureMap>
    {
        if ( this.TextureMaps_ === void 0 )
        {
            
        }

        return this.TextureMaps_ as Array<IfcVertexBasedTextureMap>;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
