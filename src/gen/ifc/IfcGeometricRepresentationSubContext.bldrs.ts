import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcGeometricRepresentationContext from "./IfcGeometricRepresentationContext.bldrs"
import IfcPositiveRatioMeasure from "./IfcPositiveRatioMeasure.bldrs"
import IfcGeometricProjectionEnum, { IfcGeometricProjectionEnumDeserializeStep } from "./IfcGeometricProjectionEnum.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcAxis2Placement2D from "./IfcAxis2Placement2D.bldrs"
import IfcAxis2Placement3D from "./IfcAxis2Placement3D.bldrs"
import IfcDimensionCount from "./IfcDimensionCount.bldrs"
import IfcDirection from "./IfcDirection.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcgeometricrepresentationsubcontext.htm */
export default  class IfcGeometricRepresentationSubContext extends IfcGeometricRepresentationContext 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCGEOMETRICREPRESENTATIONSUBCONTEXT;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private ParentContext_? : IfcGeometricRepresentationContext;
    private TargetScale_? : IfcPositiveRatioMeasure | null;
    private TargetView_? : IfcGeometricProjectionEnum;
    private UserDefinedTargetView_? : IfcLabel | null;


    public get ParentContext() : IfcGeometricRepresentationContext
    {
        if ( this.ParentContext_ === void 0 )
        {
            
        }

        return this.ParentContext_ as IfcGeometricRepresentationContext;
    }


    public get TargetScale() : IfcPositiveRatioMeasure | null
    {
        if ( this.TargetScale_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 7 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field TargetScale due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field TargetScale' );
                }

                this.TargetScale_ = null;                
            }
            else
            {
                this.TargetScale_ = value;
            }
        }

        return this.TargetScale_ as IfcPositiveRatioMeasure | null;
    }


    public get TargetView() : IfcGeometricProjectionEnum
    {
        if ( this.TargetView_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 8 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field TargetView due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 8;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = IfcGeometricProjectionEnumDeserializeStep( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field TargetView' );
            };

            this.TargetView_ = value;
        }

        return this.TargetView_ as IfcGeometricProjectionEnum;
    }


    public get UserDefinedTargetView() : IfcLabel | null
    {
        if ( this.UserDefinedTargetView_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 9 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field UserDefinedTargetView due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 9;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractString( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field UserDefinedTargetView' );
                }

                this.UserDefinedTargetView_ = null;                
            }
            else
            {
                this.UserDefinedTargetView_ = value;
            }
        }

        return this.UserDefinedTargetView_ as IfcLabel | null;
    }










    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
