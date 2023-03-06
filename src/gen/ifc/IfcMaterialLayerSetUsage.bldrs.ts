import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcMaterialLayerSet from "./IfcMaterialLayerSet.bldrs"
import IfcLayerSetDirectionEnum, { IfcLayerSetDirectionEnumDeserializeStep } from "./IfcLayerSetDirectionEnum.bldrs"
import IfcDirectionSenseEnum, { IfcDirectionSenseEnumDeserializeStep } from "./IfcDirectionSenseEnum.bldrs"
import IfcLengthMeasure from "./IfcLengthMeasure.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcmateriallayersetusage.htm */
export default  class IfcMaterialLayerSetUsage extends StepEntityBase< EntityTypesIfc > 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCMATERIALLAYERSETUSAGE;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private ForLayerSet_? : IfcMaterialLayerSet;
    private LayerSetDirection_? : IfcLayerSetDirectionEnum;
    private DirectionSense_? : IfcDirectionSenseEnum;
    private OffsetFromReferenceLine_? : IfcLengthMeasure;


    public get ForLayerSet() : IfcMaterialLayerSet
    {
        if ( this.ForLayerSet_ === void 0 )
        {
            
        }

        return this.ForLayerSet_ as IfcMaterialLayerSet;
    }


    public get LayerSetDirection() : IfcLayerSetDirectionEnum
    {
        if ( this.LayerSetDirection_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 1 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field LayerSetDirection due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 1;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = IfcLayerSetDirectionEnumDeserializeStep( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field LayerSetDirection' );
            };

            this.LayerSetDirection_ = value;
        }

        return this.LayerSetDirection_ as IfcLayerSetDirectionEnum;
    }


    public get DirectionSense() : IfcDirectionSenseEnum
    {
        if ( this.DirectionSense_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 2 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field DirectionSense due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 2;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = IfcDirectionSenseEnumDeserializeStep( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field DirectionSense' );
            };

            this.DirectionSense_ = value;
        }

        return this.DirectionSense_ as IfcDirectionSenseEnum;
    }


    public get OffsetFromReferenceLine() : IfcLengthMeasure
    {
        if ( this.OffsetFromReferenceLine_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 3 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field OffsetFromReferenceLine due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 3;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field OffsetFromReferenceLine' );
            };

            this.OffsetFromReferenceLine_ = value;
        }

        return this.OffsetFromReferenceLine_ as IfcLengthMeasure;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
