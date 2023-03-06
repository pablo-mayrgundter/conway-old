import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcNormalisedRatioMeasure from "./IfcNormalisedRatioMeasure.bldrs"
import IfcColourRgb from "./IfcColourRgb.bldrs"
import IfcSpecularExponent from "./IfcSpecularExponent.bldrs"
import IfcSpecularRoughness from "./IfcSpecularRoughness.bldrs"
import IfcReflectanceMethodEnum, { IfcReflectanceMethodEnumDeserializeStep } from "./IfcReflectanceMethodEnum.bldrs"
import IfcSurfaceStyleShading from "./IfcSurfaceStyleShading.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcsurfacestylerendering.htm */
export default  class IfcSurfaceStyleRendering extends IfcSurfaceStyleShading 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCSURFACESTYLERENDERING;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private Transparency_? : IfcNormalisedRatioMeasure | null;
    private DiffuseColour_? : IfcColourRgb|IfcNormalisedRatioMeasure | null;
    private TransmissionColour_? : IfcColourRgb|IfcNormalisedRatioMeasure | null;
    private DiffuseTransmissionColour_? : IfcColourRgb|IfcNormalisedRatioMeasure | null;
    private ReflectionColour_? : IfcColourRgb|IfcNormalisedRatioMeasure | null;
    private SpecularColour_? : IfcColourRgb|IfcNormalisedRatioMeasure | null;
    private SpecularHighlight_? : IfcSpecularExponent|IfcSpecularRoughness | null;
    private ReflectanceMethod_? : IfcReflectanceMethodEnum;


    public get Transparency() : IfcNormalisedRatioMeasure | null
    {
        if ( this.Transparency_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 1 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field Transparency due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 1;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field Transparency' );
                }

                this.Transparency_ = null;                
            }
            else
            {
                this.Transparency_ = value;
            }
        }

        return this.Transparency_ as IfcNormalisedRatioMeasure | null;
    }


    public get DiffuseColour() : IfcColourRgb|IfcNormalisedRatioMeasure | null
    {
        if ( this.DiffuseColour_ === void 0 )
        {
            
        }

        return this.DiffuseColour_ as IfcColourRgb|IfcNormalisedRatioMeasure | null;
    }


    public get TransmissionColour() : IfcColourRgb|IfcNormalisedRatioMeasure | null
    {
        if ( this.TransmissionColour_ === void 0 )
        {
            
        }

        return this.TransmissionColour_ as IfcColourRgb|IfcNormalisedRatioMeasure | null;
    }


    public get DiffuseTransmissionColour() : IfcColourRgb|IfcNormalisedRatioMeasure | null
    {
        if ( this.DiffuseTransmissionColour_ === void 0 )
        {
            
        }

        return this.DiffuseTransmissionColour_ as IfcColourRgb|IfcNormalisedRatioMeasure | null;
    }


    public get ReflectionColour() : IfcColourRgb|IfcNormalisedRatioMeasure | null
    {
        if ( this.ReflectionColour_ === void 0 )
        {
            
        }

        return this.ReflectionColour_ as IfcColourRgb|IfcNormalisedRatioMeasure | null;
    }


    public get SpecularColour() : IfcColourRgb|IfcNormalisedRatioMeasure | null
    {
        if ( this.SpecularColour_ === void 0 )
        {
            
        }

        return this.SpecularColour_ as IfcColourRgb|IfcNormalisedRatioMeasure | null;
    }


    public get SpecularHighlight() : IfcSpecularExponent|IfcSpecularRoughness | null
    {
        if ( this.SpecularHighlight_ === void 0 )
        {
            
        }

        return this.SpecularHighlight_ as IfcSpecularExponent|IfcSpecularRoughness | null;
    }


    public get ReflectanceMethod() : IfcReflectanceMethodEnum
    {
        if ( this.ReflectanceMethod_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 8 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field ReflectanceMethod due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 8;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = IfcReflectanceMethodEnumDeserializeStep( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field ReflectanceMethod' );
            };

            this.ReflectanceMethod_ = value;
        }

        return this.ReflectanceMethod_ as IfcReflectanceMethodEnum;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
