import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcMaterialLayer from "./IfcMaterialLayer.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcLengthMeasure from "./IfcLengthMeasure.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcmateriallayerset.htm */
export default  class IfcMaterialLayerSet extends StepEntityBase< EntityTypesIfc > 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCMATERIALLAYERSET;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private MaterialLayers_? : Array<IfcMaterialLayer>;
    private LayerSetName_? : IfcLabel | null;


    public get MaterialLayers() : Array<IfcMaterialLayer>
    {
        if ( this.MaterialLayers_ === void 0 )
        {
            
        }

        return this.MaterialLayers_ as Array<IfcMaterialLayer>;
    }


    public get LayerSetName() : IfcLabel | null
    {
        if ( this.LayerSetName_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 1 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field LayerSetName due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 1;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractString( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field LayerSetName' );
                }

                this.LayerSetName_ = null;                
            }
            else
            {
                this.LayerSetName_ = value;
            }
        }

        return this.LayerSetName_ as IfcLabel | null;
    }




    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
