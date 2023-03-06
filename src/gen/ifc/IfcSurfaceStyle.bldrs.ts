import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcSurfaceSide, { IfcSurfaceSideDeserializeStep } from "./IfcSurfaceSide.bldrs"
import IfcSurfaceStyleShading from "./IfcSurfaceStyleShading.bldrs"
import IfcSurfaceStyleLighting from "./IfcSurfaceStyleLighting.bldrs"
import IfcSurfaceStyleWithTextures from "./IfcSurfaceStyleWithTextures.bldrs"
import IfcExternallyDefinedSurfaceStyle from "./IfcExternallyDefinedSurfaceStyle.bldrs"
import IfcSurfaceStyleRefraction from "./IfcSurfaceStyleRefraction.bldrs"
import IfcPresentationStyle from "./IfcPresentationStyle.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcsurfacestyle.htm */
export default  class IfcSurfaceStyle extends IfcPresentationStyle 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCSURFACESTYLE;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private Side_? : IfcSurfaceSide;
    private Styles_? : Array<IfcSurfaceStyleShading|IfcSurfaceStyleLighting|IfcSurfaceStyleWithTextures|IfcExternallyDefinedSurfaceStyle|IfcSurfaceStyleRefraction>;


    public get Side() : IfcSurfaceSide
    {
        if ( this.Side_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 1 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field Side due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 1;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = IfcSurfaceSideDeserializeStep( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field Side' );
            };

            this.Side_ = value;
        }

        return this.Side_ as IfcSurfaceSide;
    }


    public get Styles() : Array<IfcSurfaceStyleShading|IfcSurfaceStyleLighting|IfcSurfaceStyleWithTextures|IfcExternallyDefinedSurfaceStyle|IfcSurfaceStyleRefraction>
    {
        if ( this.Styles_ === void 0 )
        {
            
        }

        return this.Styles_ as Array<IfcSurfaceStyleShading|IfcSurfaceStyleLighting|IfcSurfaceStyleWithTextures|IfcExternallyDefinedSurfaceStyle|IfcSurfaceStyleRefraction>;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
