import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcPermeableCoveringOperationEnum, { IfcPermeableCoveringOperationEnumDeserializeStep } from "./IfcPermeableCoveringOperationEnum.bldrs"
import IfcWindowPanelPositionEnum, { IfcWindowPanelPositionEnumDeserializeStep } from "./IfcWindowPanelPositionEnum.bldrs"
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"
import IfcShapeAspect from "./IfcShapeAspect.bldrs"
import IfcPropertySetDefinition from "./IfcPropertySetDefinition.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcpermeablecoveringproperties.htm */
export default  class IfcPermeableCoveringProperties extends IfcPropertySetDefinition 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCPERMEABLECOVERINGPROPERTIES;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private OperationType_? : IfcPermeableCoveringOperationEnum;
    private PanelPosition_? : IfcWindowPanelPositionEnum;
    private FrameDepth_? : IfcPositiveLengthMeasure | null;
    private FrameThickness_? : IfcPositiveLengthMeasure | null;
    private ShapeAspectStyle_? : IfcShapeAspect | null;


    public get OperationType() : IfcPermeableCoveringOperationEnum
    {
        if ( this.OperationType_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 4 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field OperationType due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 4;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = IfcPermeableCoveringOperationEnumDeserializeStep( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field OperationType' );
            };

            this.OperationType_ = value;
        }

        return this.OperationType_ as IfcPermeableCoveringOperationEnum;
    }


    public get PanelPosition() : IfcWindowPanelPositionEnum
    {
        if ( this.PanelPosition_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 5 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field PanelPosition due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 5;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = IfcWindowPanelPositionEnumDeserializeStep( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field PanelPosition' );
            };

            this.PanelPosition_ = value;
        }

        return this.PanelPosition_ as IfcWindowPanelPositionEnum;
    }


    public get FrameDepth() : IfcPositiveLengthMeasure | null
    {
        if ( this.FrameDepth_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 6 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field FrameDepth due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field FrameDepth' );
                }

                this.FrameDepth_ = null;                
            }
            else
            {
                this.FrameDepth_ = value;
            }
        }

        return this.FrameDepth_ as IfcPositiveLengthMeasure | null;
    }


    public get FrameThickness() : IfcPositiveLengthMeasure | null
    {
        if ( this.FrameThickness_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 7 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field FrameThickness due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 7;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field FrameThickness' );
                }

                this.FrameThickness_ = null;                
            }
            else
            {
                this.FrameThickness_ = value;
            }
        }

        return this.FrameThickness_ as IfcPositiveLengthMeasure | null;
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
