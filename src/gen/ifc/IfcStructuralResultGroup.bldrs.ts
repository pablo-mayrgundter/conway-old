import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber, stepExtractInlineElemement, stepExtractArray} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcAnalysisTheoryTypeEnum, { IfcAnalysisTheoryTypeEnumDeserializeStep } from "./IfcAnalysisTheoryTypeEnum.bldrs"
import IfcStructuralLoadGroup from "./IfcStructuralLoadGroup.bldrs"
import IfcStructuralAnalysisModel from "./IfcStructuralAnalysisModel.bldrs"
import IfcGroup from "./IfcGroup.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcstructuralresultgroup.htm */
export default  class IfcStructuralResultGroup extends IfcGroup 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCSTRUCTURALRESULTGROUP;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private TheoryType_? : IfcAnalysisTheoryTypeEnum;
    private ResultForLoadGroup_? : IfcStructuralLoadGroup | null;
    private IsLinear_? : boolean;

    public get TheoryType() : IfcAnalysisTheoryTypeEnum
    {
        if ( this.TheoryType_ === void 0 )
        {
            this.TheoryType_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 5 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 5;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = IfcAnalysisTheoryTypeEnumDeserializeStep( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed' );
            };

            return value; })();
        }

        return this.TheoryType_ as IfcAnalysisTheoryTypeEnum;
    }

    public get ResultForLoadGroup() : IfcStructuralLoadGroup | null
    {
        if ( this.ResultForLoadGroup_ === void 0 )
        {
            this.ResultForLoadGroup_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 6 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 6;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let expressID = stepExtractReference( buffer, cursor, endCursor );
            let value     = expressID !== void 0 ? this.model.getElementByExpressID( expressID ) : this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor ) );           

            if ( value === void 0 || !( value instanceof IfcStructuralLoadGroup ) )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field' );
                }

                return null;                
            }
            else
            {
                return value;
            } })();
        }

        return this.ResultForLoadGroup_ as IfcStructuralLoadGroup | null;
    }

    public get IsLinear() : boolean
    {
        if ( this.IsLinear_ === void 0 )
        {
            this.IsLinear_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 7 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 7;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractBoolean( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed' );
            };

            return value; })();
        }

        return this.IsLinear_ as boolean;
    }

    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
