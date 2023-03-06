import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcSurface from "./IfcSurface.bldrs"
import IfcFaceSurface from "./IfcFaceSurface.bldrs"
import IfcFaceBasedSurfaceModel from "./IfcFaceBasedSurfaceModel.bldrs"
import IfcConnectionGeometry from "./IfcConnectionGeometry.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcconnectionsurfacegeometry.htm */
export default  class IfcConnectionSurfaceGeometry extends IfcConnectionGeometry 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCCONNECTIONSURFACEGEOMETRY;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private SurfaceOnRelatingElement_? : IfcSurface|IfcFaceSurface|IfcFaceBasedSurfaceModel;
    private SurfaceOnRelatedElement_? : IfcSurface|IfcFaceSurface|IfcFaceBasedSurfaceModel | null;


    public get SurfaceOnRelatingElement() : IfcSurface|IfcFaceSurface|IfcFaceBasedSurfaceModel
    {
        if ( this.SurfaceOnRelatingElement_ === void 0 )
        {
            
        }

        return this.SurfaceOnRelatingElement_ as IfcSurface|IfcFaceSurface|IfcFaceBasedSurfaceModel;
    }


    public get SurfaceOnRelatedElement() : IfcSurface|IfcFaceSurface|IfcFaceBasedSurfaceModel | null
    {
        if ( this.SurfaceOnRelatedElement_ === void 0 )
        {
            
        }

        return this.SurfaceOnRelatedElement_ as IfcSurface|IfcFaceSurface|IfcFaceBasedSurfaceModel | null;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
