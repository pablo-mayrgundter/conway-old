import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcColourRgb from "./IfcColourRgb.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcsurfacestylelighting.htm */
export default  class IfcSurfaceStyleLighting extends StepEntityBase< EntityTypesIfc > 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCSURFACESTYLELIGHTING;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private DiffuseTransmissionColour_? : IfcColourRgb;
    private DiffuseReflectionColour_? : IfcColourRgb;
    private TransmissionColour_? : IfcColourRgb;
    private ReflectanceColour_? : IfcColourRgb;


    public get DiffuseTransmissionColour() : IfcColourRgb
    {
        if ( this.DiffuseTransmissionColour_ === void 0 )
        {
            
        }

        return this.DiffuseTransmissionColour_ as IfcColourRgb;
    }


    public get DiffuseReflectionColour() : IfcColourRgb
    {
        if ( this.DiffuseReflectionColour_ === void 0 )
        {
            
        }

        return this.DiffuseReflectionColour_ as IfcColourRgb;
    }


    public get TransmissionColour() : IfcColourRgb
    {
        if ( this.TransmissionColour_ === void 0 )
        {
            
        }

        return this.TransmissionColour_ as IfcColourRgb;
    }


    public get ReflectanceColour() : IfcColourRgb
    {
        if ( this.ReflectanceColour_ === void 0 )
        {
            
        }

        return this.ReflectanceColour_ as IfcColourRgb;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
