import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"
import IfcDoorPanelOperationEnum, { IfcDoorPanelOperationEnumDeserializeStep } from "./IfcDoorPanelOperationEnum.bldrs"
import IfcNormalisedRatioMeasure from "./IfcNormalisedRatioMeasure.bldrs"
import IfcDoorPanelPositionEnum, { IfcDoorPanelPositionEnumDeserializeStep } from "./IfcDoorPanelPositionEnum.bldrs"
import IfcShapeAspect from "./IfcShapeAspect.bldrs"
import IfcPropertySetDefinition from "./IfcPropertySetDefinition.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcdoorpanelproperties.htm */
export default  class IfcDoorPanelProperties extends IfcPropertySetDefinition 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCDOORPANELPROPERTIES;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private PanelDepth_? : IfcPositiveLengthMeasure | null;
    private PanelOperation_? : IfcDoorPanelOperationEnum;
    private PanelWidth_? : IfcNormalisedRatioMeasure | null;
    private PanelPosition_? : IfcDoorPanelPositionEnum;
    private ShapeAspectStyle_? : IfcShapeAspect | null;


    public get PanelDepth() : IfcPositiveLengthMeasure | null
    {
        if ( this.PanelDepth_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 4 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field PanelDepth due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 4;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field PanelDepth' );
                }

                this.PanelDepth_ = null;                
            }
            else
            {
                this.PanelDepth_ = value;
            }
        }

        return this.PanelDepth_ as IfcPositiveLengthMeasure | null;
    }


    public get PanelOperation() : IfcDoorPanelOperationEnum
    {
        if ( this.PanelOperation_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 5 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field PanelOperation due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 5;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = IfcDoorPanelOperationEnumDeserializeStep( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field PanelOperation' );
            };

            this.PanelOperation_ = value;
        }

        return this.PanelOperation_ as IfcDoorPanelOperationEnum;
    }


    public get PanelWidth() : IfcNormalisedRatioMeasure | null
    {
        if ( this.PanelWidth_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 6 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field PanelWidth due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 6;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field PanelWidth' );
                }

                this.PanelWidth_ = null;                
            }
            else
            {
                this.PanelWidth_ = value;
            }
        }

        return this.PanelWidth_ as IfcNormalisedRatioMeasure | null;
    }


    public get PanelPosition() : IfcDoorPanelPositionEnum
    {
        if ( this.PanelPosition_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 7 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field PanelPosition due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 7;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = IfcDoorPanelPositionEnumDeserializeStep( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field PanelPosition' );
            };

            this.PanelPosition_ = value;
        }

        return this.PanelPosition_ as IfcDoorPanelPositionEnum;
    }


    public get ShapeAspectStyle() : IfcShapeAspect | null
    {
        if ( this.ShapeAspectStyle_ === void 0 )
        {
            
        }

        return this.ShapeAspectStyle_ as IfcShapeAspect | null;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
