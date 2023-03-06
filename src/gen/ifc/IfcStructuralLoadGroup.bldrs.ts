import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcLoadGroupTypeEnum, { IfcLoadGroupTypeEnumDeserializeStep } from "./IfcLoadGroupTypeEnum.bldrs"
import IfcActionTypeEnum, { IfcActionTypeEnumDeserializeStep } from "./IfcActionTypeEnum.bldrs"
import IfcActionSourceTypeEnum, { IfcActionSourceTypeEnumDeserializeStep } from "./IfcActionSourceTypeEnum.bldrs"
import IfcPositiveRatioMeasure from "./IfcPositiveRatioMeasure.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcStructuralResultGroup from "./IfcStructuralResultGroup.bldrs"
import IfcStructuralAnalysisModel from "./IfcStructuralAnalysisModel.bldrs"
import IfcGroup from "./IfcGroup.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcstructuralloadgroup.htm */
export default  class IfcStructuralLoadGroup extends IfcGroup 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCSTRUCTURALLOADGROUP;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private PredefinedType_? : IfcLoadGroupTypeEnum;
    private ActionType_? : IfcActionTypeEnum;
    private ActionSource_? : IfcActionSourceTypeEnum;
    private Coefficient_? : IfcPositiveRatioMeasure | null;
    private Purpose_? : IfcLabel | null;


    public get PredefinedType() : IfcLoadGroupTypeEnum
    {
        if ( this.PredefinedType_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 5 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field PredefinedType due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 5;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = IfcLoadGroupTypeEnumDeserializeStep( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field PredefinedType' );
            };

            this.PredefinedType_ = value;
        }

        return this.PredefinedType_ as IfcLoadGroupTypeEnum;
    }


    public get ActionType() : IfcActionTypeEnum
    {
        if ( this.ActionType_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 6 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field ActionType due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 6;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = IfcActionTypeEnumDeserializeStep( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field ActionType' );
            };

            this.ActionType_ = value;
        }

        return this.ActionType_ as IfcActionTypeEnum;
    }


    public get ActionSource() : IfcActionSourceTypeEnum
    {
        if ( this.ActionSource_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 7 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field ActionSource due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 7;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = IfcActionSourceTypeEnumDeserializeStep( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field ActionSource' );
            };

            this.ActionSource_ = value;
        }

        return this.ActionSource_ as IfcActionSourceTypeEnum;
    }


    public get Coefficient() : IfcPositiveRatioMeasure | null
    {
        if ( this.Coefficient_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 8 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field Coefficient due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 8;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field Coefficient' );
                }

                this.Coefficient_ = null;                
            }
            else
            {
                this.Coefficient_ = value;
            }
        }

        return this.Coefficient_ as IfcPositiveRatioMeasure | null;
    }


    public get Purpose() : IfcLabel | null
    {
        if ( this.Purpose_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 9 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field Purpose due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field Purpose' );
                }

                this.Purpose_ = null;                
            }
            else
            {
                this.Purpose_ = value;
            }
        }

        return this.Purpose_ as IfcLabel | null;
    }






    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
