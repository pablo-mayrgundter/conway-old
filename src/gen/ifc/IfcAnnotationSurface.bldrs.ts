import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcGeometricRepresentationItem from "./IfcGeometricRepresentationItem.bldrs"
import IfcTextureCoordinate from "./IfcTextureCoordinate.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcannotationsurface.htm */
export default  class IfcAnnotationSurface extends IfcGeometricRepresentationItem 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCANNOTATIONSURFACE;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private Item_? : IfcGeometricRepresentationItem;
    private TextureCoordinates_? : IfcTextureCoordinate | null;


    public get Item() : IfcGeometricRepresentationItem
    {
        if ( this.Item_ === void 0 )
        {
            
        }

        return this.Item_ as IfcGeometricRepresentationItem;
    }


    public get TextureCoordinates() : IfcTextureCoordinate | null
    {
        if ( this.TextureCoordinates_ === void 0 )
        {
            
        }

        return this.TextureCoordinates_ as IfcTextureCoordinate | null;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
