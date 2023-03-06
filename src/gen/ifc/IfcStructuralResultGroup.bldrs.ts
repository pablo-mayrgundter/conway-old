import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
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
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 5 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field TheoryType due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 5;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = IfcAnalysisTheoryTypeEnumDeserializeStep( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field TheoryType' );
            };

            this.TheoryType_ = value;
        }

        return this.TheoryType_ as IfcAnalysisTheoryTypeEnum;
    }


    public get ResultForLoadGroup() : IfcStructuralLoadGroup | null
    {
        if ( this.ResultForLoadGroup_ === void 0 )
        {
            
        }

        return this.ResultForLoadGroup_ as IfcStructuralLoadGroup | null;
    }


    public get IsLinear() : boolean
    {
        if ( this.IsLinear_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 7 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field IsLinear due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 7;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractBoolean( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field IsLinear' );
            };

            this.IsLinear_ = value;
        }

        return this.IsLinear_ as boolean;
    }




    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
