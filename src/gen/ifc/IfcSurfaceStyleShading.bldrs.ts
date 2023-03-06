import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcColourRgb from "./IfcColourRgb.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcsurfacestyleshading.htm */
export default  class IfcSurfaceStyleShading extends StepEntityBase< EntityTypesIfc > 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCSURFACESTYLESHADING;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private SurfaceColour_? : IfcColourRgb;


    public get SurfaceColour() : IfcColourRgb
    {
        if ( this.SurfaceColour_ === void 0 )
        {
            
        }

        return this.SurfaceColour_ as IfcColourRgb;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
